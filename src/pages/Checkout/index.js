import classNames from 'classnames';

import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import Input from 'components/Input';
import Item from './Item';
import Button from 'components/Button';

import { formatCurrency, showNoti } from 'utils/helpers';

import { getUser } from 'global/redux/auth/thunk';
import { clearCart } from 'global/redux/cart/slice';
import { addProductSoldItem } from 'global/redux/product/slice';
import { getAddress, addAddress } from 'global/redux/address/thunk';
import {
  createBillInvoice,
  verifyUserCoupon,
} from 'global/redux/checkout/thunk';

import checkoutVal from './validation';

import {
  backArrow,
  question,
  mail,
  phone,
  paypal,
  paypalRedirect,
  visa,
  blueCart,
  blueArrowDown,
  blueArrowUp,
  discountArrow,
} from 'assets/images';

import './style.scss';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = localStorage.getItem('isLogin');

  const { cartItem } = useSelector((state) => state.cart);
  const { fetched: userAddressFetch, userAddress } = useSelector(
    (state) => state.address
  );
  const { fetched: userInfoFetch, userInfo } = useSelector(
    (state) => state.auth
  );
  const { isLoadingCheckout, isLoadingDiscount } = useSelector(
    (state) => state.checkout
  );
  const { isLoading: addressLoading } = useSelector((state) => state.address);

  const totalPrice = cartItem
    .map((item) => item.quantity * item.totalPrice)
    .reduce((item, sum) => item + sum, 0);
  const [shipFee, setShipFee] = useState(null);

  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Checkout' });
  const {
    watch,
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    mode    : 'all',
    resolver: yupResolver(checkoutVal),
  });

  const [formStep, setFormStep] = useState(1);
  const [shipMethod, setShipMethod] = useState(1);
  const [paymentOption, setpaymentOption] = useState(1);
  const [billOption, setBillOption] = useState(1);
  const [toggleSummary, setToggleSummary] = useState(false);
  const [saveAddressInfo, setSaveAddressInfo] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(false);
  const emailFocusOnClick = useRef(null);
  const addressFocusOnClick = useRef(null);

  const handleChangeInfo = (ref) => {
    setFormStep(1);
    window.scrollTo({
      top : 0,
      left: 0,
    });
    ref.current.focus();
  };

  const shipMethods = [
    {
      key  : 1,
      value: 25000,
    },
    {
      key  : 2,
      value: 25000,
    },
    {
      key  : 3,
      value: 25000,
    },
  ];

  useEffect(() => {
    setShipFee(
      shipMethods
        .filter((item) => item.key === shipMethod)
        .map((item) => item.value)[0]
    );
    /* eslint-disable-next-line */
	}, [shipMethod]);

  const handleClick = () => {
    setFormStep((prev) => prev + 1);
  };

  const handleReturn = () => {
    if (formStep > 1) setFormStep((prev) => prev - 1);
    else navigate('/my-cart');
  };

  useEffect(() => {
    if (localStorage.getItem('isLogin') !== 'true') {
      navigate('/sign-in');
    }
    /*eslint-disable-next-line */
	}, [localStorage.getItem('isLogin')]);

  useEffect(() => {
    if (!userAddressFetch && isLogin) {
      dispatch(getAddress());
    }
    if (!userInfoFetch && isLogin) {
      dispatch(getUser());
    }
    /*eslint-disable-next-line */
	}, []);

  // auto fill address input
  useEffect(() => {
    setValue('email', userInfo.email);
    setValue('firstName', userInfo.firstName);
    setValue('lastName', userInfo.lastName);
    setValue('phone]', userInfo.phoneNumber);
    if (userAddress.length > 0) {
      setValue('address', userAddress[userAddress.length - 1].street);
      setValue('city', userAddress[userAddress.length - 1].city);
      setValue('countryReg', userAddress[userAddress.length - 1].country);
      setValue('postalCode', userAddress[userAddress.length - 1].postalCode);
    }
    /*eslint-disable-next-line */
	}, [userAddress]);

  // reset address input
  useEffect(() => {
    if (billOption === 2) {
      setValue('firstName', '');
      setValue('lastName', '');
      setValue('address', '');
      setValue('city', '');
      setValue('countryReg', '');
      setValue('postalCode', '');
      setValue('phone', '');
    }
    /*eslint-disable-next-line */
	}, [billOption]);

  const handleApplyDiscount = async (code) => {
    const { payload } = await dispatch(verifyUserCoupon(code));
    const { status, data } = payload;
    if (status) {
      showNoti('success', 'Coupon Used');
      setCouponDiscount(data.status !== 'IS_USED' ? true : false);
    }
  };

  // Checkout logic

  const formSubmit = async () => {
    const formData = getValues();

    const data = {
      email     : formData.email,
      firstName : formData.firstName,
      lastName  : formData.lastName,
      street    : formData.address,
      city      : formData.city,
      country   : formData.countryReg,
      postalCode: formData.postalCode,
      total     :
				totalPrice - (totalPrice * (couponDiscount ? 10 : 0)) / 100 + shipFee,
      phoneNumber : formData.phone,
      discountCode: formData.discount || formData.discountMobile,
      detailItems : cartItem.map((item) => {
        return {
          itemId   : item.id,
          inventory: item?.inventories
            ?.filter(
              (inventItem) =>
                inventItem.size === item.size && inventItem.color === item.color
            )
            ?.map((item) => item.id)[0],
          amount  : item.quantity,
          total   : item.price,
          discount: item?.discount?.status ? item?.discount?.percent : 0,
        };
      }),
    };

    const { payload } = await dispatch(createBillInvoice(data));

    if (payload?.status) {
      data?.detailItems.forEach((item) => {
        dispatch(
          addProductSoldItem({
            id    : item.itemId,
            amount: item.amount,
          })
        );
      });
      if (saveAddressInfo) {
        const {
          firstName,
          lastName,
          street,
          city,
          country,
          postalCode,
          phoneNumber,
        } = data;
        const body = {
          firstName,
          lastName,
          address: street,
          city,
          country,
          postalCode,
          phone  : phoneNumber,
        };
        const res = await dispatch(addAddress(body));
        if (res.payload.status) {
          dispatch(clearCart());
          showNoti('success', 'New address added');
          navigate('/payment-success', {
            state: {
              invoiceId: payload?.data?.id,
            },
          });
        }
      } else {
        dispatch(clearCart());
        navigate('/payment-success', {
          state: {
            invoiceId: payload?.data?.id,
          },
        });
      }
    }
  };

  return (
    <div className='checkout'>
      <div className='checkout-info'>
        <Link to='/' className='checkout-info-title'>
					Élemush
        </Link>
        <div className='checkout-nav-mobile'>
          <div className='summary'>
            <div onClick={() => setToggleSummary(!toggleSummary)}>
              <img src={blueCart} alt='icon image' />
              <p>{t('showOrder')}</p>
              <img
                src={toggleSummary ? blueArrowUp : blueArrowDown}
                alt='icon image'
              />
            </div>
            <p>
              {formatCurrency(
                'VND',
                totalPrice -
									(totalPrice * (couponDiscount ? 10 : 0)) / 100 +
									shipFee
              )}
            </p>
          </div>
          {toggleSummary && (
            <div>
              <div className='summary-bill'>
                {cartItem.map((item, index) => (
                  <Item key={index} data={item} />
                ))}
              </div>
              <div className='summary-discount'>
                <div>
                  <Input
                    register={register}
                    error={errors.discountMobile?.message}
                    label={t('discount')}
                    name='discountMobile'
                    inputCheck={watch('discountMobile')}
                    greyBg
                  />
                </div>
                <div>
                  <Button
                    handleClick={() =>
                      handleApplyDiscount(getValues('discountMobile'))
                    }
                    login
                    discount
                    isLoading={isLoadingDiscount}
                  >
                    <img
                      className='arrow-img'
                      src={discountArrow}
                      alt='icon image'
                    />
                  </Button>
                </div>
              </div>
              <div className='summary-subtotal'>
                <div>
                  <p>{t('subtotal')}</p>
                  <p>{formatCurrency('VND', totalPrice)}</p>
                </div>
                <div>
                  <p>{t('shipping')}</p>
                  <p>{formatCurrency('VND', shipFee)}</p>
                </div>
                <div>
                  <p>{t('couponDiscount')}</p>
                  <p>{couponDiscount ? '10 %' : 'None'}</p>
                </div>
              </div>
              <div className='summary-total'>
                <p>{t('total')}</p>
                <p>
                  {formatCurrency(
                    'VND',
                    totalPrice -
											(totalPrice * (couponDiscount ? 10 : 0)) / 100 +
											shipFee
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
        <p className='current-path'>
          <span
            onClick={() => navigate('/my-cart')}
            className={classNames({ active: formStep > 0 })}
          >
						cart
          </span>
          <span
            onClick={() => setFormStep(1)}
            className={classNames({ active: formStep > 0 })}
          >
						/ information
          </span>
          <span
            onClick={() => setFormStep(2)}
            className={classNames({ active: formStep > 1 })}
          >
						/ shipping
          </span>
          <span
            onClick={() => setFormStep(3)}
            className={classNames({ active: formStep > 2 })}
          >
						/ payment
          </span>
        </p>
        <form onSubmit={handleSubmit(formSubmit)}>
          {formStep === 1 && (
            <section>
              <div className='form-header'>
                <p className='form-label'>{t('contact')}</p>
                <p>
                  {t('already')} &nbsp;<Link to='/sign-in'>{t('logIn')}</Link>
                </p>
              </div>
              <Input
                register={register}
                error={errors.email?.message}
                label={t('email')}
                name='email'
                inputCheck={watch('email')}
                greyBg
              />
              <div className='form-check'>
                <input type='checkbox' id='checkbox1' />
                <label htmlFor='checkbox1'>{t('notify')}</label>
              </div>
              <p className='form-label'>{t('shippingAddress')}</p>
              <div className='form-info'>
                <div className='form-info-double'>
                  <Input
                    register={register}
                    error={errors.firstName?.message}
                    label={t('firstName')}
                    name='firstName'
                    inputCheck={watch('firstName')}
                    greyBg
                  />
                  <Input
                    register={register}
                    error={errors.lastName?.message}
                    label={t('lastName')}
                    name='lastName'
                    inputCheck={watch('lastName')}
                    greyBg
                  />
                </div>
                <Input
                  register={register}
                  error={errors.address?.message}
                  label={t('address')}
                  name='address'
                  inputCheck={watch('address')}
                  greyBg
                />
                <Input
                  register={register}
                  error={errors.city?.message}
                  label={t('city')}
                  name='city'
                  inputCheck={watch('city')}
                  greyBg
                />
                <div className='form-info-double'>
                  <Input
                    register={register}
                    error={errors.countryReg?.message}
                    label={t('countryReg')}
                    name='countryReg'
                    inputCheck={watch('countryReg')}
                    greyBg
                  />
                  <Input
                    register={register}
                    error={errors.postalCode?.message}
                    label={t('postalCode')}
                    name='postalCode'
                    inputCheck={watch('postalCode')}
                    greyBg
                  />
                </div>
                <Input
                  register={register}
                  error={errors.phone?.message}
                  label={t('phone')}
                  name='phone'
                  inputCheck={watch('phone')}
                  greyBg
                />
              </div>
              <div className='form-check second'>
                <input
                  type='checkbox'
                  id='checkbox'
                  onChange={() => setSaveAddressInfo(!saveAddressInfo)}
                />
                <label htmlFor='checkbox'>{t('saveInfo')}</label>
              </div>
              <div className='form-navigate'>
                <div onClick={handleReturn}>
                  <img src={backArrow} alt='back icon' />
                  <p>{t('return')}</p>
                </div>
                <div>
                  <Button type='button' handleClick={handleClick}>
                    <p>{t('continue')}</p>
                  </Button>
                </div>
              </div>
            </section>
          )}
          {formStep === 2 && (
            <section>
              <div className='form-bill-info'>
                <div>
                  <p>{t('contactConfirm')}</p>
                  <div>
                    <p>{watch('email')}</p>
                    <p onClick={() => handleChangeInfo(emailFocusOnClick)}>
                      {t('change')}
                    </p>
                  </div>
                </div>
                <div className='form-line'></div>
                <div>
                  <p>{t('shipTo')}</p>
                  <div>
                    <p>
                      {watch('address')}, {watch('city')}
                    </p>
                    <p onClick={() => handleChangeInfo(addressFocusOnClick)}>
                      {t('change')}
                    </p>
                  </div>
                </div>
              </div>
              <p className='method'>{t('shipMethod')}</p>
              <div className='form-tickbox'>
                <div onClick={() => setShipMethod(1)}>
                  <div
                    className={classNames({ active: shipMethod === 1 })}
                  ></div>
                  <div>
                    <p>{t('serviceDHL')}</p>
                    <p>Free</p>
                  </div>
                </div>
                <div className='form-line'></div>
                <div onClick={() => setShipMethod(2)}>
                  <div
                    className={classNames({ active: shipMethod === 2 })}
                  ></div>
                  <div>
                    <p>{t('serviceDHL')}</p>
                    <p>Free</p>
                  </div>
                </div>
              </div>
              <div className='form-navigate'>
                <div onClick={handleReturn}>
                  <img src={backArrow} alt='back icon' />
                  <p>{t('return')}</p>
                </div>
                <div>
                  <Button type='submit' handleClick={handleClick}>
                    <p>{t('contPayment')}</p>
                  </Button>
                </div>
              </div>
            </section>
          )}

          {formStep === 3 && (
            <section>
              <div className='form-bill-info'>
                <div>
                  <p>{t('contactConfirm')}</p>
                  <div>
                    <p>{watch('email')}</p>
                    <p>{t('change')}</p>
                  </div>
                </div>
                <div className='form-line'></div>
                <div>
                  <p>{t('shipTo')}</p>
                  <div>
                    <p>{watch('address')}</p>
                    <p>{t('change')}</p>
                  </div>
                </div>
                <div className='form-line'></div>
                <div className='shipping-info'>
                  <p>{t('method')}</p>
                  <p>
                    {t('serviceDHL')} . <span>Free</span>
                  </p>
                </div>
              </div>
              <div className='payment'>
                <p className='payment-header'>{t('payment')}</p>
                <p className='payment-des'>{t('paymentDes')}</p>
                <div className='form-tickbox'>
                  <div onClick={() => setpaymentOption(1)}>
                    <div
                      className={classNames({ active: paymentOption === 1 })}
                    ></div>
                    <div>
                      <p>{t('creditCard')}</p>
                      <img className='visa-img' src={visa} alt='visa icon' />
                    </div>
                  </div>
                  {paymentOption === 1 && (
                    <section className='visa-form'>
                      <Input
                        register={register}
                        error={errors.cardNumber?.message}
                        label={t('cardNumber')}
                        name='cardNumber'
                        inputCheck={watch('cardNumber')}
                        greyBg
                      />
                      <Input
                        register={register}
                        error={errors.cardName?.message}
                        label={t('cardName')}
                        name='cardName'
                        inputCheck={watch('cardName')}
                        greyBg
                      />
                      <div className='visa-form-double'>
                        <Input
                          register={register}
                          error={errors.cardExpire?.message}
                          label={t('cardExpire')}
                          name='cardExpire'
                          inputCheck={watch('cardExpire')}
                          greyBg
                        />
                        <Input
                          register={register}
                          error={errors.cardSecCode?.message}
                          label={t('cardSecCode')}
                          name='cardSecCode'
                          inputCheck={watch('cardSecCode')}
                          greyBg
                        />
                      </div>
                    </section>
                  )}
                  <div className='form-line'></div>
                  <div onClick={() => setpaymentOption(2)}>
                    <div
                      className={classNames({ active: paymentOption === 2 })}
                    ></div>
                    <div>
                      <img
                        className='paypal-img'
                        src={paypal}
                        alt='paypal icon'
                      />
                    </div>
                  </div>
                  {paymentOption === 2 && (
                    <section className='paypal-description'>
                      <img src={paypalRedirect} alt='Redirect image' />
                      <p>{t('paypalDes')}</p>
                    </section>
                  )}
                </div>
                <p className='payment-header'>{t('billAddress')}</p>
                <p className='payment-des'>{t('billAddressDes')}</p>
                <div className='form-tickbox billing'>
                  <div onClick={() => setBillOption(1)}>
                    <div
                      className={classNames({ active: billOption === 1 })}
                    ></div>
                    <div>
                      <p>{t('sameShip')}</p>
                    </div>
                  </div>
                  <div className='form-line'></div>
                  <div onClick={() => setBillOption(2)}>
                    <div
                      className={classNames({ active: billOption === 2 })}
                    ></div>
                    <div>
                      <p>{t('differentShip')}</p>
                    </div>
                  </div>
                  {billOption === 2 && (
                    <section className='form-info'>
                      <div className='form-info-double'>
                        <Input
                          register={register}
                          error={errors.firstName?.message}
                          label={t('firstName')}
                          name='firstName'
                          inputCheck={watch('firstName')}
                          greyBg
                        />
                        <Input
                          register={register}
                          error={errors.lastName?.message}
                          label={t('lastName')}
                          name='lastName'
                          inputCheck={watch('lastName')}
                          greyBg
                        />
                      </div>
                      <Input
                        register={register}
                        error={errors.address?.message}
                        label={t('address')}
                        name='address'
                        inputCheck={watch('address')}
                        greyBg
                      />
                      <Input
                        register={register}
                        error={errors.city?.message}
                        label={t('city')}
                        name='city'
                        inputCheck={watch('city')}
                        greyBg
                      />
                      <div className='form-info-double'>
                        <Input
                          register={register}
                          error={errors.countryReg?.message}
                          label={t('countryReg')}
                          name='countryReg'
                          inputCheck={watch('countryReg')}
                          greyBg
                        />
                        <Input
                          register={register}
                          error={errors.postalCode?.message}
                          label={t('postalCode')}
                          name='postalCode'
                          inputCheck={watch('postalCode')}
                          greyBg
                        />
                      </div>
                      <Input
                        register={register}
                        error={errors.phone?.message}
                        label={t('phone')}
                        name='phone'
                        inputCheck={watch('phone')}
                        greyBg
                      />
                    </section>
                  )}
                </div>
                <div className='payment-agree'>
                  <input type='checkbox' id='checkbox2' />
                  <label htmlFor='checkbox2'>{t('term')}</label>
                </div>
              </div>
              <div className='form-check user'>
                <input type='checkbox' id='checkbox3' />
                <label htmlFor='checkbox3'>{t('userAgree')}</label>
              </div>
              <div className='form-navigate'>
                <div onClick={handleReturn}>
                  <img src={backArrow} alt='back icon' />
                  <p>{t('return')}</p>
                </div>
                <div>
                  <Button
                    discount
                    isLoading={addressLoading || isLoadingCheckout}
                    type='submit'
                  >
                    <p>{t('pay')}</p>
                  </Button>
                </div>
              </div>
            </section>
          )}
        </form>
      </div>
      <div className='checkout-item'>
        <div className='checkout-item-images'>
          {cartItem.map((item, index) => (
            <Item key={index} data={item} />
          ))}
        </div>
        <div className='checkout-item-discount'>
          <div>
            <Input
              register={register}
              error={errors.discount?.message}
              label={t('discount')}
              name='discount'
              inputCheck={watch('discount')}
              greyBg
            />
          </div>
          <div>
            <Button
              handleClick={() => handleApplyDiscount(getValues('discount'))}
              discount
              isLoading={isLoadingDiscount}
            >
              <p>{t('apply')}</p>
            </Button>
          </div>
        </div>
        <div className='checkout-item-subtotal'>
          <div>
            <p>{t('subtotal')}</p>
            <p>{formatCurrency('VND', totalPrice)}</p>
          </div>
          <div>
            <p>{t('shipping')}</p>
            {shipFee ? (
              <p>{formatCurrency('VND', shipFee)}</p>
            ) : (
              <p>{t('calcNextStep')}</p>
            )}
          </div>
          <div>
            <p>{t('couponDiscount')}</p>
            <p>{couponDiscount ? '10 %' : 'None'}</p>
          </div>
        </div>
        <div className='checkout-item-total'>
          <p>{t('total')}</p>
          <p>
            {formatCurrency(
              'VND',
              totalPrice -
								(totalPrice * (couponDiscount ? 10 : 0)) / 100 +
								shipFee
            )}
          </p>
        </div>
        <div className='checkout-item-contact'>
          <div>
            <img src={question} alt='icon image' />
            <p>{t('needHelp')}</p>
          </div>
          <div>
            <img src={mail} alt='icon image' />
            <p>{t('customerService')}</p>
            <p>{t('wholsesale')}</p>
          </div>
          <div>
            <img src={phone} alt='icon image' />
            <p>+ 84 986 491 486</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import classNames from 'classnames';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from 'components/Input';
import Item from './Item';
import Button from 'components/Button';

import checkoutVal from './validation';

import {
  backArrow,
  pinkDress,
  whiteDressCart,
  orangeDressCart,
  question,
  mail,
  phone,
} from 'assets/images';

import './style.scss';

function Checkout() {
  const navigate = useNavigate();
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Checkout' });
  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode    : 'all',
    resolver: yupResolver(checkoutVal),
  });

  const [formStep, setFormStep] = useState(1);
  const [shipMethod, setShipMethod] = useState(0);

  const images = [
    {
      image   : pinkDress,
      name    : 'Pink Dress',
      color   : 'Pink',
      size    : 'M',
      quantity: 1,
      price   : 100,
    },
    {
      image   : whiteDressCart,
      name    : 'White Dress',
      color   : 'White',
      size    : 'L',
      quantity: 1,
      price   : 200,
    },
    {
      image   : orangeDressCart,
      name    : 'Orange Dress',
      color   : 'Orange',
      size    : 'S',
      quantity: 3,
      price   : 150,
    },
  ];

  const handleClick = () => {
    setFormStep(formStep + 1);
  };

  const formSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className='checkout'>
      <div className='checkout-info'>
        <Link to='/' className='checkout-info-title'>
					Élemush
        </Link>
        <p>
					cart / infomation <span>/ shipping / payment</span>
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
                <div>
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
                <div>
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
                <input type='checkbox' id='checkbox' />
                <label htmlFor='checkbox'>{t('saveInfo')}</label>
              </div>
              <div className='form-navigate'>
                <div onClick={() => navigate('/my-cart')}>
                  <img src={backArrow} alt='back icon' />
                  <p>{t('return')}</p>
                </div>
                <div>
                  <Button handleClick={handleClick}>
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
                <div onClick={() => navigate('/my-cart')}>
                  <img src={backArrow} alt='back icon' />
                  <p>{t('return')}</p>
                </div>
                <div>
                  <Button handleClick={handleClick}>
                    <p>{t('contPayment')}</p>
                  </Button>
                </div>
              </div>
            </section>
          )}
        </form>
      </div>
      <div className='checkout-item'>
        <div className='checkout-item-images'>
          {images.map((item, index) => (
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
              discount
              disable={!watch('discount') || errors.discount?.message}
            >
              <p>{t('apply')}</p>
            </Button>
          </div>
        </div>
        <div className='checkout-item-subtotal'>
          <div>
            <p>{t('subtotal')}</p>
            <p>{t('unit')}250.00</p>
          </div>
          <div>
            <p>{t('shipping')}</p>
            <p>{t('calcNextStep')}</p>
          </div>
        </div>
        <div className='checkout-item-total'>
          <p>{t('total')}</p>
          <p>{t('unit')}2500.00</p>
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
}

export default Checkout;

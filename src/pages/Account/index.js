import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from 'global/redux/auth/slice';

import {
  getAddress,
  addAddress,
  editAddress,
  deleteAddress,
} from 'global/redux/user/thunk';

import Header from 'components/Header';
import OrderHistory from './OrderHistory';
import Input from 'components/Input';
import Footer from 'components/Footer';
import Button from 'components/Button';

import addressVal from './validation';

import {
  pinkDress,
  whiteDressCart,
  orangeDressCart,
  trashCan,
} from 'assets/images';

import './style.scss';
import { removeLoginToken, showNoti } from 'utils/helpers';

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('translation', {
    keyPrefix: 'Pages.Account',
  });
  const {
    watch,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode    : 'all',
    resolver: yupResolver(addressVal),
  });

  const languages = [
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'vi',
      label: 'Vietnamese',
    },
  ];

  const orderHistory = [
    {
      id             : 'abc123',
      status         : 'YOUR ORDER WILL BE SHIPPED ON JULY 20TH 2021',
      trackNumber    : 123,
      payment        : 'Paypal',
      delivery       : 'VN Express',
      customerName   : 'Sundeptrai',
      customerAddress:
				'44a phan dinh phung, phuong xuong huan, khanh hoa\n 0888551230',
      items: [
        {
          id      : 1,
          image   : pinkDress,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 4,
          price   : 100,
        },
        {
          id      : 2,
          image   : whiteDressCart,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 1,
          price   : 100,
        },
        {
          id      : 3,
          image   : orangeDressCart,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 10,
          price   : 100,
        },
        {
          id      : 13,
          image   : pinkDress,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 4,
          price   : 100,
        },
        {
          id      : 23,
          image   : pinkDress,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 4,
          price   : 100,
        },
      ],
    },
    {
      id             : '812218asd',
      status         : 'YOUR ORDER IS BEING PROCESSED',
      trackNumber    : 333,
      payment        : 'Credit card',
      delivery       : 'Amazon service',
      customerName   : 'Gundeptrai',
      customerAddress:
				'18/10A Tang Bat Ho, Ward 11, District 1 ,Ho Chi Minh City, 70000, Vietnam\n 08824351130',
      items: [
        {
          id      : 3,
          image   : pinkDress,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 3,
          price   : 100,
        },
        {
          id      : 2,
          image   : whiteDressCart,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 6,
          price   : 100,
        },
        {
          id      : 6,
          image   : orangeDressCart,
          name    : 'Demo name',
          color   : 'Pink',
          size    : 'M',
          quantity: 9,
          price   : 100,
        },
      ],
    },
  ];

  const { isLoading, userAddress: addressData } = useSelector(
    (state) => state.address
  );

  const [selectNav, setSelectNav] = useState(0);
  const [toggleAddAddress, setToggleAddAddress] = useState(false);
  const [deleteAddressConfirm, setDeleteAddressConfirm] = useState(false);
  const [choosenLang, setChoosenLang] = useState(null);
  const [editForm, setEditForm] = useState(false);
  const [addressId, setAddressId] = useState('');
  const [addressIndex, setAddressIndex] = useState(null);

  /* --------------------------------- */

  const switchNav = (e) => {
    setSelectNav(e);
  };

  const toggleAddForm = () => {
    setToggleAddAddress(!toggleAddAddress);
  };

  const formSubmit = async (data) => {
    if (editForm) {
      const { payload } = await dispatch(
        editAddress({ data, addressId, addressIndex })
      );
      if (payload?.status) {
        reset();
        setEditForm(false);
        setToggleAddAddress(false);
        showNoti('success', 'Edit success');
      }
    } else {
      const { payload } = await dispatch(addAddress(data));
      if (payload?.status) {
        reset();
        toggleAddForm();
        showNoti('success', 'Add success');
      }
    }
  };

  const handleDeleteAddress = async () => {
    const res = await dispatch(deleteAddress(addressId));
    if (res?.payload?.status) {
      setDeleteAddressConfirm(false);
      showNoti('success', 'Delete Success');
    }
  };

  const handleClickTrashCan = (data) => {
    setAddressId(data.id);
    setDeleteAddressConfirm(true);
  };

  const handleEditAddress = (data, index) => {
    toggleAddForm();
    setEditForm(!editForm);
    setAddressId(data.id);
    setAddressIndex(index);
    if (!editForm) {
      setValue('firstName', data.firstName);
      setValue('lastName', data.lastName);
      setValue('address', data.street);
      setValue('city', data.city);
      setValue('country', data.country);
      setValue('postalCode', data.postalCode);
      setValue('phone', data.phoneNumber);
    } else {
      reset();
    }
  };

  /* ---------------------------------------------------- */

  const handleSelectLang = (e) => {
    setChoosenLang(e);
    i18n.changeLanguage(e.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLogin');
    removeLoginToken();
    dispatch(logout());
    navigate('/');
  };

  useEffect(() => {
    if (localStorage.getItem('isLogin') !== 'true') {
      navigate('/');
    }
    /*eslint-disable-next-line */
	}, [localStorage.getItem('isLogin')]);

  useEffect(() => {
    dispatch(getAddress());
    /*eslint-disable-next-line */
	}, []);

  return (
    <div className='account-container'>
      <Header catalouge />
      <div className='account'>
        <div className='account__nav'>
          <p
            className={classNames({ active: selectNav === 0 })}
            onClick={() => switchNav(0)}
          >
            {t('ordersReturn')}
          </p>
          <div>|</div>
          <p
            className={classNames({ active: selectNav === 1 })}
            onClick={() => switchNav(1)}
          >
            {t('addressBook')}
          </p>
          <div>|</div>
          <p
            className={classNames({ active: selectNav === 2 })}
            onClick={() => switchNav(2)}
          >
            {t('newsLetter')}
          </p>
          <div>|</div>
          <p
            className={classNames({ active: selectNav === 3 })}
            onClick={() => switchNav(3)}
          >
            {t('changeLanguage')}
          </p>
          <div>|</div>
          <p onClick={handleLogout}>{t('logout')}</p>
        </div>
        <div className='account__content'>
          {selectNav === 0 && (
            <div className='account__content__order'>
              {orderHistory.map((item, index) => (
                <OrderHistory key={index} data={item} />
              ))}
            </div>
          )}
          {selectNav === 1 && (
            <div className='account__content__address'>
              {addressData?.length === 0 && <p>{t('addAddress')}</p>}
              {addressData?.map((item, index) => (
                <div key={index} className='user-address'>
                  {deleteAddressConfirm && (
                    <div className='delete-address-confirm'>
                      <div className='delete-address-confirm-wrapper'>
                        <div>
                          <p>{t('consider')}</p>
                          <div>
                            <Button
                              login
                              handleClick={() => handleDeleteAddress()}
                              isLoading={isLoading}
                            >
                              <p>{t('yes')}</p>
                            </Button>
                            <Button
                              whiteBg
                              greyBorder
                              handleClick={() => setDeleteAddressConfirm(false)}
                            >
                              <p>{t('cancel')}</p>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div>
                    <p>
                      {item.firstName} {item.lastName}
                    </p>
                    <p>
                      <span
                        onClick={() => handleEditAddress(item, index)}
                        className='editButton'
                      >
                        {t('edit')}
                      </span>{' '}
											&nbsp; | &nbsp;
                      <img
                        className='trashCan'
                        onClick={() => handleClickTrashCan(item)}
                        src={trashCan}
                        alt='icon image'
                      />
                    </p>
                  </div>
                  <p>{item.street}</p>
                  <p>
                    {item.city}, {item.postalCode}
                  </p>
                  <p>{item.country}</p>
                  <p>+ {item.phoneNumber}</p>
                </div>
              ))}
              <div className='address-form'>
                <p onClick={toggleAddForm}>{t('newAddress')}</p>
                {toggleAddAddress && (
                  <form onSubmit={handleSubmit(formSubmit)}>
                    <Input
                      register={register}
                      error={errors.firstName?.message}
                      label={t('firstName')}
                      name='firstName'
                      inputCheck={watch('firstName')}
                    />
                    <Input
                      register={register}
                      error={errors.lastName?.message}
                      label={t('lastName')}
                      name='lastName'
                      inputCheck={watch('lastName')}
                    />
                    <Input
                      register={register}
                      error={errors.address?.message}
                      label={t('address')}
                      name='address'
                      inputCheck={watch('address')}
                    />
                    <Input
                      register={register}
                      error={errors.city?.message}
                      label={t('city')}
                      name='city'
                      inputCheck={watch('city')}
                    />
                    <div className='double-input'>
                      <Input
                        register={register}
                        error={errors.country?.message}
                        label={t('country')}
                        name='country'
                        inputCheck={watch('country')}
                      />
                      <Input
                        register={register}
                        error={errors.postalCode?.message}
                        label={t('postalCode')}
                        name='postalCode'
                        inputCheck={watch('postalCode')}
                      />
                    </div>
                    <Input
                      register={register}
                      error={errors.phone?.message}
                      label={t('phone')}
                      name='phone'
                      inputCheck={watch('phone')}
                    />
                    <div className='form-button'>
                      <Button
                        discount
                        login
                        type='submit'
                        isLoading={isLoading}
                      >
                        {editForm ? <p>{t('edit')}</p> : <p>{t('save')}</p>}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
              {addressData?.length > 0 && <p>{t('saveAddress')}</p>}
            </div>
          )}
          {selectNav === 2 && (
            <div className='account__content__newsletter'>
              <p>{t('emailPref')}</p>
              <p>{t('updatePref')}</p>
              <div className='accept'>
                <input type={'checkbox'} />
                <p>{t('newsletter')}</p>
              </div>
              <div>
                <Button discount>
                  <p>{t('savePref')}</p>
                </Button>
              </div>
            </div>
          )}
          {selectNav === 3 && (
            <div className='account__content__changeLang'>
              <Select
                defaultValue={choosenLang}
                onChange={handleSelectLang}
                options={languages}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;

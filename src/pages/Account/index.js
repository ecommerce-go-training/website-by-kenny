import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from 'global/redux/auth/slice';
import { clearAddress } from 'global/redux/address/slice';
import { resetProduct } from 'global/redux/product/slice';
import { useClickOutside } from 'utils/helpers';

import {
  getAddress,
  addAddress,
  editAddress,
  deleteAddress,
} from 'global/redux/address/thunk';

import Header from 'components/Header';
import OrderHistory from './OrderHistory';
import Input from 'components/Input';
import Footer from 'components/Footer';
import Button from 'components/Button';

import addressVal from './validation';

import { trashCan } from 'assets/images';

import './style.scss';
import { removeLoginToken, showNoti } from 'utils/helpers';
import { getUserInvoices } from 'global/redux/checkout/thunk';

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

  const {
    isLoading,
    userAddress: addressData,
    fetched: addressfetched,
  } = useSelector((state) => state.address);

  const { invoiceInfo } = useSelector((state) => state.checkout);

  const [selectNav, setSelectNav] = useState(0);
  const [toggleAddAddress, setToggleAddAddress] = useState(false);
  const [deleteAddressConfirm, setDeleteAddressConfirm] = useState(false);
  const [choosenLang, setChoosenLang] = useState(null);
  const [editForm, setEditForm] = useState(false);
  const [addressId, setAddressId] = useState('');
  const [addressIndex, setAddressIndex] = useState(null);

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

  const handleSelectLang = (e) => {
    setChoosenLang(e);
    i18n.changeLanguage(e.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLogin');
    removeLoginToken();
    dispatch(resetProduct());
    dispatch(logout());
    dispatch(clearAddress());
    navigate('/');
  };

  useEffect(() => {
    if (localStorage.getItem('isLogin') !== 'true') {
      navigate('/');
    }
    /*eslint-disable-next-line */
	}, [localStorage.getItem('isLogin')]);

  useEffect(() => {
    if (!addressfetched) {
      dispatch(getAddress());
    }
    dispatch(getUserInvoices());
    /*eslint-disable-next-line */
	}, []);

  let confirmDeleteRef = useClickOutside(() => setDeleteAddressConfirm(false));

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
              {invoiceInfo.map((item, index) => (
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
                        <div ref={confirmDeleteRef}>
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

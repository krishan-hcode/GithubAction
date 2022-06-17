import { Address, userProfileInfo } from '../../interface/interface';
import { ADD_ADDRESS, ADD_USER_INFO, DELETE_ADDRESS, INCREMENT_ADDRESS_ID, UPDATE_ADDRESS, USER_LOGIN, USER_LOGOUT } from './types';
export const userInfo = (userInfo: userProfileInfo) => {
  return {
    type: ADD_USER_INFO,
    payload: userInfo,
  };
};

export const addAddress = (address: Address) => {
  return {
    type: ADD_ADDRESS,
    payload: address,
  };
};

export const deleteAddress = (address:  Address) => {
  return {
    type: DELETE_ADDRESS,
    payload: address,
  };
};

export const updateAddress = (address:  Address) => {
  return {
    type: UPDATE_ADDRESS,
    payload: address,
  };
};

export const userLogin = (data: any) => {
  return {
    type: USER_LOGIN,
    payload: data,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const incrementAddressId = () => {
  return {
    type: INCREMENT_ADDRESS_ID
  }
};

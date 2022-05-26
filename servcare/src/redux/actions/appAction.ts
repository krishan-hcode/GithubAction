import { ADD_ADDRESS, ADD_USER_INFO, USER_LOGIN, USER_LOGOUT } from './types';
export const userInfo = (userInfo: any) => {
  return {
    type: ADD_USER_INFO,
    payload: userInfo,
  };
};

export const addAddress = (address: any) => {
  return {
    type: ADD_ADDRESS,
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

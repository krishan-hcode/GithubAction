import { ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCT, LOADING, UPDATE_PRODUCT } from './types';

export const addProduct = (data: any) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

export const fetchProduct = () => {
  return {
    type: FETCH_PRODUCT,
  };
};

export const deleteProduct = (id: number) => {
  return {
    type: DELETE_PRODUCT,
    payload: id
  }
}

export const updateProduct = (data: any) => {
  return {
    type: UPDATE_PRODUCT,
    payload: data
  }
}

export const loading = (loader: boolean) => ({
  type: LOADING,
  payload: loader,
});

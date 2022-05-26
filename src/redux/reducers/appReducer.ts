import { ADD_ADDRESS, ADD_USER_INFO, FETCH_ADDRESS, LOADING, USER_LOGIN, USER_LOGOUT } from '../actions/types';

const intialState = {
  userInfo: {},
  isLogin: false,
  loading: false,
  address: [],
};

const productReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case ADD_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case ADD_ADDRESS:
      return {
        ...state,
        address: [action.payload, ...state.address],
      };

    case FETCH_ADDRESS:
      return {
        address: state.address,
      };
    case USER_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      // return {...state};
      return state;
  }
};

export default productReducer;

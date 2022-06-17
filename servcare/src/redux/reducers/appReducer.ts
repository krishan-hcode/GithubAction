import { appUserState } from '../../interface/interface';
import { ADD_ADDRESS, ADD_USER_INFO, DELETE_ADDRESS, FETCH_ADDRESS, INCREMENT_ADDRESS_ID, LOADING, UPDATE_ADDRESS, USER_LOGIN, USER_LOGOUT } from '../actions/types';

const intialState: appUserState = {
  userInfo: { firstName: '' },
  isLogin: false,
  loading: false,
  address: [],
  addressId: 0,
  userId: '123456'
};

const appReducer = (state = intialState, action: any) => {
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
        addressId: action.payload.addressId
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
    case INCREMENT_ADDRESS_ID:
      return {
        ...state,
        addressId: state.addressId + 1
      }
    case DELETE_ADDRESS: {
      const tempArray = [...state.address];
      const index = tempArray.findIndex(address => address.addressId === action.payload.addressId);
      tempArray.splice(index, 1);

      return {
        ...state,
        address: tempArray
      }
    }
    case UPDATE_ADDRESS: {
      const tempArray = [...state.address];
      const index = tempArray.findIndex(address => address.addressId === action.payload.addressId);
      tempArray[index] = action.payload

      return {
        ...state,
        address: tempArray
      }
    }
    default:
      // return {...state};
      return state;
  }
};

export default appReducer;

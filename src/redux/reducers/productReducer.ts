import { ADD_PRODUCT, LOADING, FETCH_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../actions/types';

const intialState = {
  data: [],
  loading: false,
};

const productReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case FETCH_PRODUCT:
      return {
        data: state.data,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        data: state.data.filter((item: any) => item.id !== action.payload)
      }
    case UPDATE_PRODUCT:
      return {
        ...state,
        data: state.data.map((item: any) => item.id === action.payload.id ? action.payload : item)
      }
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

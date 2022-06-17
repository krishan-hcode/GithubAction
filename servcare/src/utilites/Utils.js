import { format } from 'date-fns';
import moment from 'moment';
import Toast from 'react-native-simple-toast';

export const bytesToSize = bytes => {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) {
    return '0 Byte';
  }
  // eslint-disable-next-line radix
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};
export const toastMessage = message => {
  Toast.show(message, Toast.LONG);
};

export const generateRandomNumber = () => {
  var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  console.log(seq);
  return seq;
};

// will return the date with time and meridiem
export const getTimeStampFormatWithMeridiem = (value) => format(new Date(value), 'MMM dd, yyyy hh:mm a');


export const weeklyDateFormat = () => {
  const currentDate = new Date()
  const todayDate = currentDate.getDate()
  const dateArray = []
  for (let i = 0; i < 5; i++) {
    dateArray.push({ name: moment(new Date(currentDate).setDate(todayDate + i)).format("DD MMM"), date: new Date(currentDate).setDate(todayDate + i) })
  }
  return dateArray
}


export const isEmpty = (value) => {
  if (value && value !== 'undefined' && value !== 'null' && value !== '' && typeof value !== undefined) {
    return false;
  } else {
    return true;
  }
}

export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
}

export const searchData = (listData, searchText) => {
  return listData.filter(
    function (item) {
      const itemName = item.description
        ? item.description.toUpperCase()
        : ''.toUpperCase();
      const textName = searchText.toUpperCase();
      return itemName.indexOf(textName) > -1;
    }
  );
}


export const replaceString = (text) => {
  const updatedString = text.split('/').join('%2F');
  return updatedString;
}

export const getAddressFormat = (address) => {
  let newAddress = ''
  newAddress += !isEmpty(address.addressLine1) ? address.addressLine1 + ", " : ''
  newAddress += !isEmpty(address.landmark) ? address.landmark + ", " : ''
  newAddress += !isEmpty(address.city) ? address.city + "-" : ''
  newAddress += !isEmpty(address.pincode) ? address.pincode + ", " : ''
  newAddress += !isEmpty(address.state) ? address.state + ", " : ''
  return newAddress;
}
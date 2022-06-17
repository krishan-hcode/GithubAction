import { StyleSheet } from 'react-native';
import Colors from '../utilites/Colors';

export const editCustomerProfileStyles = StyleSheet.create({
  updateDetailsButton: {
    padding: 14,
    backgroundColor: Colors.DARK_GREEN_100,
    borderRadius: 4,
  },

  appButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: Colors.GREEN_100,
    alignSelf: 'center',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '80%'
  },

  formFieldContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginHorizontal: 3,
    marginBottom: 10
  },

  formFieldLabelContainer: {
    display: 'flex',
    flexDirection: 'row'
  },

  formFieldLabel: {
    fontSize: 14,
    marginTop: 10
  },

  asterisk: {
    color: Colors.RED,
    marginTop: 10
  },

  textInputBox: {
    paddingHorizontal: 15,
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },

  textInputBoxBorder: {
    borderColor: Colors.BLACK,
    borderWidth: 1,
    borderRadius: 6,
  },

  textInputBoxErrorBorder: {
    borderColor: Colors.RED,
    borderWidth: 1,
    borderRadius: 6,
  },
  
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2.62,

    elevation: 4,
  },

  validationError: {
    fontSize: 14,
    paddingLeft: 1,
    color: Colors.RED 
  }
});

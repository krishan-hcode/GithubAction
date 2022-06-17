import { StyleSheet } from "react-native";
import Colors from '../utilites/Colors';

export const addEditAddressStyles =StyleSheet.create({
  mainContainer: {
    display: "flex",
    width: '100%',
    height: '80%'
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '80%',
    padding: 20
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

  addressTypesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  radioButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 15
  },

  radioButton: {
    color: Colors.GREEN_100
  },

  selectedRadioButton: {
    color: Colors.GREEN_100
  },

  unSelectedRadioButton: {
    color: Colors.BLACK
  },

  dropDownContainer: {
    zIndex: 100
  },

  dropDownPickerStyle: {
    marginTop: 10,
    borderColor: Colors.DARK_GREEN_100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4
  },

  placeholderStyle: {
    color: Colors.GRAY_100,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  
  listItemStyle: {
    fontSize: 14,
    color: Colors.BLACK,
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  selectedValue: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },

  validationError: {
    fontSize: 14,
    paddingLeft: 1,
    color: Colors.RED 
  },

  addNewButtonContainer: {
    height: '10%',
    position: "absolute",
    bottom: 0,
    width: '90%',
    margin: '5%'
  },

  saveButton: {
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
})
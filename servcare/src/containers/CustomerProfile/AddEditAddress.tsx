import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import { addEditAddressStyles } from "../../styles/addEditAddress.style";
import { appStyle } from "../../styles/app.style";
import HeaderNavigantion from "./headerNavinagtion";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { RadioButton } from "react-native-paper";
import { addressType } from "../../enum/enums";
import Colors from "../../utilites/Colors";
import DropDownPicker from "react-native-dropdown-picker";
import AntDesign from "react-native-vector-icons/AntDesign";
import { AREA } from "../../constants/app.constants";
import { addAddress, updateAddress } from "../../redux/actions/appAction";
import { Address, NavigationProps } from "../../interface/interface";
import { useDispatch, useSelector } from "react-redux";

const AddEditAddress: React.FC<any> = () => {
  const appUserState = useSelector<any>(state => state.app);
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();
  const route = useRoute<any>();
  const {address, headerLabel} = route.params;
  const pinCodeRegExp = /^\d{6}$/;
  const [items, setItems] = useState(AREA);
  const [open, setOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState(address?.area);
  const mode = headerLabel.toLowerCase().includes('edit') ? 'edit' : 'add';
  const {handleChange, handleSubmit, setFieldValue, values, errors} = useFormik({

    initialValues: {
      addressType: address ?  address.addressType: addressType.HOME,
      addressLine1: address ? address.addressLine1 : '',
      addressLine2: address ? address.addressLine2 : '',
      landmark: address ? address.landmark : '',
      area: address ? address.area: '',
      city: address ? address.city: 'Pune',
      state: address ? address.state: 'Maharashtra',
      pincode: address ? address.pincode: ''
    },

    validationSchema: yup.object().shape({
      addressType: yup
        .string()
        .required('Address type is required'),
      addressLine1: yup
        .string()
        .required('Address line 1 is required'),
      addressLine2: yup
        .string(),
      landmark: yup
        .string(),
      area: yup
        .string()
        .required('Area is required'),
      pincode: yup
        .string()
        .matches(pinCodeRegExp, 'Invalid pincode')
    }),

    onSubmit: values => {
      if(mode === 'add'){
        const addressId = appUserState?.addressId
        const payload:  Address = {
          addressId: addressId + 1,
          addressLine1: values.addressLine1,
          addressLine2: values.addressLine2,
          addressType: values.addressType,
          landmark: values.landmark,
          pincode: values.pincode,
          area: values.area,
          city: 'Pune',
          state: 'Maharashtra'
        }
        dispatch(addAddress(payload));
      }
      else if (mode === 'edit') {
        const payload:  Address = {
          addressId: address.addressId,
          addressLine1: values.addressLine1,
          addressLine2: values.addressLine2,
          addressType: values.addressType,
          landmark: values.landmark,
          pincode: values.pincode,
          area: values.area,
          city: 'Pune',
          state: 'Maharashtra'
        }

        dispatch(updateAddress(payload))
      }
      navigation.goBack();
    },
  });

  const renderFormFieldLabel = (label: string, isRequired: boolean) => (
    <View style={[addEditAddressStyles.formFieldLabelContainer]}>
      <Text
        style={[
          appStyle.montserrat_medium,
          addEditAddressStyles.formFieldLabel
        ]}
      >
        {label}
      </Text>
      {isRequired && (
        <Text
          style={[
            appStyle.montserrat_medium,
            addEditAddressStyles.asterisk
          ]}
        >
          {' *'}
        </Text>
      )}
    </View>
  )

  useEffect(()=>{
    setFieldValue('area', selectedArea);
  }, [selectedArea])

  const addressTypeHandler = (value: addressType) => {
    setFieldValue('addressType', value)
  }

  const renderRadioButton = (menuType: addressType) => (
    <RadioButton 
      onPress={()=> {addressTypeHandler(menuType)}}
      value={menuType}
      status={ values.addressType === menuType ? 'checked' : 'unchecked' }
      color={Colors.GREEN_100}
    />
  )

  const renderMenuText = (menuType: addressType) => (
    <Text
      style={[
        appStyle.montserrat_medium,
        (values.addressType === menuType)
          ? addEditAddressStyles.selectedRadioButton
          : addEditAddressStyles.unSelectedRadioButton
      ]}
    >
      {menuType}
    </Text>
  )

  const renderTextInput = (formikField: string, placeHolder: string, value: string, error: any, isDisabled: boolean = false) => (
    <View>
      <TextInput
        style={[
          addEditAddressStyles.textInputBox,
          error
          ? addEditAddressStyles.textInputBoxErrorBorder
          : addEditAddressStyles.textInputBoxBorder
        ]}
        placeholder={placeHolder}
        onChangeText={handleChange(formikField)}
        value={value}
        editable={!isDisabled}
      />
      {error &&
        <Text style={[appStyle.montserrat_regular, addEditAddressStyles.validationError]}>
          {error}
        </Text>
      }
    </View>
  )
  // let area: string | null;
  // if(values.area) { 
  //   area= values.area
  // } else if (address) {
  //   area= address.area
  // }

  const renderForm = () => (
    <View style={[addEditAddressStyles.formContainer]}>
      <View>
        {renderFormFieldLabel('Address Type', true)}
        <View style={[addEditAddressStyles.addressTypesContainer]}>
          <View style={[addEditAddressStyles.radioButtonContainer]}>
            {renderRadioButton(addressType.HOME)}
            {renderMenuText(addressType.HOME)}
          </View>
          <View style={[addEditAddressStyles.radioButtonContainer]}>
            {renderRadioButton(addressType.WORK)}
            {renderMenuText(addressType.WORK)}
          </View>
          <View style={[addEditAddressStyles.radioButtonContainer]}>
            {renderRadioButton(addressType.OTHER)}
            {renderMenuText(addressType.OTHER)}
          </View>
        </View>
      </View>
      <View>
        {renderFormFieldLabel('Address Line 1', true)}
        {renderTextInput('addressLine1','Enter Address Line 1', values.addressLine1, errors.addressLine1)}
      </View>
      <View>
        {renderFormFieldLabel('Address Line 2', false)}
        {renderTextInput('addressLine2','Enter Address Line 2', values.addressLine2, errors.addressLine2)}
      </View>
      <View>
        {renderFormFieldLabel('Landmark', false)}
        {renderTextInput('landmark','Enter Landmark', values.landmark, errors.landmark)}
      </View>
      <View>
        {renderFormFieldLabel('Pincode', true)}
        {renderTextInput('pincode','Enter Pincode', values.pincode, errors.pincode)}
      </View>
      <View style={[addEditAddressStyles.dropDownContainer]}>
        {renderFormFieldLabel('Area', true)}
        <DropDownPicker
          hideSelectedItemIcon={false}
          placeholderStyle={addEditAddressStyles.placeholderStyle}
          listItemLabelStyle={addEditAddressStyles.listItemStyle}
          labelStyle={addEditAddressStyles.selectedValue}
          style={addEditAddressStyles.dropDownPickerStyle}
          open={open}
          value={values.area}
          placeholder="Select Area"
          items={items}
          setOpen={setOpen}
          setValue={setSelectedArea}
          setItems={setItems}
          ArrowDownIconComponent={() => (
            <AntDesign name="caretdown" size={16} color={Colors.GRAY_100} />
          )}
          ArrowUpIconComponent={() => (
            <AntDesign name="caretup" size={16} color={Colors.GRAY_100} />
          )}
        />
        {errors.city &&
        <View>
        <Text style={[appStyle.montserrat_regular, addEditAddressStyles.validationError]}>
          {errors.city}
        </Text>
        </View>
        }
      </View>
      <View>
        {renderFormFieldLabel('City', true)}
        {renderTextInput('city','City', values.city, errors.city, true)}
      </View>
      <View>
        {renderFormFieldLabel('State', true)}
        {renderTextInput('state','State', values.state, errors.state, true)}
      </View>
    </View>
  )

  return (
    <View style={[appStyle.container]}>
      <HeaderNavigantion label={headerLabel} />
      <View style={[addEditAddressStyles.mainContainer]}>
      {/* The Flatlist has been used here instead of scrollview because
      when we add scrollview container around the form, The textIpnuts inside
      the form starts misbehaving. The keyboard keep on closing on each keystroke
       */}
      <FlatList
        data={['Test']}
        renderItem={renderForm}
      >
        {renderForm()}
      </FlatList> 
      </View>   
      <View style={[addEditAddressStyles.addNewButtonContainer]}>
        <View style={[appStyle.mt_20]}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={addEditAddressStyles.saveButton}>
            <Text
              style={[addEditAddressStyles.appButtonText]}
            >
              Save Address
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AddEditAddress;

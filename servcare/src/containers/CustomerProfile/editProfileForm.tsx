import React from "react"
import { TextInput, TouchableOpacity, View } from "react-native"
import { Text } from "react-native-elements";
import { appStyle } from "../../styles/app.style";
import { editCustomerProfileStyles } from "../../styles/editCustomerProfile.style";
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useDispatch } from "react-redux";
import { userInfo } from '../../redux/actions/appAction';
import { userProfileInfo } from "../../interface/interface";

interface EditProfileFormProps {
  userDetails: any;
  onConfirm: () => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = (props) => {
  const {userDetails, onConfirm} = props;
  const phoneRegExp = /^\d{10}$/;
  const dispatch = useDispatch();

  const {handleChange, handleSubmit, values, errors} = useFormik({
    initialValues: {
      firstName: userDetails ? userDetails.firstName : '',
      lastName: userDetails ? userDetails.lastName : '',
      email: userDetails ? userDetails.email : '',
      alternateMobileNumber: userDetails ? userDetails.alternateMobileNumber : '',
    },

    validationSchema: yup.object().shape({
      firstName: yup
        .string()
        .required('First name is required'),
      lastName: yup
        .string()
        .required('Last name is required'),
      email: yup
        .string()
        .email('Invalid email address'),
      alternateMobileNumber: yup
        .string()
        .matches(phoneRegExp, 'Invalid mobile number')
    }),

    onSubmit: values => {
      const userProfile: userProfileInfo = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        primaryMobileNumber: userDetails.primaryMobileNumber,
        alternateMobileNumber: values.alternateMobileNumber,
        referralCode: userDetails.referralCode,
      }

      dispatch(userInfo(userProfile));
      onConfirm();
    },
  });

  const renderFormFieldLabel = (label: string, isRequired: boolean) => (
    <View style={[editCustomerProfileStyles.formFieldLabelContainer]}>
      <Text
        style={[
          appStyle.montserrat_medium,
          editCustomerProfileStyles.formFieldLabel
        ]}
      >
        {label}
      </Text>
      {isRequired && (
        <Text
          style={[
            appStyle.montserrat_medium,
            editCustomerProfileStyles.asterisk
          ]}
        >
          {' *'}
        </Text>
      )}
    </View>
  )
  return (
    <View style={[editCustomerProfileStyles.formContainer]}>
      {/* <ScrollView> */}
        <View style={[ editCustomerProfileStyles.formFieldContainer, editCustomerProfileStyles.shadow]}>
          <View>
            {renderFormFieldLabel('First Name', true)}
            <TextInput
              style={[
                editCustomerProfileStyles.textInputBox,
                errors.firstName
                ? editCustomerProfileStyles.textInputBoxErrorBorder
                : editCustomerProfileStyles.textInputBoxBorder
              ]}
              onChangeText={handleChange('firstName')}
              value={values.firstName}
            />
            {errors.firstName &&
              <Text style={[appStyle.montserrat_regular, editCustomerProfileStyles.validationError]}>
                {errors.firstName}
              </Text>
            }
          </View>
          <View>
            {renderFormFieldLabel('Last Name', true)}
            <TextInput
              style={[
                editCustomerProfileStyles.textInputBox,
                errors.lastName
                ? editCustomerProfileStyles.textInputBoxErrorBorder
                : editCustomerProfileStyles.textInputBoxBorder
              ]}
              onChangeText={handleChange('lastName')}
              value={values.lastName}
            />
            {errors.lastName &&
              <Text style={[appStyle.montserrat_regular, editCustomerProfileStyles.validationError]}>
                {errors.lastName}
              </Text>
            }
          </View>
          <View>
            {renderFormFieldLabel('Email Address', false)}
            <TextInput
              style={[
                editCustomerProfileStyles.textInputBox,
                errors.email
                ? editCustomerProfileStyles.textInputBoxErrorBorder
                : editCustomerProfileStyles.textInputBoxBorder
              ]}
              onChangeText={handleChange('email')}
              value={values.email}
            />
            {errors.email &&
              <Text style={[appStyle.montserrat_regular, editCustomerProfileStyles.validationError]}>
                {errors.email}
              </Text>
            }
          </View>
          <View>
            {renderFormFieldLabel('Alternate Mobile Number', false)}
            <TextInput
              style={[
                editCustomerProfileStyles.textInputBox,
                errors.alternateMobileNumber
                ? editCustomerProfileStyles.textInputBoxErrorBorder
                : editCustomerProfileStyles.textInputBoxBorder
              ]}
              onChangeText={handleChange('alternateMobileNumber')}
              value={values.alternateMobileNumber}
            />
            {errors.alternateMobileNumber &&
              <Text style={[appStyle.montserrat_regular, editCustomerProfileStyles.validationError]}>
                {errors.alternateMobileNumber}
              </Text>
            }
          </View>
        </View>
      {/* </ScrollView> */}
      <View style={[appStyle.mt_10, appStyle.mb_10, appStyle.ph_6Percent]}>
        <TouchableOpacity
          onPress={handleSubmit}
          style={editCustomerProfileStyles.updateDetailsButton}>
          <Text
            style={[editCustomerProfileStyles.appButtonText]}
          >
            Update Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditProfileForm;

function alert(arg0: string) {
  throw new Error("Function not implemented.");
}

import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Tooltip } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { useDispatch, useSelector } from 'react-redux';
import { calendar } from '../../assets/icons';
import { BRAND, PRODUCT, PRODUCT_TYPE } from '../../constants/app.constants';
import { NavigationProps } from '../../interface/interface';
import { addProduct, updateProduct } from '../../redux/actions/productAction';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import { tabNavigator } from '../../styles/tabNavigator.style';
import Colors from '../../utilites/Colors';
import { generateRandomNumber } from '../../utilites/Utils';
import ProductModel from './ProductModel';

const AddProduct: React.FC<any> = () => {
  const ProductList: any = useSelector<any>(state => state.product.data);
  const dispatch = useDispatch();
  const route = useRoute<any>();
  const navigation = useNavigation<NavigationProps>();
  const [ProductItem, setProductItem] = useState<any>('');
  const [productName, setProductName] = useState();
  const [serialNo, setSerialNo] = useState('');
  const [modelNo, setModelNo] = useState('');
  const [product, setProduct] = useState('');
  const [productType, setProductType] = useState('');
  const [brand, setBrand] = useState('');
  const [warrantyStatus, setWarrantyStatus] = useState('');
  const [isModelOpen, setModelOpen] = useState(false);
  const [modelType, setModelType] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleSubmitBtn = () => {
    const payload = {
      id: ProductItem ? ProductItem.id : generateRandomNumber(),
      title: productName,
      des: 'Master washroom',
      icon: '',
      productNickname: productName,
      product: product,
      productType: productType,
      brand: brand,
      serialNo: serialNo,
      modelNo: modelNo,
      warrantyStatus: warrantyStatus,
      purchaseDate: purchaseDate
    };

    ProductItem ? dispatch(updateProduct(payload)) : dispatch(addProduct(payload));
    navigation.goBack();
  };

  useEffect(() => {
    if (route.params) {
      const productDetails = ProductList.find((item: any) => {
        return item.id == route.params.productId
      })
      setProductItem(productDetails);
      setProductName(productDetails ? productDetails.productNickname : '');
      setSerialNo(productDetails ? productDetails.serialNo : '');
      setModelNo(productDetails ? productDetails.modelNo : '');
      setProduct(productDetails ? productDetails.product : '');
      setProductType(productDetails ? productDetails.productType : '');
      setBrand(productDetails ? productDetails.brand : '');
      setWarrantyStatus(productDetails ? productDetails.warrantyStatus : '');
      setPurchaseDate(productDetails ? productDetails.purchaseDate : '');
    }
  }, [route.params]);

  const handleOpenModel = (type: string) => {
    setModelOpen(true);
    setModelType(type);
    getModelData();
  };

  const handleWarrantyStatus = (value: string) => {
    setWarrantyStatus(value);
    if (value === 'no') {
      setPurchaseDate('');
    }
  };

  const handleCloseModel = () => {
    setModelOpen(false);
  };

  const isValidation = () => {
    return product && productType && brand
      ? warrantyStatus === 'yes'
        ? purchaseDate
          ? true
          : false
        : warrantyStatus === 'no'
          ? true
          : false
      : false;
  };

  const getModelData = () => {
    switch (modelType) {
      case 'Product':
        return PRODUCT;
      case 'Product Type':
        return PRODUCT_TYPE;
      case 'Brand':
        return BRAND;
    }
  };

  const handleOnClickItem = (data: any) => {
    switch (modelType) {
      case 'Product':
        setProduct(data && data.title);
        break;
      case 'Product Type':
        setProductType(data && data.title);
        break;
      case 'Brand':
        setBrand(data && data.title);
        break;
    }
    setModelOpen(false);
  };

  const inputField = (
    title: string,
    placeholderValue: string,
    textValue: string,
    setTextValue: {
      (value: React.SetStateAction<string>): void;
      (arg0: string): void;
    },
    optional: boolean,
  ) => {
    return (
      <View style={[MyProductStyle.FieldBox, appStyle.alignItemsCenter]}>
        <View style={appStyle.w_50}>
          {title === 'Product Nickname' ? (
            <View style={appStyle.flex}>
              <Text style={[MyProductStyle.inputLableStyle]}>{title}</Text>
              <Tooltip
                containerStyle={MyProductStyle.tooltipBox}
                backgroundColor={Colors.BLACK}
                popover={
                  <Text style={MyProductStyle.tooltipText}>
                    e.g : Hall TV, Bed A/C
                  </Text>
                }>
                <Ionicons
                  style={appStyle.mtNeg10}
                  name="information-circle-outline"
                  size={17}
                  color={Colors.DARK_GREEN_200}
                />
              </Tooltip>
            </View>
          ) : (
            <View>
              <Text style={[MyProductStyle.inputLableStyle]}>
                {title}
                {optional && <Text style={appStyle.text_red}> *</Text>}
              </Text>
            </View>
          )}
        </View>
        <View style={[appStyle.w_50]}>
          <TextInput
            placeholderTextColor={Colors.GRAY_100}
            value={textValue}
            style={
              textValue
                ? MyProductStyle.inputStyle
                : MyProductStyle.inputPlaceholderStyle
            }
            onChangeText={value => setTextValue(value)}
            placeholder={placeholderValue}
          />
        </View>
      </View>
    );
  };

  const selectField = (
    title: string,
    placeholderValue: string,
    textValue: string,
  ) => {
    return (
      <View style={[MyProductStyle.FieldBox, appStyle.alignItemsCenter]}>
        <View style={appStyle.w_50}>
          <Text style={[MyProductStyle.inputLableStyle]}>
            {title}
            <Text style={appStyle.text_red}> *</Text>
          </Text>
        </View>
        <View style={[appStyle.w_50]}>
          {textValue ? (
            <TouchableOpacity onPress={() => handleOpenModel(title)}>
              <View style={MyProductStyle.selectBox}>
                <MaterialIcons
                  name="edit"
                  size={16}
                  color={Colors.DARK_GREEN_200}
                />
                <Text style={[appStyle.ml_10, MyProductStyle.selectText]}>
                  {textValue}
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleOpenModel(title)}>
              <View style={MyProductStyle.selectBox}>
                <Text style={MyProductStyle.unSelectText}>
                  {placeholderValue}
                </Text>
                <Octicons
                  style={appStyle.ml_10}
                  name="chevron-right"
                  size={24}
                  color={Colors.DARK_GREEN_200}
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={[appStyle.container]}>
      <View>
        {isModelOpen && (
          <View style={MyProductStyle.modelVisible}>
            <ProductModel
              type={modelType}
              data={getModelData()}
              handleCloseModel={handleCloseModel}
              handleOnClickItem={handleOnClickItem}
            />
          </View>
        )}
        <View style={MyProductStyle.addProductHeaderBox}>
          <View style={[appStyle.flex, appStyle.mt_30]}>
            <TouchableOpacity onPress={() => navigation.navigate('My Product')}>
              <Octicons
                style={appStyle.ml_20}
                name="chevron-left"
                size={28}
                color={Colors.BLACK}
              />
            </TouchableOpacity>
            <Text style={[MyProductStyle.headerNameText, appStyle.ml_40]}>
              {ProductItem ? 'Edit Product' : 'Add new Product'}
            </Text>
          </View>
        </View>
        <View style={MyProductStyle.bottomLine} />
        <View style={appStyle.mt_10}>
          {inputField(
            'Product Nickname',
            'Enter Product Name',
            productName,
            setProductName,
            false,
          )}
          <View style={MyProductStyle.bottomLine} />
          {selectField('Product', 'Select', product)}
          <View style={MyProductStyle.bottomLine} />
          {selectField('Product Type', 'Select', productType)}
          <View style={MyProductStyle.bottomLine} />
          {selectField('Brand', 'Select', brand)}
          <View style={MyProductStyle.bottomLine} />
          {inputField(
            'Serial No',
            'Serial Number',
            serialNo,
            setSerialNo,
            false,
          )}
          <View style={MyProductStyle.bottomLine} />
          {inputField('Model No', 'Model Number', modelNo, setModelNo, false)}
          <View style={MyProductStyle.bottomLine} />

          <View style={[MyProductStyle.FieldBox, appStyle.alignItemsCenter]}>
            <View style={appStyle.w_50}>
              <Text style={[MyProductStyle.inputLableStyle]}>
                Warranty Status <Text style={appStyle.text_red}> *</Text>
              </Text>
            </View>
            <View style={[appStyle.w_50]}>
              <RadioButton.Group
                onValueChange={newValue => handleWarrantyStatus(newValue)}
                value={warrantyStatus}>
                <View style={[appStyle.flex]}>
                  <View style={[appStyle.flex, appStyle.alignItemsCenter]}>
                    <RadioButton color={Colors.GREEN_100} value="yes" />
                    <Text style={MyProductStyle.selectText}>Yes</Text>
                  </View>
                  <View
                    style={[
                      appStyle.flex,
                      appStyle.alignItemsCenter,
                      appStyle.ml_20,
                    ]}>
                    <RadioButton color={Colors.GREEN_100} value="no" />
                    <Text style={MyProductStyle.selectText}>No</Text>
                  </View>
                </View>
              </RadioButton.Group>
            </View>
          </View>
          <View style={MyProductStyle.bottomLine} />

          <View style={MyProductStyle.datePicker}>
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={selectedDate => {
                setOpen(false);
                setDate(selectedDate);
                setPurchaseDate(selectedDate);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>

          {warrantyStatus === 'yes' && (
            <View>
              <View
                style={[MyProductStyle.FieldBox, appStyle.alignItemsCenter]}>
                <View style={appStyle.w_50}>
                  <Text style={[MyProductStyle.inputLableStyle]}>
                    Purchase Date <Text style={appStyle.text_red}> *</Text>
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => setOpen(true)}
                  style={[appStyle.w_50]}>
                  <View
                    style={[
                      appStyle.w_100,
                      appStyle.flex,
                      appStyle.alignItemsCenter,
                      MyProductStyle.inputPlaceholderStyle,
                    ]}>
                    <Text
                      style={
                        purchaseDate
                          ? MyProductStyle.purchaseDate
                          : MyProductStyle.disablePurchaseDate
                      }>
                      {purchaseDate
                        ? moment(new Date(purchaseDate)).format('MMM DD, YYYY')
                        : 'Select purchase date'}
                    </Text>
                    <View style={appStyle.marginLeftAuto}>
                      <Image source={calendar} style={[tabNavigator.icon]} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={MyProductStyle.bottomLine} />
            </View>
          )}

          <View style={[appStyle.mt_30, appStyle.padding_36]}>
            <TouchableOpacity
              onPress={handleSubmitBtn}
              disabled={!isValidation()}
              style={
                isValidation()
                  ? MyProductStyle.appButtonContainer
                  : MyProductStyle.appButtonDisableContainer
              }>
              <Text
                style={
                  isValidation()
                    ? [MyProductStyle.appButtonText]
                    : [MyProductStyle.appButtonDisableText]
                }>
                {ProductItem ? 'Update Details' : 'Add Product'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddProduct;

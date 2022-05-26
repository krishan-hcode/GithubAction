import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { launchCamera } from 'react-native-image-picker';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import { useDispatch, useSelector } from 'react-redux';
import { upload, washingMachine } from '../../assets/icons';
import AlertModel from '../../components/Alert/AlertModel';
import BottomAlertModel from '../../components/Alert/BottomAlertModel';
import BottomAlertModelList from '../../components/Alert/BottomAlertModelList';
import ProductAttachmentComponent from '../../components/Product/ProductAttachmentComponent';
import { NavigationProps } from '../../interface/interface';
import { deleteProduct } from '../../redux/actions/productAction';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import { ProductDetailStyle } from '../../styles/ProductDetail.style';
import Colors from '../../utilites/Colors';
import { toastMessage } from '../../utilites/Utils';

const ProductDetail: React.FC<any> = () => {
  const ProductList: any = useSelector<any>(state => state.product.data);
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();
  const [singleFile, setSingleFile] = useState<any>([]);
  const [isModelOpen, setModelOpen] = useState(false);
  const [productItem, setProductItem] = useState<any>('');
  const [isAttachmentDelete, setAttachmentDelete] = useState(false);
  const [is3DotModle, set3DotModle] = useState(false);
  const [isDeleteProduct, setDeleteProduct] = useState(false);
  const [uploadIndex, setUploadIndex] = useState<Number>(0);

  useEffect(() => {
    if (route.params) {
      const data = ProductList.find((item: any) => {
        return item.id == route.params.productId
      })
      setProductItem(data);
    }
  }, [route.params, ...ProductList]);

  const isPermission = async () => {
    requestMultiple(
      Platform.OS === 'ios'
        ? [
          PERMISSIONS.IOS.CAMERA,
          PERMISSIONS.IOS.PHOTO_LIBRARY,
        ]
        : [
          PERMISSIONS.ANDROID.CAMERA,
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        ],
    ).then(result => {
      let allPermGranted = true;
      console.log('result', result);
      Object.entries(result).map(([key, value]) => {
        if (value !== 'granted') {
          allPermGranted = false;
        }
      });
      if (allPermGranted) {
        setModelOpen(true);
      }
    });
  };

  const handleLaunchCamera = () => {
    let options = {
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      saveToPhotos: true,
    };
    launchCamera(options, response => {
      if (response.assets) {
        console.log('response', response.assets);
        if (response.assets[0].fileSize > 5000000) {
          toastMessage(
            'Upload documents you want to share with servcare. ( Max size 10 mb )',
          );
        } else {
          setSingleFile([...singleFile, ...response.assets]);
        }
      }
    });
    setModelOpen(false);
  };

  const handleLaunchImageLibrary = () => {
    // TODO use in future
    // let options = {
    //   // mediaType: type,
    //   maxWidth: 300,
    //   maxHeight: 550,
    //   quality: 1,
    // };
    // launchImageLibrary(options, response => {
    //   if (response.assets) {
    //     console.log(response.assets);
    //     setSingleFile([...singleFile, ...response.assets]);
    //   }
    // });
    selectFile();
    setModelOpen(false);
  };

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      const result = JSON.stringify(res);
      console.log('result : ' + result);
      if (res[0].size > 5000000) {
        toastMessage(
          'Upload documents you want to share with servcare. ( Max size 10 mb )',
        );
      } else {
        setSingleFile([...singleFile, ...res]);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const handleOnClickItem = () => {
    console.log('hiii');
  };

  const removeUploadDocument = () => {
    const filteredData = singleFile.filter(
      (item: any, index: Number) => index !== uploadIndex,
    );
    setSingleFile(filteredData);
    setAttachmentDelete(false);
  };

  const removeProduct = () => {
    setAttachmentDelete(false);
    dispatch(deleteProduct(productItem.id));
    navigation.navigate('My Product');
  };

  const openDeletePopUp = (index: Number) => {
    setUploadIndex(index);
    setDeleteProduct(false);
    setAttachmentDelete(true);
  };

  return (
    <ScrollView style={[appStyle.container]}>
      <View style={ProductDetailStyle.productDetailHeaderBox}>
        <View style={[appStyle.flex]}>
          <TouchableOpacity
            style={[appStyle.w_10]}
            onPress={() => navigation.navigate('My Product')}>
            <Octicons name="chevron-left" size={24} color={Colors.BLACK} />
          </TouchableOpacity>
          <View style={appStyle.w_80}>
            <Text style={[ProductDetailStyle.headerTitle, appStyle.ml_40]}>
              {productItem && productItem.product}
            </Text>
          </View>
          <View style={[appStyle.w_10, appStyle.alignItemsEnd]}>
            <TouchableOpacity
              onPress={() => {
                set3DotModle(true);
                setDeleteProduct(true);
              }}>
              <Entypo
                name="dots-three-vertical"
                size={20}
                color={Colors.BLACK}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[appStyle.flex, appStyle.alignItemsCenter, appStyle.mt_20]}>
          <View style={appStyle.w_10}>
            <Image
              source={washingMachine}
              style={[ProductDetailStyle.productDetailIcon]}
            />
          </View>
          <View style={[appStyle.w_80, appStyle.ml_15]}>
            <Text style={[MyProductStyle.modelListText]}>{productItem && productItem.brand} - {productItem && productItem.productType}</Text>
            <View
              style={[
                appStyle.flex,
                appStyle.alignItemsCenter,
                appStyle.mt_10,
              ]}>
              <View style={appStyle.w_50}>
                <Text style={[ProductDetailStyle.dateOfPurchase]}>
                  Warranty Status
                </Text>
                <Text style={[ProductDetailStyle.productStatusText]}>
                  {productItem.warrantyStatus}
                </Text>
              </View>
              <View style={appStyle.w_50}>
                <Text style={[ProductDetailStyle.dateOfPurchase]}>
                  Date of Purchase
                </Text>
                <Text style={[ProductDetailStyle.productStatusText]}>
                  {productItem.purchaseDate ? moment(new Date(productItem.purchaseDate)).format('MMM DD, YYYY')
                    : ''}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {isModelOpen && (
        <AlertModel
          isOpen={isModelOpen}
          handleLaunchCamera={handleLaunchCamera}
          handleLaunchImageLibrary={handleLaunchImageLibrary}
          handleClose={() => setModelOpen(false)}
        />
      )}

      <View style={ProductDetailStyle.bottomLine} />
      <View style={ProductDetailStyle.productDetailItemBox}>
        <View>
          <Text style={[ProductDetailStyle.dateOfPurchase]}>
            Product Nickname
          </Text>
          <Text style={[ProductDetailStyle.productStatusText]}>
            {productItem && productItem.productNickname}
          </Text>
        </View>
        <View style={appStyle.mt_20}>
          <Text style={[ProductDetailStyle.dateOfPurchase]}>Serial No</Text>
          <Text style={[ProductDetailStyle.productStatusText]}>
            {productItem.serialNo}
          </Text>
        </View>
        <View style={appStyle.mt_20}>
          <Text style={[ProductDetailStyle.dateOfPurchase]}>Model No</Text>
          <Text style={[ProductDetailStyle.productStatusText]}>
            {productItem.modelNo}
          </Text>
        </View>
      </View>
      <View style={ProductDetailStyle.bottomDivider} />
      <View style={ProductDetailStyle.productDetailItemBox}>
        <Text style={[MyProductStyle.modelListText]}>Additional</Text>
        <TouchableOpacity onPress={isPermission}>
          <View
            style={[appStyle.flex, appStyle.justifyContentEnd, appStyle.mt_10]}>
            <Image source={upload} style={ProductDetailStyle.uploadIcon} />
            <Text
              style={[
                MyProductStyle.addProductText,
                appStyle.ml_10,
                { fontSize: 12 },
              ]}>
              Upload
            </Text>
          </View>
        </TouchableOpacity>

        <FlatList
          data={singleFile}
          renderItem={({ item, index }) => (
            <ProductAttachmentComponent
              data={item}
              index={index}
              handleOnClickItem={handleOnClickItem}
              openDeletePopUp={openDeletePopUp}
            />
          )}
        // keyExtractor={item => item.id}
        />

        {isAttachmentDelete && (
          <BottomAlertModel
            title={`Are you sure you want to permanently remove this ${isDeleteProduct ? 'Product' : 'Document'
              }?`}
            noBtnText={'No'}
            yesBtnText={'Yes, Remove'}
            handleYesBtnClick={
              isDeleteProduct ? removeProduct : removeUploadDocument
            }
            handleNoBtnClick={() => setAttachmentDelete(false)}
            isOpen={isAttachmentDelete}
          />
        )}

        {is3DotModle && (
          <BottomAlertModelList
            actionDeleteProduct={() => {
              setAttachmentDelete(true);
              set3DotModle(false);
            }}
            actionEditProduct={() => {
              navigation.navigate('add-product', { productId: productItem.id });
              set3DotModle(false);
            }}
            onclose={() => set3DotModle(false)}
            isOpen={is3DotModle}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

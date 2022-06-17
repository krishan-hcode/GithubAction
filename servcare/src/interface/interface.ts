export interface AppliancesProps {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface ProductListItemProps {
  handleOnClickItem: any;
  data: any;
  type: string;
}

export interface MyProductProps {
  handleOnClickItem: any;
  data: any;
  isForwardIcon: boolean;
  titleTextCss: any;
  descTextCss: any;

}

export interface ProductModelProps {
  handleCloseModel(): void;
  handleOnClickItem: any;
  inputValue: string,
  data: any;
  type: string;
}

export interface NavigationProps {
  goBack(): void;
  navigate: (value: string) => void;
}

export interface Address {
  addressId: number
  addressType?: string;
  addressLine1?: string;
  addressLine2?: string;
  landmark?: string;
  area?: string;
  city?: string;
  state?: string;
  pincode: number| undefined;
}

export interface userProfileInfo {
  firstName:  string;
  lastName?: string;
  email?: string;
  primaryMobileNumber?: number;
  alternateMobileNumber?: number;
  referralCode?: string;
}

export interface appUserState {
  userInfo: userProfileInfo,
  address: Array<Address>,
  isLogin: boolean,
  loading: boolean
  addressId: number
  userId: String
}

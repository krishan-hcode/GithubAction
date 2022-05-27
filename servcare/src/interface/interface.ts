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

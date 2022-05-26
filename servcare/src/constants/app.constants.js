import {
  buyShopIcon,
  eWasteIcon,
  getTouchIcon,
  installationIcon,
  metrotoolIcon,
  repairRequestIcon,
  cultLiving,
  airConditioner,
  coffeeMachine,
  microwaveOven,
  refrigerator,
  television,
  washingMachine,
  voltas,
  haier,
  daikin,
  blue_star,
} from '../assets/icons/';
export const GOOGLE_API_KEY = 'AIzaSyCDkv2O6cVBz9MNchM7OsurZZ5ad_ZqRA8';

//TODO:will replace to actual Data
export const HOME_APPLIANCES = [
  {
    id: '1',
    title: 'Home Appliances',
    desc: 'Lorem Ipsum Dolor sit Amet, consetetur Sadipscing Elitr,Sed Diam Nonumy Eirmod Tempor',
    icon: cultLiving,
  },
  {
    id: '2',
    title: 'Home Appliances',
    desc: 'Lorem Ipsum Dolor sit Amet, consetetur Sadipscing Elitr,Sed Diam Nonumy Eirmod Tempor',
    icon: cultLiving,
  },
  {
    id: '3',
    title: 'Home Appliances',
    desc: 'Lorem Ipsum Dolor sit Amet, consetetur Sadipscing Elitr,Sed Diam Nonumy Eirmod Tempor',
    icon: cultLiving,
  },
  {
    id: '4',
    title: 'Home Appliances',
    desc: 'Lorem Ipsum Dolor sit Amet, consetetur Sadipscing Elitr,Sed Diam Nonumy Eirmod Tempor',
    icon: cultLiving,
  },
  {
    id: '5',
    title: 'Home Appliances',
    desc: 'Lorem Ipsum Dolor sit Amet, consetetur Sadipscing Elitr,Sed Diam Nonumy Eirmod Tempor',
    icon: cultLiving,
  },
];

//TODO:will replace to actual Data
export const SERVICES = [
  {
    id: '1',
    title: 'Repair Request',
    icon: repairRequestIcon,
  },
  {
    id: '2',
    title: 'Preventive Maintenance',
    icon: metrotoolIcon,
  },
  {
    id: '3',
    title: 'Installation & Uninstallation',
    icon: installationIcon,
  },
  {
    id: '4',
    title: 'E-Waste Pickup',
    icon: eWasteIcon,
  },
  {
    id: '5',
    title: 'Buy/Shop',
    icon: buyShopIcon,
  },
  {
    id: '6',
    title: 'Get in Touch',
    icon: getTouchIcon,
  },
];

//TODO:will replace to actual Data
export const PRODUCT = [
  {
    id: '1',
    title: 'Air Conditioner',
    icon: airConditioner,
  },
  {
    id: '2',
    title: 'Coffee Machine',
    icon: coffeeMachine,
  },
  {
    id: '3',
    title: 'Television',
    icon: television,
  },
  {
    id: '4',
    title: 'Refrigerator',
    icon: refrigerator,
  },
  {
    id: '5',
    title: 'Microwave Oven',
    icon: microwaveOven,
  },
  {
    id: '6',
    title: 'Washing Machine',
    icon: washingMachine,
  },
];

//TODO:will replace to actual Data
export const PRODUCT_LIST = [
  {
    id: '1',
    title: 'Washing Machine',
    des: 'Master washroom',
    icon: washingMachine,
    productNickname: 'Washing Machine',
    product: 'Air Conditioner',
    productType: 'Window',
    brand: 'Window',
    serialNo: '56789149',
    modelNo: 'IFB014786',
    warrantyStatus: 'yes',
  },
  {
    id: '2',
    title: 'Television',
    des: 'Hall TV',
    icon: television,
    productNickname: 'Television',
    product: 'Coffee Machine',
    productType: 'Central',
    brand: 'Daikin',
    serialNo: '56789103',
    modelNo: 'IFB014790',
    warrantyStatus: 'no',
  },
  {
    id: '3',
    title: 'Refrigerator',
    des: '',
    icon: refrigerator,
    productNickname: 'Television',
    product: 'Portable',
    productType: 'Central',
    brand: 'Blue Star',
    serialNo: '56789140',
    modelNo: 'IFB014785',
    warrantyStatus: 'no',
  },
];

//TODO:will replace to actual Data
export const PRODUCT_TYPE = [
  {
    id: '1',
    title: 'Window',
    icon: '',
  },
  {
    id: '2',
    title: 'Central',
    icon: '',
  },
  {
    id: '3',
    title: 'Hybrid / Dual Fuel',
    icon: '',
  },
  {
    id: '4',
    title: 'Portable',
    icon: '',
  },
];

//TODO:will replace to actual Data
export const BRAND = [
  {
    id: '1',
    title: 'Voltas',
    icon: voltas,
  },
  {
    id: '2',
    title: 'Haier',
    icon: haier,
  },
  {
    id: '3',
    title: 'Daikin',
    icon: daikin,
  },
  {
    id: '4',
    title: 'Blue Star',
    icon: blue_star,
  },
];

//TODO:will replace to actual Data
export const ISSUE = [
  {
    id: '1',
    title: 'Continuous Drain water',
    isChecked: false
  },
  {
    id: '2',
    title: 'Door Lock not Working',
    isChecked: false
  },
  {
    id: '3',
    title: 'Dryer Problem',
    isChecked: false
  },
  {
    id: '4',
    title: 'Error Code Displayed',
    isChecked: false
  },
  {
    id: '5',
    title: 'Machine not Tumbling / Washing',
    isChecked: false
  },
  {
    id: '6',
    title: 'Other',
    isChecked: false
  },
];

export const INSTRUCTION = [
  {
    id: '1',
    name: 'Price includes visiting and diagnosis.',
  },
  {
    id: '2',
    name: 'Service charges are excluding spare parts charges.',
  },
  {
    id: '3',
    name: 'Warranty on consumable and parts will be as per manufacture only.',
  },
  {
    id: '4',
    name: 'Service charges are excluding spare parts charges.',
  }
]

export const INDICATOR_LABELS = ['Product', 'Details', 'Summary'];

export const AREA = [
  { label: 'Karnal', value: 'Karnal', state: 'Haryana', city: 'Karnal' },
  { label: 'Madhuban', value: 'Madhuban', state: 'Haryana', city: 'Karnal' },
  { label: 'Panipat', value: 'Panipat', state: 'Haryana', city: 'Panipat' },
  { label: 'Sonipat', value: 'Sonipat', state: 'Haryana', city: 'Sonipat' },
];

export const TIME_SLOT = [
  { id: '1', time: '09:00 AM to 12:00 PM' },
  { id: '2', time: '12:00 PM to 03:00 PM' },
  { id: '3', time: '03:00 AM to 06:00 PM' },
  { id: '4', time: '09:00 PM to 12:00 PM' },
  { id: '5', time: '12:00 PM to 03:00 PM' },

];
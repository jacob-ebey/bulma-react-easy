export interface NavBarItem {
  key: string | number;
  label: string;
  link: string;
}

export interface NavBarProps {
  label?: string;
  image?: string;
  labelLink?: string;
  items?: Array<NavBarItem>;
  farItems?: Array<NavBarItem>;
  activeItems?: Array<string>;
  style?: object;
}

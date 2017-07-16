import { BaseProps } from '../PropTypes';
import { Title } from './Title';

export type TitleType = 'title' | 'subtitle';
export type TitleSize = '1' | '2' | '3' | '4' | '5' | '6';

export type TitleComponentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface TitleProps extends BaseProps<Title> {
  type?: TitleType;
  size?: TitleSize;
  spaced?: boolean;
  component?: TitleComponentType;
}

export const titleIsProps: string[] = [
  'size',
  'spaced',
];

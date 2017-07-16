import { BaseProps } from '../PropTypes';
import { Hero } from './Hero';

export type HeroSize = 'medium' | 'large' | 'fullheight';

export type HeroColor = 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'dark';

export interface HeroProps extends BaseProps<Hero> {
  size?: HeroSize;
  color?: HeroColor;
  renderFooter?: () => any;
}

export const heroIsProps = [
  'size',
  'color',
];

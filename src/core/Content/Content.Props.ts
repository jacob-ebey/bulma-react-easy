import { BaseProps } from '../PropTypes';
import { Content } from './Content';

export type ContentSize = 'small' | 'medium' | 'large';

export interface ContentProps extends BaseProps<Content> {
  size?: ContentSize;
}

export const contentIsProps = [
  'size',
];

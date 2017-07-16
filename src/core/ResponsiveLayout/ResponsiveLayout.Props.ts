import { BaseProps } from '../PropTypes';
import { Column } from './Column';
import { ResponsiveLayout } from './ResponsiveLayout';

export interface ResponsiveLayoutProps extends BaseProps<ResponsiveLayout> {
}

export type ColumnSize =
  'three-quarters' | 'two-thirds' | 'half' | 'one-third' | 'one-quarter' |
  'three-quarters-mobile' | 'two-thirds-mobile' | 'half-mobile' | 'one-third-mobile' | 'one-quarter-mobile' |
  'three-quarters-tablet' | 'two-thirds-tablet' | 'half-tablet' | 'one-third-tablet' | 'one-quarter-tablet' |
  'three-quarters-desktop' | 'two-thirds-desktop' | 'half-desktop' | 'one-third-desktop' | 'one-quarter-desktop' |
  '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11';

export type ColumnResponsiveness = 'mobile' | 'desktop';

export type NarrowOption = 'narrow' | 'narrow-mobile' | 'narrow-tablet' | 'narrow-desktop';

export interface ColumnProps extends BaseProps<Column> {
  size?: ColumnSize | ColumnSize[];
  offset?: ColumnSize | ColumnSize[];
  responsiveness?: ColumnResponsiveness | ColumnResponsiveness[];
  narrow?: NarrowOption;
  multiline?: boolean;
  gapless?: boolean;
}

export const columnIsProps: string[] = [
  'size',
  'offset',
  'responsiveness',
  'narrow',
  'multiline',
  'gapless',
];

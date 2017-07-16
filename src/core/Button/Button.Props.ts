import * as React from 'react';
import { BaseProps, FontAwesomeIcon } from '../PropTypes';
import { Button } from './Button';

export type ButtonColor =
  'white' |
  'light' |
  'dark' |
  'black' |
  'link' |
  'primary' |
  'info' |
  'success' |
  'warning' |
  'danger';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonModifier = 'outlined' | 'inverted';

export interface ButtonProps extends BaseProps<Button> {
  color?: ButtonColor;
  size?: ButtonSize;
  modifier?: ButtonModifier | ButtonModifier[];
  hovered?: boolean;
  focused?: boolean;
  active?: boolean;
  loading?: boolean;
  isStatic?: boolean;
  disabled?: boolean;
  icon?: FontAwesomeIcon | FontAwesomeIcon[];
  iconSize?: ButtonSize;
  onClick?: React.EventHandler<React.MouseEvent<any>>;
}

export const buttonIsProps: string[] = [
  'color',
  'size',
  'modifier',
  'hovered',
  'focused',
  'active',
  'loading',
  'disabled',
];

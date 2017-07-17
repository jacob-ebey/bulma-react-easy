import * as React from 'react';
import { BaseProps } from '../PropTypes';
import { FontAwesomeIcon, IconSize } from '../FontAwesomeIcon';
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
  iconSize?: IconSize;
  onClick?: React.EventHandler<React.MouseEvent<any>>;
  href?: string;
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

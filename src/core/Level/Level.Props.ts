import { BaseProps } from '../PropTypes';

import { Level } from './Level';
import { LevelItem } from './LevelItem';

export interface LevelProps extends BaseProps<Level> {
  items?: Array<any>;
  renderItem(item: any, index: number): any;
}

export interface LevelItemProps extends BaseProps<LevelItem> { }

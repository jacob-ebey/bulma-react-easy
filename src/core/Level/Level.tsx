import * as React from 'react';

import { getClassName } from '../PropTypes';
import { LevelProps } from './Level.Props';

export class Level extends React.Component<LevelProps, {}> {
  render() {
    const { children, style, items, renderItem } = this.props;

    return (
      <nav style={style} className={getClassName(['level'], this.props)}>
        {
          items && items.map((item, index) => renderItem(item, index))
        }
        {children}
      </nav>
    );
  }
}
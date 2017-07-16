import * as React from 'react';

import { getClassName } from '../PropTypes';
import { LevelItemProps } from './Level.Props';

export class LevelItem extends React.Component<LevelItemProps, {}> {
  render() {
    const { children, style } = this.props;
    
    return (
      <div style={style} className={getClassName(['level-item'], this.props)}>
        {children}
      </div>
    );
  }
}

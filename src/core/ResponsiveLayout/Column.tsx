import * as React from 'react';

import { getClassName } from '../PropTypes';
import { ColumnProps, columnIsProps } from './ResponsiveLayout.Props';

export class Column extends React.Component<ColumnProps> {
  public render() {
    const { children, style } = this.props;

    return (
      <div style={style} className={getClassName(['column'], this.props, columnIsProps)}>
        {children}
      </div>
    );
  }
}

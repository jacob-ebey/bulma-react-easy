import * as React from 'react';

import { getClassName } from '../PropTypes';
import { BoxProps } from './Box.Props';

export class Box extends React.Component<BoxProps, {}> {
  public render() {
    const { children, style } = this.props;

    return (
      <div style={style} className={getClassName(['box'], this.props)}>
        {children}
      </div>
    );
  }
}
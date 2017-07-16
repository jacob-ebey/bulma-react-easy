import * as React from 'react';

import { getClassName } from '../PropTypes';
import { ResponsiveLayoutProps } from './ResponsiveLayout.Props';

export class ResponsiveLayout extends React.Component<ResponsiveLayoutProps> {
  public render() {
    const { children, style } = this.props;

    return (
      <div style={style} className={getClassName(['columns'], this.props)}>
        {children}
      </div>
    );
  }
}

import * as React from 'react';

import { getClassName } from '../PropTypes';
import { ContainerProps, containerisProps } from './Container.Props';

export class Container extends React.Component<ContainerProps, {}> {
  render() {
    const { children, style } = this.props;

    return (
      <div style={style} className={getClassName(['container'], this.props, containerisProps)}>
        {children}
      </div>
    );
  }
}

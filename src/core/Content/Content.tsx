import * as React from 'react';

import { getClassName } from '../PropTypes';
import { ContentProps, contentIsProps } from './Content.Props';

export class Content extends React.Component<ContentProps, {}> {
  render() {
    const { children, style } = this.props;

    return (
      <div style={style} className={getClassName(['content'], this.props, contentIsProps)}>
        {children}
      </div>
    );
  }
}
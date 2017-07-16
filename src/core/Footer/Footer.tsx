import * as React from 'react';

import { getClassName } from '../PropTypes';
import { FooterProps } from './Footer.Props';

export class Footer extends React.Component<FooterProps, {}> {
  render() {
    const { children, style } = this.props;

    return (
      <footer style={style} className={getClassName(['footer'], this.props)}>
        {children}
      </footer>
    );
  }
}
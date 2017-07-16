import * as React from 'react';

import { getClassName } from '../PropTypes';
import { TitleProps, titleIsProps } from './Title.Props';

export class Title extends React.Component<TitleProps> {
  public static defaultProps: Partial<TitleProps> = {
    type: 'title',
  };

  public render() {
    const { children, style, component, type } = this.props;

    const headerProps = {
      className: getClassName([type as string], this.props, titleIsProps),
      style,
    };

    return React.createElement(component || 'h1', headerProps, children);
  }
}

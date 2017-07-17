import * as React from 'react';

import { FontAwesomeIcon, getClassName } from '../PropTypes';
import { ButtonProps, buttonIsProps } from './Button.Props';

export class Button extends React.Component<ButtonProps, {}> {
  public static defaultProps: Partial<ButtonProps> = {
    iconSize: 'small',
  };

  public render() {
    const { children, style, onClick, isStatic, icon, href } = this.props;

    return (
      <a
        style={style}
        href={href}
        onClick={onClick}
        className={getClassName(['button', isStatic ? 'is-static' : ''], this.props, buttonIsProps)}
      >
        {this.renderIcons(icon)}
        {
          icon && children ? (
            <span>
              {children}
            </span>
          ) : children
        }
      </a>
    );
  }

  private renderIcons = (icon?: FontAwesomeIcon | FontAwesomeIcon[]) => {
    const { iconSize } = this.props;

    if (icon === undefined) {
      return undefined;
    }

    return Array.isArray(icon) ?
      icon.map((i, index) => (
        <span key={index} className={`icon is-${iconSize}`}>
          <i className={`fa ${i}`} />
        </span>
      )) :
      (
        <span className={`icon is-${iconSize}`}>
          <i className={`fa ${icon}`} />
        </span>
      );
  }
}
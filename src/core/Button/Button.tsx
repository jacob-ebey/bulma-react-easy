import * as React from 'react';

import { getClassName } from '../PropTypes';
import { FontAwesomeIcon, Icon } from '../FontAwesomeIcon';
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
        <Icon key={index} icon={i} size={iconSize} />
      )) :
      (
        <Icon icon={icon} size={iconSize} />
      );
  }
}
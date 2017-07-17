import * as React from 'react';

import { NavBarProps } from './NavBar.Props';

export class NavBar extends React.Component<NavBarProps, {}> {
  public static defaultProps: Partial<NavBarProps> = {
    labelLink: '/#',
  };

  render() {
    const { label, image, labelLink, items, farItems, activeItems } = this.props;

    const navbarItems = items && items.map((item) => {
      let navbarItemClass = 'navbar-item';
      if (activeItems !== undefined && activeItems.find((active) => active === item.link)) {
        navbarItemClass = `${navbarItemClass} is-active`;
      }

      return (
        <a
          key={item.link}
          href={item.link}
          className={navbarItemClass}
        >
          {item.label}
        </a>
      );
    });

    const navbarFarItems = farItems && farItems.map((item) => (
      <a className="navbar-item" key={item.link} href={item.link}>
        {item.label}
      </a>
    ));

    return (
      <nav className="navbar">
        {
          (label || image) && (
            <div className="navbar-brand">
              <a className="navbar-item" href={labelLink}>
                {
                  image && (
                    <img alt={label} src={image} style={{ marginRight: label ? 16 : null }} />
                  )
                }
                {label}
              </a>
            </div>
          )
        }
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            {navbarItems}
          </div>
          <div className="navbar-end">
            {navbarFarItems}
          </div>
        </div>
      </nav>
    );
  }
}
import * as React from 'react';

import { getClassName } from '../PropTypes';
import { HeroProps, heroIsProps } from './Hero.Props';

export class Hero extends React.Component<HeroProps, {}> {
  render() {
    const { renderFooter, children, style } = this.props;

    return (
      <section style={style} className={getClassName(['hero'], this.props, heroIsProps)}>
        <div className="hero-body">
          {children}
        </div>

        {
          renderFooter ? (
            <div className="hero-foot">
              {renderFooter()}
            </div>
          ) : undefined
        }
      </section>
    );
  }
}

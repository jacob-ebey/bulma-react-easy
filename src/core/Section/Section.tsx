import * as React from 'react';

import { getClassName } from '../PropTypes';
import { SectionProps, sectionIsProps } from './Section.Props';

export class Section extends React.Component<SectionProps, {}> {
  render() {
    const { children, style } = this.props;

    return (
      <section style={style} className={getClassName(['section'], this.props, sectionIsProps)}>
        <div className="container">
          {children}
        </div>
      </section>
    );
  }
}

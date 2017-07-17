
import * as React from 'react';

import { ColumnsExample, Header } from '../containers';

export interface LandingPageState {
  columnCount: number;
}

export class LandingPage extends React.Component<any, LandingPageState> {
  public constructor() {
    super();
    this.state = {
      columnCount: 5,
    };
  }

  public render() {
    const { columnCount } = this.state;

    return (
      <div>
        <Header />

        <ColumnsExample columnCount={columnCount} increment={this.incrementColumns} decrement={this.decrementColumns} />
      </div>
    );
  }

  private incrementColumns = () => {
    const { columnCount } = this.state;
    if (columnCount === 12) {
      return;
    }

    this.setState({ columnCount: columnCount + 1 });
  }

  private decrementColumns = () => {
    const { columnCount } = this.state;
    if (columnCount === 1) {
      return;
    }

    this.setState({ columnCount: columnCount - 1 });
  }
}

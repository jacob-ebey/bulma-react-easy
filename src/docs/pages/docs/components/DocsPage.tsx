
import * as React from 'react';

import { Delete } from '../../../../core';

import { Header } from '../containers';

export class DocsPage extends React.Component<any, any> {
  public constructor() {
    super();
    this.state = {
      columnCount: 5,
    };
  }

  public render() {

    return (
      <div>
        <Header />
        <Delete
          size="large"
          onClick={
            ( )=> { }
          }
        >
        
        </Delete>



       
      </div>
    );
  }
}

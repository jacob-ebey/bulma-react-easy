
import * as React from 'react';

import { Delete, Image } from '../../../../core';
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
        <Image 
          src="http://via.placeholder.com/350x150"
          size="128x128"
        />



       
      </div>
    );
  }
}

import * as React from 'react';

import { Shell, routes } from './docs';

class App extends React.Component {
  public render() {
    return <Shell routes={routes} />;
  }
}

export default App;

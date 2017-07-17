import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { Shell, routes } from './docs';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Shell routes={routes} />;
        </div>
      </Router>
    );
  }
}

export default App;

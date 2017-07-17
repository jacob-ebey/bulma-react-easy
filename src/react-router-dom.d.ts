declare module 'react-router-dom' {
  import * as React from 'react';
  import * as History from 'history';

  export interface HashRouterProps {
    history?: any;
  }
  export class HashRouter extends React.Component<HashRouterProps> { }

  export interface RouteProps {
    path?: string;
    component?: React.StatelessComponent | React.ComponentClass;
    exact?: boolean;
  }
  export class Route extends React.Component<RouteProps> { }

  export interface RouterChildContext {
    router?: {
      history: History.History
      route: {
        location: History.Location
        match: any;
      }
    };
  }
}
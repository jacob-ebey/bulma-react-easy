declare module 'react-router-dom' {
  import * as React from 'react';

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
}
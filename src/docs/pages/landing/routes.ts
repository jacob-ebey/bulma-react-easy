
import { RouteProps } from 'react-router-dom';

import { LandingPage } from './components';

const landingRoute: RouteProps = {
  path: '/',
  component: LandingPage,
  exact: true,
};

export const routes = [
  landingRoute,
];

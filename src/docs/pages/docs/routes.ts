
import { RouteProps } from 'react-router-dom';

import { DocsPage } from './components';

const landingRoute: RouteProps = {
  path: '/docs',
  component: DocsPage,
};

export const routes = [
  landingRoute,
];

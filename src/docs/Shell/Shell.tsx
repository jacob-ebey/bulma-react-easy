import * as React from 'react';

import { HashRouter as Router, Route, RouteProps } from 'react-router-dom';

import { Container, Content, Footer, NavBar } from '../../core';
import { ShellProps } from './Shell.Props';

export class Shell extends React.Component<ShellProps> {
  public render() {
    const { routes } = this.props;

    return (
      <div>
        <Container>
          <NavBar
            image="http://bulma.io/images/bulma-logo.png"
            activeItems={['home']}
            items={[
              { key: 'home', label: 'Home', link: '/#' },
              { key: 'docs', label: 'Docs', link: '/#/docs' },
            ]}
            farItems={[
              { key: 'github', label: 'GitHub', link: '/#' },
              { key: 'twitter', label: 'Twitter', link: '/#' },
            ]}
          />
        </Container>

        <Router>
          <div>
            {routes && routes.map((route: RouteProps) => <Route key={route.path} {...route} />)}
          </div>
        </Router>

        <Footer helper="has-text-centered">
          <Container>
            <Content>
              <p>
                <strong>Bluma React</strong> by <a href="https://github.com/jacob-ebey">Jacob Ebey</a>.
              </p>
              <p>
                <a className="icon" href="https://github.com/jacob-ebey">
                  <i className="fa fa-github" />
                </a>
              </p>
            </Content>
          </Container>
        </Footer>
      </div>
    );
  }
}

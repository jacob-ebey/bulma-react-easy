import * as React from 'react';

import { Route, RouteProps } from 'react-router-dom';

import { Container, Content, Footer, NavBar } from '../../core';
import { ShellProps } from './Shell.Props';

export class Shell extends React.Component<ShellProps> {
  public render() {
    const { routes } = this.props;
    const split = window.location.href.split('/');
    const index = split.indexOf('#');

    let activeItem: string = index !== -1 && index + 1 < split.length ?
      `#/${split.slice(index + 1).join('/')}` :
      `#/`;

    return (
      <div>
        <Container>
          <NavBar
            image="http://bulma.io/images/bulma-logo.png"
            activeItems={[activeItem]}
            items={[
              { label: 'Home', link: '#/' },
              { label: 'Docs', link: '#/docs' },
            ]}
            farItems={[
              { label: 'GitHub', link: 'https://github.com/jacob-ebey/bulma-react-easy' },
              { label: 'Twitter', link: 'https://twitter.com/' },
            ]}
          />
        </Container>

        {routes && routes.map((route: RouteProps) => <Route key={route.path} {...route} />)}

        <Footer helper="has-text-centered">
          <Container>
            <Content>
              <p>
                <strong>Best Bluma React</strong> by
                <a href="https://github.com/jacob-ebey/bulma-react-easy"> Jacob Ebey</a>.
              </p>
              <p>
                <a className="icon" href="https://github.com/jacob-ebey/bulma-react-easy">
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

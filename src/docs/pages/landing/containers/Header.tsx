import * as React from 'react';

import { Button, Column, Container, Hero, ResponsiveLayout, Title } from '../../../../core';

export class Header extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Container>
          <Hero size="fullheight">
            <Container className="has-text-centered">
              <svg width={240} height={240} viewBox="0 0 480 480" version="1.1">
                <g stroke="none" strokeWidth="1" fill="#00d1b2" fillRule="evenodd">
                  <polygon id="Path" points="136 296 156 156 236 76 336 176 276 236 356 316 236 396" />
                </g>
              </svg>

              <Title>Bulma React</Title>
              <Title type="subtitle">
                A <strong>typed</strong> React wrapper for <a href="http://bulma.io/"><strong>Bulma</strong></a>
              </Title>

              <pre style={{ display: 'inline-block', color: '#00d1b2' }}>
                <code style={{ fontWeight: 'bold' }}>npm install bulma-react</code>
              </pre>
              <br />
              <Button icon="fa-github" size="small" style={{ marginRight: 5 }}>Star</Button>
              <Button icon="fa-github" size="small">Fork</Button>

              <br /><br />

              <Button icon="fa-download" size="large" color="primary" style={{ marginRight: 10 }}>Download</Button>
              <Button size="large">View Docs</Button>
            </Container>
          </Hero>
        </Container>

        <Hero color="primary">
          <Container>
            <ResponsiveLayout>
              <Column helper="has-text-centered">
                <span className="icon is-large" style={{ marginRight: -15 }}>
                  <i className="fa fa-mobile" />
                </span>
                <span className="icon is-large">
                  <i className="fa fa-tablet" />
                </span>
                <span className="icon is-large" style={{ marginRight: 10 }}>
                  <i className="fa fa-desktop" />
                </span>
                <Title component="p" size="4"><strong>Responsive</strong></Title>
                <Title type="subtitle">Designed for <strong>mobile</strong>-first</Title>
              </Column>
              <Column helper="has-text-centered">
                <span className="icon is-large">
                  <i className="fa fa-cubes" />
                </span>
                <Title component="p" size="4"><strong>Modular</strong></Title>
                <Title type="subtitle">Just import what you <strong>need</strong></Title>
              </Column>
              <Column helper="has-text-centered">
                <span className="icon is-large">
                  <i className="fa fa-css3" />
                </span>
                <Title component="p" size="4"><strong>Modern</strong></Title>
                <Title type="subtitle">Built with <strong>Flexbox</strong></Title>
              </Column>
              <Column helper="has-text-centered">
                <span className="icon is-large">
                  <i className="fa fa-github" />
                </span>
                <Title component="p" size="4"><strong>Free</strong></Title>
                <Title type="subtitle">Open source on <strong>GitHub</strong></Title>
              </Column>
            </ResponsiveLayout>
          </Container>
        </Hero>
      </div>
    );
  }
}
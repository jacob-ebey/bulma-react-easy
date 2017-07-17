import * as React from 'react';

import { Box, Column, Container, Content, Hero, ResponsiveLayout, Title } from '../../../../core';

export class Header extends React.Component<{}> {
  public render() {
    return (
      <div>
        <Hero color="primary">
          <Container>
            <ResponsiveLayout className="is-vcentered">
              <Column>
                <Title component="p">Documentation</Title>
                <Title component="p" type="subtitle">
                  Everything you need to <strong>create a website</strong> with Bulma React
                  </Title>
              </Column>
              <Column narrow="narrow" size="one-quarter-desktop">
                <Box>
                  <Content size="small">
                    <h2>Advertisements go here</h2>
                    <p>Some adds will end up going here and be somewhat out of the way</p>
                    <p>footer</p>
                  </Content>
                </Box>
              </Column>
            </ResponsiveLayout>
          </Container>
        </Hero>
      </div>
    );
  }
}
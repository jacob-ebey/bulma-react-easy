import * as React from 'react';

import { Button, Column, Container, Content, Section, ResponsiveLayout, Title, Icon } from '../../../../core';

export interface ColumnsExampleProps {
  columnCount: number;
  increment: () => void;
  decrement: () => void;
}

export class ColumnsExample extends React.Component<ColumnsExampleProps> {
  static colors: string[] = [
    'primary',
    'info',
    'success',
    'warning',
    'danger',
  ];

  public render() {
    const { columnCount, increment, decrement } = this.props;

    const columns = Array.from({ length: columnCount }, (value, key) => (
      <Column key={key}>
        <div className={`notification is-${ColumnsExample.colors[key % 5]} has-text-centered`}>{key + 1}</div>
      </Column>
    ));

    const textColumns = Array.from({ length: columnCount }, (value, key) => (
      `  <Column>${key + 1}</Column>`
    ));

    const columnsExample = `<ResponsiveLayout>\n${textColumns.join('\n')}\n</ResponsiveLayout>`;

    return (
      <Container>
        <Content size="medium">
          <Section>
            <Title component="h3" size="2">
              <Icon icon="fa-pause" size="large" />
              <span> Simple <strong>columns</strong></span>
            </Title>
            <Title component="h4" type="subtitle" size="4">
              Just add columns, they will resize themselves
              </Title>

            <ResponsiveLayout>
              {columns}
            </ResponsiveLayout>

            <Container helper="has-text-centered">
              <Button
                icon="fa-plus"
                size="medium"
                iconSize="medium"
                onClick={increment}
              >
                Add Column
              </Button>
              <Button
                icon="fa-remove"
                size="medium"
                iconSize="medium"
                onClick={decrement}
              >
                Remove Column
              </Button>
            </Container>
            {
              columnCount === 12 && [
                <br />,
                <div className="message is-info">
                  <p className="message-header">Info</p>
                  <p className="message-body">
                    While it's possible to add as many columns as you want, it is recommended to stick with
                     <strong> 12 columns</strong>.<br />
                    If you want smaller divisions, you can always <strong>nest</strong> columns.
                    </p>
                </div>
              ]
            }
            <br />
            <pre className="is-clearfix"><code>{columnsExample}</code></pre>
          </Section>
        </Content>
      </Container>
    );
  }
}
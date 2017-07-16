import * as React from 'react';

import { TableProps } from './Table.Props';

interface TableState {
  selected: number;
}

const defaultState = {
  selected: -1,
};

export class Table extends React.Component<TableProps, TableState> {
  public static defaultProps: Partial<TableProps> = {
    selectable: true,
  };

  constructor() {
    super();

    this.state = { ...defaultState };
  }

  onSelected = (index: number) => () => {
    const { items, itemSelected } = this.props;

    if (itemSelected) {
      itemSelected(items[index]);
    }

    this.setState({ selected: index });
  }

  render() {
    const { columns, items, selectable } = this.props;
    const { selected } = this.state;

    return (
      <table className="table is-striped">
        <thead>
          <tr>
            {
              columns && columns.map((col) => (
                <th key={col.key}>
                  {col.label}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            items && items.map((item, index) => (
              <tr key={index} className={index === selected && selectable ? 'is-selected' : undefined}>
                {
                  columns && columns.map((col) => (
                    <th key={col.key} onClick={this.onSelected(index)}>
                      {
                        col.formatValue ? col.formatValue(item[col.key]) : item[col.key]
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}
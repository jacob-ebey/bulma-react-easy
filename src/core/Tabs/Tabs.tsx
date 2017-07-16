import * as React from 'react';

export interface Tab {
  label: string;
  component?: React.StatelessComponent | React.ComponentClass;
}

export interface TabsProps {
  tabs: Array<Tab>;
  tabChanged?(index: number): void;
}

interface TabsState {
  selected: number;
}

export class Tabs extends React.Component<TabsProps, TabsState> {
  constructor() {
    super();

    this.state = {
      selected: 0,
    };
  }

  onSelected = (index: number) => () => {
    const { tabChanged } = this.props;

    if (tabChanged) {
      tabChanged(index);
    }

    this.setState({ selected: index });
  }

  render() {
    const { tabs } = this.props;
    const { selected } = this.state;

    const SelectedComponent = tabs[selected].component;

    return (
      <div>
        <div className="tabs is-boxed">
          <ul>
            {
              tabs && tabs.map((item, index) => (
                <li key={index} className={index === selected ? 'is-active' : undefined}>
                  <a onClick={this.onSelected(index)}>
                    {item.label}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        {
          SelectedComponent && <SelectedComponent />
        }
      </div>
    );
  }
}
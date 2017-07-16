export interface Column {
  label: string;
  key: string;
  formatValue?(item: any): JSX.Element;
}

export interface TableProps {
  columns: Array<Column>;
  items: Array<any>;
  selectable?: boolean;
  itemSelected?(item: any): void;
}

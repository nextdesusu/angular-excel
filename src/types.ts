export interface fieldDescription {
  name: string;
  type: "text" | "select" | "bool" | "number";
  values?: Array<string | number>;
}

export interface VTableSettings {
  cellWidth: number;
  cellHeight: number;
  showRows: number;
}

export interface VTableProps {
  columns: number;
  rows: number;
  fields: Array<fieldDescription>;
  data: Array<string>;
}

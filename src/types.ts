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

export interface VHeaderProps {
  id: number;
  type: string;
  values: Array<string | number>
}

export interface VHeaderEvent {
  id: number;
  query: string | number;
  isActive: boolean;
}

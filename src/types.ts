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

export interface VheaderFieldDescription extends fieldDescription {
  id: number;
}

export interface VHeaderProps {
  cellHeight: number;
  cellWidth: number;
  items: Array<VheaderFieldDescription>;
}

export interface idQuery {
  id: number;
  query: string | number | Array<string | number>;
}

export interface VHeaderEvent {
  sortByColumns: Array<idQuery>;
  sortBy: {
    ascending: boolean;
    id: number;
  };
  exclude: Array<number>;
}

export interface inputEvent extends idQuery {
  isActive: boolean;
}

export interface selectProps {
  id: number;
  type: "select" | "bool" | "multiple";
  options: Array<string>;
}

export type sortByType = {
  id: number;
  ascending: boolean;
} | null;

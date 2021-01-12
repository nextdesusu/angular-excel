import { Target } from '@angular/compiler';
import { Component, Input, HostListener, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { Scroll } from '@angular/router';
import { VTableProps, VTableSettings } from "../../types";

const DEFAULT_SHOW_ROWS = 7;
const DEFAULT_CELL_WIDTH = 40;
const DEFAULT_CELL_HEIGHT = 40;

//For some reason angular doesn want to work with generator function in its templates
//so i have to use class method to generate ranges!
class Range {
  constructor(
    public readonly from: number,
    public readonly to: number,
    public readonly step: number = 1
  ) { }

  *[Symbol.iterator]() {
    for (let current: number = this.from; current < this.to; current += this.step) yield current;
  }
}

@Component({
  selector: 'app-v-table',
  templateUrl: './v-table.component.html',
  styleUrls: ['./v-table.component.css']
})
export class VTableComponent implements OnChanges {
  private propsLoaded: boolean = false;
  @Input() props: VTableProps;
  @Input() settings: VTableSettings = {
    cellWidth: DEFAULT_CELL_WIDTH,
    cellHeight: DEFAULT_CELL_HEIGHT,
    showRows: DEFAULT_SHOW_ROWS
  };
  private rX: Range;
  private rY: Range;

  @HostBinding('style.width') hostWidth;
  @HostBinding('style.height') hostHeight;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const {
      props
    } = changes;
    if (props === undefined || props.currentValue === undefined || this.isPropsLoaded) return;
    this.propsLoaded = true;
    const {
      cellWidth,
      cellHeight,
      showRows
    } = this.settings;
    console.log("props", props.currentValue);
    this.generateRanges(0, 0);
    if (this.hostHeight) return;
    this.hostHeight = `${cellHeight * showRows}px`;
    this.hostWidth = `${cellWidth * this.propsOrThrow.columns}px`;
  }

  public get isPropsLoaded(): boolean {
    return this.propsLoaded;
  }

  public getDataItem(x: number, y: number): string {
    const { data, columns } = this.propsOrThrow;
    return data[y * columns + x];
  }

  public get totalHeight(): number {
    return this.rows * this.cellHeight;
  }

  public get totalWidth(): number {
    return this.columns * this.cellWidth;
  }

  public get rangeX(): Range {
    return this.rX;
  }

  public get rangeY(): Range {
    return this.rY;
  }

  @HostListener('scroll', ['$event']) private onScroll($event: Event): void {
    const scrollBar = $event.target as HTMLTableElement;
    this.generateRanges(scrollBar.scrollLeft, scrollBar.scrollTop);
  };

  private generateRanges(left: number, top: number): void {
    const { cellWidth, cellHeight, showRows } = this.settings
    const { columns } = this.propsOrThrow;
    const rX = Math.floor(left / cellWidth);
    const rY = Math.floor(top / cellHeight);
    const x = rX > 2 ? rX - 2 : 0;
    const y = rY > 2 ? rY - 2 : 0;
    const toRenderX = x + columns + 4;
    const toRenderY = y + showRows + 4;
    const maxX = toRenderX < this.columns ? toRenderX : this.columns;
    const maxY = toRenderY < this.rows ? toRenderY : this.rows;
    this.rX = new Range(x, maxX);
    this.rY = new Range(y, maxY);
  }

  private get propsOrThrow(): VTableProps {
    if (!this.isPropsLoaded) throw `Props still didnt loaded!`;
    return this.props;
  }

  private get columns(): number {
    return this.propsOrThrow.columns;
  }

  private get rows(): number {
    return this.propsOrThrow.rows;
  }

  private get cellHeight(): number {
    return this.settings.cellHeight;
  }

  private get cellWidth(): number {
    return this.settings.cellWidth;
  }
}

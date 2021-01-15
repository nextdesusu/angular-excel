import { Component, Input, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { VHeaderProps, inputEvent, VheaderFieldDescription } from "../../types";

@Component({
  selector: 'app-v-header',
  templateUrl: './v-header.component.html',
  styleUrls: ['./v-header.component.css']
})
export class VHeaderComponent implements OnChanges {
  @Input() props: VHeaderProps;
  @HostBinding('style.height') hostHeight;
  @HostBinding('style.width') hostWidth;
  private propsLoaded: boolean = false;
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
      items
    } = props.currentValue;
    this.hostHeight = `${cellHeight}px`;
    this.hostWidth = `${cellWidth * items.length}px`;
  }

  public onChange(event: inputEvent): void {
    console.log("v-header ch:", event);
    const {
      id,
      query,
      isActive
    } = event;
    if (isActive) {

    }
  }

  public get isPropsLoaded(): boolean {
    return this.propsLoaded;
  }

  public vHeaderTracker(index: number, item: VheaderFieldDescription): number {
    console.log("it", item.type);
    return index;
  }
}

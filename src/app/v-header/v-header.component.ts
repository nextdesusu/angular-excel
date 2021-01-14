import { Component, Input, Output, EventEmitter, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { VHeaderProps, inputEvent } from "../../types";

@Component({
  selector: 'app-v-header',
  templateUrl: './v-header.component.html',
  styleUrls: ['./v-header.component.css']
})
export class VHeaderComponent implements OnChanges {
  @Input() props: VHeaderProps;
 // @Output() onChanged = new EventEmitter<VHeaderEvent>();
  @HostBinding('style.height') hostHeight;
  @HostBinding('style.width') hostWidth;
  private propsLoaded: boolean = false;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    const {
      props
    } = changes;
    if (props === undefined || props.currentValue === undefined || this.isPropsLoaded) return;
    console.log("p", props);
    this.propsLoaded = true;
    const {
      cellWidth,
      cellHeight,
      items
    } = props.currentValue;
    this.hostHeight = `${cellHeight}px`;
    this.hostWidth = `${cellWidth * items.length}px`;
  }

  onChange(event: inputEvent) {
    console.log("v-header ch:", event);
    /*
    const target = event.target as HTMLInputElement;
    const idR = target.getAttribute("1!!");
    const isActiveR = target.getAttribute("2!!");
    if (idR === null || isActiveR === null) throw `Unexpected custom attribute is null!`;
    this.onChanged.emit({
      id: Number(idR),
      query: target.value,
      isActive: Boolean(isActiveR)
    });*/
  }

  public get isPropsLoaded(): boolean {
    return this.propsLoaded;
  }
}

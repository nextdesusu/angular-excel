import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { VHeaderProps, VheaderFieldDescription, VHeaderEvent, idQuery, inputEvent } from "../../types";

@Component({
  selector: 'app-v-header',
  templateUrl: './v-header.component.html',
  styleUrls: ['./v-header.component.css']
})
export class VHeaderComponent implements OnChanges {
  @Input() props: VHeaderProps;
  @Output() onQuery: EventEmitter<VHeaderEvent> = new EventEmitter<VHeaderEvent>();
  @HostBinding('style.height') hostHeight;
  @HostBinding('style.width') hostWidth;
  private queries: Array<idQuery> = [];
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
    const {
      id,
      query,
      isActive
    } = event;
    this.queries = this.queries.filter((query: idQuery) => query.id !== id);
    if (isActive) {
      this.queries.push({ id, query });
    }
    this.onQuery.emit({ sortByColumns: this.queries });
  }

  public get isPropsLoaded(): boolean {
    return this.propsLoaded;
  }

  public vHeaderTracker(index: number, item: VheaderFieldDescription): number {
    return index;
  }
}

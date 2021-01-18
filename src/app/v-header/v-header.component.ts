import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  VHeaderProps,
  VheaderFieldDescription,
  VHeaderEvent,
  idQuery,
  inputEvent,
  fieldDescription,
  selectProps,
  sortByType
} from "../../types";

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
  private sortBy: sortByType = null;
  private exclude: Array<number> = [];
  private propsLoaded: boolean = false;
  constructor() { }

  public get sortProps(): selectProps {
    return {
      id: 0,
      options: this.props.items.map((item: fieldDescription) => item.name),
      type: "select"
    }
  }

  public get excludeProps(): selectProps {
    return {
      id: 0,
      options: this.props.items.map((item: fieldDescription) => item.name),
      type: "multiple"
    }
  }

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
    this.hostHeight = `${cellHeight * 3}px`;
    this.hostWidth = `${cellWidth * items.length}px`;
  }

  private dispatchQuery(): void {
    this.onQuery.emit({
      sortByColumns: this.queries, sortBy: {
        ascending: true,
        id: 0,
      },
      exclude: []
    });
  }

  public onSortChange(event: inputEvent): void {
    //this.sortBy = event.query;
  }

  public onExcludeChange(event: inputEvent): void {
    this.exclude = event.query as Array<number>;
    console.log("exc now:", this.exclude)
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
    this.dispatchQuery();
  }

  public get isPropsLoaded(): boolean {
    return this.propsLoaded;
  }

  public vHeaderTracker(index: number, item: VheaderFieldDescription): number {
    return index;
  }
}

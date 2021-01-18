import { Component, Input, Output, EventEmitter } from '@angular/core';
import { inputEvent, selectProps } from "../../types";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() props: selectProps;
  @Output() onChanged = new EventEmitter<inputEvent>();
  public query: string | Array<string> = "";
  public isActive: boolean = true;
  constructor() { }

  *extractOptions(opts: HTMLOptionsCollection) {
    for (let i = 0; i < opts.length; i += 1) {
      const opt: HTMLOptionElement = opts[i];
      yield opt;
    }
  }

  onChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const { type } = this.props;
    if (type === "multiple") {
      const selected: Array<string> = [];
      for (const opt of this.extractOptions(target.options)) {
        if (opt.selected) {
          if (opt.value === "inactive") {
            this.isActive = false;
            for (const optOff of this.extractOptions(target.options)) {
              if (optOff.value !== "inactive") {
                optOff.selected = false;
              } else {
                optOff.selected = true;
              }
            }
            break;
          } else {
            selected.push(opt.value);
          }
        }
      }
      this.query = selected;
    } else {
      this.query = target.value;
      if (this.query === "inactive") this.isActive = false;
      else this.isActive = true;
    }
    const { query, isActive, props: { id } } = this;
    this.onChanged.emit({
      id,
      query,
      isActive
    });
  }
}

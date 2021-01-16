import { Component, Input, Output, EventEmitter } from '@angular/core';
import { inputEvent } from "../../types";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() props: {
    id: number;
    type: "select" | "bool";
    options: Array<string>;
  }
  @Output() onChanged = new EventEmitter<inputEvent>();
  public query: string = "";
  public isActive: boolean = true;
  constructor() { }
  onChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.query = target.value;
    if (this.query === "inactive") this.isActive = false;
    else this.isActive = true;
    const { query, isActive, props: { id } } = this;
    this.onChanged.emit({
      id,
      query,
      isActive
    });
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { inputEvent } from "../../types";

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {
  @Input() props: {
    id: number;
    min: number;
    max: number;
  }
  @Output() onChanged = new EventEmitter<inputEvent>();
  private isActive: boolean = true;
  public query: number;
  constructor() { }
  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.query = Number(target.value);
    const { isActive, query, props: { id } } = this;
    this.onChanged.emit({
      id,
      query,
      isActive
    });
  }
}

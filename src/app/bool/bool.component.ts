import { Component, Input, Output, EventEmitter } from '@angular/core';
import { inputEvent } from "../../types";

@Component({
  selector: 'app-bool',
  templateUrl: './bool.component.html',
  styleUrls: ['./bool.component.css']
})
export class BoolComponent {
  @Input() props: {
    id: number;
    off: string;
    on: string;
  }
  @Output() onChanged = new EventEmitter<inputEvent>();
  private isActive: boolean = true;
  public query: string;
  constructor() { }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    //do something!
    this.query = target.value;
    const { props: { id }, isActive, query } = this;
    this.onChanged.emit({
      id,
      query,
      isActive
    });
  }
}

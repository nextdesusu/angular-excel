import { Component, Input, Output, EventEmitter } from '@angular/core';
import { inputEvent } from "../../types";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() id: number;
  @Input() props: {
    id: number;
    type: "text" | "number";
    min?: number;
    max?: number;
  }
  @Output() onChanged = new EventEmitter<inputEvent>();
  private isActive: boolean = false;
  public query: string = "";
  constructor() { }

  get defaultValue(): string | number {
    const { type, min } = this.props;
    return type === "text" ? "" : min;
  }

  private notify(): void {
    const { id, isActive, query } = this;
    this.onChanged.emit({
      id,
      query,
      isActive
    });
  }

  triggerIsActive(): void {
    this.isActive = !this.isActive;
    this.notify();
  }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.query = target.value;
    if (this.props.type === "text") {
      if (this.query === "") this.isActive = false;
      else this.isActive = true;
    }
    this.notify();
  }

}

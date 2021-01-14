import { Component, Input, Output, EventEmitter } from '@angular/core';
import { inputEvent } from "../../types";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() id: number;
  @Output() onChanged = new EventEmitter<inputEvent>();
  private isActive: boolean = true;
  public query: string;
  constructor() { }

  onChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    //this.query = target.value;
    const { id, isActive, query } = this;
    console.log("changin:", target);
    this.onChanged.emit({
      id,
      query,
      isActive
    });
  }

}

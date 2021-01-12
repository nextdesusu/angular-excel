import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VHeaderProps, VHeaderEvent } from "../../types";

@Component({
  selector: 'app-v-header',
  templateUrl: './v-header.component.html',
  styleUrls: ['./v-header.component.css']
})
export class VHeaderComponent {
  @Input() props: VHeaderProps;
  @Output() onChanged = new EventEmitter<VHeaderEvent>();
  private isActive: boolean = true;
  constructor() { }

  onChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.onChanged.emit({
      id: this.props.id,
      query: target.value,
      isActive: this.isActive
    });
  }
}

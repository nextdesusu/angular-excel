import { Component } from '@angular/core';
import fakeRequest from "../fakeRequest";
import { VTableProps, VTableSettings } from "../types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toVTableProps: VTableProps;
  toVTableSettings: VTableSettings = {
    cellWidth: 100,
    cellHeight: 50,
    showRows: 8
  };
  constructor() {
    fakeRequest().then((data) => {
      this.toVTableProps = JSON.parse(data);
    });
  }
}

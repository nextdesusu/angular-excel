import { Component } from '@angular/core';
import Faker from "../Faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-excel';
  constructor() {
    //Test
    console.log(new Faker({
      rows: 10,
      fields: ["male name", "female name", "pet", "position", "sex", "number"]
    }).randomArr())
  }
}

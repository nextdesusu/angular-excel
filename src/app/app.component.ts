import { Component } from '@angular/core';
import fakeRequest from "../fakeRequest";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-excel';
  constructor() {
    //Test
    fakeRequest().then((data) => {
      console.log(JSON.parse(data));
    })
  }
}

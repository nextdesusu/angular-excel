import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VTableComponent } from './v-table/v-table.component';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { BoolComponent } from './bool/bool.component';

@NgModule({
  declarations: [
    AppComponent,
    VTableComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
    BoolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

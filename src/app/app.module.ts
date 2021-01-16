import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VTableComponent } from './v-table/v-table.component';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { VHeaderComponent } from './v-header/v-header.component';

@NgModule({
  declarations: [
    AppComponent,
    VTableComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
    VHeaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

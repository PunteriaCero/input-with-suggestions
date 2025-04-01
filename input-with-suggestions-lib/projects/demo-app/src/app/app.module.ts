import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputSuggestionsModule } from 'input-suggestions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputSuggestionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

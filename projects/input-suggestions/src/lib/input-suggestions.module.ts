import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputSuggestionsComponent } from './input-suggestions.component';

@NgModule({
  declarations: [InputSuggestionsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [InputSuggestionsComponent]
})
export class InputSuggestionsModule { }

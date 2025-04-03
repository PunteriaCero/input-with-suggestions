import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputWithSuggestionsComponent } from './input-with-suggestions.component';

@NgModule({
  declarations: [InputWithSuggestionsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [InputWithSuggestionsComponent]
})
export class InputWithSuggestionsModule { }

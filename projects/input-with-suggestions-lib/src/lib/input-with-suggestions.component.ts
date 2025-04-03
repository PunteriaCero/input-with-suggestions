import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

/**
 * Interface for the dataset objects
 */
export interface SuggestionItem {
  name: string;
  description: string;
  format: string;
  id?: string;
}

@Component({
  selector: 'input-with-suggestions',
  template: `
    <div class="input-with-suggestions-container">
      <textarea
        type="text"
        [(ngModel)]="value"
        [placeholder]="placeholder"
        (input)="onInputChange()"
        class="custom-textbox"
      ></textarea>
      <div class="suggestions-container">
        <button
          *ngFor="let suggestion of suggestions"
          (click)="onSuggestionClick(suggestion)"
          class="suggestion-button"
          [title]="suggestion.description"
          [class.exact-match]="isExactMatch(suggestion)"
          [class.partial-match]="isPartialMatch(suggestion)"
          [disabled]="isExactMatch(suggestion)"
        >
          {{ suggestion.name }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .input-suggestions-container {
      position: relative;
      width: 100%;
      font-family: Arial, sans-serif;
    }
    
    .custom-textbox {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      box-sizing: border-box;
    }
    
    .suggestions-container {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      width: 100%;
      border-top: 1px solid #eee;
      background-color: #f9f9f9;
      padding: 5px;
      box-sizing: border-box;
      margin-top: 5px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 10;
      border-radius: 0 0 4px 4px;
    }
    
    .suggestion-button {
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      color: #999;
      border-radius: 20px;
      padding: 5px 15px;
      margin: 2px;
      font-size: 12px;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 150px;
      transition: all 0.2s ease;
    }
    
    .suggestion-button:hover:not(:disabled) {
      background-color: #f0f0f0;
    }
    
    .suggestion-button.partial-match {
      border: 1px solid #4fc3f7;
      color: #333;
      background-color: #f9f9f9;
    }
    
    .suggestion-button.exact-match {
      background-color: #2196F3;
      border: 1px solid #2196F3;
      color: white;
      cursor: default;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class InputWithSuggestionsComponent implements OnInit {
  /**
   * Input array of suggestion items
   */
  @Input() suggestions: SuggestionItem[] = [];
  
  /**
   * Input placeholder for the textbox
   */
  @Input() placeholder: string = 'Type here...';
  
  /**
   * Current value of the textbox
   */
  @Input() value: string = '';
  
  /**
   * Event emitted when the value changes
   */
  @Output() valueChange = new EventEmitter<string>();
  
  /**
   * Event emitted when a suggestion is selected
   */
  @Output() suggestionSelected = new EventEmitter<SuggestionItem>();
  
  constructor() { }

  ngOnInit() {
  }
  
  /**
   * Handle input changes
   */
  onInputChange(): void {
    this.valueChange.emit(this.value);
  }
  
  /**
   * Handle suggestion button click
   */
  onSuggestionClick(suggestion: SuggestionItem): void {
    if (this.isExactMatch(suggestion)) {
      return; // Don't do anything if it's an exact match (button is disabled)
    }
    
    const insertText = suggestion.format || suggestion.name;
    // Insert the text with a space after it
    this.value += '' + insertText + ' ';
    this.valueChange.emit(this.value);
    this.suggestionSelected.emit(suggestion);
  }
  
  /**
   * Check if the suggestion exactly matches the current value
   */
  isExactMatch(suggestion: SuggestionItem): boolean {
    if (!this.value || !suggestion.name) {
      return false;
    }
    
    // Check if the suggestion name appears as a whole word in the input
    const suggestionName = suggestion.name.toLowerCase();
    const inputValue = this.value.toLowerCase();
    
    // Use word boundary regex to check for complete word match
    const regex = new RegExp(`\\b${suggestionName}\\b`, 'i');
    return regex.test(inputValue);
  }
  
  /**
   * Check if the suggestion partially matches the current value
   * Only highlight border if word contains at least 4 matching characters anywhere
   * but prevent highlighting other suggestions when a complete word match exists
   */
  isPartialMatch(suggestion: SuggestionItem): boolean {
    // Return false if it's an exact match (already has full styling)
    if (this.isExactMatch(suggestion)) {
      return false;
    }
    
    if (!this.value || this.value.length < 4) {
      return false;
    }
    
    const suggestionName = suggestion.name.toLowerCase();
    const inputValue = this.value.toLowerCase();
    
    // Split the input into words
    const words = inputValue.split(/\s+/);
    
    // Check each word in the input independently
    for (const word of words) {
      if (word.length < 4) continue; // Skip short words
      
      // Check if this word exactly matches the current suggestion
      if (word.toLowerCase() === suggestionName) {
        return true; // Perfect match for this suggestion
      }
      
      // Check if this word exactly matches another suggestion
      const exactMatchWithOther = this.suggestions.some(s => 
        s.name.toLowerCase() === word.toLowerCase() && 
        s.name.toLowerCase() !== suggestionName
      );
      
      if (!exactMatchWithOther) {
        // Check if the entire word appears anywhere in the suggestion name
        if (suggestionName.includes(word.toLowerCase())) {
          return true;
        }
        
        // Split suggestion name into words for more accurate matching
        // We'll handle camelCase, PascalCase, kebab-case, and snake_case
        const suggestionWords = suggestionName
          .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase and PascalCase
          .toLowerCase()
          .split(/[^a-z0-9]+/); // Split on non-alphanumeric
        
        // Check if the word matches any part of the suggestion
        for (const suggWord of suggestionWords) {
          if (suggWord.length < 4) continue; // Skip short words
          
          // Check for beginning match (prefix)
          if (suggWord.startsWith(word)) {
            return true;
          }
          
          // Check for exact word match
          if (suggWord === word) {
            return true;
          }
          
          // Check if this is a significant portion of the suggestion word (75% or more)
          if (word.length >= 4 && word.length >= suggWord.length * 0.75) {
            if (suggWord.includes(word)) {
              return true;
            }
          }
        }
      }
    }
    
    return false;
  }
}

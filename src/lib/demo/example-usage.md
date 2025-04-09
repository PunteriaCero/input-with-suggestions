# Example Usage of Input With Suggestions

This document provides examples of how to use the `input-with-suggestions-lib` component in your Angular application.

## Basic Usage

```typescript
// In your component file (example.component.ts)
import { Component } from '@angular/core';
import { SuggestionItem } from 'input-with-suggestions-lib';

@Component({
  selector: 'app-example',
  template: `
    <div>
      <h3>Type something to see suggestions:</h3>
      <input-with-suggestions
        [(value)]="inputValue"
        [suggestions]="suggestionItems"
        [placeholder]="'Search for items...'"
        (suggestionSelected)="onSuggestionSelected($event)">
      </input-with-suggestions>
      
      <div *ngIf="selectedItem">
        <h4>Last selected suggestion:</h4>
        <pre>{{ selectedItem | json }}</pre>
      </div>
    </div>
  `
})
export class ExampleComponent {
  inputValue = '';
  selectedItem: SuggestionItem | null = null;
  
  // Sample data
  suggestionItems: SuggestionItem[] = [
    {
      name: 'JavaScript',
      description: 'Programming language',
      format: 'JavaScript'
    },
    {
      name: 'TypeScript',
      description: 'Superset of JavaScript with static typing',
      format: 'TypeScript'
    },
    {
      name: 'Angular',
      description: 'Web application framework',
      format: 'Angular'
    },
    {
      name: 'React',
      description: 'JavaScript library for building user interfaces',
      format: 'React'
    },
    {
      name: 'Vue.js',
      description: 'Progressive JavaScript framework',
      format: 'Vue.js'
    }
  ];
  
  onSuggestionSelected(item: SuggestionItem): void {
    this.selectedItem = item;
    console.log('Suggestion selected:', item);
  }
}
```

## Advanced Usage with Custom Styling

You can customize the appearance of the component by targeting its CSS classes:

```css
/* In your component's CSS file */
.input-with-suggestions-container {
  max-width: 500px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.custom-textbox {
  padding: 12px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #eee;
}

.suggestion-button {
  background-color: #f0f7ff;
  border: 1px solid #d0e3ff;
  color: #0066cc;
  margin: 4px;
  font-weight: 500;
}

.suggestion-button.partial-match {
  border-color: #66aaff;
  background-color: #e6f0ff;
}

.suggestion-button.exact-match {
  background-color: #0066cc;
  border-color: #0066cc;
}
```

## Integration with Form Controls

You can also use the component with Angular's reactive forms:

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SuggestionItem } from 'input-with-suggestions-lib';

@Component({
  selector: 'app-form-example',
  template: `
    <form [formGroup]="form">
      <div class="form-group">
        <label>Search with suggestions:</label>
        <input-with-suggestions
          [value]="form.get('search').value"
          (valueChange)="form.get('search').setValue($event)"
          [suggestions]="suggestionItems"
          [placeholder]="'Search...'"
          (suggestionSelected)="onSuggestionSelected($event)">
        </input-with-suggestions>
      </div>
      
      <button type="submit" (click)="onSubmit()">Submit</button>
    </form>
  `
})
export class FormExampleComponent implements OnInit {
  form: FormGroup;
  suggestionItems: SuggestionItem[] = [...]; // Your suggestion items here
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.form = this.fb.group({
      search: ['']
    });
  }
  
  onSuggestionSelected(item: SuggestionItem): void {
    console.log('Suggestion selected:', item);
  }
  
  onSubmit(): void {
    console.log('Form submitted with:', this.form.value);
  }
}
``` 
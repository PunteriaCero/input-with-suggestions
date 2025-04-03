# Input Suggestions Component

A customizable Angular component providing a textbox with suggestion buttons displayed on the inside lower border. This component was built with Angular 7.

## Installation

```bash
npm install input-with-suggestions --save
```

## Features

- Custom textbox with suggestion buttons
- Buttons display names from the provided datasets
- Tooltip support for displaying descriptions
- Configurable placeholder text
- Two-way data binding for input value
- Events for value changes and suggestion selection

## Usage

### 1. Import the module

```typescript
import { InputWithSuggestionsModule } from 'input-with-suggestions';

@NgModule({
  imports: [
    // ...
    InputWithSuggestionsModule
  ],
  // ...
})
export class AppModule { }
```

### 2. Use the component in your template

```html
<lib-input-with-suggestions
  [(value)]="textValue"
  [suggestions]="dataItems"
  [placeholder]="'Search...'"
  (suggestionSelected)="onSuggestionSelected($event)">
</lib-input-with-suggestions>
```

### 3. In your component

```typescript
import { Component } from '@angular/core';
import { SuggestionItem } from 'input-with-suggestions';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html'
})
export class MyComponent {
  textValue = '';
  
  dataItems: SuggestionItem[] = [
    {
      name: 'Item 1',
      description: 'Description for item 1',
      format: 'Item 1 formatted'
    },
    {
      name: 'Item 2',
      description: 'Description for item 2',
      format: 'Item 2 formatted',
      id: '2'
    }
  ];
  
  onSuggestionSelected(item: SuggestionItem) {
    console.log('Selected item:', item);
  }
}
```

## API

### Inputs

| Input | Type | Description |
|-------|------|-------------|
| suggestions | SuggestionItem[] | Array of suggestion items to display as buttons |
| placeholder | string | Placeholder text for the input |
| value | string | Current value of the textbox |

### Outputs

| Output | Type | Description |
|--------|------|-------------|
| valueChange | EventEmitter<string> | Emitted when the input value changes |
| suggestionSelected | EventEmitter<SuggestionItem> | Emitted when a suggestion button is clicked |

### Types

```typescript
interface SuggestionItem {
  name: string;       // Display name (shown on the button)
  description: string; // Description (shown in tooltip)
  format: string;     // Text to insert when selected
  id?: string;        // Optional identifier
}
```

## Building

Run `ng build input-with-suggestions` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build input-with-suggestions`, go to the dist folder `cd dist/input-with-suggestions` and run `npm publish`.

## License

MIT

<<<<<<< Updated upstream
# input-with-suggestions
=======
# Input With Suggestions

A customizable Angular component providing a textbox with suggestion buttons displayed on the inside lower border. This component adapts to the user's input, highlighting suggestions that match the current text.

## Installation

```bash
npm install input-with-suggestions-lib --save
```

## Features

- Custom textbox with suggestion buttons
- Dynamic matching of suggestions based on user input
- Visual highlighting of partial and exact matches
- Tooltip support for displaying descriptions
- Configurable placeholder text
- Two-way data binding for input value
- Events for value changes and suggestion selection
- Zero external dependencies

## Usage

### 1. Import the module

```typescript
import { InputWithSuggestionsModule } from 'input-with-suggestions-lib';

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
<input-with-suggestions
  [(value)]="textValue"
  [suggestions]="dataItems"
  [placeholder]="'Search...'"
  (suggestionSelected)="onSuggestionSelected($event)">
</input-with-suggestions>
```

### 3. In your component

```typescript
import { Component } from '@angular/core';
import { SuggestionItem } from 'input-with-suggestions-lib';

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

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| suggestions | SuggestionItem[] | [] | Array of suggestion items to display as buttons |
| placeholder | string | 'Type here...' | Placeholder text for the input |
| value | string | '' | Current value of the textbox |

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

## Styling

The component uses encapsulation set to `ViewEncapsulation.None` to allow easy customization of styles. You can override the default styles by targeting the following CSS classes:

- `.input-with-suggestions-container` - Container for the entire component
- `.custom-textbox` - The textarea input element
- `.suggestions-container` - Container for suggestion buttons
- `.suggestion-button` - The suggestion buttons
- `.suggestion-button.partial-match` - Buttons that partially match input
- `.suggestion-button.exact-match` - Buttons that exactly match input

## Smart Matching Algorithm

The component includes a smart matching algorithm that:

1. Disables and highlights buttons that exactly match words in the input
2. Highlights buttons that partially match the current input (with 4+ character matches)
3. Considers camelCase, PascalCase, kebab-case, and snake_case when matching

## Building

Run `npm run build:lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library, go to the dist folder `cd dist/input-with-suggestions-lib` and run `npm publish`.

## License

MIT
>>>>>>> Stashed changes

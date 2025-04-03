import { Component } from '@angular/core';
import { SuggestionItem } from 'input-with-suggestions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  textValue = '';
  selectedItem: SuggestionItem | null = null;
  
  dataItems: SuggestionItem[] = [
    {
      name: 'JavaScript',
      description: 'Programming language for web development',
      format: 'JavaScript'
    },
    {
      name: 'TypeScript',
      description: 'Typed superset of JavaScript',
      format: 'TypeScript',
      id: 'ts'
    },
    {
      name: 'Angular',
      description: 'Platform for building mobile and desktop web apps',
      format: 'Angular',
      id: 'ng'
    },
    {
      name: 'React',
      description: 'JavaScript library for building user interfaces',
      format: 'React',
      id: 'react'
    },
    {
      name: 'Vue',
      description: 'Progressive JavaScript framework',
      format: 'Vue.js',
      id: 'vue'
    }
  ];
  
  onSuggestionSelected(item: SuggestionItem) {
    this.selectedItem = item;
    console.log('Selected item:', item);
  }
}

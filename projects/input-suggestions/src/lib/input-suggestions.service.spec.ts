import { TestBed } from '@angular/core/testing';

import { InputSuggestionsService } from './input-suggestions.service';

describe('InputSuggestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputSuggestionsService = TestBed.get(InputSuggestionsService);
    expect(service).toBeTruthy();
  });
});

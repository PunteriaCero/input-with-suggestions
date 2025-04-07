import { TestBed } from '@angular/core/testing';

import { InputWithSuggestionsService } from './input-with-suggestions.service';

describe('InputWithSuggestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputWithSuggestionsService = TestBed.get(InputWithSuggestionsService);
    expect(service).toBeTruthy();
  });
});

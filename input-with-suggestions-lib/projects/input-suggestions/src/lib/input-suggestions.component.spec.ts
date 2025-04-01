import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSuggestionsComponent } from './input-suggestions.component';

describe('InputSuggestionsComponent', () => {
  let component: InputSuggestionsComponent;
  let fixture: ComponentFixture<InputSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

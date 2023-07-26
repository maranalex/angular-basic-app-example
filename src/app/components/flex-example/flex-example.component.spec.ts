import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexExampleComponent } from './flex-example.component';

describe('FlexExampleComponent', () => {
  let component: FlexExampleComponent;
  let fixture: ComponentFixture<FlexExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexExampleComponent],
    });
    fixture = TestBed.createComponent(FlexExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

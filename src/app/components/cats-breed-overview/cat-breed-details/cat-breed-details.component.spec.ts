import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBreedDetailsComponent } from './cat-breed-details.component';

describe('CatBreedDetailsComponent', () => {
  let component: CatBreedDetailsComponent;
  let fixture: ComponentFixture<CatBreedDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatBreedDetailsComponent],
    });
    fixture = TestBed.createComponent(CatBreedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

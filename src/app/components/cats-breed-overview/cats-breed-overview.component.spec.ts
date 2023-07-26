import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsBreedOverviewComponent } from './cats-breed-overview.component';

describe('CatsBreedOverviewComponent', () => {
  let component: CatsBreedOverviewComponent;
  let fixture: ComponentFixture<CatsBreedOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatsBreedOverviewComponent],
    });
    fixture = TestBed.createComponent(CatsBreedOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

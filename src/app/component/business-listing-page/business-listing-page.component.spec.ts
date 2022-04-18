import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessListingPageComponent } from './business-listing-page.component';

describe('BusinessListingPageComponent', () => {
  let component: BusinessListingPageComponent;
  let fixture: ComponentFixture<BusinessListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessListingPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

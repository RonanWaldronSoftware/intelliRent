import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewListingPage } from './new-listing.page';

describe('NewListingPage', () => {
  let component: NewListingPage;
  let fixture: ComponentFixture<NewListingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

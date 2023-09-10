import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneComponent } from './one.component';

describe('OneComponent', () => {
  let component: OneComponent;
  let fixture: ComponentFixture<OneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneComponent],
    });
    fixture = TestBed.createComponent(OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // beforeAll(() => {
  //   console.log('Before All');
  // });
  // afterAll(() => {
  //   console.log('After All');
  // });
  // beforeEach(() => {
  //   console.log('Before Each');
  // });
  // afterEach(() => {
  //   console.log('After Each');
  // });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Test One', () => {
    console.log('Test One');
  });
  it('Test Two', () => {
    console.log('Test Two');
  });
  it('Test Three', () => {
    console.log('Test Three');
  });
});

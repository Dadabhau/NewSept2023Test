import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { addition } from './calculator';

describe('AppComponent', () => {
  // Arrange
  let component = new AppComponent();
  //Act
  let msg = component.showMessage('Hello');
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AllunitTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AllunitTest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'AllunitTest app is running!'
    );
  });
  it('My Testcase', () => {
    expect(true).toBe(true);
  });
  it('Show Alert Message', () => {
    //expect(component.showMessage('Hello')).toBe('Hello');

    //Assert
    expect(msg).toBe('Hello');
  });
  xit('Show addintion number', () => {
    //expect(addition(10, 20)).toBe(30);
    expect(addition(10, 20)).toBeGreaterThan(20);
  });
  it('ToBe and ToEqual Test Case', () => {
    var a = 'Hello';
    var b = 'Hello';
    var c = ['hello'];
    var d = ['hello'];
    //expect(a).toBe(b);
    expect(a).toEqual(b);
    expect(c).toEqual(d);
    //expect(c).toBeTrue();
    expect(c).toBeFalse();
  });
  it('Greatthan and GreatthanEqual', () => {
    var a = 5;
    //expect(a).toBeGreaterThan(4);
    expect(a).toBeGreaterThanOrEqual(6);
  });
});

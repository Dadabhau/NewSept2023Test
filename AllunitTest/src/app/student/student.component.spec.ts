import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';
import { AppRoutingModule } from '../app-routing.module';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers: [],
      imports: [AppRoutingModule],
    });
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

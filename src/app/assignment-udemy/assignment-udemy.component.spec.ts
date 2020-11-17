import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentUdemyComponent } from './assignment-udemy.component';

describe('AssignmentUdemyComponent', () => {
  let component: AssignmentUdemyComponent;
  let fixture: ComponentFixture<AssignmentUdemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentUdemyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentUdemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

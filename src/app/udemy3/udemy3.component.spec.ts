import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Udemy3Component } from './udemy3.component';

describe('Udemy3Component', () => {
  let component: Udemy3Component;
  let fixture: ComponentFixture<Udemy3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Udemy3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Udemy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

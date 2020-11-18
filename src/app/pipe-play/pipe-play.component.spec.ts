import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePlayComponent } from './pipe-play.component';

describe('PipePlayComponent', () => {
  let component: PipePlayComponent;
  let fixture: ComponentFixture<PipePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipePlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

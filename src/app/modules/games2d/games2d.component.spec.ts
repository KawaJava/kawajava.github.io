import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Games2dComponent } from './games2d.component';

describe('Games2dComponent', () => {
  let component: Games2dComponent;
  let fixture: ComponentFixture<Games2dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Games2dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Games2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

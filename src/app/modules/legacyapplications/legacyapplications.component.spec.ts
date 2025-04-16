import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyapplicationsComponent } from './legacyapplications.component';

describe('LegacyapplicationsComponent', () => {
  let component: LegacyapplicationsComponent;
  let fixture: ComponentFixture<LegacyapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegacyapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

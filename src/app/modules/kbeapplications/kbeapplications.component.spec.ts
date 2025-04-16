import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbeapplicationsComponent } from './kbeapplications.component';

describe('KbeapplicationsComponent', () => {
  let component: KbeapplicationsComponent;
  let fixture: ComponentFixture<KbeapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbeapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbeapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

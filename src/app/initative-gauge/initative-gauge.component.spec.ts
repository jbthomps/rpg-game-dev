import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitativeGaugeComponent } from './initative-gauge.component';

describe('InitativeGaugeComponent', () => {
  let component: InitativeGaugeComponent;
  let fixture: ComponentFixture<InitativeGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitativeGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitativeGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitySelectionComponent } from './ability-selection.component';

describe('AbilitySelectionComponent', () => {
  let component: AbilitySelectionComponent;
  let fixture: ComponentFixture<AbilitySelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilitySelectionComponent ]
    })
    .overrideTemplate( AbilitySelectionComponent, '<div></div>')
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should emit an attack event on attack', (done) => {
    let emitRun = false;
    component.actionTaken.subscribe((value) => {
      expect(value).toBe('attack');
      emitRun = true;
      done();
    })
    component.attack('attack');
    expect(emitRun).toBeTruthy();
  })
});

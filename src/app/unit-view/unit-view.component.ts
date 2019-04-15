import { Component, EventEmitter, OnInit, Output, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'unit-view',
  templateUrl: './unit-view.component.html',
  styleUrls: ['./unit-view.component.css']
})
export class UnitViewComponent implements OnInit {
  
  @Input() unit;
  @Output() actionTaken: EventEmitter<string> = new EventEmitter<string>();
  timerVal = 0;
  lockedAction;
  isLocked = false;

  setTimer = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  updateTimer(value) {
    this.timerVal = value;
    if (this.timerVal >= 5000 && this.isLocked) {
      this.takeTurn(this.lockedAction);
    }
  }
  takeAction(event) {
    if (this.timerVal >= 5000)
      this.takeTurn(event);
    else
      this.lockedAction = event;
  }

  takeTurn(event) {
    this.actionTaken.emit(event);
    this.setTimer.emit(0);
    this.lockedAction = undefined;
    this.isLocked = false;
  }

  lockAction() {
    if (this.timerVal >= 5000)
      this.takeTurn(this.lockedAction);
    else
      this.isLocked = true;
  }

}

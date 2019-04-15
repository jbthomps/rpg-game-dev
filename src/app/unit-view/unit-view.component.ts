import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'unit-view',
  templateUrl: './unit-view.component.html',
  styleUrls: ['./unit-view.component.css']
})
export class UnitViewComponent implements OnInit {

  @Input() unit;
  @Output() actionTaken: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  takeAction(event) {
    this.actionTaken.emit(event);
  }

}

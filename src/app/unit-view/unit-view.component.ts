import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'unit-view',
  templateUrl: './unit-view.component.html',
  styleUrls: ['./unit-view.component.css']
})
export class UnitViewComponent implements OnInit {

  @Input() unit;

  constructor() { }

  ngOnInit() {
  }

}

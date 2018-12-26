import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScreenViewStateService } from '../screenState.service';

@Component({
  selector: 'adventure-map',
  templateUrl: './adventure-map.component.html',
  styleUrls: ['./adventure-map.component.css']
})
export class AdventureMapComponent implements OnInit {

  constructor(public view: ScreenViewStateService) { }

  ngOnInit() {
  }


}

import { Component } from '@angular/core';
import { ScreenViewStateService } from './screenState.service'

enum appStates {
  'MENU',
  'COMBAT',
  'MAP'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public view: ScreenViewStateService) {}
}

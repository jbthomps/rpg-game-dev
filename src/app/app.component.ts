import { Component } from '@angular/core';
import { ScreenViewStateService } from './screenState.service';
import { AudioService } from './audio.service';

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
  constructor(public view: ScreenViewStateService, private audio: AudioService) {
    
  }

  goToMap(){
    this.view.goToMap();
  }

  goToMenu(){

  }

  startMusic(){
    this.audio.startBackground();
  }
}

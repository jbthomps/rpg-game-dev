import { Injectable } from '@angular/core';

enum appStates {
    'MENU',
    'COMBAT',
    'MAP'
  }

@Injectable()
export class ScreenViewStateService {
    private _viewState = 'MENU';

    get viewState() {
        return this._viewState;
    }

    goToMenu() {
        this._viewState = 'MENU';
    }

    goToCombat() {
        this._viewState = 'COMBAT';
    }

    goToMap() {
        this._viewState = 'MAP';
    }
}
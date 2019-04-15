import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatMenuModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArenaComponent } from './arena/arena.component';
import { CombatTurnService } from './combat-engine/turn-engine/combat-turn.service';
import { CombatantStoreService } from './combat-engine/combatant-store/combatant-store.service';
import { MessageLogService } from './combat-engine/message-log/message-log.service';
import { NotificationDialogComponent } from './combat-engine/turn-engine/notification-dialog.component';
import { AbilitySelectionComponent } from './ability-selection/ability-selection.component';
import { ScreenViewStateService } from './screenState.service';
import { AdventureMapComponent } from './adventure-map/adventure-map.component';
import { AudioService } from './audio.service';
import { UnitViewComponent } from './unit-view/unit-view.component';
import { InitativeGaugeComponent } from './initative-gauge/initative-gauge.component';


@NgModule({
  declarations: [
    AppComponent,
    ArenaComponent,
    AbilitySelectionComponent,
    NotificationDialogComponent,
    AdventureMapComponent,
    UnitViewComponent,
    InitativeGaugeComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [CombatTurnService, CombatantStoreService, MessageLogService, ScreenViewStateService, AudioService],
  bootstrap: [AppComponent],
  entryComponents: [NotificationDialogComponent]
})
export class AppModule { }

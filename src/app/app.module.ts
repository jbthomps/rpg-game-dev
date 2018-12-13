import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArenaComponent } from './arena/arena.component';
import { CombatTurnService } from './combat-engine/turn-engine/combat-turn.service';
import { CombatantStoreService } from './combat-engine/combatant-store/combatant-store.service';
import { MessageLogService } from './combat-engine/message-log/message-log.service';
import { NotificationDialogComponent } from './combat-engine/turn-engine/notification-dialog.component';
import { AbilitySelectionComponent } from './ability-selection/ability-selection.component';


@NgModule({
  declarations: [
    AppComponent,
    ArenaComponent,
    AbilitySelectionComponent,
    NotificationDialogComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [CombatTurnService, CombatantStoreService, MessageLogService],
  bootstrap: [AppComponent],
  entryComponents: [NotificationDialogComponent]
})
export class AppModule { }

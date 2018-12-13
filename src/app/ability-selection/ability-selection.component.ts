import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CombatantStoreService } from '../combat-engine/combatant-store/combatant-store.service';

@Component({
  selector: 'ability-selection',
  templateUrl: './ability-selection.component.html',
  styleUrls: ['./ability-selection.component.css']
})
export class AbilitySelectionComponent implements OnInit {

  @Output() actionTaken: EventEmitter<string> = new EventEmitter<string>();

  constructor(private combatStore: CombatantStoreService) { }

  ngOnInit() {
  }

  defend() {
    this.actionTaken.emit('defend');
  }

  attack(atkCode: string) {
    this.actionTaken.emit(atkCode);
  }

  isAttackPossible(attacker, atkCode): boolean {
    return this.combatStore.isAbilityUsable('player', atkCode)
  }

}

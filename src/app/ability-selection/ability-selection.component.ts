import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CombatantStoreService } from '../combat-engine/combatant-store/combatant-store.service';

@Component({
  selector: 'ability-selection',
  templateUrl: './ability-selection.component.html',
  styleUrls: ['./ability-selection.component.css']
})
export class AbilitySelectionComponent implements OnInit {
  private actionArr;
  private actionTypes;

  @Output() actionTaken: EventEmitter<string> = new EventEmitter<string>();

  @Input() set actionList(p) {
    this.actionArr = Object.values(p);
    this.actionTypes = Object.keys(p);
  };
  get actionList() {
    return this.actionArr;
  }
  constructor(private combatStore: CombatantStoreService) { }

  ngOnInit() {
  }

  defend() {
    this.actionTaken.emit('defend');
  }

  attack(atkCode: string) {
    console.log(atkCode);
    this.actionTaken.emit(atkCode);
  }

  isAttackPossible(attacker, idx): boolean {
    return this.combatStore.isAbilityUsable('player', this.actionTypes[idx])
  }

  act(idx: number) {
    console.log(this.actionTypes[idx])
    if (this.actionTypes[idx] === 'defend')
      this.defend();
    else
      this.attack(this.actionTypes[idx])
  }

}

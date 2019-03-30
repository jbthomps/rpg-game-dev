import { Component, OnInit } from '@angular/core';
import { CombatTurnService } from '../combat-engine/turn-engine/combat-turn.service';
import { CombatantStoreService } from '../combat-engine/combatant-store/combatant-store.service';
import { Player } from '../models/player';
import { Warrior } from '../models/playerClasses/warrior';
import { ScreenViewStateService } from '../screenState.service';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  player;

  goblin = {
    unitImage: '/assets/goblin-base-unit.jpg',
    hp: 32,
    maxHp: 32,
    name: 'Goblin',
    attack: 10,
    attackModifier: 1,
    defense: 0,
    defenseModifier: 1,
    abilities: {
      attack: {
        name: "Attack",
        damageModifier: 1,
        healthCost: 0,
        energyCost: 0
      }
    },
    conditions: []
  }

  constructor(private combatTurn: CombatTurnService, private combatStore: CombatantStoreService, public view: ScreenViewStateService) {
    this.player = new Player([{classLevel: 1, class: new Warrior()}], 'Goblin Slayer', null);
    console.log(this.player);
    combatStore.initializeCombatants({
      player: this.player,
      goblin: this.goblin
    })
   }

  ngOnInit() {}

  takeAction(code: string) {
    if (code === 'defend') this.defend();
    else this.attack(code);
  }

  private defend() {
    this.player.defenseModifier *= 3;
    this.attack("block");
    this.player.defenseModifier /= 3;
  }

  private attack(atkCode: string) {
    this.combatTurn.takeCombatTurn(
      [
        {
          attacker: this.combatStore.getCombatant('player'),
          attackType: atkCode,
          defender: this.combatStore.getCombatant('goblin')
        },
        {
          attacker: this.combatStore.getCombatant('goblin'),
          attackType: "attack",
          defender: this.combatStore.getCombatant('player')
        },
      ]
    )
  }

  isAttackPossible(attacker, atkCode): boolean {
    const attackUsed = attacker.abilities[atkCode];
    return attacker.hp - attackUsed.healthCost > 0;
  }
  back() {
    this.view.goToMap();
  }

}

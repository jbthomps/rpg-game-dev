import { Injectable } from '@angular/core';

@Injectable()
export class CombatantStoreService {

  private combatantStore: any = {};

  constructor() { }

  initializeCombatants(combatants: any) {
    this.combatantStore = Object.assign({}, combatants);
  }

  addCombatant(combatant: any): string {
    if (!this.combatantStore[combatant.name]) {
      this.combatantStore[combatant.name] = combatant;
      return combatant.name;
    } else {
      let i = 1;
      while (!this.combatantStore[combatant.name + String(i)]) {
        i++;
      }
      this.combatantStore[combatant.name + String(i)] = combatant;
      return combatant.name;
    }
  }

  deleteCombatant(combatantName: string) {
    delete this.combatantStore[combatantName];
  }

  getCombatant(combatantName: string) {
    return this.combatantStore[combatantName];
  }

  getAvailableAblities(combatantName: string){
    return this.combatantStore[combatantName].abilities;
  }

  isAbilityUsable(combatantName: string, atkCode: string) {
    const attacker = this.combatantStore[combatantName];
    const attackUsed = attacker.abilities[atkCode];
    return attacker.hp - attackUsed.healthCost > 0;
  }

}

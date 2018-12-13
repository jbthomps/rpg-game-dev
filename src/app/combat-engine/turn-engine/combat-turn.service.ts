import { EventEmitter, Injectable } from '@angular/core';
import { MessageLogService } from '../message-log/message-log.service'
export interface ConflictPair {
  attacker: any,
  attackType: string,
  defender: any
} 

@Injectable()
export class CombatTurnService {


  constructor(private messageLog: MessageLogService) { 
  }

  takeCombatTurn(combats: Array<ConflictPair>) {
    combats.forEach((value) => {
      if (value.attacker.hp <= 0 || value.defender.hp <= 0) return;
      this.useAbility(value.attacker, value.attackType, value.defender);
    })
  }

  useAbility(attacker, atkCode, defender) {
    const attackUsed = attacker.abilities[atkCode];
    attacker.hp = Math.min(attacker.hp - attackUsed.healthCost, attacker.maxHp);
    let message = this.costMessage(attackUsed.healthCost, attackUsed.name, attacker.name);
    // Status moves should bypass these steps
    if (attackUsed.damageModifier !== 0) {
      const finalDamage = this.damageCalc(attacker, atkCode, defender);
      if (message) message += '\n';
      message += this.damageMessage(finalDamage, attackUsed.name, attacker.name, defender.name)
      defender.hp -= finalDamage;
    }
    this.emitMessage(message);
  }

  damageCalc(attacker, atkCode, defender): number {
    if (attacker.hp <= 0) return 0;
    const attackUsed = attacker.abilities[atkCode];
    const attack = attacker.attack * attacker.attackModifier * attackUsed.damageModifier;
    const defense = defender.defense * defender.defenseModifier;
    return Math.min(Math.max(Math.ceil((attack * attack) / (attack + defense)), 0), defender.hp);
  }

  costMessage(cost: number, abilityName: string, userName: string): string {
    if (cost === 0) return '';
    if (cost > 0) 
      return `${userName} paid ${cost} health to use ${abilityName}.`
    else 
      return `${userName} healed ${-cost} health from ${abilityName}.`
  }

  damageMessage(damage: number, abilityName: string, attacker: string, defender: string): string {
    if (damage === 0) return `${attacker} failed to damage ${defender} with ${abilityName}.`;
    else return `${attacker} did ${damage} damage to ${defender} with ${abilityName}.`
  }

  emitMessage(msg: string) {
      this.messageLog.messageEmitter.next(msg);
  }


}

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
      let attack = value.attacker.abilities[value.attackType];
      if (value.attacker.conditions) 
      for (const condition of value.attacker.conditions) {
        if (condition.onAttack) {
          const result = condition.onAttack(value.attacker, attack);
          value.attacker = result.unit;
          attack = result.action;
        }
      }
      if (value.attacker.hp <= 0 || value.defender.hp <= 0) return;
      this.useAbility(value.attacker, attack, value.defender);
    })
  }

  useAbility(attacker, atk, defender) {
    const attackUsed = atk;
    attacker.hp = Math.min(attacker.hp - attackUsed.healthCost, attacker.maxHp);
    let message = this.costMessage(attackUsed.healthCost, attackUsed.name, attacker.name);
    if (attackUsed.grantDebuff) {
      const debuff: any[] = attackUsed.grantDebuff();
      if (debuff && debuff.length > 0) defender.conditions = [...defender.conditions, ...debuff]
    }
    // Status moves should bypass these steps
    if (attackUsed.damageModifier !== 0) {
      const finalDamage = this.damageCalc(attacker, attackUsed, defender);
      if (message) message += '\n';
      message += this.damageMessage(finalDamage, attackUsed.name, attacker.name, defender.name)
      defender.hp -= finalDamage;
    } else {
      if (attackUsed.resultMessage) message += attacker.name + ' ' + attackUsed.resultMessage;
    }
    if (!message) message = "There is no message attached to this action";
    this.emitMessage(message);
  }

  damageCalc(attacker, atk, defender): number {
    if (attacker.hp <= 0) return 0;
    const attackUsed = atk;
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

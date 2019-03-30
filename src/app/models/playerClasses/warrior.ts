import { PlayerClass } from "../playerClass";
import { StatProgression } from "../statProgression";
import { ParalysisCondition } from "../conditions/paralysis";

export class Warrior implements PlayerClass {
    readonly name = 'Warrior';
    readonly abilities = new Map<number, any>([[1, {
        /* crushingBlow: {
            name: "Crushing Blow",
            damageModifier: 1.6,
            defenseModifier: 1,
            healthCost: 6,
            energyCost: 0
        } */
        slowStrike: {
            name: "Slow Strike",
            damageModifier: .8,
            defenseModifier: 1,
            healthCost: 6,
            energyCost: 0,
            grantBuff: () => undefined,
            grantDebuff: () => {
                if (Math.random() > .5) return [new ParalysisCondition(3)];
            }
        }
    }]]);
    private baseStats = {
        baseHp: 20,
        hpPerLevel: 20,
        baseAtk: 6,
        atkPerLevel: 6,
        baseDef: 2,
        defPerLevel: 1,
        baseEnergy: 10,
        energyPerLevel: 0
    }
    readonly statProgression;

    constructor() {
        this.statProgression = new StatProgression(
            this.baseStats.baseHp, 
            this.baseStats.hpPerLevel,
            this.baseStats.baseAtk,
            this.baseStats.atkPerLevel,
            this.baseStats.baseDef,
            this.baseStats.defPerLevel,
            this.baseStats.baseEnergy,
            this.baseStats.energyPerLevel
        )
    }
}
import { PlayerClass } from "../playerClass";
import { StatProgression } from "../statProgression";

export class Warrior implements PlayerClass {
    readonly name = 'Warrior';
    readonly abilities = new Map([[1, {
        crushingBlow: {
            name: "Crushing Blow",
            damageModifier: 1.6,
            defenseModifier: 1,
            healthCost: 6,
            energyCost: 0
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
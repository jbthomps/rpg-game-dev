export class StatProgression {
    constructor(
    readonly baseHp: number,
    readonly hpPerLevel: number,
    readonly baseAtk: number,
    readonly atkPerLevel: number,
    readonly baseDef: number,
    readonly defPerLevel: number,
    readonly baseEnergy: number,
    readonly energyPerLevel: number
    ){}

    mergeStatProgression(secondary: StatProgression): StatProgression {
        return new StatProgression(
            this.baseHp + secondary.baseHp,
            this.hpPerLevel + secondary.hpPerLevel,
            this.baseAtk + secondary.baseAtk,
            this.atkPerLevel + secondary.atkPerLevel,
            this.baseDef + secondary.baseDef,
            this.defPerLevel + secondary.defPerLevel,
            this.baseEnergy + secondary.baseEnergy,
            this.energyPerLevel + secondary.energyPerLevel
        )
    }
}
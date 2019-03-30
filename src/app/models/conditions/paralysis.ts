import { Condition } from "../condition";

export class ParalysisCondition implements Condition {
    duration: number;
    name: 'Paralysis';
    constructor(private maxDuration: number) {
        this.duration = maxDuration;
        this.name = 'Paralysis';
    };
    onAttack(unit, action) {
        this.duration--;
        if (Math.random() > .25)
            return {
                unit: unit,
                action: {
                    name: "None",
                    damageModifier: 0,
                    healthCost: 0,
                    energyCost: 0,
                    resultMessage: "took no action due to paralysis."
                  }
            }
        else return {
            unit: unit,
            action: action
        }
    }

}
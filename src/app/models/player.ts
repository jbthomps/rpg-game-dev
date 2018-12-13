import { Level } from "./level";
import { AnimationBuilder } from "@angular/animations";
import { StatProgression } from "./statProgression";

export class Player {
    unitImage = '/assets/squire-base-unit.jpg'
    private abilities: any = {
        attack: {
          name: "Attack",
          damageModifier: 1,
          healthCost: 0,
          energyCost: 0
        },
        minorHeal: {
          name: "Minor Heal",
          damageModifier: 0,
          defenseModifier: 1,
          healthCost: -10,
          energyCost: 0
        },
        block: {
          name: "Defend",
          damageModifier: 0,
          defenseModifier: 3,
          healthCost: 0,
          energyCost: 0
        }
      };

    constructor(
        readonly level: Level[],
        readonly name: string,
        readonly race: any
    ) {
        this.setAbilities();
        this.hp = this.maxHp;
    }

    private _charLevel = 0;
    get charLevel() : number {
        return this._charLevel;
    }

    private _maxHp = 0;
    get maxHp(): number {
        return this._maxHp;
    }

    hp = 0;

    private _attack = 0;
    get attack(): number {
        return this._attack;
    }

    private _defense = 0;
    get defense(): number {
        return this._defense;
    }

    defenseModifier = 1;
    attackModifier = 1;

    levelUp = (levels: number) => {};

    private setAbilities = () => {
        this.level.forEach((level) => {
            this.setStats(level.class.statProgression, level.classLevel);
            this._charLevel += level.classLevel;
            for (let i=1; i <= level.classLevel; i++) {
                const abilities = level.class.abilities.get(i);
                if (!abilities) return;
                const abilityKeys = Object.keys(abilities);
                abilityKeys.forEach((key) => {
                    // If abilities have identical keys, will wipe out
                    // abilities.  Is positive for upgrades, but different
                    // classes must be careful having the same key.
                    this.abilities[key] = abilities[key];
                })
            }
        })
    }

    private setStats = (progression: StatProgression, classLevel: number) => {
        this._maxHp = progression.baseHp + classLevel*progression.hpPerLevel;
        this._attack = progression.baseAtk + classLevel*progression.atkPerLevel;
        this._defense = progression.baseDef + classLevel*progression.defPerLevel;
    }
}
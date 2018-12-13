import { StatProgression } from "./statProgression";

export interface PlayerClass {
    name: string;
    abilities: Map<number, any>;
    statProgression: StatProgression;
}
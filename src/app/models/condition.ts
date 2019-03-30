export interface Condition {
    name: string;
    duration: number;
    onEndTurn?: (unit ) => any;
    onAttack?: (unit, action) => {unit: any, action: any};
}
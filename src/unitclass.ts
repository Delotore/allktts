import { unit } from "./baseunit";

export class warrior extends unit {
    description(): string {
        return "воин, базовый урон 20";
    }
    damage(): number {
        return 20;
    }
}

export class wizard extends unit {
    description(): string {
        return "маг, базовый урон 15";
    }
    damage(): number {
        return 15;
    }
}

export class archer extends unit {
    description(): string {
        return "лучник, базовый урон 10";
    }
    damage(): number {
        return 10;
    }
}
import { Unit } from "./baseunit";

export abstract class Warrior extends Unit {
    constructor() {
        super(20);
    }
}

export abstract class Wizard extends Unit {
    constructor() {
        super(15);
    }
}

export abstract class Archer extends Unit {
    constructor() {
        super(10);
    }
}
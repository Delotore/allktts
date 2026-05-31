import { unit } from "./baseunit";
export abstract class unitDecorator extends unit {
    protected wrappedUnit: unit;

    constructor(unit: unit) {
        super();
        this.wrappedUnit = unit;
    }

    description(): string {
        return this.wrappedUnit.description();
    }

    damage(): number {
        return this.wrappedUnit.damage();
    }
}
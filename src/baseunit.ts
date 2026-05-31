export abstract class Unit {
    constructor(public baseDamage: number) {}
    abstract getDescription(): string;
}
import { unit } from "./baseunit";
import { unitDecorator } from "./unitdecorator";

export class fire extends unitDecorator {
  private fireDamage: number;

  constructor(unit: unit, fireDamage: number) {
    super(unit);
    this.fireDamage = fireDamage;
  }

  override description(): string {
    return `Огненный ${this.wrappedUnit.description()} с дополнительным уроном от огня ${this.fireDamage}`;
  }

  override damage(): number {
    return this.wrappedUnit.damage() + this.fireDamage;
  }
}

export class frost extends unitDecorator {
  private slowdown: number;

  constructor(unit: unit, slowdown: number) {
    super(unit);
    this.slowdown = slowdown;
  }

  override description(): string {
    return `Морозный ${this.wrappedUnit.description()} с эффектом замедления на ${this.slowdown}%`;
  }
}

export class poison extends unitDecorator {
  private poisonDamage: number;

  constructor(unit: unit, poisonDamage: number) {
    super(unit);
    this.poisonDamage = poisonDamage;
  }

  override description(): string {
    return `Ядовитый ${this.wrappedUnit.description()} с периодическим уроном от яда ${this.poisonDamage}`;
  }

  override damage(): number {
    return this.wrappedUnit.damage() + this.poisonDamage;
  }
}

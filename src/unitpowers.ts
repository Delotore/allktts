import { Warrior, Wizard, Archer } from "./unitclass";

export class FireWarrior extends Warrior {
    public fireDamage: number = 10;
    getDescription(): string {
        return `Огненный воин, базовый урон ${this.baseDamage} с дополнительным уроном от огня ${this.fireDamage}`;
    }
}

export class FireWizard extends Wizard {
    public fireDamage: number = 20;
    getDescription(): string {
        return `Огненный маг, базовый урон ${this.baseDamage} с дополнительным уроном от огня ${this.fireDamage}`;
    }
}

export class FireArcher extends Archer {
    public fireDamage: number = 10;
    getDescription(): string {
        return `Огненный лучник, базовый урон ${this.baseDamage} с дополнительным уроном от огня ${this.fireDamage}`;
    }
}

export class FrostWarrior extends Warrior {
    public slowdown: number = 15;
    getDescription(): string {
        return `Морозный воин, базовый урон ${this.baseDamage} с замедлением от эффекта заморозки ${this.slowdown}%`;
    }
}

export class FrostWizard extends Wizard {
    public slowdown: number = 40;
    getDescription(): string {
        return `Морозный маг, базовый урон ${this.baseDamage} с замедлением от эффекта заморозки ${this.slowdown}%`;
    }
}

export class FrostArcher extends Archer {
    public slowdown: number = 25;
    getDescription(): string {
        return `Морозный лучник, базовый урон ${this.baseDamage} с замедлением от эффекта заморозки ${this.slowdown}%`;
    }
}

export class PoisonWarrior extends Warrior {
    public poisonDamage: number = 5;
    getDescription(): string {
        return `Ядовитый воин, базовый урон ${this.baseDamage} с периодическим уроном от яда ${this.poisonDamage}`;
    }
}

export class PoisonWizard extends Wizard {
    public poisonDamage: number = 15;
    getDescription(): string {
        return `Ядовитый маг, базовый урон ${this.baseDamage} с периодическим уроном от яда ${this.poisonDamage}`;
    }
}

export class PoisonArcher extends Archer {
    public poisonDamage: number = 10;
    getDescription(): string {
        return `Ядовитый лучник, базовый урон ${this.baseDamage} с периодическим уроном от яда ${this.poisonDamage}`;
    }
}
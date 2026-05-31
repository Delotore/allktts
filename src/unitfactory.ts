import { Warrior, Wizard, Archer } from "./unitclass";
import {
  FireWarrior,
  FireWizard,
  FireArcher,
  FrostWarrior,
  FrostWizard,
  FrostArcher,
  PoisonWarrior,
  PoisonWizard,
  PoisonArcher,
} from "./unitpowers";


export abstract class UnitFactory {
    abstract createWarrior(): Warrior;
    abstract createWizard(): Wizard;
    abstract createArcher(): Archer;
}

export class FireFactory extends UnitFactory {
    createWarrior(): Warrior { return new FireWarrior(); }
    createWizard(): Wizard { return new FireWizard(); }
    createArcher(): Archer { return new FireArcher(); }
}

export class FrostFactory extends UnitFactory {
    createWarrior(): Warrior { return new FrostWarrior(); }
    createWizard(): Wizard { return new FrostWizard(); }
    createArcher(): Archer { return new FrostArcher(); }
}

export class PoisonFactory extends UnitFactory {
    createWarrior(): Warrior { return new PoisonWarrior(); }
    createWizard(): Wizard { return new PoisonWizard(); }
    createArcher(): Archer { return new PoisonArcher(); }
}

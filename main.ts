import { Unit } from "./src/baseunit";
import { UnitFactory, FireFactory, FrostFactory, PoisonFactory } from "./src/unitfactory";

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

function generateRandomUnits(): void {
    const factories: UnitFactory[] = [
        new FireFactory(),
        new FrostFactory(),
        new PoisonFactory()
    ];

    const generatedUnits: Unit[] = [];

    console.log("Генерация 10 случайных юнитов\n");

    for (let i = 0; i < 10; i++) {
        const randomFactory = factories[getRandomInt(factories.length)]!;
        
        const unitType = getRandomInt(3);
        let newUnit: Unit;

        switch (unitType) {
            case 0:
                newUnit = randomFactory.createWarrior();
                break;
            case 1:
                newUnit = randomFactory.createWizard();
                break;
            case 2:
                newUnit = randomFactory.createArcher();
                break;
            default:
                newUnit = randomFactory.createWarrior();
        }

        generatedUnits.push(newUnit);
    }

    generatedUnits.forEach((unit, index) => {
        console.log(`${index + 1}. ${unit.getDescription()}`);
    });
}

generateRandomUnits();
import { unit } from "./src/baseunit";
import { warrior, wizard, archer } from "./src/unitclass";
import { fire, frost, poison } from "./src/unitpowers";

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomUnit(): unit {
    const baseTypes = [warrior, wizard, archer];
    const RandomBaseClass = baseTypes[getRandomInt(0, baseTypes.length - 1)]!;
    
    let unit: unit = new RandomBaseClass();

    const decoratorType = getRandomInt(0, 3);

    switch (decoratorType) {
        case 1:
            const randomFireDamage = getRandomInt(5, 15);
            unit = new fire(unit, randomFireDamage);
            break;
        case 2:
            const randomSlowdown = getRandomInt(20, 50);
            unit = new frost(unit, randomSlowdown);
            break;
        case 3:
            const randomPoisonDamage = getRandomInt(3, 8);
            unit = new poison(unit, randomPoisonDamage);
            break;
        default:
            break;
    }

    return unit;
}

console.log("=== Генерация случайной армии ===");
for (let i = 0; i < 5; i++) {
    const unit = generateRandomUnit();
    const Description = unit.description();
    
    console.log(`${i + 1}. ${Description}`);
}
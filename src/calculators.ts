import { IStatCalculator, Figure, IReportPrinter } from "./interface";

export class ShapeStatCalculator implements IStatCalculator {
  public readonly statName = "Статистика по формам";

  public calculate(figures: Figure[]): Record<string, number> {
    return figures.reduce(
      (acc, figure) => {
        acc[figure.shape] = (acc[figure.shape] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }
}

export class ColorStatCalculator implements IStatCalculator {
  public readonly statName = "Статистика по цветам";

  public calculate(figures: Figure[]): Record<string, number> {
    return figures.reduce(
      (acc, figure) => {
        acc[figure.color] = (acc[figure.color] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }
}

export class ConsoleReportPrinter implements IReportPrinter {
  public print(stats: Record<string, Record<string, number>>): void {
    for (const [statName, data] of Object.entries(stats)) {
      console.log(`\n--- ${statName} ---`);
      for (const [key, count] of Object.entries(data)) {
        console.log(`  ${key}: ${count}`);
      }
    }
  }
}

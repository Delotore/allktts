export interface Figure {
  readonly shape: string;
  readonly color: string;
}

export interface ILogParser {
  parse(rawLog: string): Figure[];
}

export interface IStatCalculator {
  readonly statName: string;
  calculate(figures: Figure[]): Record<string, number>;
}

export interface IReportPrinter {
  print(stats: Record<string, Record<string, number>>): void;
}

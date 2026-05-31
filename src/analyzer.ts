import { ILogParser, IStatCalculator, IReportPrinter } from "./interface";

export class ConveyorAnalyzer {
  constructor(
    private readonly parser: ILogParser,
    private readonly calculators: IStatCalculator[],
    private readonly printer: IReportPrinter,
  ) {}

  public processLogs(rawLog: string): void {
    const figures = this.parser.parse(rawLog);

    const aggregatedStats: Record<string, Record<string, number>> = {};
    for (const calc of this.calculators) {
      aggregatedStats[calc.statName] = calc.calculate(figures);
    }

    this.printer.print(aggregatedStats);
  }
}

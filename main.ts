import { SimpleStringLogParser } from "./src/parser";
import {
  ConsoleReportPrinter,
  ShapeStatCalculator,
  ColorStatCalculator,
} from "./src/calculators";
import { ConveyorAnalyzer } from "./src/analyzer";

const mockLogData = `
шарик:красный
кубик:синий
пирамидка:зеленый
шарик:синий
кубик:красный
шарик:красный
`;

const parser = new SimpleStringLogParser();
const printer = new ConsoleReportPrinter();
const calculators = [new ShapeStatCalculator(), new ColorStatCalculator()];

const analyzer = new ConveyorAnalyzer(parser, calculators, printer);
analyzer.processLogs(mockLogData);

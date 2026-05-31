import { ILogParser, Figure } from "./interface";

export class SimpleStringLogParser implements ILogParser {
  public parse(rawLog: string): Figure[] {
    return rawLog
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => {
        const [shape, color] = line.split(":");
        if (!shape || !color) {
          throw new Error(`Некорректный формат строки: ${line}`);
        }
        return { shape: shape.trim(), color: color.trim() };
      });
  }
}

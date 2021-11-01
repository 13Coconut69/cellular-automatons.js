import { neighborhoodTypes } from "./enums/neighborhoodEnum";
import { nextGeneration } from "./methods/nextGeneration";

interface ISettings {
    neighborhoodType: `${neighborhoodTypes}`;
}

export class CellularAutomaton {
    public bornRule: number;
    public surviveRule: number;
    protected grid: Array<Array<number>> = [];
    protected settings: ISettings = {neighborhoodType: neighborhoodTypes.Moore};
    constructor(inceptionRule: number, surviveRule: number, gridRows: number, gridColumns: number, settings?: ISettings) {
        this.bornRule = inceptionRule;
        this.surviveRule = surviveRule;
        this.settings.neighborhoodType = settings?.neighborhoodType ?? neighborhoodTypes.Moore;
        for (let i = 0; i < gridRows; i++) {
            let row = [];
            for (let j = 0; j < gridColumns; j++) {
                row.push(0);
            }
            this.grid.push(row);
        }
    }
    /** Returns a grid of cells */
    public getGrid() {
        return this.grid;
    }
    /** Creates a cell at the specified coordinates */
    public createCell(x: number, y: number) {
        if (y > this.grid.length || x > this.grid[y].length) return Error("CAError: the entered value is larger than the size of the field");
        this.grid[y][x] = 1;
        return this.grid;
    }
    public nextGeneration = nextGeneration;
}
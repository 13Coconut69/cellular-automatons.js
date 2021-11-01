import { CellularAutomaton } from "..";
import { neighborhoodTypes } from "../enums/neighborhoodEnum";

export const nextGeneration = function (this: CellularAutomaton) {
    const width = this.grid[0].length;
    const height = this.grid.length;
    let nextGrid = [];
    for (let i = 0; i < this.grid.length; i++) {
        let line = [];
        for (let j = 0; j < this.grid[0].length; j++) {
            let countOfNeighbors = 0;
            if (i > 0) {
                countOfNeighbors += this.grid[i - 1][j];
                if (j > 0 && this.settings.neighborhoodType === neighborhoodTypes.Moore) countOfNeighbors += this.grid[i - 1][j - 1];
                if (j + 1 < width && this.settings.neighborhoodType === neighborhoodTypes.Moore) countOfNeighbors += this.grid[i - 1][j + 1];
            }
            if (i + 1 < height) {
                countOfNeighbors += this.grid[i + 1][j];
                if (j > 0 && this.settings.neighborhoodType === neighborhoodTypes.Moore) countOfNeighbors += this.grid[i + 1][j - 1];
                if (j + 1 < width && this.settings.neighborhoodType === neighborhoodTypes.Moore) countOfNeighbors += this.grid[i + 1][j + 1];
            }
            if (j > 0) countOfNeighbors += this.grid[i][j - 1];
            if (j + 1 < width) countOfNeighbors += this.grid[i][j + 1];
            if (this.grid[i][j] === 1) {
                if (String(this.surviveRule).split("").map(num => +num === countOfNeighbors).includes(true)) line.push(1);
                else line.push(0);
            } else {
                if (String(this.bornRule).split("").map(num => +num === countOfNeighbors).includes(true)) line.push(1);
                else line.push(0);
            }
        }
        nextGrid.push(line);
    }
    this.grid = nextGrid;
    return nextGrid;
}
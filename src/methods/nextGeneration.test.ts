import { CellularAutomaton } from "..";
import { neighborhoodTypes } from "../enums/neighborhoodEnum";

describe('nextGeneration() works correctly', () => {
    test('[Moore] rule B3/S23', () => {
        const ca = new CellularAutomaton(3, 23, 5, 3);
        ca.createCell(0, 0);
        expect(ca.nextGeneration()).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]);

        ca.createCell(0, 0);
        ca.createCell(0, 1);
        ca.createCell(1, 0);
        expect(ca.nextGeneration()).toStrictEqual([[1, 1, 0], [1, 1, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    });
    test('[Moore] rule B3/S123456780', () => {
        const ca = new CellularAutomaton(3, 123456780, 5, 3);
        ca.createCell(0, 2);
        ca.createCell(1, 2);
        ca.createCell(2, 2);
        expect(ca.nextGeneration()).toStrictEqual([[0, 0, 0], [0, 1, 0], [1, 1, 1], [0, 1, 0], [0, 0, 0]]);
    });
    test('[Moore] rule B5678/S45678', () => {
        const ca = new CellularAutomaton(5678, 45678, 5, 3);
        ca.createCell(0, 0);
        ca.createCell(1, 0);
        ca.createCell(2, 0);
        ca.createCell(0, 1);
        ca.createCell(2, 1);
        expect(ca.nextGeneration()).toStrictEqual([[0, 1, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    });
    test("[vonNeumann] rule B3/S23", () =>{
        const ca = new CellularAutomaton(3, 23, 5, 3, {
            neighborhoodType: neighborhoodTypes.vonNeumann
        });
        ca.createCell(0, 0);
        ca.createCell(0, 1);
        ca.createCell(1, 0);
        expect(ca.nextGeneration()).toStrictEqual([[1, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    });
    test("[vonNeumann] rule B3/S123456780", () => {
        const ca = new CellularAutomaton(3, 123456780, 5, 3, {
            neighborhoodType: neighborhoodTypes.vonNeumann
        });
        ca.createCell(0, 2);
        ca.createCell(1, 2);
        ca.createCell(2, 2);
        expect(ca.nextGeneration()).toStrictEqual([[0, 0, 0], [0, 0, 0], [1, 1, 1], [0, 0, 0], [0, 0, 0]]);
    });
});
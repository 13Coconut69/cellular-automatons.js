import { CellularAutomaton } from ".";

describe('CellularAutomaton class', () => {
    const ca = new CellularAutomaton(3, 23, 5, 3);

    describe('size of grid is correct', () => {
        test('grid has correct value of columns', () => {
            expect(ca.getGrid()[0].length).toBe(3)
        });
        test('grid has correct value of rows', () => {
            expect(ca.getGrid().length).toBe(5);
        });
    });
    test('getGrid() returns correct grid', () => {
        expect(ca.getGrid()).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    });
    test('createCell() works correctly', () => {
        ca.createCell(0, 0);
        ca.createCell(2, 4);
        expect(ca.getGrid()).toStrictEqual([[1, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 1]]);
    });
    test('nextGeneration() is exist', () => {
        expect(typeof ca.nextGeneration).toBe('function');
    });
});
import { shiftArray } from './shift-array.function';

describe('shiftArray', () => {
  it('should shift from the end to the beginning', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const expectedArray = [5, 1, 2, 3, 4];

    const result = shiftArray(originalArray, 4, 0);

    expect(result).toEqual(expectedArray);
  });

  it('should shift from the beginning to the end', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const expectedArray = [2, 3, 4, 5, 1];

    const result = shiftArray(originalArray, 0, 4);

    expect(result).toEqual(expectedArray);
  });

  it('should return passed array when startIndex and endIndex are the same', () => {
    const originalArray = [1, 2, 3, 4, 5];

    const result = shiftArray(originalArray, 0, 0);

    expect(result).toEqual(originalArray);
  });

  it('throws an error for invalid indices', () => {
    const originalArray = [1, 2, 3, 4, 5];

    expect(() => shiftArray(originalArray, -1, 4)).toThrowError('Invalid indices');
    expect(() => shiftArray(originalArray, 0, 6)).toThrowError('Invalid indices');
  });
});

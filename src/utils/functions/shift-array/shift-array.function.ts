export const shiftArray = <T>(
  array: T[],
  startIndex: number = 0,
  endIndex: number = array.length - 1,
): T[] => {
  if (startIndex < 0 || startIndex >= array.length || endIndex < 0 || endIndex >= array.length) {
    throw new Error('Invalid indices');
  }

  if (startIndex === endIndex) {
    return array;
  }

  const clonedArray = [...array];

  const [elementToMove] = clonedArray.splice(startIndex, 1);

  clonedArray.splice(endIndex, 0, elementToMove);

  return clonedArray;
};

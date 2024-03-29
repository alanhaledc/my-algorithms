import { Compare, defaultCompare } from "../../util";

export function testSortAlgorithm(
  sortAlgorithm: <T>(array: T[], compareFn?: (a: T, b: T) => Compare) => T[],
  algorithmName: string,
  config = { reverseCompare: true }
) {
  describe(algorithmName, () => {
    const SIZE = 100;

    function createNonSortedArray() {
      const array: number[] = [];
      for (let i = SIZE; i > 0; i--) {
        array.push(i);
      }
      return array;
    }

    function createSortedArray() {
      const array: number[] = [];
      for (let i = 1; i <= SIZE; i++) {
        array.push(i);
      }
      return array;
    }

    test("works with empty arrays", () => {
      expect(sortAlgorithm([], defaultCompare)).toEqual([]);
    });

    test("works with sorted arrays", () => {
      let array = createSortedArray();
      const sortedArray = createSortedArray();
      array = sortAlgorithm(array, defaultCompare);
      expect(array).toEqual(sortedArray);
    });

    test("works with non-sorted arrays", () => {
      let array = createNonSortedArray();
      const sortedArray = createSortedArray();
      array = sortAlgorithm(array, defaultCompare);

      expect(array).toEqual(sortedArray);

      for (let i = 0; i < array.length - 1; i++) {
        expect(array[i] <= array[i + 1]).toBe(true);
      }
    });

    function reverseCompare<T>(a: T, b: T): number {
      if (a === b) {
        return 0;
      }
      return a < b ? Compare.BIGGER_THAN : Compare.LESS_THAN;
    }

    if (config.reverseCompare) {
      test("works with reverse comparator - descending order", () => {
        let array = createSortedArray();
        const sortedArray = createNonSortedArray();
        array = sortAlgorithm(array, reverseCompare);

        expect(array).toEqual(sortedArray);

        for (let i = 0; i < array.length - 1; i++) {
          expect(array[i] >= array[i + 1]).toBe(true);
        }
      });
    }
  });
}

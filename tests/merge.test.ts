import { merge } from "../src/merge";

test("Merge two collections with unique elements I", () => {
  expect(merge([0, 2, 4], [1, 3])).toEqual([0, 1, 2, 3, 4]);
});

test("Merge two collections with unique elements II", () => {
  expect(merge([0, 2, 3, 5, 8, 20], [4, 6, 7, 17])).toEqual([0, 2, 3, 4, 5, 6, 7, 8, 17, 20]);  
});

test("Merge a collection with an empty collection I", () => {
  expect(merge([0, 1, 2], [])).toEqual([0, 1, 2]);  
});

test("Merge a collection with an empty collection II", () => {
  expect(merge([], [0, 1, 2])).toEqual([0, 1, 2]);
});

test("Merge two collections when the first collection is strictly less than the second collection", () => {
  expect(merge([0, 1, 2, 3], [4, 5, 6])).toEqual([0, 1, 2, 3, 4, 5, 6]);  
});

test("Merge two collections when the first collection is strictly greater than the second collection", () => {
  expect(merge([4, 5, 6], [0, 1, 2, 3])).toEqual([0, 1, 2, 3, 4, 5, 6]);
});

test("Merge two collections", () => {
  expect(merge([0, 2, 4, 4, 5, 6, 7, 7], [1, 2, 2, 4, 10, 12, 12])).toEqual([0, 1, 2, 2, 2, 4, 4, 4, 5, 6, 7, 7, 10, 12, 12]);
});
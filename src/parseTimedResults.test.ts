/* eslint-disable no-undef */
import parseTimedResults from './parseTimedResults';

it('Parses empty results', () => {
  const results: Array<[number, number]> = [];

  const parsed = parseTimedResults(results);

  expect(parsed.totalTime).toBe(0);
  expect(parsed.avg).toBe(0);
  expect(parsed.avgTime).toBe(0);
  expect(parsed.results).toBe(results);
});

it('Parses full results', () => {
  const results: Array<[number, number]> = [
    [1, 6],
    [2, 7],
    [3, 8],
  ];

  const parsed = parseTimedResults(results);

  expect(parsed.totalTime).toBe(21);
  expect(parsed.avg).toBe(2);
  expect(parsed.avgTime).toBe(7);
  expect(parsed.results).toBe(results);
});

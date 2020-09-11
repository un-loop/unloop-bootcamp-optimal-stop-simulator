const parseTimedResults = (results: Array<[number, number]>) => {
  const totalTime = results.reduce((sum, val) => (sum += val[1]), 0);

  return {
    results,
    avg: results.length
      ? results.reduce((sum, val) => (sum += val[0]), 0) / results.length
      : 0,
    totalTime: totalTime,
    avgTime: results.length ? totalTime / results.length : 0,
    percentBest:
      (results.length
        ? results.reduce((sum, val) => (val[0] === 0 ? sum + 1 : sum), 0) /
          results.length
        : 0) * 100,
  };
};

export default parseTimedResults;

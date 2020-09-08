const parseTimedResults = (results: Array<[number, number]>) => {
  const totalTime = results.reduce((sum, val) => (sum += val[1]), 0);

  return {
    results,
    avg: results.length
      ? results.reduce((sum, val) => (sum += val[0]), 0) / results.length
      : 0,
    totalTime: totalTime,
    avgTime: results.length ? totalTime / results.length : 0,
  };
};

export default parseTimedResults;

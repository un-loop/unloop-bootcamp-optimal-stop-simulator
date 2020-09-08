const bulkRunner = <T>(iterations: number) => {
  if (
    iterations < 0 ||
    isNaN(iterations) ||
    Math.floor(iterations) !== iterations
  ) {
    throw new Error('iterations must be a non-negative integer');
  }

  return (callback: () => T) => {
    const results = new Array<T>(iterations);

    for (let i = 0; i < iterations; i++) {
      results[i] = callback();
    }

    return results;
  };
};

export default bulkRunner;

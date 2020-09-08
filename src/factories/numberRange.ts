const numberRange = (low: number, high: number) => {
  if (high <= low) {
    throw new Error('high must be greater than low');
  }

  return () => Math.random() * (high - low) + low;
};

export default numberRange;

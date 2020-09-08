const timed = <T>(callback: () => T) => () => {
  const start = Date.now();
  const callbackResult = callback();
  const end = Date.now();

  const result: [T, number] = [callbackResult, end - start];

  return result;
};

export default timed;

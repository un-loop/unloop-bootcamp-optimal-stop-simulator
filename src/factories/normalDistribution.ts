import numberRange from './numberRange';
import normalinv from '../stats/normalinv';

const randomFactory = numberRange(0, 1);

const normalDistribution = (mean: number, std: number) => () => {
  const r = randomFactory();

  // get a z value for a probability density where P(x <= z) = r
  const z = normalinv(r, mean, std);
  return z;
};

export default normalDistribution;

const step = 100 / 90;

export const getPercentageFromAngle = (angle: number, minVal: number, isRev: boolean = false): number => {
  const actualDeg = angle - minVal;
  const percentage = step * actualDeg;
  return (isRev) ? (100 - percentage) : percentage;
};


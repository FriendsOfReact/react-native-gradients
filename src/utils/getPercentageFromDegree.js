const step = 100 / 90
const getPercentageFromDegree = (deg, minVal, isRev = false) => {
  const actualDeg = deg - minVal
  const percentage = step * actualDeg
  return (isRev) ? (100 - percentage) : percentage
}

export default getPercentageFromDegree

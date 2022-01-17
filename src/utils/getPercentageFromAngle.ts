const STEP = 100 / 90

export default function getPercentageFromAngle(angle: number, minVal: number, isRev = false){
  const actualDeg = angle - minVal
  const percentage = STEP * actualDeg
  return (isRev) ? (100 - percentage) : percentage
}

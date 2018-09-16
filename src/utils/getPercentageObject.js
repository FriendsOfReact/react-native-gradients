import { getPercentageFromDegree } from './index'

const getPercentageObject = (degree) => {
  let realDegree = degree
  let degreeObj = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  }

  if (realDegree <= 45) {
    realDegree += 360
  }

  if (45 < realDegree && realDegree <= 135) {
    degreeObj = {
      x1: getPercentageFromDegree(realDegree, 45),
      x2: getPercentageFromDegree(realDegree, 45, true),
      y1: 100,
      y2: 0
    }
  } else if (135 < realDegree && realDegree <= 225) {
    degreeObj = {
      x1: 100,
      x2: 0,
      y1: getPercentageFromDegree(realDegree, 135, true),
      y2: getPercentageFromDegree(realDegree, 135)
    }
  } else if (225 < realDegree && realDegree <= 315) {
    degreeObj = {
      x1: getPercentageFromDegree(realDegree, 225, true),
      x2: getPercentageFromDegree(realDegree, 225),
      y1: 0,
      y2: 100
    }
  } else if (315 < realDegree) {
    degreeObj = {
      x1: 0,
      x2: 100,
      y1: getPercentageFromDegree(realDegree, 315),
      y2: getPercentageFromDegree(realDegree, 315, true)
    }
  }

  return degreeObj
}
export default getPercentageObject

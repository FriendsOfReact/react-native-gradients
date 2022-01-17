import React, { useMemo } from 'react'
import Svg, {
  Defs,
  LinearGradient as SVGLinearGradient,
  Rect,
} from 'react-native-svg'

import { LinearGradientProps } from './types'
import getAnglePercentageObject from './utils/getAnglePercentageObject'
import generateStopList from './utils/generateStopList'

function LinearGradient({ angle, colors }: LinearGradientProps) {
  const { x1, x2, y1, y2 } = useMemo(() => getAnglePercentageObject(angle), [angle])

  const stopList = generateStopList(colors)

  return <Svg height="100%" width="100%">
    <Defs>
      <SVGLinearGradient
        id="grad"
        x1={`${x1}%`}
        y1={`${y1}%`}
        x2={`${x2}%`}
        y2={`${y2}%`}
      >
        {stopList}
      </SVGLinearGradient>
    </Defs>
    <Rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="url(#grad)"
    />
  </Svg>
}

export default LinearGradient

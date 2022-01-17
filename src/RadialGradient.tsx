import React from 'react'
import Svg, {
  Defs,
  RadialGradient as SVGRadialGradient,
  Rect
} from 'react-native-svg'

import { RadialGradientProps } from './types'
import generateStopList from './utils/generateStopList'

export default function RadialGradient({
  colors,
  x,
  y,
  rx,
  ry
}: RadialGradientProps) {
  const stopList = generateStopList(colors)

  return <Svg height="100%" width="100%">
    <Defs>
      <SVGRadialGradient
        id="grad"
        cx={x}
        cy={y}
        rx={rx}
        ry={ry}
        gradientUnits="userSpaceOnUse"
      >
        {stopList}
      </SVGRadialGradient>
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

import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import Svg, { Defs, LinearGradient as SVGLinearGradient, Rect, Stop } from 'react-native-svg'
import { getAnglePercentageObject } from './utils'

function LinearGradient({ angle, colorList }) {
  const { x1, x2, y1, y2 } = useMemo(() => getAnglePercentageObject(angle), [angle])

  return (
    <Svg height="100%" width="100%">
      <Defs>
        <SVGLinearGradient
          id="grad"
          x1={`${x1}%`}
          y1={`${y1}%`}
          x2={`${x2}%`}
          y2={`${y2}%`}
        >
          {colorList.map((value, index) => <Stop
            key={`LinerGradientItem_${index}`}
            offset={value.offset}
            stopColor={value.color}
            stopOpacity={value.opacity}/>)}
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
  )
}

LinearGradient.propTypes = {
  angle: PropTypes.number,
  colorList: PropTypes.array
}

export default LinearGradient

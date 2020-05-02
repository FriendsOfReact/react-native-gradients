import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Svg, { Defs, LinearGradient as SVGLinearGradient, Rect, Stop } from 'react-native-svg'
import { getAnglePercentageObject } from './utils'

class LinearGradient extends Component {

  render () {
    const { angle, colorList } = this.props
    const angleObj = getAnglePercentageObject(angle)

    return (
      <Svg height="100%" width="100%">
        <Defs>
          <SVGLinearGradient
            id="grad"
            x1={`${angleObj.x1}%`}
            y1={`${angleObj.y1}%`}
            x2={`${angleObj.x2}%`}
            y2={`${angleObj.y2}%`}
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
}

LinearGradient.propTypes = {
  angle: PropTypes.number,
  colorList: PropTypes.array
}

export default LinearGradient

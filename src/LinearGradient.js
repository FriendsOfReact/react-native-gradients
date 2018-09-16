import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Svg, { Defs, LinearGradient as SVGLinearGradient, Rect, Stop } from 'react-native-svg'
import { getPercentageObject } from './utils'

class LinearGradient extends Component {

  render () {
    const {degree, colorList} = this.props
    const degreeObj = getPercentageObject(degree)

    return (
      <Svg height="100%" width="100%">
        <Defs>
          <SVGLinearGradient
            id="grad"
            x1={`${degreeObj.x1}%`}
            y1={`${degreeObj.y1}%`}
            x2={`${degreeObj.x2}%`}
            y2={`${degreeObj.y2}%`}
          >
            {colorList.map(value => <Stop offset={value.offset} stopColor={value.color}
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

Gradient.propTypes = {
  degree: PropTypes.number,
  colorList: PropTypes.array
}

export default LinearGradient

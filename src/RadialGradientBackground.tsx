import React from 'react'
import { StyleSheet, View } from 'react-native'

import RadialGradient from './RadialGradient'
import { RadialGradientBackgroundProps } from './types'

function LinearGradientBackground({
  colorList,
  x,
  y,
  rx,
  ry,
  children,
  ...props
}: RadialGradientBackgroundProps) {
  return <View {...props}>
    <View style={StyleSheet.absoluteFill}>
      <RadialGradient
        colorList={colorList}
        x={x}
        y={y}
        rx={rx}
        ry={ry} />
    </View>
    {children}
  </View>
}

export default LinearGradientBackground

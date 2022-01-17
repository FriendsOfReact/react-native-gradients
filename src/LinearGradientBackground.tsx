import React from 'react'
import { StyleSheet, View } from 'react-native'

import LinearGradient from './LinearGradient'
import { LinearGradientBackgroundProps } from './types'

function LinearGradientBackground({
  angle,
  colorList,
  children,
  ...props
}: LinearGradientBackgroundProps) {
  return <View {...props}>
    <View style={StyleSheet.absoluteFill}>
      <LinearGradient angle={angle} colorList={colorList}/>
    </View>
    {children}
  </View>
}

export default LinearGradientBackground

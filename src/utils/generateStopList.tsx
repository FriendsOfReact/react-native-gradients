import React, { useMemo } from "react"
import { Stop } from "react-native-svg"

import { ColorStops } from "../types"

export default function generateStopList(stops: ColorStops) {
  return useMemo(() => stops.map((value, index) => <Stop
    key={String(index)}
    offset={value.offset}
    stopColor={value.color}
    stopOpacity={value.opacity} />), [stops])
}

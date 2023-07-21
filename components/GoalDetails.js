import { View, Text } from 'react-native'
import React from 'react'

export default function GoalDetails({route}) {
  return (
    <View>
      <Text>GoalDetails {route.params.titl}</Text>
    </View>
  )
}
import { View, Text } from 'react-native'
import React from 'react'

export default function Header(p) {
  return (
    <View>
      <Text>Welcome to {p.nam}</Text>
      {p.children}
    </View>
  )
}
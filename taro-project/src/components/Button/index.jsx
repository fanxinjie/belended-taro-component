import React from 'react';
import Taro from '@tarojs/taro'
import { View, Slot } from '@tarojs/components'

export default function (props) {
  console.log('props', props)
  return (
    <View>
      <View>Button demo</View>
      {/* <Slot name="default" /> */}
      {props.children}
    </View>
  )
}

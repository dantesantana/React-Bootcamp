import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//don't make this a default function, why not though?
export function Article(props) {
  return (
    <View>
      <Text>
        {props.title} by {props.by} @ {props.url}        
      </Text>
    </View>
  )
}

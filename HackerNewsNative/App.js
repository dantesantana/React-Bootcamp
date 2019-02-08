import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//don't forget the "./" in front of directory names... heck
import { Article } from './Article/index.js';

/*
function Article(props) {
  return (
    <View>
      <Text>
        {props.title} by {props.by} @ {props.url}        
      </Text>
    </View>
  )
}
*/

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Article
          by="Josh"
          key="1"
          title="Cool Article"
          url="josh.com"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

---
path: "/chapters/port-the-rest"
date: "2018-03-22"
title: "Port The Rest"
---

# Port The Rest

This chapter will guide you towards porting the rest of the app to react-native. But the work will be mostly self taught.

## Making the `Article`'s link

React Native doesnt have a link component unfortunately, but we can use a 'pressable' component with the `Linking` utility.

Lets look at `TouchOpacity`. Docs [here](https://facebook.github.io/react-native/docs/touchableopacity.html). The docs point out that the `TouchableOpacity` component can be used as a wrapper for making a view respond to touches. Lets use this to trigger our `Articles` link functionality. We should wrap our Articles root `View` component in a `TouchableOpacity` and assign a `onPress` handler to it. It can do nothing for now though.

Now lets look at `Linking`. Docs [here](https://facebook.github.io/react-native/docs/linking.html). While our app is not a browser so it cannot just open links. using this library we can ask the OS if there is an app that can handle opening our link. To achieve this the functions of interest here are. `Linking.canOpenURL()` and `Linking.openURL()`.


```js
class SomeComponent extends React.Component {
  handleOnPress = () => {
    Linking.canOpenURL(this.props.url).then((can) => {
      if (!can) {
        return
      }

      Linking.openURL(this.props.url);
    })
  }

  // rest of component definition
}
```


## The Container

This part should be pretty straight forward we can basically use exactly what we did in the plain react version. I would recommend using the `App` component as our container. I would recommend visiting [chapter-five](./chapter-five.md) & [chapter-six](./chapter-six.md) again for this.


## The Filter

This will be a little more tricky. We can use the same pattern as we did in [chapter-seven](./chapter-seven.md). However, we will need to use a different primitive component. I would recommend looking at `TextInput`. Make sure to study the documents carefully there are some subtle differences. Docs are [here](https://facebook.github.io/react-native/docs/textinput.html)


## The End

If you've made it this far, seriously, well done ✨✨✨. I hope you have had an awesome time working on the bootcamp content. Feel free to keep working on the app and make whatever changes you like. Also don't hesitate to bug any of us if you want ideas on what to build next, have questions about react or react native, or want to know more about Tanda. We are also happy for feedback on the content. Cheers 🤙.

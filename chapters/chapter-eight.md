---
path: "/chapters/native"
date: "2018-03-22"
title: "Native"
index: 8
---

# Native

By the end of this chapter you will have a native [expo](https://expo.io) project set up so you can start porting your react app to native.

# Setting Up
First run `yarn global add create-react-native-app`. this will install the global tool for bootstrapping a react-native project.

Then we can create a project running `create-react-native-app HackerNewsNative`. Its best to run this outside the bootcamp directory. This will take some time but will get everything set up for your native project. While this is building, install the expo app on your iphone/android. We will use this to develop our app.

Once the project is setup, change to the directory of the native project and run `yarn start`. This should start bundling you application and eventually show a QR code on the screen. From there all we need to do is scan it using the expo app and were up and running.


# The Differences

Inside our new react-native project the first file to check out is App.js. This contains the whole app that is currently on you phone screen.

The first thing you will probably notice is the stylesheet. Because there is no CSSOM in native apps, react native exposes an API similar to normal stylesheets. This is how well be styling our native version of the app.

The next thing you will probably notice is the `App` component is made up of components called `View` and `Text`, This is because, again, there is no concept of divs and spans in native apps. All the base level components are based off native components thus have different names and api's.

Apart from these two changes the majority of things are the same as plain React.

# Excercise

Lets try port our `Article` component over to react native by building it with `View` & `Text` elements. Dont worry about link functionality or styles we will look at these soon. Lets also try and render one in our `App` component (just make up the props).

**_Additional Excercise_**

We should refactor our Native `Article` component into its own module at `Components/Article/index.js` (notice its not `jsx` in react-native).

# Native Styles

In this chapter we will look at building native 'stylesheets' to customize our article.


# Styles Values

Colors in react native styles are exactly the same as web, all common formats are accepted. Docs [here](https://facebook.github.io/react-native/docs/colors.html).

```js
import { Stylesheet } from 'react-native';

const styles = Stylesheet.create({
  colors: {
    white: '#ffffff',
    black: 'rgb(0, 0, 0)',
  },
});
```

Measurements however are different. measurements are done in numbers, and roughly represent the px measurement in web.

```js
import { Stylesheet } from 'react-native';

const styles = Stylesheet.create({
  measures: {
    lrg: 32,
    med: 16,
    sml: 8,
  },
});

```

Layout is purely flex based (this is good 🤙). there is no support for any other layout.

```js
import { Stylesheet } from 'react-native';

const styles = Stylesheet.create({
  // we can use `mainLayout` as a style object
  mainLayout: {
    flex: 1,                   // fill container priority of 1
    flexDirection: 'column',   // vertical layout
    justifyContent: 'center',  // center children primary axis
    alignItems: 'center',      // center children on alternate axis
  }
});
```

To use our stylesheet we can apply a member of our stylesheet to a component's style property.

```js
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './styles';

export default function Article() {
  return (
    <View style={styles.mainLayout}>
      <Text>
        Rest of `Articles` definition
      </Text>
    </View>
  );
}
```

# Documentation

The most exaustive documentation on styling in react native can be found at [here for layout](https://facebook.github.io/react-native/docs/layout-props.html), [here for views](https://facebook.github.io/react-native/docs/view-style-props.html), [here for text](https://facebook.github.io/react-native/docs/text-style-props.html). Otherwise to style a specific component check the component's own documentation. There should be a section on styling it.


# Excercise

Lets go ahead and get our native `Article` component looking bling 💅💅💅.


**_Additional Excercise_**

We should refactor our Native `Article` component's stylesheet into its own module at `Components/Article/styles.js`.

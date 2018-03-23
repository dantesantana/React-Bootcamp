---
path: "/chapters/modules-and-styles"
date: "2018-03-22"
title: "Modules & Styles"
index: 3
---

# Modules & Styles

Now that we have learnt how to build a component. we could start ***flooding our index file with components***, or we can learn how to better structure our components using modules. Along with learning how to structure our components, we will be learning how to write our styles as modules too.

## Structuring Our Components
To structure our components we will create a folder called Components. Inside that, we will create a folder specific to each component. the folder will then contain an `index.jsx` (where the definition of the react component will be exported) and a `styles.css` (where our styles specific to this component will live). The structure should look like this.

```
source/
  |- Component/
    |- Article/
      |- index.jsx
      |- styles.css
  |- index.jsx

```

## Modules
React components are designed to be used just like any standard export in javascript.

how to export a component:

```jsx
// source/Component/SpicyHot/index.jsx
export default function SpicyHot() {
  return (
    <span>🌶</span>
  );
}

```
how to import a component from another file and use it:
```jsx
// source/index.jsx
import React from "react";
import ReactDom from "react-dom";

import SpicyHot from "./Component/SpicyHot";

ReactDom.render(
  <SpicyHot />,
  document.getElementById('root'),
);

```

## Exercise
Lets try and refactor `Article` out of `source/index.js` and into `source/Components/Article/index.jsx`

## Modular Styles
So far we have made a pretty plain `Article` component. To make it look a little neater we will be adding some styles 💅. To do this we will be writing our css as modules. This is setup in the [webpack](../webpack.config.js) configuration. However configuring webpack is out of the scope of this lesson. The way css modules works is you write plain css and then import it into your component like you would with js. you can then access your class names as if they were members of the import.

```css
/* source/Components/Article/styles.css */
.myClass {
  border: 0.125rem dashed red;
}

```
```jsx
// source/Components/Article/index.jsx
import styles from './styles.css';

// we can now set our components classes using our class
export default function Article(props) {
  return (
    <div className={styles.myClass}>
      ...rest of `Article`'s definition
    </div>
  )
}

```

## Exercise
Build out the styles for the article component. the article should look something like one of these (or not really up to you 💅):

![article-design](../images/article-design.png)

**_Additional Excercise_**

Render three artciles with unique content like in the image above (just make the content up 💩)

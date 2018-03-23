---
path: "/chapters/my-first-element"
date: "2018-03-22"
title: "My First Element"
index: 0
---

# My First Element

By the end of this chapter we will have implemented and rendered our first react element 👍.

## Background

First things first, let's get familiar with the current code. There are two files of interest:

- dist/index.html
- source/index.js


If we look in `dist/index.html`, you will notice it is just an empty html page. The only thing it does do, is include one script tag. This script file that we are loading though, is where the interesting stuff happens. That script file is the compiled version of our apps source code!

At this point in time our source code is completely in `source/index.js`. If we look in that file, we will see just one function that updates the page to include the 'Hello Hacker News' message.

This is where we are going to create our first react element, and render it to the page.

## Getting Started

We will need to add react and react-dom to our app if we want to use them. To add them run `yarn add react react-dom`.

Now lets import them into `source/index.js`.

```jsx
// at the top of the file
import React    from 'react';
import ReactDOM from 'react-dom';
```

Cool. We now have the React, and ReactDOM libraries accesible to us in our module.

## Creating a React Element

To create a react element, React exposes a function called createElement. An example usage would be:

```jsx
import React from 'react';

const myReactElement = React.createElement(
  'div',                 // this element we want to create
  { onClick: fizzBuzz }, // the properties we want to add to the element
  'Hey World!'           // a child element
);

```

To explain what the above element would look like when rendered to the page:

```html
<!--
  NOTE: notice how `onClick` changed to onclick. React will expect known
  properties to be in camelCase even though html does not.
-->
<span onclick="fizzBuzz">
  Hello Hacker News
</span>

```

## Rendering An Element To The Page

To render an element to the page. ReactDOM exposes a function called render. An example usage would be:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const myReactElement = React.createElement('div', {}, null);

ReactDOM.render(
  myReactElement, // what we react element we want to render
  document.body   // where we want to render on the page
);
```



> NOTE: The above code would replace everything inside the body of the page with what our react element would render as. Its considered bad practice to render to document.body. We should add our own node to the page specifically for rendering our react application too.
>
>  ```html
>  <!-- in our dist/index.html -->
>  <body>
>    <!-- Typically we would add a 'mount' node here and render to that -->
>    <div id="App"></div>
>    <script src="bundle.js"></script>
>  </body>
>  ```
>  ```jsx
>  ReactDOM.render(myReactElement, document.getElementById('App'));
>  ```
>

## Exercise

Before we move onto the next chapter lets replace the current Hello Hacker News message, with an implementation, written in react!

**_Additional Excersice_**

To get more familiar with the API for create element. Try:

- render a button to the page that opens an alert on click
- render an element that has another element as its child.

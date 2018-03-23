---
path: "/chapters/what-is-jsx"
date: "2018-03-22"
title: "What is JSX"
---

# What is JSX

Generally when we write react, we do not use plain js, but an extended version known as JSX. By the end of this chapter you should be familiar with the JSX syntax.

# Why

Why do we need JSX if we can write javascript. The reason is plain javascript can become hard to read very quickly. Heres an example of plain javascript vs JSX.

```jsx
import React from 'react';

// plain js
const myReactEl = React.createElement(
  'div',
  { className: 'box' },
  React.createElement(
    'div',
    { className: 'message' },
    React.createElement(
      'div',
      {},
      'React Hacker News',
    )
  )
)

// JSX
const myReactEl = (
  <div className="box">
    <div className="message">
      <span>Hello Hacker News</span>
    </div>
  </div>
)
```

As you can see JSX actually looks a lot like html. How does this work though if the browser doesnt understand JSX? Basically the JSX version above is converted into the plain js version for us by webpack 🤙.


> NOTE: A quirk about JSX. You will find you will never call `React.createElement()` when writing JSX, regardless though, you still need to import `React`. The reason being, when the code is converted to plain js, your code will be using it!

# Javascript inside JSX

Now that we have learnt what JSX is, what if we want to add some js inside our JSX. This is possible by escaping our JSX with `{}`. Some examples:


```jsx
const myReactEl = (
  <div>
    {'Hello Hacker ' + something()}
  </div>
)


const myReactEl = (
  <div className={getMyHackerNewsClass()}>
    Hello Hacker News
  </div>
)
```

One common pattern you will find in JSX is:

```jsx
const myReactEl = (
  <div>
    {isHackerNewsReader() ? (
      <span>
        Hello Hacker News Reader
      </span>
    ) : (
      <span>
        Hello Random Person
      </span>
    )}
  </div>
)
```


## Excercise

Lets try updating our hello hacker news message to be written in JSX.

**_Additional Excercise_**

- Try rendering a button with JSX that opens an alert saying `Hello Hacker News`.
- Try rendering a counter, and a button that increments the counter. (Your onClick handler may need to re-render you JSX, to update your counter).

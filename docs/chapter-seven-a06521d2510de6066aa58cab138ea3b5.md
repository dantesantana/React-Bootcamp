---
path: "/chapters/controlled-inputs"
date: "2018-03-22"
title: "Controlled Inputs"
index: 7
---

# Controlled Inputs

In this chapter we will be learning how input state is managed in react.


## Inputs In React vs Standard Web

In react inputs behave quite different to standard web inputs. Standard web inputs, for example, completely maintain there own state. This is not the normal case in react. Inputs are typically assigned there current state via the 'value' props.

```jsx
<input
  value='the text that is currently in the input'
/>
```

The reason for this is, when we write react, we subscribe to a architecture concept known as unidirectional data flow.

# Unidirectional Data Flow

When following the unidirectional data flow paradigm, state is passed to the view and then handlers can update the state, causing a cycle of the view.

              /---------\
              |  STORE  | <---------|
              \---------/           |
                   |                |
                   |            /--------\
                   |----------> |  VIEW  |
                                \--------/

This pattern removes the coupling of the view from store and also simplifies the flow of data.

# An Example

Best practice would be to store the state of our input in our container and to pass a handler defined on our container to the inputs onChange property. Heres an example:


```jsx
import React from 'react';

// our view
function Username({ onChange, value }) {
  return (
    <input
      onChange={onChange}
      value={value}
    />
  );
}

// our container
class Container extends React.Component {
  constructor(props) {
    super(props);
    // NOTE: if we want to call setState in our handler we
    //       will need to bint the handler to `this`
    this.onFilterChange = this.onFilterChange.bind(this)
    this.state = { username: '' }
  }

  onFilterChange(event) {
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <Username
        onChange={this.onFilterChange}
        value={this.state.username}
      />
    )
  }
}

```

## Excercise

Lets add a filter input to our article list and use the value to filter the list of articles we display by name.

**_Additional_excercise_**

If we search and there are no articles that match the filter we should show an empty state. Try add one.

![article-filter](../images/article-filter.gif)

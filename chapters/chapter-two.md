# Component Architecture

So far we have learnt how to create a react element, but to build a whole app without some component architecture would be madness. By the end of this chapter you should have a reasonable understanding of the core features that make up the react component architecture.

## The simplest of component types

Building on chapter one, we have so far just built a simple react element.

```jsx
const myReactElement =
  <div>
    <span>
      Hello Hacker News
    </span>
  </div>
```

If we were to make this into a reusable component, all we need to do is make this into a function that starts with a capital and returns our react element.

```jsx
function Element() {
  return (
    <div>
      <span>
        Hello Hacker News
      </span>
    </div>
  )
}
```
> NOTE: in jsx, components that start with a lower letter have their name converted into a string (when compiled), thus it is important that your component starts with a capital to retain reference.

Usage of our component:

```jsx
// we can use it on its own
const element = <Element />

// or we can use three of them
const threeElements =
  <div>
    <Element />
    <Element />
    <Element />
  </div>
```

As you can see this gives us the ability to re-use a specific visual arrangement. In the current example we have used the built in components that create all the current html element types. But this is not a limitation of components. They can be a composition of builtins __or__ other react components.

Using this concept (along with some other nifty tricks) throughout the bootcamp we will be working towards building one large component composing our entire user interface.

![mind blown](https://media0.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif)

**_Additional Exercise_**

How about we try making the `threeElements` example into its own component?

## Component Properties

Apart from the ability to compose, components also have an interface to make them behave differently depending on attributes we assign them. These attributes are defined just like html attributes are (reminder attributes are _camelCase_ in react)

```jsx
// html attributes
<input onclick={myFunc} />

// jsx properties
<input onClick={myFunc} />
```

If we wanted our `Element` to use properties defined on it we need to update the definition. The properties that get defined on the component are all passed as the first argument of our component in an object. We can then use them in the component by setting properties on its internal components, as text nodes, or for conditionals. Heres an example:

```jsx
// as you can see the component is accessing a property called message
// and displaying it as a text node inside a div.
function Element(props) {
  return (
    <div>
      {props.message}
    </div>
  )
}

// We can now define message and the component
// will use it.
const element =
  <Element
    message="Hello Hacker News"
  />

// Another example
const element =
  <div>
    <Element
      message="Article 1"
    />
    <Element
      message="Article 2"
    />
    <Element
      message="Article 3"
    />
  </div>

// NOTE: you will notice, unlike html, any tag can be self closing like out `Element` ones here.
```

## Exercise

Try making a component that:
- is called `Article`
- accepts three properties:
  * title
  * by
  * url
- returns an element displaying the title, by and link (link should be clickable).

Then try rendering it! Dont worry about making it 💅 (pretty) we will be looking at this next.

**_Additional Exercise_**

The component type we have used at this stage is known as a stateless component. Try defining a Stateful Component by writing a class that extends `React.Component`. You can look at the api [here](https://reactjs.org/docs/components-and-props.html). These allow for a whole range of more complex features.

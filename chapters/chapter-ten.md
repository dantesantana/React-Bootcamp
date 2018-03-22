# Native Primitives

In react native we dont have `div` or `span`, but we do have `Text`, `View` and a whole lot of other primitive components. In this chapter we will put together our NewsFeeed using some of these.


# Native Lists

For this chapter it might be worth using our mocked article list again.

```js
const ARTICLES = [
  {
    by: 'Annie A',
    id: 1,
    title: 'Some Cool Techy Stuff',
    url: 'https://google.com',
  },
  {
    by: 'Diddy P',
    id: 2,
    title: 'Digital Rap',
    urk: 'https://google.com',
  },
  {
    by: 'Hoolio H',
    id: 3,
    title: 'Yeh Cool Keen',
    url: 'https://google.com',
  },
];
```

And to implement the list instead of just mapping our data to our `Article` components, we will use a react native component called `FlatList`. Docs are [here](https://facebook.github.io/react-native/docs/flatlist.html).

## Why Use Flat List

When we map our list to `Article` components the normal way is to add them all to the parent view. This is not ideal when we have a large list. It can make react become quite slow. A way around this is to render only the part of the list the user wants to see. This is the job of `FlatList`. we can use this to better manage our list of views and render only the on screen stuff.

## Flat List Example

```js
class SomeList extends React.PureComponent {
  renderItem = ({ item }) => (
    <MyListItem
      key={item.id}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
      />
    );
  }
}
```

In the example above the array of data we want to map is what we pass to our `FlatList` component. and the `renderItem` prop is where we pass the function we normally would pass to map. With the slight difference that our function should expect an object containing the data on the member `item`.


## Excercise

Lets build our `NewsFeed` component with a `FlatList` implementation. and render it from `App`.

**_Additional Excercise_**

Refactor `NewsFeed` into `Views/NewsFeed/index.js`.

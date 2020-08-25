# react-class-functional
A Babel plugin to convert React class components to functional components

**WARNING** I wouldn't recommend using this as anyother Babel plugin in your workflow, because this does not convert everything and you will most likely need to do cleaning up and such especially if your component is very complex.

This Babel plugin can convert this:
```javascript
import React from "react";

const Hey = React.createClass({
  componentDidMount() {
    console.log("a");
    console.log("b");
  },

  render() {
    return React.createElement("div", null, "Hey!");
  },
});

export default Hey;
```
to this:
```javascript
import React from "react";

function Hey(props) {
  function componentDidMount() {
    console.log("a");
    console.log("b");
  }

  useEffect(componentDidMount);
  return React.createElement(
    "div",
    null,
    "Hey!"
  );
}

export default Hey;
```

# Installation
`npm i react-class-functional`

## Usage

It is highly recommended to write a script like `runOnComponent.js` to convert your components. Your components cannot use ES6 class statements so make sure you have something to convert it to `const componentNameHere = React.createClass({dataHere})`. You cannot use normal JSX expressions so you should probably use a tool like `babel-plugin-transform-react-jsx` to convert JSX to `React.createElement` statements.

# Contributing
If you want to add a new feature or integrate more hooks you can just open a pull request.
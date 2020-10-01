import React from "react";

const Hey = React.createClass({
  componentDidMount() {
    console.log("a");
    console.log("b");
  },

  componentWillUnmount() {
    console.log("Hey component unmounted")
  },

  render() {
    return <div>Hey!</div>;
  },
});

export default Hey;

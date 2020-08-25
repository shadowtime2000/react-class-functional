import React from "react";

const Hey = React.createClass({
  componentDidMount() {
    console.log("a");
    console.log("b");
  },

  render() {
    return <div>Hey!</div>;
  },
});

export default Hey;

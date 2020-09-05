import React, { Component } from "react";

export default class c extends Component {
  render() {
    return (
      <div>
        client c with
        <br />
        <button>get C</button>
      </div>
    );
  }
}

c.getInitialProps = ({ query }) => {
  return { myParams: query };
};

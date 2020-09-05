import React, { Component } from "react";
import axios from "axios";
export default class a extends Component {
  //const a = props.myParams.id.A;
  //console.log(props.myParams.id.A);
  state = {
    data: "i will change if you press A",
  };
  GetA = async () => {
    axios.get("/data").then((res) => {
      this.setState({ data: res.data.data });
    });
  };
  render() {
    return (
      <div>
        {this.state.data}
        <br />
        <button onClick={() => this.GetA()}>get A</button>
      </div>
    );
  }
}

a.getInitialProps = ({ query }) => {
  return { myParams: query };
};

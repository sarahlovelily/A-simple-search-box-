import React, { Component } from "react";
import axios from "axios";

export default class Results extends Component {
  state = {
    results: ""
  };
  async componentDidMount() {
    const { query } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query}`
    );
    this.setState({
      results: res.data.title
    });
  }
  render() {
    const { results } = this.state;
    return <div className="mt-4">This is a {results}</div>;
  }
}

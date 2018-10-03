import React, { Component } from "react";
import { Form, Input, InputGroup, InputGroupAddon } from "reactstrap";
import _ from "lodash";

// import axios from "axios";

const keyword = [
  { id: 1, value: "home loan" },
  { id: 2, value: "bank rates" },
  { id: 3, value: "home calculate" },
  { id: 4, value: "bank calc" }
];

export default class Search extends Component {
  state = {
    query: "",
    keyShow: ""
  };

  inputChange = () => {
    const query = this.search.value;

    const keys = keyword.filter(key =>
      _.includes(key.value, query ? query : undefined)
    );
    this.setState({
      query,
      keyShow: keys
    });
  };

  onSubmit = async e => {
    const { query } = this.state;
    e.preventDefault();
    this.props.history.push(`/results/1`);
    this.setState({
      query: "",
      keyShow: ""
    });
  };

  onSugClick = id => {
    const suggestionSelected = keyword.find(key => key.id === id).value;
    this.setState({
      query: suggestionSelected
    });
  };

  render() {
    const { query, keyShow } = this.state;

    return (
      <div>
        <Form onSubmit={this.onSubmit} className="searchbar">
          <InputGroup>
            <Input
              type="text"
              name="search"
              id="search"
              innerRef={input => (this.search = input)}
              onChange={this.inputChange}
              value={query}
            />
            <InputGroupAddon addonType="append" onClick={this.onSubmit}>
              Search
            </InputGroupAddon>
          </InputGroup>
        </Form>

        <ul>
          {keyShow
            ? keyShow.map(key => (
                <li key={key.id} onClick={this.onSugClick.bind(this, key.id)}>
                  {key.value}
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  }
}

import React from "react";
import SuggestionDropdown from "./suggestion_dropdown";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.suggestionDropdown = this.suggestionDropdown.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateFilter("search", this.state.search);
    this.setState({ search: "" });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value }, () => {
        const search_obj = { search: this.state.search };
        this.props.getSearchSuggestions(search_obj);
      });
    };
  }

  render() {
    return (
      <div className="searchbar-container">
        <form onSubmit={this.handleSubmit}>
          <div className="tb">
            <div className="td">
              <input
                type="text"
                placeholder="Find a surf spot near Los Angeles or Oahu"
                onChange={this.update("search")}
                className="searchbar"
                value={this.state.search}
                id="search"
              />
            </div>

            <div className="td" id="s-cover">
              <button
                type="submit"
                value="Find a spot"
                className="searchbar-btn"
              >
                <div id="s-circle" />
                <span />
              </button>
            </div>
          </div>
        </form>
        {this.suggestionDropdown()}
      </div>
    );
  }

  suggestionDropdown() {
    return this.state.search ? (
      <SuggestionDropdown suggestions={this.props.suggestions} />
    ) : null;
  }
}

export default SearchBar;

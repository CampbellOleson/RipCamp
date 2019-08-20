import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      city: "los angeles"
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.search === "") {
      const selectedValue = document.getElementById("city-search").value
      console.log(selectedValue);

    } else {
      this.props.updateFilter("search", this.state.search);

    }
    // .then(this.props.history.push(`/spots?search=${this.state.search}`));
  }

  componentDidUpdate() {
    // this.props.updateFilter("search", this.state.search);
  }

    update(field) {
    // this.props.getSearchSuggestions() -- For dynamic dropdown
    return e => {
      this.setState({ [field]: e.target.value });
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
                id="search"
              />
            </div>

            <div className="td" id="city-drop">
              <select name="city" id="city-search">
                <option value="los angeles" selected>Los Angeles</option>
                <option value="oahu">Oahu</option>
              </select>
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
      </div>
    );
  }
}

export default SearchBar;

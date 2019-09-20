import React from "react";
import SuggestionDropdown from "./suggestion_dropdown";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      city: "City"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.suggestionDropdown = this.suggestionDropdown.bind(this);
    this.updateCity = this.updateCity.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const selectedCity = document.getElementsByClassName("city-search")[0]
      ? document.getElementsByClassName("city-search")[0].value
      : null;
    if (this.state.search === "" && this.state.city === "City") {
      this.props.history.push("/spots");
    } else if (this.state.search === "" && selectedCity) {
      this.setState({ city: selectedCity });
      this.props
        .updateFilter("search", this.state.city)
        .then(() => this.props.history.push("/spots"));
    } else {
      this.props
        .updateFilter("search", this.state.search)
        .then(() => this.props.history.push("/spots"));
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value }, () => {
        const search_obj = { search: this.state.search };
        this.props.getSearchSuggestions(search_obj);
      });
    };
  }

  updateCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  render() {
    let searchClass, cityClass, searchbarClass, searchbtnClass, inputClass;

    if (this.props.location.pathname === "/") {
      searchClass = "searchbar-container";
      cityClass = "city-search";
      searchbarClass = "searchbar";
      searchbtnClass = "searchbar-btn";
      inputClass = "input";
    } else {
      searchClass = "navbar-searchbar-container";
      cityClass = "navbar-city-search";
      searchbarClass = "navbar-searchbar";
      searchbtnClass = "navbar-searchbar-btn";
      inputClass = "navbar-input";
    }

    return (
      <div className={searchClass}>
        <form onSubmit={this.handleSubmit} className="search">
          <div className={inputClass}>
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Find your favorite surf spot"
              onChange={this.update("search")}
              className={searchbarClass}
              value={this.state.search}
              id="search"
            />
          </div>

          <div className="city-drop-box">
            <select
              name="city"
              className={cityClass}
              onChange={this.updateCity}
              value={this.state.city}
            >
              <option value="City" disabled>
                Select a city
              </option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Oahu">Oahu</option>
              <option value="Bay Area">Bay Area</option>
              <option value="Florida">Florida</option>
              <option value="Portugal">Portugal</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          <button type="submit" className={searchbtnClass}>
            Search
          </button>
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

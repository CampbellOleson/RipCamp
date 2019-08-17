import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.updateFilter("search", this.state.search)
        // .then(this.props.history.push(`/spots?search=${this.state.search}`));
    }

    componentDidUpdate() {
        // this.props.updateFilter("search", this.state.search);
    }


    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }


  render() {
    return (
      <div className="searchbar-container">
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Find a surf spot near Los Angeles or Hawaii"
                    onChange={this.update('search')}
                    className="searchbar"

                />

                <input type="submit" value="Find a spot" className="searchbar-btn" />
            </form>
      </div>
    );
  }
}

export default SearchBar;

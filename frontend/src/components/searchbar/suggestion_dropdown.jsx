import { Link, withRouter } from "react-router-dom";
import React from "react";

const SuggestionIndexItem = props => (
  <div className="suggestion_index_item">
    <Link className="suggestion_link" to={`spots/${props.suggestion._id}`}>
      <div className="suggestion_content_container">
        <i class="fas fa-map-marker-alt"></i>
        <p className="suggestion_name">{props.suggestion.name}</p>
        <p className="suggestion_city">{props.suggestion.city}</p>
        <img src={props.suggestion.photos[0]} className="thumbnail_photo" alt=""/>
      </div>
    </Link>
  </div>
);

const SuggestionDropdown = props => {
  let dropdownClass;
  console.log(props);
  if (props.location.pathname === "/") {
    dropdownClass = "suggestion_dropdown"
  } else {
    dropdownClass = "navbar-dropdown"
  }

  return props.suggestions.length > 0 ? (
    <div className={dropdownClass}>
      {props.suggestions.map(suggestion => (
        <SuggestionIndexItem suggestion={suggestion} onClick={() => this.props.suggestion = null} />
      ))}
    </div>
  ) : (
    <div className="suggestion_dropdown">
      <p id="no_search_results">
        Can't find your favorite spot to shred?
      </p>
    </div>
  );
};

export default withRouter(SuggestionDropdown);

import { Link, withRouter } from "react-router-dom";
import React from "react";

const SuggestionIndexItem = props => {
  return (
    <div className="suggestion_index_item">
      <Link className="suggestion_link" to={`/spots/${props.suggestion._id}`}>
        <div className="suggestion_content_container">
          <i className="fas fa-map-marker-alt"></i>
          <p className="suggestion_name">{props.suggestion.name}</p>
          <p className="suggestion_city">{props.suggestion.city}</p>
          <img
            src={props.suggestion.photos[0]}
            className="thumbnail_photo"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

const SuggestionDropdown = props => {
  let dropdownClass;

  if (props.location.pathname === "/") {
    dropdownClass = "suggestion_dropdown";
  } else {
    dropdownClass = "navbar-dropdown";
  }

  // const resetsearch = () => {
  //   let search = document.getElementById("search");
  //   search.value = "";
  // };

  return props.suggestions.length > 0 ? (
    <div className={dropdownClass}>
      {props.suggestions.map((suggestion, i) => (
        <SuggestionIndexItem
          suggestion={suggestion}
          key={i}
        />
      ))}
    </div>
  ) : (
    <div className={dropdownClass}>
      <p className="no-search-results">
        Can't find your favorite spot to shred?
      </p>
    </div>
  );
};

// resetSearch={resetsearch}
// closeSuggestions={props.closeSuggestions}

export default withRouter(SuggestionDropdown);

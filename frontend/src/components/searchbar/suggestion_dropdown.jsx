import { Link } from "react-router-dom";
import React from "react";

const SuggestionIndexItem = props => (
  <div className="suggestion_index_item">
    <Link className="suggestion_link" to={`spots/${props.suggestion._id}`}>
      <div className="suggestion_content_container">
        <i class="fas fa-map-marker-alt"></i>
        <p className="suggestion_name">{props.suggestion.name}</p>
        <p className="suggestion_city">{props.suggestion.city}</p>
        <img src={props.suggestion.photos[0]} className="thumbnail_photo" />
      </div>
    </Link>
  </div>
);

const SuggestionDropdown = props => {
  return props.suggestions.length > 0 ? (
    <div className="suggestion_dropdown">
      {props.suggestions.map(suggestion => (
        <SuggestionIndexItem suggestion={suggestion} />
      ))}
    </div>
  ) : (
    <div className="suggestion_dropdown">
      <p id="no_search_results">
        Can't find your favorite spot to shred? Post it.
      </p>
    </div>
  );
};

export default SuggestionDropdown;

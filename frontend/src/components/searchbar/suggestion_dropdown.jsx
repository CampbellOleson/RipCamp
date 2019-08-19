import { Link } from "react-router-dom";
import React from "react";

const SuggestionIndexItem = props => (
  <div className="suggestion_index_item">
    <Link className="suggestion_link" to={`spots/${props.suggestion._id}`}>
      <div className="suggestion_content_container">
        <p>{props.suggestion.name}</p>
        <p>{props.suggestion.city}</p>
        <div className="thumbnail_photo">{props.suggestion.photos[0]}</div>
        <div />
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
      <p>No results</p>
    </div>
  );
};

export default SuggestionDropdown;

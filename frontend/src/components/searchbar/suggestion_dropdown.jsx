import { Link, withRouter } from "react-router-dom";
import React from "react";


const SuggestionIndexItem = props => {
  // let item = 
  return (
    <div className="suggestion_index_item">
      <Link
        className="suggestion_link"
        to={`spots/${props.suggestion._id}`}
        // onClick={() => props.closeSuggestions()}
      >
        <div className="suggestion_content_container">
          <i className="fas fa-map-marker-alt"></i>
          <p className="suggestion_name">{props.suggestion.name}</p>
          <p className="suggestion_city">{props.suggestion.city}</p>
          <img src={props.suggestion.photos[0]} className="thumbnail_photo" alt=""/>
        </div>
      </Link>
    </div>
    
  )
};

const SuggestionDropdown = props => {
  let dropdownClass;

  if (props.location.pathname === "/") {
    dropdownClass = "suggestion_dropdown";
  } else {
    dropdownClass = "navbar-dropdown";
  }

  const resetsearch = () => {
    let search = document.getElementById("search");
    // console.log("before: "+ search.value);
    search.value = ""
    // console.log("after: "+ search.value);

  }

  return props.suggestions.length > 0 ? (
    <div className={dropdownClass}>

      {props.suggestions.map((suggestion,i) => (
        <SuggestionIndexItem suggestion={suggestion} resetSearch={resetsearch} closeSuggestions={props.closeSuggestions} key={i}/>
      ))}
    </div>
  ) : (
    <div className={dropdownClass}>
      <p className="no-search-results">
        Can't find your favorite spot to shred?
      </p>

      {props.suggestions.map((suggestion, idx) => (
        <SuggestionIndexItem suggestion={suggestion} key={idx} />
      ))}
    </div>
  ) : (
    <div className="suggestion_dropdown">
      <p id="no_search_results">Can't find your favorite spot to shred?</p>

    </div>
  );
};

export default withRouter(SuggestionDropdown);

import { getSurfSpots } from "./surf_spot_actions";

export const UPDATE_FILTER = "UPDATE_FILTER";

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter: filter,
  value: value
});

export function updateFilter(filter, value) {
  return (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return dispatch(getSurfSpots({ [filter]: getState().ui.filters[filter] }));
  };
}

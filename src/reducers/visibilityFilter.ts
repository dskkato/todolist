import { VisibilityFilters, SET_VISIBILITY_FILTER } from "../actions";

type VisibilityAction = {
  readonly type: string,
  readonly filter: VisibilityFilters,
}

const visibilityFilter = (state: VisibilityFilters = VisibilityFilters.SHOW_ALL, actoin: VisibilityAction) => {
  switch (actoin.type) {
    case SET_VISIBILITY_FILTER:
      return actoin.filter
    default:
      return state
  }
}

export default visibilityFilter
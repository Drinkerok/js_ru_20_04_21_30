import {SELECTED_ARTICLES, SELECTED_DATE} from '../constants'

const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
};

export default (filters = defaultFilters, action) => {
  const {type, payload} = action
  switch (type) {
    case SELECTED_ARTICLES:
      return {...filters, selected: payload.selected}

    case SELECTED_DATE:
      return {...filters, dateRange: payload.dateRange}
  }
  return filters
}
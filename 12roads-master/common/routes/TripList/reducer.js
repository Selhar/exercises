import * as types from '../../constants'

const initialState = {
  data: [],
  lastFetched: null,
  isLoading: false,
  error: null
}

export default function trips (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_TRIPS_REQUEST:
      return { ...state,
        isLoading: true,
        error: null}
    case types.LOAD_TRIPS_SUCCESS:
      return { ...state,
        data: action.payload,
        lastFetched: action.meta.lastFetched,
        isLoading: false}
    case types.LOAD_TRIPS_FAILURE:
      return { ...state,
        error: action.payload}
    default:
      return state
  }
}

// Example of a co-located selector
export const selectTrips = state => state.trips

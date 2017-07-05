import * as types from '../../constants'

const initialState = {
  lastFetched: null,
  isLoading: false,
  error: null,
  title: '',
  overlay: null,
  content: '',
  photos: []
}

export default function currentTrip (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_TRIP_REQUEST:
      return { ...state,
        isLoading: true,
        error: null}
    case types.LOAD_TRIP_SUCCESS:
      return { ...state,
        title: action.payload.title,
        overlay: action.payload.overlay,
        content: action.payload.content,
        photos: action.payload.photos,
        lastFetched: action.meta.lastFetched,
        isLoading: false}
    case types.LOAD_TRIP_FAILURE:
      return { ...state,
        error: action.payload }
    default:
      return state
  }
}

// Example of a co-located selector
export const selectCurrentTrip = state => state.currentTrip

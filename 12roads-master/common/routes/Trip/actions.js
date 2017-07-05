import { LOAD_TRIP_REQUEST, LOAD_TRIP_SUCCESS, LOAD_TRIP_FAILURE } from '../../constants'

export function loadTrip (slug) {
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().sourceRequest
    dispatch({ type: LOAD_TRIP_REQUEST })
    return axios.get(`${protocol}://${host}/api/v0/trips/${slug}`)
      .then(res => {
        dispatch({
          type: LOAD_TRIP_SUCCESS,
          payload: res.data,
          meta: {
            lastFetched: Date.now()
          }
        })
      })
      .catch(error => {
        console.error(`Error in reducer that handles ${LOAD_TRIP_SUCCESS}: `, error)
        dispatch({
          type: LOAD_TRIP_FAILURE,
          payload: error,
          error: true
        })
      })
  }
}

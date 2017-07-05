import { LOAD_TRIPS_REQUEST, LOAD_TRIPS_SUCCESS, LOAD_TRIPS_FAILURE } from '../../constants'

export function loadTrips () {
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().sourceRequest
    dispatch({ type: LOAD_TRIPS_REQUEST })
    return axios.get(`${protocol}://${host}/api/v0/trips`)
      .then(res => {
        dispatch({
          type: LOAD_TRIPS_SUCCESS,
          payload: res.data,
          meta: {
            lastFetched: Date.now()
          }
        })
      })
      .catch(error => {
        console.error(`Error in reducer that handles ${LOAD_TRIPS_SUCCESS}: `, error)
        dispatch({
          type: LOAD_TRIPS_FAILURE,
          payload: error,
          error: true
        })
      })
  }
}

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../../store'

export default function createRoutes (store) {
  return {
    path: 'trips',
    getComponents (location, cb) {
      require.ensure([
        './containers/TripList',
        './reducer'
      ], (require) => {
        let TripPage = require('./containers/TripList').default
        let tripReducer = require('./reducer').default
        injectAsyncReducer(store, 'trips', tripReducer)
        cb(null, TripPage)
      })
    }
  }
}

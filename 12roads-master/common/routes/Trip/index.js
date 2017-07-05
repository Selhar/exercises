if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../../store'

export default function createRoutes (store) {
  return {
    path: 'trip/:slug',
    getComponents (location, cb) {
      require.ensure([
        './containers/TripPage',
        './reducer'
      ], (require) => {
        let TripPage = require('./containers/TripPage').default
        let tripReducer = require('./reducer').default
        injectAsyncReducer(store, 'currentTrip', tripReducer)
        cb(null, TripPage)
      })
    }
  }
}

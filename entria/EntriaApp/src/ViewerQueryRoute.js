import Relay, { Route } from 'react-relay/classic';

export default class ViewerQueryRoute extends Route {
  static queries = {
    viewer: () => Relay.QL` query { viewer } `
  }
  static routeName = 'ViewerQueryRoute'
}
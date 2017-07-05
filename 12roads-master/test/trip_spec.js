import chai, { expect } from 'chai'
import * as types from '../common/constants'
import reducer from '../common/routes/Trip/reducer'

// Remove this
import fakeDB from '../server/fakeDB.js'

describe('Trip Reducer', () => {
  const initialState = {
    lastFetched: null,
    isLoading: false,
    error: null,
    title: '',
    content: ''
  }

  it('should return default state if action is undefined', () => {
    const nextState = reducer(initialState, 'BLAH')
    expect(nextState).to.deep.equal(initialState)
  })

  it('should handle LOAD_TRIP_REQUEST', () => {
    const action = {
      type: types.LOAD_TRIP_REQUEST
    }

    const expectedNextState = {
      lastFetched: null,
      isLoading: true,
      error: null,
      title: '',
      content: ''
    }

    const nextState = reducer(initialState, action)
    expect(nextState).to.deep.equal(expectedNextState)
  })

  it('should handle LOAD_TRIP_SUCCESS', () => {
    const trip = {
      id: '128sd043hd',
      author: 'jhabdas',
      title: 'Ubud, Bali',
      slug: 'Ubud, Bali',
      content: 'Khaled Ipsum is a major key to success.'
    }
    const currentTime = Date.now()
    const action = {
      type: types.LOAD_TRIP_SUCCESS,
      payload: trip,
      meta: {
        lastFetched: currentTime
      }
    }

    const expectedNextState = {
      lastFetched: currentTime,
      isLoading: false,
      error: null,
      title: 'Ubud, Bali',
      content: 'Khaled Ipsum is a major key to success.'
    }

    const nextState = reducer(initialState, action)
    expect(nextState).to.deep.equal(expectedNextState)
  })

  it('should handle LOAD_TRIP_FAILURE', () => {
    const error = new Error('Invalid request')
    const action = {
      type: types.LOAD_TRIP_FAILURE,
      payload: error,
      error: true
    }

    const expectedNextState = {
      lastFetched: null,
      isLoading: false,
      error: error,
      title: '',
      content: ''
    }

    const nextState = reducer(initialState, action)
    expect(nextState).to.deep.equal(expectedNextState)
  })
})

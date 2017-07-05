import React from 'react'
import { Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite'
import SaveTripButton from '../../../components/SaveTripButton'
import { GridTile } from 'material-ui/GridList'

const TripListItem = ({ trip }) => (
  <GridTile
    key={trip.id}
    title={trip.title}
    subtitle={<span>by <b>{trip.author}</b></span>}
    actionIcon={<SaveTripButton
      tooltip='Save'
      tooltipPosition='top-left'
      color='white'
    />}
  >
    <Link to={`/trip/${trip.slug}`}>
      <img className={css(styles.cover)} src={trip.overlay.thumbSrc} />
    </Link>
  </GridTile>
)

const styles = StyleSheet.create({
  cover: {
    width: 240,
    height: 180
  }
})

export default TripListItem

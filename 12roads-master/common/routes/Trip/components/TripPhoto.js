import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite'
import FavoritePhotoButton from '../../../components/FavoritePhotoButton'
import { GridTile } from 'material-ui/GridList'

const TripPhoto = ({ photo }) => {
  return (
    <GridTile
      key={photo.id}
      title={photo.slug}
      actionIcon={<FavoritePhotoButton />}
    >
      <Link to={`/photo/${photo.slug}`} className={css(styles.link)}>
        <img className={css(styles.photo)} src={photo.src} />
      </Link>
    </GridTile>
  )
}

const styles = StyleSheet.create({
  link: {
    // Link styles
  },
  photo: {
    width: 180,
    height: 240
  }
})

export default TripPhoto

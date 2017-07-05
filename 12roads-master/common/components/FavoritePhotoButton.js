import React from 'react'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import Star from 'material-ui/svg-icons/toggle/star'

const FavoritePhotoButton = (props) => (
  <IconButton
    tooltip='Favorite Photo'
    tooltipPosition='top-left'
    touch
  >
    <StarBorder color='white' />
  </IconButton>
)

export default FavoritePhotoButton

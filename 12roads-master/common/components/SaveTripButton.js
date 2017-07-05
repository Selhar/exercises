import React, { PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import BookmarkBorder from 'material-ui/svg-icons/action/bookmark-border'
import Bookmark from 'material-ui/svg-icons/action/bookmark'

const SaveTripButton = (props) => (
  <IconButton
    tooltip='Save Trip'
    tooltipPosition='top-left'
    touch
  >
    <BookmarkBorder color='white' />
  </IconButton>
)

export default SaveTripButton

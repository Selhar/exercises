import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import BookmarkBorder from 'material-ui/svg-icons/action/bookmark-border'
import Bookmark from 'material-ui/svg-icons/action/bookmark'

const SaveTripActionButton = (props) => {
  return (
    <RaisedButton
      icon={<BookmarkBorder />}
      label='Save Trip'
      primary
    />
  )
}

export default SaveTripActionButton

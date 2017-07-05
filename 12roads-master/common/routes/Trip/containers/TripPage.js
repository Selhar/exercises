import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadTrip } from '../actions'
import TripPhoto from '../components/TripPhoto'
import SaveTripActionButton from '../components/SaveTripActionButton'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'
import NotFound from '../../../components/NotFound'
import { selectCurrentTrip } from '../reducer'

import { GridList } from 'material-ui/GridList'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'

const redial = {
  fetch: ({ dispatch, params: { slug } }) => dispatch(loadTrip(slug))
}

const mapStateToProps = state => selectCurrentTrip(state)

const TripPage = ({ title, overlay, photos, content, isLoading, error }) => {
  if (!error) {
    return (
      <div>
        <Helmet title={title} />
        {isLoading &&
          <div>
            <h2 className={css(styles.loading)}>Loading....</h2>
          </div>}
        {!isLoading &&
          <Card>
            <CardMedia
              overlay={<CardTitle title={overlay.title} subtitle={overlay.subtitle} />}
            >
              <img className={css(styles.overlayImage)} src={overlay.imageSrc} />
            </CardMedia>
            <CardHeader
              title="Josh Habdas"
              subtitle="Freelance Web and mobile app developer, blogger, agile coach, RPi hobbiest and retro gamer."
              avatar="https://habd.as/images/bio-photo.jpg"
              />
            <CardTitle title={title} subtitle="Adventure Travel" />
            <CardText>
              {content}
            </CardText>
            <CardText>
              <GridList
                cellHeight={240}
                cols={2.2}
                className={css(styles.gridList)}
              >
                {photos.map((photo, i) => <TripPhoto key={photo.id} photo={photo} />)}
              </GridList>
            </CardText>
            <CardActions className={css(styles.cardActions)}>
              <RaisedButton
                label='Add a Photo'
                className={css(styles.button)}
              />
            <SaveTripActionButton className={css(styles.button)} />
            </CardActions>
        </Card>}
      </div>
    )
  } else {
    // maybe check for different types of errors and display appropriately
    return <NotFound />
  }
}

TripPage.propTypes = {
  title: PropTypes.string,
  overlay: PropTypes.shape({
    imageSrc: PropTypes.string,
    thumbSrc: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
  }),
  content: PropTypes.string,
  photos: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.object
}

const styles = StyleSheet.create({
  loading: {
    fontSize: 28,
    margin: '0 auto 1.5rem',
    color: '#b7b7b7'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'
  },
  overlayImage: {
    width: 600,
    height: 337
  },
  cardActions: {
    textAlign: 'right'
  },
  button: {
    margin: 12
  }
})

export default provideHooks(redial)(connect(mapStateToProps)(TripPage))

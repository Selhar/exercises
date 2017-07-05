import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'
import { StyleSheet, css } from 'aphrodite'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = ({ children }) => (
  <MuiThemeProvider>
    <div className={css(styles.root)}>
      <Helmet title='12Roads' titleTemplate='%s - 12Roads' />
      <h1 className={css(styles.title)}>12Roads</h1>
      <h2 className={css(styles.subtitle)}>Get up, get out, get something</h2>
      <Nav />
      {children}
      <footer className={css(styles.footer)}>
        Copyright © 2016 <a className={css(styles.footerLink)} href='http://habd.as' target='_blank'>habd.as</a>
      </footer>
    </div>
  </MuiThemeProvider>
)

const styles = StyleSheet.create({
  root: {
    maxWidth: 700,
    color: '#000',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  title: {
    color: '#000',
    maxWidth: 300,
    fontWeight: 'bold',
    fontSize: 56
  },
  subtitle: {
    color: '#999',
    maxWidth: 300,
    fontWeight: 'bold',
    fontSize: 28
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7'
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none'
  }
})

export default App

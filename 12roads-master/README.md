# 12Roads Production Starter

## Prototype features

- <strong>Built rapidly with emphasis on just photo browsing</strong>
  <br><em>Note: Clicking individual photos not yet implemented but I was planning a mobile-friendly [PhotoSwipe effect](http://photoswipe.com/).</em>
- <strong>Made using a "desktop-first" approach</strong>
  <br><em>Going desktop-first essentially means planning for mobile but going MVP faster and adding mobile support as a fast-follower once traffic types for the app are determined (usually mobile is low for Web Apps until traction is gained).</em>
- <strong>Includes Unit Tests</strong>
  <br><em>Unit Testing is something clients sometimes overlook and engineers may not bring up early enough in the development process - which can lead to a cascade of bugs later in projects.</em>
- <strong>Uses mock data</strong>
  <br><em>Mock data is useful for proving out design concepts before actually implementing the back-end, which can be costly/untimely to change if the design isn't nailed down first.</em>

## Technical/UX Design

- <strong>Uses NodeJS for everything</strong>
  <br><em>Node is a JavaScript ecosystem and set of tools used for building today's rich internet applications. It enjoys wide support from the open source community and is easier and faster to write for and attract development talent to than Java.</em>
- <strong>Extremely fast and Search Engine friendly</strong>
  <br><em>Most JavaScript apps built today are not SEO-friendly due to misguided architectural approaches. The prototype provided is not only incredibly fast, it also can be crawled by all Web spiders.</em>
- <strong>Uses Google's [Material Design](https://material.google.com/)</strong>
  <br><em>Material Design provides a set of design constraints to help ensure the UI look-and-feel remains consistent across the application without having to hire a designer to build a style guide and provide Sketch mock-ups (though Sketch designs are advised for MVP).</em>

## Next steps

- [ ] Update TripList and Trip page for mobile responsive display using [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid)
- [ ] [Add Roboto font](https://github.com/callemall/material-ui#roboto-font) for existing Material UI theme
- [ ] [Bleak CSS3 page transitions](https://github.com/Zenithar/hugo-theme-bleak) for engagement
- [ ] Add [react-photoswipe](https://github.com/minhtranite/react-photoswipe/) for image viewing
- [ ] Add [LQIP](https://jmperezperez.com/medium-image-progressive-loading-placeholder/) for Medium-style image placeholders, or at least some placeholder to start (important for slow connections)

# React Production Starter

[![Build Status](https://travis-ci.org/jaredpalmer/react-production-starter.svg?branch=master)](https://travis-ci.org/jaredpalmer/react-production-starter)  [![Dependency Status](https://david-dm.org/jaredpalmer/react-production-starter.svg)](https://david-dm.org/jaredpalmer/react-production-starter)  [![devDependency Status](https://david-dm.org/jaredpalmer/react-production-starter/dev-status.svg)](https://david-dm.org/jaredpalmer/react-production-starter#info=devDependencies)  [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)  [![Join the chat at https://gitter.im/jaredpalmer/react-production-starter](https://badges.gitter.im/jaredpalmer/react-production-starter.svg)](https://gitter.im/jaredpalmer/react-production-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An example react application (master-detail feed) with isomorphic rendering, async react-router routes, async redux reducers, async data fetching, and code-splitting.

#### Motivation
The file size of isomorphic React apps can quickly get out of hand. Many isomorphic starter kits look awesome to begin with but yield a several megabyte javascript file for the client to download. This project aims to demonstrate some possible solutions.

#### Under the Hood
 - [Node.js](https://nodejs.org/en/)
 - [Express](https://github.com/expressjs/express)
 - [React](https://github.com/facebook/react)
 - [Redux](https://github.com/reactjs/redux)
 - [React Router](https://github.com/reactjs/react-router) 2.0
 - [Aphrodite](https://github.com/Khan/aphrodite) for CSS by Khan Academy
 - [React Helmet](https://github.com/nfl/react-helmet) for meta tags by the NFL
 - [Redial](https://github.com/markdalgleish/redial) for data fetching by [@markdalgleish](https://twitter.com/markdalgleish)
 - [Babel 6](https://github.com/babel/babel)
 - [Webpack](https://github.com/webpack/webpack) with vanilla Hot Module Replacement

#### Inspiration
 - [example-react-router-server-rendering-lazy-routes](https://github.com/ryanflorence/example-react-router-server-rendering-lazy-routes) by [@ryanflorence](https://twitter.com/ryanflorence)
 - [Cake's approach to React Router server rendering w/code splitting and Redux](https://gist.github.com/rgrove/3e612aa366541845161c) by [@rgrove](https://twitter.com/yaypie)
 - [How to dynamically load reducers for code splitting in a Redux application?](http://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application) by [@dan_abramov](https://twitter.com/dan_abramov)

### Getting started
```bash
git clone https://github.com/jaredpalmer/react-production-starter MyApp
cd MyApp
npm install
npm start

# Open localhost:5000
```

See [Awesome React Boilerplates](https://habd.as/awesome-react-boilerplates) for more information.

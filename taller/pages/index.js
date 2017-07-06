import React from 'react'
import paths from '../utils/paths';
import Home from '../components/Home';
import TextField from 'material-ui/TextField';
import Layout from '../components/Layout';
export default class extends React.Component {
  render() {
    return (
      <Layout titulo="Taller" descricao="Tela de login">
        <Home />
      </Layout>
    )
  }
}
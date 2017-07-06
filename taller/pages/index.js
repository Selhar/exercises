import React from 'react'
import paths from '../utils/paths';
import Home from '../components/Home';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import Layout from '../components/Layout';

//Material UI tem um delay enorme pra onClick no celular, essa é uma solução
try { 
  injectTapEventPlugin(); 
} catch (error) {  }
;

export default class extends React.Component {
  render() {
    return (
      <Layout titulo="Taller" descricao="Tela de login">
        <Home />
      </Layout>
    )
  }
}
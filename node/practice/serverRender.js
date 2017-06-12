import axios from 'axios';
import config from './config';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';

const serverRender = () => {
    axios.get(`${config.serverUrl}/api/contests`)
        .then(response => {
            return ReactDOMServer.renderToString(
                <App initialContests={response.data.contests}/>
            );
        });
};
export default serverRender;
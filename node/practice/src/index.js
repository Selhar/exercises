import React from 'react';
import reactDOM from 'react-dom';
import App from './components/App';
import data from './assets/mockData.json';

reactDOM.render(
    <App contests={data.contests}/>,
    document.getElementById('root')
);
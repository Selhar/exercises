import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../assets/mockData.json';

class App extends React.Component {
    state = { 
        title: 'Naming contest',
        contests: []
    }

    componentDidMount() {
        this.setState({
            contests: data.contests
        });
    }
    
    render() {
        return (
            <div className="App">
                <Header title={this.state.title} />
                <div>
                    {this.state.contests.map(contest =>
                        <ContestPreview key={contest.id}{...contest}/>
                    )}                    
                </div>
            </div>
        );
    }
}

export default App;
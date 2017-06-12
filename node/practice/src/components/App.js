import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';

class App extends React.Component {
    state = { 
        title: 'Naming contest',
        contests: this.props.initialContests
    };

    componentDidMount() {
        axios.get('/api/contests')
            .then(response => {
                this.setState({
                    contests: response.data.contests
                });
            })
            .catch(console.error);
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
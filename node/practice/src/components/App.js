import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
    state = { 
        title: 'Naming contest'
    }
    
    render() {
        return (
            <div className="App">
                <Header title={this.state.title} />
                <div>
                    {this.props.contests.map(contest =>
                        <ContestPreview {...contest}/>
                    )}                    
                </div>
            </div>
        );
    }
}

export default App;
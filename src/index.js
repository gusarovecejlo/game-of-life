import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="">
                    <h1 className="">Welcome to React</h1>
                </header>
                <p className="">
                    Lets try to create a game of life with ReactJS
                </p>
            </div>
        );
    }
}

export default App;






ReactDOM.render(<App />, document.getElementById('root'));

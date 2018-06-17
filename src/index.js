import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Game from './game'

class App extends Component {
    constructor() {
        super()
    }

    state = {
        speed: 100,
        grid: 36
    }

    changeSpeed = (event) => {
        const value = event.target.value
        this.setState({speed: value})
    }

    changeGrid = (event) => {
        const value = event.target.value
        this.setState({grid: value})
    }

    render() {
        return (
            <div className="App">
                <div className="controls">
                    <input  type="number" onChange={this.changeSpeed}/>
                    <input type="number" onChange={this.changeGrid}/>
                </div>
                <p>
                    <span>Скороть:</span>
                    {this.state.speed}
                </p>
                <p>
                    <span>Сетка:</span>
                    {this.state.grid}
                </p>
                <Game settings={this.state} randomize/>
            </div>
        )
    }
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'))

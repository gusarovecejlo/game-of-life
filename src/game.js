import React, {Component} from 'react'
import Cell from './cell'

class Game extends Component {
    constructor(props) {
        super()
        this.randomize = props.randomize || false
        this.size = props.settings.grid
    }

    createGrid() {
        this.cells = new Array(this.size)
        for (let r = 0; r < this.size; r++) {
            this.cells[r] = new Array(this.size)

            for (let c = 0; c < this.size; c++) {
                if (this.randomize) {
                    let isAlive = Math.random() < .5

                    this.cells[r][c] = <Cell r={r} c={c} isAlive={isAlive}/>
                }
                else {
                    this.cells[r][c] = <Cell r={r} c={c}/>
                }
            }
        }
        return this.cells
    }

    render() {
        const grid = this.createGrid()
        return (
            <div>
                {grid.map(i => {

                    return (

                        <div key={Math.random()}
                             style={{display: "flex"}}> {
                            i.map(j => {

                                return (
                                    <div key={Math.random()}
                                         style={
                                             j.props.isAlive ?
                                             {background: 'green', width: "10px", height: "10px"} :
                                             {background: 'none', width: "10px", height: "10px"}
                                         }
                                    ></div>
                                )
                            })
                        } </div>

                    )
                })}
            </div>
        )
    }

}
export default Game

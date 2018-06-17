import React, { Component } from 'react'

class Cell extends Component {
    constructor(row, col, alive = false) {
        super()
        this._row = row
        this._col = col
        this._alive = alive

    }

    get row() {
        return this._row
    }

    get col() {
        return this._col
    }

    get isAlive() {
        return this._alive
    }

    die() {
        this._alive = false
    }

    live() {
        this._alive = true
    }

    render() {
        console.log(this.props)

        return (
            <div></div>
        )
    }

} export default Cell
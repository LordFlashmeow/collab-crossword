import React from 'react';
import './Square.css'

export default function Square(props) {
    let style = {};
    if (props.letter === '.') {
        style['backgroundColor'] = 'black'
    }
    if (props.selectedState === 'clue') {
        style['backgroundColor'] = 'grey'
    }
    if (props.selectedState === 'square') {
        style['backgroundColor'] = 'yellow'
    }

    return <td style={style} onClick={this.props.onSquareClick}>{this.props.letter}</td>
}
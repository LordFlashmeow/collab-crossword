import React from 'react';
import './Square.css'

export default function Square(props) {
    let style = {};
    if (props.letter === '.') {
        style['backgroundColor'] = 'black'
    }
    return <td style={style}>{props.letter}</td>
}
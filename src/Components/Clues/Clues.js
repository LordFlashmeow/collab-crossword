import React from 'react';
import _ from 'lodash'

export default class Clues extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return (
            <React.Fragment>
                <div>
                    <h3>Down</h3>
                    {this.props.down.map(clue => {
                        let clueNumber = clue.substr(0, clue.indexOf('.'))
                        clue = decodeURI(clue);
                        clue = _.unescape(clue);
                        return <div>{clue}</div>
                    })}
                </div>
                <div>
                    <h3>Across</h3>
                    {this.props.across.map(clue => {
                        let clueNumber = clue.substr(0, clue.indexOf('.'))
                        clue = decodeURI(clue);
                        clue = _.unescape(clue);
                        return <div>{clue}</div>
                    })}
                </div>
            </React.Fragment>
        )
    }
}
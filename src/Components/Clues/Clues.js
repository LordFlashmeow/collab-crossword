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
                        let clueNumber = Number(clue.substr(0, clue.indexOf('.')));
                        let style = {};

                        if (this.props.selectedClue.clueNumber === clueNumber && this.props.selectedClue.direction === 'down') {
                            style['backgroundColor'] = 'lightgray';
                        }

                        clue = decodeURI(clue);
                        clue = _.unescape(clue);
                        return <div data-direction={'down'} data-number={clueNumber} onClick={this.props.onClueClick}
                                    style={style}>{clue}</div>
                    })}
                </div>
                <div>
                    <h3>Across</h3>
                    {this.props.across.map(clue => {
                        let clueNumber = Number(clue.substr(0, clue.indexOf('.')))
                        let style = {};

                        // console.log(clueNumber);
                        if (this.props.selectedClue.clueNumber === clueNumber && this.props.selectedClue.direction === 'across') {

                            style['backgroundColor'] = 'lightgrey';
                        }

                        clue = decodeURI(clue);
                        clue = _.unescape(clue);
                        return <div data-direction={'across'} data-number={clueNumber} onClick={this.props.onClueClick}
                                    style={style}>{clue}</div>
                    })}
                </div>
            </React.Fragment>
        )
    }
}
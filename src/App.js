import React from 'react';
import './App.css';
import Square from './Components/Square/Square'
import Clues from './Components/Clues/Clues'

import data from './example'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            puzzle: [],
            userPuzzle: [],
            currentCell: 0,
            textDirection: 'horizontal',
            selectedClue: {clueNumber: 1, direction: 'across'}
        }

        this.onClueClick = this.onClueClick.bind(this);
        this.onSquareClick = this.onSquareClick.bind(this);
    }

    componentDidMount() {
        this.setState({puzzle: data.grid});
        document.addEventListener('keydown', this.handleKeyPress.bind(this))

        this.setState({puzzle: data.grid})
        let userPuzzle = data.grid.map(element => {
            if (element !== ".") {
                return ''
            }
            return element
        });

        this.setState({userPuzzle})


    }

    nextCell() {
        let nextCellLetter = this.state.userPuzzle[this.state.currentCell]
        for (let i = this.state.currentCell + 1; i < data.size.cols * data.size.rows; i++) {
            if (this.state.userPuzzle[i] !== ".") {
                return i
            }
        }

        for (let i = 0; i < this.state.currentCell; i++) {
            if (this.state.userPuzzle[i] !== ".") {
                return i
            }
        }

        // return this.state.currentCell + 1
    }

    handleKeyPress(e) {
        console.log(e.key);
        let key = e.key;

        switch (key) {
            case 'Tab':     // Switch direction when tab is pressed
                e.preventDefault();
                if (this.state.textDirection === 'horizontal') {
                    this.setState({textDirection: 'vertical'})
                } else {
                    this.setState({textDirection: 'horizontal'})
                }
                break;
            case 'Backspace':
                this.setPuzzleLetter('', this.state.currentCell)
                break;

            default:
                // Not a special handled keypress, time for regular logic
                if (e.keyCode >= 65 && e.keyCode <= 90) {
                    this.setPuzzleLetter(key, this.state.currentCell)
                }

        }


    }

    onClueClick(e) {
        console.log(e.target.dataset.direction);
        console.log(e.target.dataset.number);

        this.setHighlightedClue(e.target.dataset.direction, e.target.dataset.number)

    }

    onSquareClick(e) {

    }

    setHighlightedClue(direction, number) {
        this.setState({selectedClue: {clueNumber: Number(number), direction: direction}})
    }

    setPuzzleLetter(letter, index) {
        let newPuzzle = this.state.userPuzzle;
        newPuzzle[this.state.currentCell] = letter;
        this.setState({userPuzzle: newPuzzle, currentCell: this.nextCell()})
    }

    render() {

        let puzzleGrid = [];
        for (let i = 0; i < data.size.cols; i++) {
            let row = []

            for (let j = 0; j < data.size.rows; j++) {
                row.push(this.state.userPuzzle[i * data.size.rows + j])
            }

            puzzleGrid.push(row)
        }

        let tableBody = puzzleGrid.map((row, rowIndex) => {
            let number = null;
            return (<tr>
                {row.map(cell => {
                    return (
                        <Square onSquareClick={this.onSquareClick} number={number} letter={cell}/>
                    )
                })}
            </tr>)
        })


        return (
            <div className={'App'}>
                <table>
                    <tbody>
                    {tableBody}
                    </tbody>
                </table>
                <div className={'container'}>
                    <Clues across={data.clues.across} down={data.clues.down} onClueClick={this.onClueClick}
                           selectedClue={this.state.selectedClue}/>
                </div>
            </div>
        );
    }
}

export default App;

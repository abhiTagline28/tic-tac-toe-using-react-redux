/* 

// first


import React, { useState, useEffect } from 'react'
import Box from './Box';
import { calculateWinner } from './helpers'
const styles = {
    width: '200px',
    margin: '20px auto'
};
const Game = () => {
    const [start, setStart] = useState([Array(9).fill(null)])
    const [step, setStep] = useState(0)
    const [next, setNext] = useState(true);
    const winner = calculateWinner(start[step]);
    const handleClick = i => {
        const timeInstart = start.slice(0, step + 1);
        const current = timeInstart[step];
        const squares = [...current];
        if (winner || squares[i]) return;
        squares[i] = next ? 'X' : 'O';
        setStart([...timeInstart, squares]);
        setStep(timeInstart.length);
        setNext(!next);

    }
    return (
        <>
            <Box squares={start[step]} onClick={handleClick} />
            <div style={styles}>
                {winner ? 'Winner: ' + winner : 'Next Player: ' + (next ? 'X' : 'O')}
            </div>
        </>
    )
}

export default Game
 */





/* 

// first redux

import React, { useState, useEffect } from 'react'
import Box from './Box';
import { connect } from 'react-redux'
import { calculateWinner } from './helpers';
import { addPlayer } from './redux/actions'
const styles = {
    width: '200px',
    margin: '20px auto'
};
const Game = (props) => {
    console.log("Props : ", props);
    console.log("Data : ", props.tictactoe);
    //const [start, setStart] = useState([Array(9).fill(null)])
    const [steps, setSteps] = useState(0)
    const [next, setNext] = useState(true);
    //const winner = calculateWinner(props.tictactoe[steps]);
    const handleClick = i => {
        console.log(i);
        console.log("props.tictactoe : ", props.tictactoe);
        const timeInstart = props.tictactoe.slice(0, steps + 1);
        console.log("timeInstart ", timeInstart);

        const current = timeInstart[steps];
        console.log("current : ", current);

        const squares = [...current];
        console.log("squares : ", squares);

        // //if (winner || squares[i]) return;
        // squares[i] = next ? 'X' : 'O';
        // props.dispatch(addPlayer(...timeInstart, squares))
        // //setStart([...timeInstart, squares]);
        // setSteps(timeInstart.length);
        // setNext(!next);
    }
    return (
        <>
            <Box squares={props.tictactoe} onClick={handleClick} />
        </>
    )
}

const mapStateToprops = (state) => ({
    tictactoe: state.tictactoe.data
})

export default connect(mapStateToprops)(Game) */



/*

//own logic

import React, { useState, useEffect } from 'react'
import Box from './Box';
import { calculateWinner } from './helpers'
const styles = {
    width: '200px',
    margin: '20px auto'
};
const Game = () => {
    const [start, setStart] = useState([Array(9).fill(null)])
    let step = 0
    const [next, setNext] = useState(true);
    const winner = calculateWinner(start[step]);
    const handleClick = i => {
        let symbol = next ? 'X' : 'O'
        if (start[0][i] !== null || winner) return
        setStart([...start, [start[0][i] = symbol]])
        setNext(!next);
    }
    return (
        <>
            <Box squares={start[step]} onClick={handleClick} />
            <div style={styles}>
                {winner ? 'Winner: ' + winner : 'Next Player: ' + (next ? 'X' : 'O')}
            </div>
        </>
    )
}

export default Game */


// own logic redux

import React, { useState } from 'react'
import Box from './Box';
import { calculateWinner } from './helpers'
import { connect } from 'react-redux'
import { addPlayer, resetPlayer } from './redux/actions'
const styles = {
    width: '200px',
    margin: '20px auto'
};
const Game = (props) => {
    let step = 0
    const [next, setNext] = useState(true);
    const winner = calculateWinner(props.tictactoe[step]);
    const handleClick = i => {
        let symbol = next ? 'X' : 'O'
        if (props.tictactoe[step][i] !== null || winner) return
        props.dispatch(addPlayer({ i, symbol }))
        setNext(!next);
        const abc = props.tictactoe[0].every((v) => v)
        if (!winner && abc === true) {
            alert("Draw")
        }
    }
    return (
        <>
            <Box squares={props.tictactoe[step]} onClick={handleClick} />
            <div style={styles}>
                {winner ? 'Winner: ' + winner : 'Next Player: ' + (next ? 'X' : 'O')}
            </div>
            <div style={styles}>
                <button onClick={() => props.dispatch(resetPlayer())}>Reset</button>
            </div>
        </>
    )
}
const mapStateToprops = (state) => ({
    tictactoe: state.tictactoe.data
})
export default connect(mapStateToprops)(Game)

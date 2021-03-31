import React, { useState, useEffect } from 'react'
import Box from './Box';
import { calculateWinner } from './helpers'
const styles = {
    width: '200px',
    margin: '20px auto'
};
const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [isNext, setIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        squares[i] = isNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);
        setIsNext(!isNext);
    }

    // useEffect(() => {
    //     winner ? alert(`Winner ${winner}`) : null
    // }, [])
    return (
        <>
            <Box squares={history[stepNumber]} onClick={handleClick} />
            <div style={styles}>
                {winner ? 'Winner: ' + winner : 'Next Player: ' + (isNext ? 'X' : 'O')}
            </div>
        </>
    )
}

export default Game















/*
import React, { useState } from 'react';
import { calculateWinner } from './helpers';
import Box from './Box';

const styles = {
    width: '200px',
    margin: '20px auto'
};

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        // If user click an occupied square or if game is won, return
        if (winner || squares[i]) return;
        // Put an X or an O in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);
        setXisNext(!xIsNext);
    };

    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const renderMoves = () =>
        history.map((_step, move) => {
            const destination = move ? `Got to move #${move}` : 'Go to start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            );
        });

    return (
        <>
            <Box squares={history[stepNumber]} onClick={handleClick} />
            <div style={styles}>
                {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
                {renderMoves()}
            </div>
        </>
    );
};

export default Game; */

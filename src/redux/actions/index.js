import { STEP, RESET } from '../constants'

export const addPlayer = ({ i, symbol }) => (
    //console.log(`i : ${i} symbol: ${symbol}`),
    {
        type: STEP,
        i: i,
        symbol: symbol
    })

export const resetPlayer = () => (
    {
        type: RESET
    })
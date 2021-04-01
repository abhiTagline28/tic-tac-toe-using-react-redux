import { combineReducers } from 'redux';
import tictactoe from './tictactoe'

const rootReducer = combineReducers({
    tictactoe,
})

export default rootReducer;
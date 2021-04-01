import { STEP, RESET } from '../constants'

const initialState = {
    data: [Array(9).fill(null)],
}
const tictactoe = (state = initialState, action) => {
    switch (action.type) {
        case STEP:
            return {
                ...state,
                data: [
                    ...state.data,
                    [state.data[0][action.i] = action.symbol]
                ]
            }
        case RESET:
            return {
                data: [Array(9).fill(null)]
            }
        default:
            return state
    }
}

export default tictactoe;
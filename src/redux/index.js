import { combineReducers } from 'redux'
import reduser from './reduser/Reduser'

const rootReduser = combineReducers({
    items: reduser,
})

export default rootReduser
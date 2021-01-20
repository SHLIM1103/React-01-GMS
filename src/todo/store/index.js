import { createStore } from 'redex'
import scheduleReducer from './schedule.reducer'

const store = createStore(scheduleReducer)

export default store
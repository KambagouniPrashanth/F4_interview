import {createStore} from "redux"
import birdReducer from "./reducer/birdReducer"
const store=createStore(birdReducer)
export default store
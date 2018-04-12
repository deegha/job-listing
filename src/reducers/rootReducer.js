/**
 * Created by deegha on 12/05/2018
*/

import { combineReducers } from "redux"

import { jobReducer as jobs } from "./jobReducer"

export const rootReducer = combineReducers({
    jobs
})
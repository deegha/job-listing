/**
 * Created by Deegha on 12/05/2018
 */

import * as Actions from "../actions/jobActions"

const initialState = {
    jobList : [
        {
            id : "",
            created_at : "",
            title : "",
            location : "",
            type : "",
            description : "",
            how_to_apply : "",
            company : "",
            company_url : "",
            company_logo : "",
            url : "",
            liked : false
        }
    ],
    loading : false
}

export const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_JOBS_REQUEST : 
            return {
                ...state,
                loading : true
            }
        case Actions.GET_JOBS_FAIL : 
            return {
                ...state,
                loading : false
            }
        case Actions.GET_JOBS_SUCCESS :
            return {
                ...state,
                jobList : action.jobs.map(job => ({...job, liked : false}) ) ,
                loading : false
            }
        case  Actions.TOGLE_LIKE_JOB : console.log(action.jobId)
            return {
                ...state,
                jobList : state.jobList.map((job, key) => (key === action.jobId)? {...job, liked : !job.liked} : job ),
            }
        default :
            return state
    }
}

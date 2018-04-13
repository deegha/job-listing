/**
 * Created by Deegha on 13/05/2018
 */

import * as Actions from "../actions/activeJobActions"

const initialState = {
    job : {
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
    },
    loading : false
}

export const activeJobReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.ACTIVEJOB_REQUEST :
            return {
                ...state,
                loading : true  
            }
        case Actions.ACTIVEJOB_FAIL :
            return {
                ...state,
                loading : false
            }
        case Actions.ACTIVEJOB :
            return {
                loading :false,
                job : {...action.job}
            }
        case  Actions.TOGLE_LIKE_JOB :
            return {
                ...state,
                job : {
                    ...state.job,
                    liked : !state.job.liked
                }
                
            }
        default : 
            return state
    }
    
}


//jobList : state.jobList.map((job, key) => (job.id === action.jobId)? {...job, liked : !job.liked} : job ),
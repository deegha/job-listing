/**
 * Created by Deegha Galkissa on 12/05/2018
 */

import { getJobList } from "../services/backendClient"

/**
 * Action constants
*/

export const GET_JOBS_REQUEST = "GET_JOBS_REQUEST"
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS"
export const GET_JOBS_FAIL  = "GET_JOBS_FAIL"
export const TOGLE_LIKE_JOB = "TOGLE_LIKE_JOB"


/**
 * Action creators
*/

export const getJobsRequest = () => ({
    type : GET_JOBS_REQUEST,
    loading : true
})

export const getJobsFail = () => ({
    type : GET_JOBS_FAIL,
    loading : false
})

export const getJobsSuccess = jobs => ({
    type : GET_JOBS_SUCCESS,
    jobs
})

export const fetchJobList = () => dispatch => {
    dispatch(getJobsRequest())
    getJobList()
        .then(data => dispatch(getJobsSuccess(data)))
        .catch(err => getJobsFail())
}   

export const likeJob = (jobId) => ({
    type : TOGLE_LIKE_JOB,
    jobId
})
/**
 * Created by Deegha on 13/05/2018
 */

/**
 * Action constants
*/

export const ACTIVEJOB_REQUEST = "ACTIVEJOB_REQUEST"
export const ACTIVEJOB_FAIL = "ACTIVEJOB_FAIL"
export const ACTIVEJOB = "ACTIVEJOB"
export const TOGLE_LIKE_JOB = "TOGLE_LIKE_JOB"

export const activeJobRequest = () => ({
    type : ACTIVEJOB_REQUEST,
})

export const activeJobFail = () => ({
    type : ACTIVEJOB_FAIL,
})

export const activeJob = job => ({
    type : ACTIVEJOB,
    job,
})

export const setActiveJob = jobId => (dispatch, getState) => { 
    dispatch(activeJobRequest())
    const activejob = getState().jobs.jobList.filter(job => job.id === jobId)[0]
    dispatch(activeJob(activejob))
}
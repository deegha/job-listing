/**
 * Creted by Deegha on 12/05/2018
 */

import React from "react"
import { connect } from "react-redux"   

import { setActiveJob } from "../../actions/activeJobActions"
import Node from "../reusable/node/node"
import "./jobList.css"
import ScrollTop from "../reusable/scrollTop/scrollTop"

const JobList = ({jobs, like, activeJob}) => 

<div className="jobListContainer">
    {jobs.jobList.map((job, key) => <Node nodeKey={key} key={job.id} job={job} like={like} activeJob={activeJob}/>)}
    <ScrollTop />
</div>

const mapStateToProps = (state) => ({
    jobs : state.jobs
})

const mapDispatchToProps = dispatch => ({
    activeJob :jobId => () => dispatch(setActiveJob(jobId))
})

export default connect(mapStateToProps,mapDispatchToProps)(JobList)
/**
 * Creted by Deegha on 12/05/2018
 */

import React from "react"
import { connect } from "react-redux"

import {likeJob} from "../../actions/jobActions"
import Node from "../reusable/node/node"
import "./jobList.css"

const JobList = ({jobs, like}) => 

<div className="jobListContainer">
    {jobs.jobList.map((job, key) => <Node nodeKey={key} key={job.id} job={job} like={like}/>)}
</div>

const mapStateToProps = (state) => ({
    jobs : state.jobs
})

const mapDispatchToProps = dipatch => ({
    like : jobId => () => dipatch(likeJob(jobId))
})

export default connect(mapStateToProps,mapDispatchToProps)(JobList)
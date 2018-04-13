/**
 * Created by Deegha on 05/13/2018
 */

import React from "react"
import {connect} from "react-redux"

import JobSingle from "./jobSingle"
import {setActiveJob} from "../../actions/activeJobActions"

class JobSingleContainer extends React.Component {

    scrollToTop = _ => _ => window.scrollTo(0, 0)
    
    componentDidMount() {
        this.props.fetchActiveJob(this.props.match.params.id)
        window.scrollTo(0, 0)
    }

    render() { console.log(this.state)
        return <JobSingle activeJob={this.props.activeJob} scrollToTop={this.scrollToTop} />
    }
}

const mapStateToProps = ({activeJob}, others) => ({
    activeJob : activeJob.job,
    loading : activeJob.loading,
}) 


const mapDispatchToProps = dispatch => ({
    fetchActiveJob : jobId => dispatch(setActiveJob(jobId))
})

export default connect(mapStateToProps, mapDispatchToProps)(JobSingleContainer)
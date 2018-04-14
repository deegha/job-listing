/**
 * Created by Deegha on 05/13/2018
 */

import React from "react"
import {connect} from "react-redux"

import JobSingle from "./jobSingle"
import {setActiveJob} from "../../actions/activeJobActions"

import Loading from "../reusable/loading/loading"

class JobSingleContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal : false
        }
    }

    scrollToTop = _ => _ => window.scrollTo(0, 0)

    toggleModal = _=> _=> this.setState({showModal : !this.state.showModal})
    
    componentDidMount() {
        this.props.fetchActiveJob(this.props.match.params.id)
        window.scrollTo(0, 0)
    }

    render() { 
        return this.props.loading?<Loading />: <JobSingle
                    showModal={this.state.showModal} 
                    activeJob={this.props.activeJob} 
                    scrollToTop={this.scrollToTop} 
                    toggleModal={this.toggleModal} />
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
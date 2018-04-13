/**
 * Created by Deegha on 05/12/2018
 */

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from "react-redux"

import JobList from "./components/jobList/jobList"
import JobSingleContainer from "./components/jobSingle/jobSingleContainer"
import PageNotFound from "./components/pageNotFound/pageNotFound"

import { fetchJobList } from "./actions/jobActions"

import "./App.css"

class App extends Component {

  componentDidMount () {
    this.props.fetchJobs()
  }

  render() {
    return <Router>
      <div>
        <Switch>
          <Route exact path="/" component={JobList} />
          <Route path="/jobPage/:id" component={JobSingleContainer} />
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return state
}

const mapDispatchToProps = dipatch => ({
  fetchJobs : () => dipatch(fetchJobList())
})

export default connect(mapStateToProps, mapDispatchToProps)(App) 

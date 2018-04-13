/**
 * Created by Deegha on 05/13/2018
 */

import React from "react"
import { connect } from "react-redux"

import notLikedIcon from "../../../utils/heartHolo.svg"
import likedIcon from "../../../utils/like.svg"

import {likeJob} from "../../../actions/jobActions"

import "./liked.css"


const Liked = ({liked, nodeKey, like}) => 
<span className="likeJob" onClick={like(nodeKey)}  >
    <img alt="likeJob" src={liked ? likedIcon : notLikedIcon} />
</span>

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = dispatch => ({
    like : jobId => () => dispatch(likeJob(jobId))
})

export default connect(mapStateToProps,mapDispatchToProps)(Liked)
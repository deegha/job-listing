import React from "react"

import "./node.css"
import H1 from "../heading/H1"
import H2 from "../heading/H2"
import Text from "../text/text"
import Card from "../card/card"
import FelxRow from "../flexRow/felxRow"
import Icon from "../icon/icon"

import notLikedIcon from "../../../utils/heartHolo.svg"
import likedIcon from "../../../utils/like.svg"

const liked = likedIcon
const notLiked = notLikedIcon

const Node = ({job, like, nodeKey}) => 
    <Card>
        <FelxRow>
            <div className="companyLogo">
                <img alt="log" src={job.company_logo} />
            </div>
            <div className="jobDetails">
                <H1>{job.title}</H1>
                <H2>{job.company}</H2>
                <Text>{job.description.substring(0,300)}</Text>
                <hr className="lineBreaker"/>
                <div className="jobDetailsExtrasContainer">
                    <span className="jobDetailExtras">
                    <Icon name="building" />
                    {job.type}</span>
                    <span className="jobDetailExtras"><Icon name="map-marker" />{job.location}</span>
                    <span className="jobDetailExtras"><a href={job.company_url} target="new"><Icon name="desktop" />company url</a></span>
                    <span className="likeJob" onClick={like(nodeKey)}  >
                        <img alt="likeJob" src={job.liked ? liked : notLiked} />
                    </span>
                </div>
            </div>
       </FelxRow>
    </Card> 

export default Node
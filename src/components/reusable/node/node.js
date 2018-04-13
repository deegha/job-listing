import React from "react"

import { Link } from 'react-router-dom'

import "./node.css"
import H1 from "../heading/H1"
import H2 from "../heading/H2"
import Text from "../text/text"
import Card from "../card/card"
import FelxRow from "../flexRow/felxRow"
import Icon from "../icon/icon"

import Liked from "../liked/liked"

const Node = ({job, like, nodeKey, activeJob}) => 
    <Card className="wrapper">
        <FelxRow>
            <div className="companyLogo">
                <img alt="log" src={job.company_logo} />
            </div>
            <div className="jobDetails">
                <H1>{job.title}</H1>
                <H2>{job.company}</H2>
                <Text>{job.description.substring(0,500).replace(/<\/?[^>]+(>|$)/g, "")} ...</Text>
                <Link to={"jobPage/"+job.id} >more...</Link>
                
                <hr className="lineBreaker"/>
                <div className="jobDetailsExtrasContainer">
                    <span className="jobDetailExtras">
                    <Icon name="building" />
                    {job.type}</span>   
                    <span className="jobDetailExtras"><Icon name="map-marker" />{job.location}</span>
                    <span className="jobDetailExtras"><a href={job.company_url} target="new"><Icon name="desktop" />company url</a></span>
                    <Liked liked={job.liked} nodeKey={job.id} />
                </div>
            </div>
       </FelxRow>
    </Card> 

export default Node
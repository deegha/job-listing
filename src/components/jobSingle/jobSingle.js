/**
 * Created by Deegha on 05/12/2018
 */

import React from "react"

import Card from "../reusable/card/card"
import Container from "../reusable/container/container"
import H1 from "../reusable/heading/H1"
import H2 from "../reusable/heading/H2"
import {TextHtmlConverter}  from "../reusable/text/text"
import PaddingContainer from "../reusable/paddingContainer/paddingContainer"
import PageNotFound from "../pageNotFound/pageNotFound"
import Liked from "../reusable/liked/liked"
import FelxRow from "../reusable/flexRow/felxRow"
import JobExtras from "../reusable/jobExtras/jobExtras"
import { Link } from "react-router-dom"
import Icon from "../reusable/icon/icon"

import "./jobSingle.css"

const JobSingle = ({activeJob, scrollToTop}) => 
    activeJob.id ?
    <Container>
        <Link to="/" className="FloatingBackBtn" >
            <Icon name="chevron-circle-left"/>
        </Link>
        <div className="FloatingUpBtn" onClick={scrollToTop()}>
            <Icon name="chevron-circle-up" />
        </div>    
        <Card>
            <div className="wrapperSingleJob">
                <FelxRow>
                    <div  className="singlePageCompanyLogo" >
                        <a href={activeJob.company_url} target="new">
                            <img src={activeJob.company_logo} alt="logo" />
                        </a>
                    </div>
                    <FelxRow>
                        {/* <div className="singlePageLike">
                            <Liked liked={activeJob.liked} nodeKey={activeJob.id} />
                        </div>   */}
                        <H1>{activeJob.title}</H1>
                    </FelxRow>
                </FelxRow>
                <PaddingContainer padding="10px">
                    <JobExtras job={activeJob} />
                    <H2>description</H2>
                        <PaddingContainer padding="20px">
                            <TextHtmlConverter>{activeJob.description}</TextHtmlConverter>
                        </PaddingContainer>
                    <H2>how to apply</H2>
                        <PaddingContainer padding="20px">
                            <TextHtmlConverter>{activeJob.how_to_apply}</TextHtmlConverter>
                        </PaddingContainer>
                </PaddingContainer>
            </div>
        </Card>
    </Container>
    :<PageNotFound/>
export default JobSingle


 
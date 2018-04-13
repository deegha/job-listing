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

import "./jobSingle.css"

const JobSingle = ({activeJob}) => 
    activeJob.id ?
    <Container>
        <Card>
            <div className="wrapperSingleJob">
                <FelxRow>
                <H1>{activeJob.title}</H1>
                <Liked liked={activeJob.liked} nodeKey={activeJob.id} />
                </FelxRow>
                <PaddingContainer padding="10px">
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

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
import FelxRow from "../reusable/flexRow/felxRow"
import JobExtras from "../reusable/jobExtras/jobExtras"
import { Link } from "react-router-dom"
import Icon from "../reusable/icon/icon"
import ScrollTop from "../reusable/scrollTop/scrollTop"
import Modal from "../reusable/modal/modal"

import "./jobSingle.css"

const JobSingle = ({activeJob, scrollToTop, toggleModal,showModal}) => 
    activeJob.id ?
    <Container>
        <Modal show={showModal} toggle={toggleModal} >
            <img src={activeJob.company_logo} alt="logo" />
        </Modal>

         <Link to="/" className="FloatingBackBtn" >
            <Icon name="chevron-circle-left"/>
        </Link>
        <ScrollTop />
        <Card>
            <div className="wrapperSingleJob">
                <FelxRow>
                    <div  className="singlePageCompanyLogo" >
                        <span onClick={toggleModal()}>
                            <img src={activeJob.company_logo} alt="logo" />
                        </span>
                    </div>
                    <FelxRow>
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


 
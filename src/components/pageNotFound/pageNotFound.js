/**
 * Created by Deegha on 05/13/2018
 */

import React from "react"

import PageNotFoundImage from "../../utils/pageNotFound.png"
import Container from "../reusable/container/container"

const PageNotFound = () => 
    <Container>
        <h1 className="pageNotFoundTitle" >404</h1>
        <img src={PageNotFoundImage} alt="page not found" />
    </Container>

export default PageNotFound
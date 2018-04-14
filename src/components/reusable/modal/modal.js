/**
 * Created by deegha on 04/05/2018
 */

import React from "react"

import "./modal.css"

const Modal = ({children, show, toggle}) => 
<div className="modalContainer" style={{height:show?"100%":"0"}} onClick={toggle()}>
    <div className="modalWrapper" style={show?{transform:"translateY(50px)"}:{}}>{children}</div>
</div>

export default Modal


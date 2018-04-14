import React from "react"

import "./modal.css"

const Modal = ({children, show, toggle}) => 
<div className="modalContainer" style={{height:show?"100%":"0"}} onClick={toggle()}>
    <div className="modalWrapper" style={{transform:"40%,0"}}>{children}</div>
</div>

export default Modal


/**
 * Created by Deegha on 12/05/2018
 */

import React from "react"
import FontAwesome from "react-fontawesome"
import "font-awesome/css/font-awesome.min.css"
import "./icon.css"

const Icon = ({ name, size, className, styles }) => <FontAwesome name={name} size={size} className={className} style={styles}/>

export default Icon

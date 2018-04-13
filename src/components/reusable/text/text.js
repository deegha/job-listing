import React from "react"

import {ReactHTMLConverter} from 'react-html-converter/browser'

import "./text.css"

const converter = new ReactHTMLConverter()
const Text = ({children}) => <p className="text">{children}</p>
export const TextHtmlConverter = ({children}) => <div className="text">{converter.convert(children)}</div>

export default Text
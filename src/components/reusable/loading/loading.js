/**
 * Created by Deegha on 14/05/2018
 */

import React from "react"

import "./loading.css"

class Loading extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            styles : {
                backgroundColor : "#3498db"
            },
            intervalId :null,
            number : 0 ,
            dot : 1
        }
    }

    componentDidMount() {
        this.rotate()
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    rotate = () => this.interval = setInterval(()=>this.rotateAmount(), 1500)

    rotateAmount = () => this.setState({
            number :  this.state.number+720 ,
            styles : {
                backgroundColor : this.state.styles.backgroundColor === "#3498db" ? "#8e44ad" :"#3498db",
                color : this.state.styles.backgroundColor === "#3498db" ?  "#ecf0f1" : "#ffffff"
            },
            dot : this.state.dot < 4 ? this.state.dot+1 : 1
        })
    
    renderDots = () => {
        const u = []
        for(let i = 1; i < this.state.dot; i++ ) { 
             u[i] = <span key={i}>.</span>
        }
        return u
    }

    render() {
        return <div className="loadingContainer">
            <div className="loaderObject" style={{transform:"rotate("+this.state.number+"deg)", ...this.state.styles} }>
            Loading{this.renderDots()}
            </div>
        </div>
    }
} 

export default Loading
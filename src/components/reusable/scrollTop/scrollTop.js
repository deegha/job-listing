/**
 * Created by Deegha on 14/05/2018
 */

import React from "react"
import Icon from "../icon/icon"

import "./scrollTop.css"

class ScrollTop extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            intervalId: 0,
            showScrollUp : false
        }
    }

    componentDidMount() {
        this.showScrollUp();
        window.addEventListener('scroll', this.showScrollUp);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.showScrollUp);
    }

    showScrollUp = _=> (window.pageYOffset > 250) ? this.setState({showScrollUp : true}) : this.setState({showScrollUp : false})

    scrollStep () {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }   
        window.scroll(0, window.pageYOffset - 50);
    }
      
    scrollToTop = _=> _=> {
        let intervalId = setInterval(this.scrollStep.bind(this), 16.6)
        this.setState({ intervalId: intervalId });
    }

    render() {
        return  <div className="FloatingUpBtn" style={{fontSize: this.state.showScrollUp ? "53px" : "0"}} onClick={this.scrollToTop()}>
                    <Icon name="chevron-circle-up" />
                </div>    
    }
}

export default ScrollTop


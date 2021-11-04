import React, { Component } from "react";
import Istaka from '../components/svg_cards/istaka.js';
import Countdown from '../components/countdown.js'
import {
    Row,
    Col,
  } from "reactstrap";

           
class CardAnim extends Component {
    constructor(props){
        super(props);
        

    }
    state = {
    }
    
    render(){
        return (
                <>
                    <div
                        className={'d-block parallax small parallax-responsive'}
                        style={{
                            backgroundImage: "url(/img/nextjs_header.jpg)",
                        }}
                    >
                        {Istaka}
                        <Col md="12" className="h-70">
                            
                        </Col>
                        <Col md="12" className="h-30 text-center text-white d-grid align-content-center">
                            <span className="time-left">
                                <Countdown 
                                    timeTillDate="05 26 2019, 6:00 am" 
                                    timeFormat="MM DD YYYY, h:mm a" 
                                />
                            </span>
                        </Col>
                    </div>
                </>
    );
    }
    
}

export default CardAnim;
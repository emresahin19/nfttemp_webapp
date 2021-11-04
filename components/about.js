import React, { Component } from "react";
import {
    Row,
    Col,
  } from "reactstrap";
import Karma from '../components/svg_cards/karma.js';



class About extends Component {

    constructor(props){
        super(props);
    }
    render(){
       
        return(
            <>
                <Row id="About" className="about-row" 
                    style={{paddingTop: this.props.scrolltop ? 400 : 0}}
                >
                    <Col md="6" className="my-auto" style={{position: 'relative'}}>
                        <Karma
                            scrolltop={this.props.scrolltop}
                            width={this.props.width}
                            height={this.props.height}
                        />
                    </Col>
                    <Col md="6" className="about-main">
                        <span>
                            <h1 className="about-text text-center mt-4">What Are Playing Cards</h1>
                            <p className="about-text lead calc-px-5 mx-2 pt-2">
                                “After a very harsh ice age, polar bears were the only species that survived. 
                                Now, they need to explore the world, create inventions and a world of polar bears - cold, 
                                funky and definitely interesting!” Fluffy Polar Bears are a collection of 9,999 randomly and fully 
                                On-Chain generated NFTs that exist on the Ethereum Blockchain. 99 of them will be special editions of 
                                the collection and fully hand-drawn.
                            </p>
                        </span>
                    </Col>
                </Row>
            </>
        );
    }
   
}
export default About;
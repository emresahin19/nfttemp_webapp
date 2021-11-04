import React, { Component } from "react";
import {
    Row,
    Col,
  } from "reactstrap";


class Footer extends Component {

    constructor(props){
        super(props);
    }
    render(){
       
        return(
            <>
                <Row>
                    <Col md="12" 
                        style={{
                            height: 350,
                            marginTop: 100,
                            background: 'yellow'
                        }}>

                    </Col>
                </Row>
            </>
        );
    }
   
}
export default Footer;
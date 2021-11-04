import React from "react";
import {
    Row,
    Col,
  } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Promotion(props){
    
    return(
        <>
            <Row className="promotion-row">
                <Col md="12">
                    <div className="social-buttons mx-auto mt-4">
                        <div className="__logo">
                            <span>p</span>
                            <span>ardiyo</span>
                        </div>
                        <span className="social-media"
                            style={{
                                left: props.scrolltop ? -75 : 0
                            }}
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                        <span className="social-media mx-2"
                            style={{
                                bottom: props.scrolltop ? -75 : 0
                            }}
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </span>
                        <span className="social-media"
                            style={{
                                right: props.scrolltop ? -75 : 0
                            }}
                        >
                            <FontAwesomeIcon icon={faDiscord} />
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    );
}
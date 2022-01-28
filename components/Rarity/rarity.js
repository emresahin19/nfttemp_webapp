import React, { Component } from "react";
import {
    Row,
    Col,
  } from "reactstrap";
import Carousel from './carousel'
import MacaAs from '../svg_cards/macaas.js';
import MacaPapaz from '../svg_cards/macapapaz.js';
import MacaKiz from '../svg_cards/macakiz.js';
import MacaBacak from '../svg_cards/macabacak.js';
import MacaOn from '../svg_cards/macaon.js';
import Backflip from "../svg_cards/backflip";

class Rarity extends Component {
  state = {
    images: [
        { url: Backflip },
        { url: MacaAs },
        { url: MacaPapaz },
        { url: MacaKiz },
        { url: MacaBacak },
        { url: MacaOn }
      ]
}
  
  render(){
    return (
        <Row id="Rarity" className="slider-row" style={{paddingTop: this.props.scrolltop ? 400 : 0}}>
          <Col md="6" className="about-main">
            <span>
              <h1 className="about-text text-center">How Rare Is My Playing Card</h1>
              <p className="about-text lead mt-4">
                All pieces will be randomly generated on-chain during minting. 
                At the end of the claiming process, we will do a giveaway in live stream and distribute 99 special editions. 
                (In order to give equal chance to everybody) For this reason, the rarity table will be announced after 
                the minting process is over.
              </p>
            </span>
          </Col>
          <Col md="6" className="mx-auto my-auto slider-body" 
            style={{
              width: this.props.width, 
              height: this.props.height,
              transform: 'perspective(1000px) rotateY(' + (this.props.scrolltop ? 90 : 0) +'deg)'
              }}
            >
            <Carousel loop axis="x" className="custom-class" auto={true} interval={3000}>
              {this.state.images.map((item,index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className="mx-auto w-100">
                    <svg
                        key={index}
                        className="maca-flips"
                        version="1.1"
                        viewBox="-40 0 294 415"
                        height="auto"
                        width={'100%'}
                        scrolly={this.props.scrolly}
                    >
                      {item.url}
                    </svg>
                    <div id="glass">&nbsp;</div>
                  </div>
                )
              })}
            </Carousel>
          </Col>
            
        </Row>
    );
  }
}

export default Rarity;
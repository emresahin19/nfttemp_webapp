import React, { Component } from "react";
import {
    Row,
    Col,
  } from "reactstrap";
import Maca from '../components/svg_cards/maca.js';
import Kupa from '../components/svg_cards/kupa.js';
import Sinek from '../components/svg_cards/sinek.js';
import Karo from '../components/svg_cards/karo.js';


class Roadmap extends Component {
    constructor(props){
        super(props);
    }
    state = {
        topof1: null,
        topof2: null,
        topof3: null,
        topof4: null,
        topofimg1: null,
        topofimg2: null,
        topofimg3: null,
        topofimg4: null,
        topofimg5: null,
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll.bind(this));
    }
    handleScroll = () => {
            this.setState({
                topof1: window.scrollY - document.querySelector('#rm1').offsetTop,
                topof2: window.scrollY - document.querySelector('#rm2').offsetTop,
                topof3: window.scrollY - document.querySelector('#rm3').offsetTop,
                topof4: window.scrollY - document.querySelector('#rm4').offsetTop,
                topofimg1: window.scrollY - document.querySelector('#fixed_card1').offsetTop - window.innerHeight + 40 >= 0,
                topofimg2: window.scrollY - document.querySelector('#fixed_card2').offsetTop - window.innerHeight - 30 >= 0,
                topofimg3: window.scrollY - document.querySelector('#fixed_card3').offsetTop - window.innerHeight + 10 >= 0,
                topofimg4: window.scrollY - document.querySelector('#fixed_card4').offsetTop - window.innerHeight - 140 >= 0,
                topofimg5: window.scrollY - document.querySelector('#rm5').offsetTop - window.innerHeight/2 - 50 >= 0,
            });
    }
    render(){
        return(
            <>
                <Row className="roadmap-row" id="Roadmap">
                    <h1 className="mb-4 text-center mt-4">Roadmap</h1>
                    <Col id="fixed_card1" md="6" className="roadmap-main-left mt-4 p-relative d-none d-xl-flex d-lg-flex d-md-flex">
                        <img 
                            className={'fixed-card ' + (this.state.topofimg1 ? 'p-fixed' : 'p-relative')}
                            style={{
                                width: this.props.width/2,
                                top: 60,
                                zIndex: 3,
                                transform: this.state.topofimg5 ? 'translatey(-600px)' : 'translatey(0px)'
                            }}
                            src="img/fixedcard1.png"
                        />
                    </Col>
                    <Col id="rm1" md="6" className="roadmap-main-right mt-4">
                        <span className="middle-border d-none d-xl-flex d-lg-flex d-md-flex">
                            {Kupa}
                        </span>
                        <span className="roadmap-span" style={{transform: this.state.topof1 >= 200 ? 'scaleY(1)' : 'scaleY(0.01)'}}>
                            <p className="roadmap-text lead mx-2">
                                <span className="d-flex"><h4 className="rm-number"><b>.01</b> </h4> <h3 className="roadmap-h3"> Launch Roadmap</h3></span>
                                “After a very harsh ice age, polar bears were the only species that survived. 
                                Now, they need to explore the world, create inventions and a world of polar bears - cold, 
                                funky and definitely interesting!” Fluffy Polar Bears are a collection of 9,999 randomly and fully 
                                On-Chain generated NFTs that exist on the Ethereum Blockchain. 99 of them will be special editions of 
                                the collection and fully hand-drawn.
                            </p>
                        </span>
                    </Col>
                    <Col id="fixed_card2" md="6" className="roadmap-main-left mt-4 p-relative d-none d-xl-flex d-lg-flex d-md-flex">
                        <img 
                            className={'fixed-card ' + (this.state.topofimg2 ? 'p-fixed' : 'p-relative')}
                            style={{
                                width: this.props.width/2,
                                marginLeft: 100,
                                top: 130,
                                zIndex: 1,
                                transform: this.state.topofimg5 ? 'translatey(-700px)' : 'translatey(0px)'
                            }}
                            src="img/fixedcard2.png"
                        />
                    </Col>
                    <Col id="rm2" md="6" className="roadmap-main-right mt-4">
                        <span className="middle-border d-none d-xl-flex d-lg-flex d-md-flex">
                            {Maca}
                        </span>
                        <span className="roadmap-span" style={{transform: this.state.topof2 >= 200 ? 'scaleY(1)' : 'scaleY(0.01)'}}>
                            <p className="roadmap-text lead mx-2">
                                <span className="d-flex"><h4 className="rm-number"><b>.02</b> </h4> <h3 className="roadmap-h3"> Physical Part</h3></span>
                                Mekas have a huge potential as physical creations. We are passionate about 3D printing and want to bring our 
                                concept to life with high-quality materials. After several talks with famous art toys makers, we are currently 
                                working on some concepts but wait, let’s keep a little mystery for the moment! We also aim to create clothing and 
                                merchandise using high-quality materials and textiles with eco-friendly fabrics. Also, Matt. B would love to 
                                explore a new and ambitious 3D Art Direction about streetwear and fashion in general. By following our design 
                                principles, we will do everything possible to create something amazing before, during, and after the launch of 
                                the first Drop! 
                            </p>
                        </span>
                    </Col>
                    <Col id="fixed_card3" md="6" className="roadmap-main-left mt-4 p-relative d-none d-xl-flex d-lg-flex d-md-flex">
                        <img 
                            className={'fixed-card ' + (this.state.topofimg3 ? 'p-fixed' : 'p-relative')}
                            style={{
                                width: this.props.width/2,
                                marginLeft: 180,
                                top: 90,
                                zIndex: 2,
                                transform: this.state.topofimg5 ? 'translatey(-500px)' : 'translatey(0px)'
                            }}
                            src="img/fixedcard3.png"
                        />
                    </Col>
                    <Col id="rm3" md="6" className="roadmap-main-right mt-4">
                        <span className="middle-border d-none d-xl-flex d-lg-flex d-md-flex">
                            {Karo}
                        </span>
                        <span className="roadmap-span" style={{transform: this.state.topof3 >= 200 ? 'scaleY(1)' : 'scaleY(0.01)'}}>
                            <p className="roadmap-text lead mx-2">
                                <span className="d-flex"><h4 className="rm-number"><b>.03</b> </h4> <h3 className="roadmap-h3"> Playing Cards x Artists </h3></span>
                                After presenting our original Mekas, we want to explore more abstract subjects in order to present a second, 
                                very distinct drop. Our aim is simply to aesthetically enlarge the universe, and each relationship between the 
                                Meka Dimensions will be described and explained. We truly want to blend artistic disciplines, as well as move 
                                beyond our graphic style and look outside our comfort zone. We also want to see if it would be possible to 
                                collaborate with famous mecha licenses on future releases. That would be incredible! 
                            </p>
                        </span>
                    </Col>
                    <Col id="fixed_card4" md="6" className="roadmap-main-left mt-4 p-relative d-none d-xl-flex d-lg-flex d-md-flex">
                        <img 
                            className={'fixed-card ' + (this.state.topofimg4 ? 'p-fixed' : 'p-relative')}
                            style={{
                                width: this.props.width/2,
                                marginLeft: -40,
                                top: 240,
                                zIndex: -1,
                                transform: this.state.topofimg5 ? 'translatey(-800px)' : 'translatey(0px)'
                            }}
                            src="img/fixedcard4.png"
                        />
                    </Col>
                    <Col id="rm4" md="6" className="roadmap-main-right mt-4">
                        <span className="middle-border d-none d-xl-flex d-lg-flex d-md-flex">
                            {Sinek}
                        </span>
                        <span className="roadmap-span" style={{transform: this.state.topof4 >= 200 ? 'scaleY(1)' : 'scaleY(0.01)'}}>
                            <p className="roadmap-text lead mx-2">
                                <span className="d-flex"><h4 className="rm-number"><b>.04</b> </h4> <h3 className="roadmap-h3"> Future of Playing Cards</h3></span>
                                When all of these stages are completed, we’ll take care of maintaining the Meka Universe. We both come from 
                                the design industry, and we are truly passionate about Art, Short films, Physical and Digital Exploration, 
                                and we would like to explore even more, with the desire to always make events more impressive and ambitious. 
                                We are counting on your support! We look forward to seeing what happens in the future! Love from Mekas
                            </p>
                        </span>
                    </Col>
                    <Col id="rm5"
                     style={{
                        height: 350
                    }}></Col>
                </Row>
            </>
        );
    }
    
}
export default Roadmap;
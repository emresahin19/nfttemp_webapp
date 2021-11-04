import React, { Component } from "react";
import Header from "../components/header.js";
import CardAnim from "../components/cardanim.js";
import About from "../components/about.js";
import Rarity from '../components/Rarity/rarity.js';
import Roadmap from "../components/roadmap.js";
import Faq from "../components/faq.js";
import Footer from "../components/footer.js";
import Slider from '../components/slider.js'
import {
  Row,
  Col,
} from "reactstrap";
import Promotion from "../components/promotion";

class Main extends Component {
  constructor(props){
    super(props);
    //window.scrollY - document.querySelector('#About').offsetTop <= 0 ? 400 : 0,
  }
  state = {
    windowWidth: null,
    windowScroll: null,
    scrolly: null,
    sliderWidth: null,
    promotionID: null,
    aboutID: null,
    rarityID: null,
    faqID: null,

  }
  componentDidMount() {
      window.addEventListener("resize", this.resize.bind(this));
      window.addEventListener("scroll", this.handleScroll.bind(this));
      this.resize();
  }

  resize() {
      this.setState({
          windowWidth: window.innerWidth,
          sliderWidth: window.innerWidth<768 ? window.innerWidth/1.2 : window.innerWidth/3
      });
  }
  
  componentWillUnmount() {
      window.removeEventListener("resize", this.resize.bind(this));
      window.removeEventListener("scroll", this.handleScroll.bind(this));
  }
  handleScroll() {
    this.setState({
      scrolly: window.scrollY,
      promotionID: window.scrollY - document.querySelector('#promotionID').offsetTop <= 0,
      aboutID: window.scrollY - document.querySelector('#aboutID').offsetTop <= 0,
      rarityID: window.scrollY - document.querySelector('#rarityID').offsetTop <= 0,
      faqID: window.scrollY - document.querySelector('#faqID').offsetTop <= 0
    });
  }
  render(){
    return (
      <div>
        <Header 
          width={this.state.windowWidth}/>
        <CardAnim
          scrolly={this.state.scrolly}
        />
        <div className="main-raised">
          <span className="main-container-curve"></span>
          <span className="main-container-curve2"></span>
          <div className="main-container">
            <div id="promotionID">
              <Promotion
                  scrolltop={this.state.promotionID}
                  scrolly={this.state.scrolly}
                  width={this.state.sliderWidth}
                  height={this.state.sliderWidth}
              />
            </div>
            <div id="aboutID">
              <About
                scrolltop={this.state.aboutID}
                scrolly={this.state.scrolly}
                width={this.state.sliderWidth}
                height={this.state.sliderWidth}
              />
            </div>
            <div id="rarityID">
              <Rarity
                scrolltop={this.state.rarityID}
                scrolly={this.state.scrolly}
                width={this.state.sliderWidth}
                height={this.state.sliderWidth}
              />
            </div>
            <Roadmap
              scrolly={this.state.scrolly}
              width={this.state.sliderWidth}
              height={this.state.sliderWidth}
            />
            <div id="faqID">
              <Faq
                scrolltop={this.state.faqID}
                scrolly={this.state.scrolly}
                width={this.state.sliderWidth}
                height={this.state.sliderWidth}
              />
            </div>
            <Slider/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Main;

import React, { Component } from "react";
import Parallax from "../components/Parallax/Parallax.js";
import Header from "../components/header.js";
import CardAnim from "../components/cardanim.js";
import About from "../components/about.js";
import Promotion from "../components/promotion";
import Nftslider from '../components/Slider/slider.js';
import { Col } from "reactstrap";
import Roadmap from "../components/roadmap.js";
import Faq from "../components/faq.js";


class Main extends Component {
  constructor(props){
    super(props);
    
  }
  state = {
    windowWidth: null,
    windowScroll: null,
    scrolly: null,
    sliderWidth: null

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
      scrolly: window.scrollY
    });
  }
  render(){
    return (
      <div>
        <Header 
          width={this.state.windowWidth}/>
        <Parallax 
          image="/img/nextjs_header.jpg"
          scrolly={this.state.scrolly}
        >
          <CardAnim
            scrolly={this.state.scrolly}
          />
        </Parallax>
  
        <div className="main-raised">
          <div className="main-container">
            <span className="main-container-curve"></span>
            <Promotion
              scrolly={this.state.scrolly}
              width={this.state.sliderWidth}
              height={this.state.sliderWidth}
            />
            <About
              scrolly={this.state.scrolly}
              width={this.state.sliderWidth}
              height={this.state.sliderWidth}
            />
            <Nftslider
              scrolly={this.state.scrolly}
              width={this.state.sliderWidth}
              height={this.state.sliderWidth}
            />
            <Roadmap
              scrolly={this.state.scrolly}
              width={this.state.sliderWidth}
              height={this.state.sliderWidth}
            />
            <Faq
              scrolly={this.state.scrolly}
              width={this.state.sliderWidth}
              height={this.state.sliderWidth}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Main;

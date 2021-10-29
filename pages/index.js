import React, { Component } from "react";
import Parallax from "../components/Parallax/Parallax.js";
import Header from "../components/header.js";
import CardAnim from "../components/cardanim.js";
import About from "../components/about.js";

class Main extends Component {
  constructor(props){
    super(props);
  }
  state = {
    windowWidth: null,
    windowScroll: null,
    scrolly: null

  }
  componentDidMount() {
      window.addEventListener("resize", this.resize.bind(this));
      window.addEventListener("scroll", this.handleScroll.bind(this));
      this.resize();
  }

  resize() {
      this.setState({
          windowWidth: window.innerWidth
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
          <div className="main-container" style={{height: 1000}}>
            <span className="main-container-curve"></span>
            <About
              scrolly={this.state.scrolly}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Main;

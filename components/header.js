import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Row
} from "reactstrap";
import CardFirst from './svg_cards/CardFirst.js'
import CardSecond from './svg_cards/CardSecond.js'
import CardThird from './svg_cards/CardThird.js'
import CardFourth from './svg_cards/CardFourth.js'
import CardFifth from './svg_cards/CardFifth.js'
import styles from "../styles/jss/style.js"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const Logo = (props) => {

    const classes = useStyles();

    return (
        <div className="svg-logo" style={{width:props.width}} >
            <svg version="1.1" id="svg-cards"
            width="" height="auto" viewBox="0 0 1380 500">
                <g>
                   <CardFirst
                        classesName={props.opened==true ? classes.openedCards0 : classes.closedCards0}
                   />
                   <CardSecond
                        classesName={props.opened==true ? classes.openedCards1 : classes.closedCards1}
                   />
                   <CardThird
                        classesName={props.opened==true ? classes.openedCards2 : classes.closedCards2}
                   />
                   <CardFourth
                        classesName={props.opened==true ? classes.openedCards3 : classes.closedCards3}
                   />
                   <CardFifth
                        classesName={props.opened==true ? classes.openedCards4 : classes.closedCards4}
                   />
                </g>
            </svg>
        </div>

    );
}
class Hamburger extends Component {
    render(){
        return (
            <>
                <svg id="icon" viewBox="0 0 800 600">
                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                    <path d="M300,320 L540,320" id="middle"></path>
                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                </svg>
            </>
        );
    }
}
class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    state = {
        collapsed: true,
        hover: false,
        titles: [],
        index: 0,
        screenWidth: null,
        headers: [
            {
                name: 'About', 
                hover: false,
            }, 
            {
                name: 'Rarity', 
                hover: false,
            }, 
            {
                name: 'Roadmap', 
                hover: false,
            }, 
            {
                name: 'FAQ', 
                hover: false,
            }, 
            {
                name: 'Team', 
                hover: false,
            }
        ]
    };
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        window.addEventListener("scroll", this.handleScroll.bind(this));
        this.resize();
    }
    
    resize() {
        this.setState({
            collapsed: window.innerWidth <= 770
        });
        this.setState({
            screenWidth: window.innerWidth <= 770
        })
    }
    handleScroll() {
        if(!this.state.screenWidth){
            this.setState({
                collapsed: window.scrollY>0
            });
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
        window.removeEventListener("scroll", this.handleScroll.bind(this));
    }

    handleMouseOver(i, e){
        let headerArr = [...this.state.headers];
        headerArr.map((item,index)=>{
            let other = {
                ...headerArr[index],
                hover: true
            }
            headerArr[index] = other;
            this.setState({headers: headerArr});
        })
        let theHeader = {
            ...headerArr[i],
            hover: false
        }
        headerArr[i] = theHeader;
        this.setState({
            headers: headerArr,
            hover: true,
            index: i,
        });
    }
    handleMouseOut(i, e){
        let headerArr = [...this.state.headers];
         headerArr.map((item,index)=>{
            let other = {
                ...headerArr[index],
                hover: false
            }
            headerArr[index] = other;
            this.setState({headers: headerArr});
        })
        let theHeader = {
            ...headerArr[i],
            hover: false
        }
        headerArr[i] = theHeader;
        this.setState({
            headers: headerArr,
            hover: false,
            index: i,
        });
    }
    render(){
        return(
            <div style={{marginBottom: 50}}>
                <Navbar expand="md-12" className={(this.state.collapsed ? 'closed-header ' : 'opened-header ') + 'pb-0 navbar-before'} light fixed="top" >
                    <NavbarBrand className="mx-auto d-flex text-center logo-before">
                        <Logo
                            fill={"var(--card-second)"}
                            color={"#000"}
                            width={220}
                            thin={1.1199}
                            opened={this.state.collapsed}
                        />
                        <span className="logo-right-top"/>
                        <span className="logo-left-top"/>
                    </NavbarBrand>
                    <div 
                        className={this.state.collapsed ? "hamburger" : "hamburger cross"} 
                        onClick={this.toggleNavbar}
                        style={{maxWidth: 150}}
                    >
                        <Hamburger/>
                    </div>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className={this.state.screenWidth ? "d-block" : "d-flex"  + " w-100 header-items"} pills>
                            {this.state.headers.map((item,index)=>{
                                return (
                                    <NavItem className={this.state.screenWidth ? "m-dropdown-main" : "d-dropdown-main" + " mx-auto"} key={index}>
                                        <a 
                                            href="#"
                                            onMouseOver={this.handleMouseOver.bind(this, index)}
                                            onMouseOut={this.handleMouseOut.bind(this, index)}
                                            className={item.hover ? 'nav-item-a hover' : 'nav-item-a'}
                                        >
                                            { item.name.charAt(0).toUpperCase() + item.name.slice(1) }
                                        </a>
                                        <ul className={"d-dropdown-menu " + (this.state.hover && !item.hover ? "show" : "")}>
                                            {this.state.titles.map((item, index) => {
                                                return (
                                                    <NavItem className="mx-auto" key={index}>
                                                        <a 
                                                            onMouseOver={this.handleMouseOver.bind(this, this.state.index)}
                                                            onMouseOut={this.handleMouseOut.bind(this, this.state.index)}
                                                            className={this.state.hover ? 'nav-item-detail' : 'nav-item-detail hover'}
                                                            href="#"
                                                        >
                                                            {item}
                                                        </a>
                                                    </NavItem>
                                                );
                                            })}
                                        </ul>
                                    </NavItem>
                                );
                            })}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
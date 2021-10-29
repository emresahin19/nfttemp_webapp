import React, { Component } from "react";
import MacaAs from '../components/svg_cards/macaas.js';
import MacaPapaz from '../components/svg_cards/macapapaz.js';
import MacaKiz from '../components/svg_cards/macakiz.js';
import MacaBacak from '../components/svg_cards/macabacak.js';
import Backflip from '../components/svg_cards/backflip.js';
import MacaOn from '../components/svg_cards/macaon.js';

class CardAnim extends Component {
    constructor(props){
        super(props);
        setTimeout(() => {
            this.setState({
                deal: true
            })
        }, 100);

    }
    state = {
        deal: false,
        width: null,
        scrolledy: 0,
        flips: [
            {
                component: MacaAs,
                hover: false,
                front: 0,
                back: 1,
                x: 0,
            },
            {
                component: MacaPapaz,
                hover: false,
                front: 0,
                back: 1,
                x: 0,
            },
            {
                component: MacaKiz,
                hover: false,
                front: 0,
                back: 1,
                x: 0,
            },
            {
                component: MacaBacak,
                hover: false,
                front: 0,
                back: 1,
                x: 0,
            },
            {
                component: MacaOn,
                hover: false,
                front: 0,
                back: 1,
                x: 0,
            },
        ]
    }
    handleClick = (i, e) => {

        if(this.state.deal && this.state.flips[i].hover!=true){
            this.frontFlip(i);
        }
        else if(this.state.deal && this.state.flips[i].hover){
            
            this.backFlip(i);
        }
    }
    
    componentDidMount() {
       
        this.setState({
            width: (window.innerWidth-30)/5
        })

    }
    
    frontFlip = async (i) => {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        let flipsFrontArr = [...this.state.flips];
        let theFlip = {
            ...flipsFrontArr[i],
            front: 1
        }
        flipsFrontArr[i] = theFlip;
        this.setState({
            flips: flipsFrontArr,
        });

        await sleep(400)

        let flipsBackArr = [...this.state.flips];
        let theBackFlip = {
            ...flipsBackArr[i],
            hover: true,
            back: 0,
        }
        flipsBackArr[i] = theBackFlip;
        this.setState({
            flips: flipsBackArr,
        });
    }

    backFlip = async (i) => {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        let flipsBackArr = [...this.state.flips];
        let theFlip = {
            ...flipsBackArr[i],
            back: 1,
        }
        flipsBackArr[i] = theFlip;
        this.setState({
            flips: flipsBackArr,
        });
        await sleep(400)
        
        let flipsFrontArr = [...this.state.flips];
        
        let theFrontFlip = {
            ...flipsFrontArr[i],
            hover: false,
            front: 0,
        }
        flipsFrontArr[i] = theFrontFlip;
        this.setState({
            flips: flipsFrontArr,
        });
    }
    
    render(){
        return (
                <>
                    {this.state.flips.map((item, index) => {
                        return (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id={"maca-"+index}
                                className="maca-flips"
                                version="1.1"
                                viewBox="-50 -50 311 398"
                                height="auto"
                                width={this.state.width}
                                onClick={this.handleClick.bind(this, index)}
                                style={
                                    this.props.scrolly <= 500 && this.state.deal ? 
                                    {
                                        transform: 'translatex(0px)'
                                    }
                                    :
                                    {
                                        transform: 'translatex('+ -((this.state.width)*index) +'px)'
                                    }
                                }
                            >
                                <g 
                                    className="backs"
                                    style={
                                        item.back ?
                                        {
                                            transform: 'perspective(800px) rotateY(-90deg) scaleX(0)'
                                        }
                                        :
                                        {
                                            transform: 'perspective(800px) rotateY(0deg) scaleX(1)'
                                        }
                                    }
                                >
                                    {item.component}
                                </g>
                                <g 
                                    className="backs"
                                    style={
                                        item.front ?
                                        {
                                            transform: 'perspective(800px) rotateY(45deg) scaleX(0)'
                                        }
                                        :
                                        {
                                            transform: 'perspective(800px) rotateY(0deg) scaleX(1)'
                                        }
                                    }
                                >
                                    {Backflip}
                                </g>
                            </svg>
                        );
                    })}
                    
                </>
    );
    }
    
}

export default CardAnim;
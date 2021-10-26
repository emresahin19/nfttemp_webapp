import React, { Component } from "react";
import CardFirst from './svg_cards/CardFirst.js'
import CardSecond from './svg_cards/CardSecond.js'
import CardThird from './svg_cards/CardThird.js'
import CardFourth from './svg_cards/CardFourth.js'
import CardFifth from './svg_cards/CardFifth.js'
import CardSixth from './svg_cards/CardSixth.js'
import CardSeventh from './svg_cards/CardSeventh.js'
import CardEighth from './svg_cards/CardEighth.js'
import CardNinth from './svg_cards/CardNinth.js'
import CardTenth from './svg_cards/CardTenth.js'
import SinekPapaz1 from './svg_cards/sinekpapaz1.js'
import SinekPapaz2 from './svg_cards/sinekpapaz2.js'
import SinekPapaz3 from './svg_cards/sinekpapaz3.js'
import SinekPapaz4 from './svg_cards/sinekpapaz4.js'
import SinekPapaz5 from './svg_cards/sinekpapaz5.js'

class CardAnim extends Component {
    constructor(props){
        super(props);
    }
    state = {
        flips: [
            {
                hover: false,
                front: 'perspective(400px) rotateY(0deg) scale(1, 1)',
                back: 'translate(132px, -385px) scale(0, 0.75) perspective(500px) rotateY(30deg)',
                transformOrigin: '17.6% 50%'
            },
            {
                hover: false,
                front: 'perspective(400px) rotateY(0deg) scale(1, 1)',
                back: 'translate(132px, -385px) scale(0, 0.75) perspective(500px) rotateY(30deg)',
                transformOrigin: '34.2% 50% 0px'
                
            },
            {
                hover: false,
                front: 'perspective(400px) rotateY(0deg) scale(1, 1)',
                back: 'translate(132px, -385px) scale(0, 0.75) perspective(500px) rotateY(30deg)',
                transformOrigin: '50.7% 50% 0px',
                
            },
            {
                hover: false,
                front: 'perspective(400px) rotateY(0deg) scale(1, 1)',
                back: 'translate(132px, -385px) scale(0, 0.75) perspective(500px) rotateY(30deg)',
                transformOrigin: '67.3% 50% 0px',
                
            },
            {
                hover: false,
                front: 'perspective(400px) rotateY(0deg) scale(1, 1)',
                back: 'translate(132px, -385px) scale(0, 0.75) perspective(500px) rotateY(30deg)',
                transformOrigin: '83.9% 50% 0px',
                
            },
        ]
    }
    
    handleClick = async (i, e) => {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        if(this.state.flips[i].hover!=true){

            let flipsFrontArr = [...this.state.flips];
            let theFlip = {
                ...flipsFrontArr[i],
                front: 'perspective(200px) rotateY(45deg) scale(0, 1)',
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
                back: 'translate(132px, -385px) scale(0.87, 0.86) perspective(400px) rotateY(0deg)',
            }
            flipsBackArr[i] = theBackFlip;
            this.setState({
                flips: flipsBackArr,
            });
        }
        else{
            
            let flipsBackArr = [...this.state.flips];
            let theFlip = {
                ...flipsBackArr[i],
                back: 'translate(132px, -385px) scale(0 , 0.76) perspective(400px) rotateY(-45deg)',
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
                front: 'perspective(200px) rotateY(0deg) scale(1, 1)',
            }
            flipsFrontArr[i] = theFrontFlip;
            this.setState({
                flips: flipsFrontArr,
            });
        }
    }
    render(){
        return (
                <>
                    <div>
                        <svg 
                            version="1.1"
                            height="auto" 
                            viewBox="0 -200 1380 500"
                        >
                                <CardFirst
                                    mouseclick={this.handleClick.bind(this, 0)}
                                    stylies ={{
                                        transformOrigin: this.state.flips[0].transformOrigin,
                                        transition: '.4s all',
                                        transform: this.state.flips[0].front,
                                    }}
                                />
                                <CardSecond
                                    mouseclick={this.handleClick.bind(this, 1)}
                                    stylies ={{
                                        transformOrigin: this.state.flips[1].transformOrigin,
                                        transition: '.4s all',
                                        transform: this.state.flips[1].front,
                                    }}
                                />
                                <CardThird
                                    mouseclick={this.handleClick.bind(this, 2)}
                                    stylies ={{
                                        transformOrigin: this.state.flips[2].transformOrigin,
                                        transition: '.4s all',
                                        transform: this.state.flips[2].front,
                                    }}
                                />
                                <CardFourth
                                    mouseclick={this.handleClick.bind(this, 3)}
                                    stylies ={{
                                        transformOrigin: this.state.flips[3].transformOrigin,
                                        transition: '.4s all',
                                        transform: this.state.flips[3].front,
                                    }}
                                />
                                <CardFifth
                                    mouseclick={this.handleClick.bind(this, 4)}
                                    stylies ={{
                                        transformOrigin: this.state.flips[4].transformOrigin,
                                        transition: '.4s all',
                                        transform: this.state.flips[4].front,
                                    }}
                                />
                        </svg>
                        <svg 
                            version="1.1"
                            height="auto" 
                            viewBox="77 -200 1380 500"
                        >
                            <g>
                        <SinekPapaz1
                            width="234"
                            height="333.00003"
                            mouseclick={this.handleClick.bind(this, 0)}
                            stylies={{
                                transformOrigin: '50% 50%',
                                transition: '.4s all',
                                transform: this.state.flips[0].back
                            }}
                        />
                        <SinekPapaz2
                            width="234"
                            height="333.00003"
                            mouseclick={this.handleClick.bind(this, 1)}
                            stylies={{
                                transformOrigin: '50% 50%',
                                transition: '.4s all',
                                transform: this.state.flips[1].back
                            }}
                        />
                        <SinekPapaz3
                            width="234"
                            height="333.00003"
                            mouseclick={this.handleClick.bind(this, 2)}
                            stylies={{
                                transformOrigin: '50% 50%',
                                transition: '.4s all',
                                transform: this.state.flips[2].back
                            }}
                        />
                        <SinekPapaz4
                            width="234"
                            height="333.00003"
                            mouseclick={this.handleClick.bind(this, 3)}
                            stylies={{
                                transformOrigin: '50% 50%',
                                transition: '.4s all',
                                transform: this.state.flips[3].back
                            }}
                        />
                        <SinekPapaz5
                            width="234"
                            height="333.00003"
                            mouseclick={this.handleClick.bind(this, 4)}
                            stylies={{
                                transformOrigin: '50% 50%',
                                transition: '.4s all',
                                transform: this.state.flips[4].back
                            }}
                        />
                        </g>
                    </svg>
                    </div>
                </>
    );
    }
    
}

export default CardAnim;
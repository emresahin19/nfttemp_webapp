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
import SinekPapaz6 from './svg_cards/sinekpapaz6.js'

class CardAnim extends Component {
    constructor(props){
        super(props);
    }
    state = {
        transformOrigin: 16.6,
        sliderCounter: 0,
        flips: [
            {
                hover: false,
                front: 'translate(0px, 0px) rotateY(0deg) scale(1, 1) perspective(400px)',
                back: 'translate(' + 0*6 + 'px, -497px) scale(0, 0.86) rotateY(30deg)',
                x: 0,
                opacity: 1
            },
            {
                hover: false,
                front: 'translate(0px, 0px) rotateY(0deg) scale(1, 1) perspective(400px)',
                back: 'translate(' + 1*6 + 'px, -497px) scale(0, 0.86) rotateY(30deg) perspective(400px)',
                x: 0
                
            },
            {
                hover: false,
                front: 'translate(0px, 0px) rotateY(0deg) scale(1, 1) perspective(400px)',
                back: 'translate(' + 2*6 + 'px, -497px) scale(0, 0.86) rotateY(30deg) perspective(400px)',
                x: 0
                
            },
            {
                hover: false,
                front: 'translate(0px, 0px) rotateY(0deg) scale(1, 1) perspective(400px)',
                back: 'translate(' + 3*6 + 'px, -497px) scale(0, 0.86) rotateY(30deg) perspective(400px)',
                x: 0
                
            },
            {
                hover: false,
                front: 'translate(0px, 0px) rotateY(0deg) scale(1, 1) perspective(400px)',
                back: 'translate(' + 4*6 + 'px, -497px) scale(0, 0.86) rotateY(30deg) perspective(400px)',
                x: 0,
                opacity: 1
                
            },
            {
                hover: false,
                front: 'translate(' + 228*5 + 'px, -400px) rotateY(0deg) scale(1,1) perspective(400px)',
                back: 'translate(' + 5*6 + 'px, -497px) scale(0, 0.86) rotateY(30deg) perspective(400px)',
                x: 0
                
            },
        ]
    }
    componentDidMount() {
        // const intervalId = setInterval(()=>{
        //     (this.state.flips).map((item, i) => {
                
        //         let xArr = [...this.state.flips];
        //         let theX = {};
        //         if((i+1)*item.x < 1368){
        //             theX = {
        //                 ...xArr[i],
        //                 x: this.state.flips[i].x + 10,
        //                 ocapicty: 1
        //             }
        //         }
        //         else {
        //             theX = {
        //                 ...xArr[i],
        //                 x: this.state.flips[i].x-1368,
        //                 ocapicty: 0
        //             }
        //         }
        //         xArr[i] =theX;
        //         this.setState({
        //             flips: xArr,
        //         });
        //     })
        // },800/3)
        // clearInterval(intervalId)
    }
    handleClick = async (i, e) => {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        if(this.state.flips[i].hover!=true){

            let flipsFrontArr = [...this.state.flips];
            let translateIt = '';
            if(i<5){
                translateIt = 'translate(' + i*6 + 'px, 0px) rotateY(30deg) scale(0, 1) perspective(400px)'
            }
            else {
                translateIt = 'translate(' + i*6 + 'px, -400px) rotateY(30deg) scale(0, 1) perspective(400px)';
            }
            let theFlip = {
                ...flipsFrontArr[i],
                front: translateIt
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
                back: 'translate(' + (112 + (201*i)) + 'px, -497px) scale(0.875, 0.86) rotateY(0deg) perspective(400px)',
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
                back: 'translate(' + i*6 + 'px, -497px) scale(0 , 0.86) rotateY(30deg) perspective(400px)',
            }
            flipsBackArr[i] = theFlip;
            this.setState({
                flips: flipsBackArr,
            });
            await sleep(400)
            
            let flipsFrontArr = [...this.state.flips];
            let translateIt = '';
            if(i<5){
                translateIt = 'translate(0px, 0px) rotateY(0deg) scale(1, 1) perspective(400px)'
            }
            else {
                translateIt = 'translate(' + 228*i + 'px, -400px) rotateY(0deg) scale(1, 1) perspective(400px)'
            }
            
            let theFrontFlip = {
                ...flipsFrontArr[i],
                hover: false,
                front: translateIt,
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
                            id="card_slider"
                            version="1.1"
                            width="100%"
                            height="auto" 
                            viewBox="120 100 1389 365" 
                        >
                            <g style={{
                                transform: 'translate('+ this.state.flips[0].x +'px)',
                                opacity: this.state.flips[0].opacity
                            }}>
                                <CardFirst
                                    mouseclick={this.handleClick.bind(this, 0)}
                                    classesName={'anim_card_front'} 
                                    stylies ={{
                                        transformOrigin: '' + this.state.transformOrigin*1+'% 50%',
                                        transform: this.state.flips[0].front,
                                    }}
                                />
                                <SinekPapaz1
                                    mouseclick={this.handleClick.bind(this, 0)}
                                    stylies={{
                                        transformOrigin: '' + this.state.transformOrigin*1+'% 50%',
                                        transform: this.state.flips[0].back
                                    }}
                                />
                            </g>
                            <g style={{transform: 'translate('+ this.state.flips[1].x +'px)'}}>
                                <CardSecond
                                    mouseclick={this.handleClick.bind(this, 1)}
                                    classesName={'anim_card_front'} 
                                    stylies ={{
                                        transformOrigin: '' + this.state.transformOrigin*2+'% 50%',
                                        transform: this.state.flips[1].front,
                                    }}
                                />
                                <SinekPapaz2
                                    mouseclick={this.handleClick.bind(this, 1)}
                                    stylies={{
                                        transformOrigin: '' + this.state.transformOrigin*2+'% 50%',
                                        transform: this.state.flips[1].back
                                    }}
                                />

                            </g>
                            <g style={{transform: 'translate('+ this.state.flips[2].x +'px)'}}>
                                <CardThird
                                    mouseclick={this.handleClick.bind(this, 2)}
                                    classesName={'anim_card_front'} 
                                    stylies ={{
                                        transformOrigin: '' + this.state.transformOrigin*3+'% 50%',
                                        transform: this.state.flips[2].front,
                                    }}
                                />
                                <SinekPapaz3
                                    mouseclick={this.handleClick.bind(this, 2)}
                                    stylies={{
                                        transformOrigin: '' + this.state.transformOrigin*3+'% 50%',
                                        transform: this.state.flips[2].back
                                    }}
                                />

                            </g>
                            <g style={{transform: 'translate('+ this.state.flips[3].x +'px)'}}>
                                <CardFourth
                                    mouseclick={this.handleClick.bind(this, 3)}
                                    classesName={'anim_card_front'} 
                                    stylies ={{
                                        transformOrigin: '' + this.state.transformOrigin*4+'% 50%',
                                        transform: this.state.flips[3].front,
                                    }}
                                />
                                <SinekPapaz4
                                    mouseclick={this.handleClick.bind(this, 3)}
                                    stylies={{
                                        transformOrigin: '' + this.state.transformOrigin*4+'% 50%',
                                        transform: this.state.flips[3].back
                                    }}
                                />

                            </g>
                            <g style={{
                                transform: 'translate('+ this.state.flips[4].x +'px)',
                                opacity: this.state.flips[4].opacity
                                }}>
                                <CardFifth
                                    mouseclick={this.handleClick.bind(this, 4)}
                                    classesName={'anim_card_front'} 
                                    stylies ={{
                                        transformOrigin: '' + this.state.transformOrigin*5+'% 50%',
                                        transform: this.state.flips[4].front,
                                    }}
                                />
                                <SinekPapaz5
                                    mouseclick={this.handleClick.bind(this, 4)}
                                    stylies={{
                                        transformOrigin: '' + this.state.transformOrigin*5+'% 50%',
                                        transform: this.state.flips[4].back
                                    }}
                                />

                            </g>
                            <g style={{transform: 'translate('+ this.state.flips[5].x +'px)'}}>
                                <CardSixth
                                    mouseclick={this.handleClick.bind(this, 5)}
                                    classesName={'anim_card_front'} 
                                    stylies ={{
                                        transformOrigin: '' + this.state.transformOrigin*6+'% 50%',
                                        transform: this.state.flips[5].front,
                                    }}
                                />
                                <SinekPapaz6
                                    mouseclick={this.handleClick.bind(this, 5)}
                                    stylies={{
                                        transformOrigin: '' + this.state.transformOrigin*6+'% 50%',
                                        transform: this.state.flips[5].back
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
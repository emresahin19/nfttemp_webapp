import React, { Component } from "react";
import {
    Row,
    Col,
  } from "reactstrap";

const answers = [
    {
        question: 'What is NFT?',
        answer: ' NFT is a non fungible token, and you can buy and trade these tokens. You can also keep it in your own wallet if you want! Fluffy Polar Bears is a collection of artworks you can digitally own. By owning an NFT, you can also have many future utilities. Join us to be part of a unique community!',
    },
    {
        question:'How do I buy a Fluffy Polar Bear?',
        answer:'First, you need to have an Eth wallet. You can use various applications such as Binance and Coinbase and create a wallet for yourself. Since Fluffy Polar Bears will use the ETH blockchain, you need to have ethereum in your wallet. Download the MetaMask extension to your computer: https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047 and then connect your wallet. You can complete the purchase via MetaMask by visiting our website on the day of sale, clicking on the "Mint Sketch" button and choosing how many you want to buy. You can always reach us on Discord for your questions!',
    },
    {
        question:'What is On-Chain Generation?',
        answer:'Fluffy Polar Bears are generated completely randomly during claiming/burning and their rarity/appearance is not clear beforehand. All 9,999 products will be printed on-chain. Other 99 special editions will be drawn by hand in different concepts by Selçuk Erdem. After claiming your polar bears, these 99 special pieces will replace 99 randomly selected claimed polar bears. More mystery, more excitement!',
    },
    {
        question:'When is the sale?',
        answer:'Mint date for sketches 25th of October. Claim & Reroll date 26th of October',
    },
    {
        question:'How can I be sure that you will donate?',
        answer:'5% of our sales will directly go to https://lfca.earth/ and you can check it from our smart contract as we already deployed it!',
    },
    {
        question:'What about Breeding and ARG?',
        answer:'Fluffy Polar Bears are just the beginning of a great story! An ice cube airdrop will be awarded to each polar bear owner\'s wallet. Then, by breeding a completely different creature, very entertaining ARGs will be waiting for you in the rest of the story!',
    },
    {
        question:'What are the details of the Arctic trip?',
        answer:'https://fluffypolarbears.medium.com/fluffy-stories-3-arctic-island-travel-details-a956ca67d43e',
    }
]
class Faq extends Component{
    constructor(props){
        super(props);
    }
    state= {
        questions: [
            {
                opened: false,
            },
            {
                opened: false,
            },
            {
                opened: false,
            },
            {
                opened: false,
            },
            {
                opened: false,
            },
            {
                opened: false,
            },
            {
                opened: false,
            }
        ]
    }
    handleChange = async (i, e) => {
        let openArr = [...this.state.questions];
        let theOpened = {
            ...openArr[i],
            opened: !this.state.questions[i].opened
        }
        openArr[i] = theOpened;
        this.setState({
            questions: openArr,
        });
    };
    render(){
        return(
            <>
                <Row className="faq-row">
                    <Col md="12" className="faq-main p-relative">
                        <h1 className="faq-text text-center mt-4">F.A.Q</h1>
                        {answers.map((item,index) => {
                            return (
                                <div key={index} className="lead px-5 mx-2 pt-2">
                                    <h3 className="faq-h3" onClick={this.handleChange.bind(this, index)}>{item.question}</h3>
                                    <div className="faq-text p-relative" style={{height: this.state.questions[index].opened ? '100%' : 0}}>
                                        {item.answer}
                                    </div>
                                </div>
                            );
                        })}
                        
                    </Col>
                </Row>
            </>
        );
    }
}
export default Faq;
import React, { Component } from 'react';
import MacaAs from '../components/svg_cards/macaas.js';
import MacaPapaz from '../components/svg_cards/macapapaz.js';
import MacaKiz from '../components/svg_cards/macakiz.js';
import MacaBacak from '../components/svg_cards/macabacak.js';
import Backflip from '../components/svg_cards/backflip.js';

class Test extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                {MacaBacak}
            </>
        )
    }
}

export default Test;
import React from 'react';

import Pokedex from './Pokedex';

export default class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            asnycStatus: 'INIT',
            data: []
        };
    }

    componentDidMount () {
        // BAD PATTERN. JUST USED FOR EXAMPLE
        this.setState({
            asnycStatus: 'LOADING'
        })
        fetch('/pokedex.json')
            .then((res) => res.json())
            .then(data => {
                this.setState({
                    asnycStatus: 'SUCCESS',
                    data
                })
            });
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <img className='main-title' src='/img/logo.svg'/>
                <Pokedex data={this.state.data} />
            </div>
        );
    }
}

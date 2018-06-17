import * as React from 'react';

import Pokedex from './Pokedex';
import { Pokemon as PokemonData } from '../pokedex';

export interface PageProps {}

export interface PageState {
    asnycStatus: 'INIT' | 'LOADING' | 'SUCCESS' | 'ERROR';
    data: PokemonData[];
}

export default class Page extends React.Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);

        this.state = {
            asnycStatus: 'INIT',
            data: []
        };
    }

    componentDidMount() {
        // BAD PATTERN. JUST USED FOR EXAMPLE
        this.setState({
            asnycStatus: 'LOADING'
        });
        fetch('/pokedex.json')
            .then((res) => res.json())
            .then((data: PokemonData[]) => {
                this.setState({
                    asnycStatus: 'SUCCESS',
                    data
                });
            });
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <img className="main-title" src="/img/logo.svg" />
                <Pokedex data={this.state.data} />
            </div>
        );
    }
}

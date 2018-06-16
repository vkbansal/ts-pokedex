import * as React from 'react';

import { Pokemon } from '../pokedex';

export interface PokemonProps {
    data: Pokemon;
}

export default function Pokemon(props: PokemonProps) {
    return (
        <div className="pokemon">
            <img className="pokemon-img" src={props.data.imgSrc} />
            <p className="pokemon-title">
                #{props.data.id} {props.data.name}
            </p>
        </div>
    );
}

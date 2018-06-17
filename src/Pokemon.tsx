import * as React from 'react';

import { Pokemon as PokemonData } from '../pokedex';

export interface PokemonProps {
    data: PokemonData;
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

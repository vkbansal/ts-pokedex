import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import Pokemon from './Pokemon';
import { Pokemon as PokemonData } from '../pokedex';

export interface PokedexProps {
    data: PokemonData[];
}

export interface PokedexState {
    limit: number;
}

export interface RouteParams {
    page: string;
}

export type AllPokedexProps = PokedexProps & RouteComponentProps<RouteParams>;

export class Pokedex extends React.Component<
    PokedexProps & RouteComponentProps<RouteParams>,
    PokedexState
> {
    constructor(props: AllPokedexProps) {
        super(props);

        this.state = {
            limit: 12
        };

        this.handleLimitChange = this.handleLimitChange.bind(this);
    }

    handleLimitChange(e: React.FormEvent<HTMLSelectElement>) {
        const { value } = e.target as HTMLSelectElement;

        this.setState({
            limit: parseInt(value, 10)
        });

        this.props.history.push('/1');
    }

    render() {
        const { limit } = this.state;
        const currentPage = parseInt(this.props.match.params.page || '1', 10) - 1;
        const start = currentPage * limit;
        const end = start + limit;
        const total = this.props.data.length;
        const pokemon = this.props.data.slice(start, end);
        const totalPages = Math.ceil(total / limit);

        return (
            <div className="carousel">
                <div className="carousel-header">
                    <div>{`Showing ${start + 1} - ${end > total ? total : end} of ${total}`}</div>
                    <div>
                        show
                        <select
                            className="limit"
                            value={this.state.limit}
                            onChange={this.handleLimitChange}
                        >
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                            <option value="20">20</option>
                        </select>{' '}
                        results
                    </div>
                </div>
                <div className="carousel-wrapper">
                    {currentPage === 0 ? (
                        <div className="slide-btn left disabled">&lt;</div>
                    ) : (
                        <Link to={`/${currentPage}`} className="slide-btn left">
                            &lt;
                        </Link>
                    )}
                    <div className="slide">
                        {pokemon.map((p) => <Pokemon key={p.id} data={p} />)}
                    </div>
                    {currentPage === totalPages - 1 ? (
                        <div className="slide-btn right disabled">&gt;</div>
                    ) : (
                        <Link to={`/${currentPage + 2}`} className="slide-btn right">
                            &gt;
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}

export default withRouter(Pokedex);

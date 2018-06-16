export enum PokemonType {
    Grass = 'Grass',
    Poison = 'Poison',
    Fire = 'Fire',
    Flying = 'Flying',
    Water = 'Water',
    Bug = 'Bug',
    Normal = 'Normal',
    Electric = 'Electric',
    Ground = 'Ground',
    Fairy = 'Fairy',
    Fighting = 'Fighting',
    Psychic = 'Psychic',
    Rock = 'Rock',
    Steel = 'Steel',
    Ice = 'Ice',
    Ghost = 'Ghost',
    Dragon = 'Dragon'
}

export interface Pokemon {
    id: string;
    name: string;
    imgSrc: string;
    type: PokemonType[];
}

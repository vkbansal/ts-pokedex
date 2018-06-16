import React from 'react';

export default function Pokemon(props) {
    return (
        <div className='pokemon'>
            <img className='pokemon-img' src={props.data.imgSrc}/>
            <p className='pokemon-title'>#{props.data.id} {props.data.name}</p>
        </div>
    )
}

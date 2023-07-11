import React from 'react'

const Pokemon = props => {

    const{pokemon} = props.pokemon

    return (
        <div>
            {pokemon.length > 0 && pokemon.map((id, pokemon)=>{
                return (<li key={id}> {pokemon.name} </li>)
            })}
        </div>
    );
}

export default Pokemon
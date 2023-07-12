import React from 'react'


const GetPokemon = props => {
    const{pokemon} = props
    console.log(props.pokemon)

    return (
        <div>
            {pokemon.map((poke, i) =>{
                return (
                    <li key={i}>{poke.name}</li>)
            })}
        </div>
    )
}


export default GetPokemon
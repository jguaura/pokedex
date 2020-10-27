import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePokeType } from '../hooks/hooks.js'
import Card from '../components/Card/Card'
import { Wrapper } from '../components/CardWrapper/CardWrapper'
const PokemonByTypes = () => {
    let type = useParams()
    type = type.type
    const data = usePokeType(type)

    return (
        <div>
            <h2 style={{textTransform: 'capitalize', textAlign: 'center'}}>{type} Pokemons</h2>\
            <Wrapper>    
                {
                    data &&
                        data.map(poke => <Card poke={poke}/>)
                }
            </Wrapper>
        </div>
    )
}

export default PokemonByTypes

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePokeType } from '../hooks/hooks.js'
import Card from '../components/Card/Card'
import TypeBadge from '../components/TypeBadge/TypeBadge'
import { Wrapper } from '../components/CardWrapper/CardWrapper'
import { TypeWrapper } from './../emotion/components'
import Skeleton from '../components/Skeleton/Skeleton'
import styled from '@emotion/styled'
const PokemonByTypes = () => {
    let type = useParams()
    type = type.type
    const {data, loading} = usePokeType(type)
    const arr = new Array(5).fill(2)

    return (
        <div>
            <div className="badge-wrapper">
                <TypeWrapper >
                    <TypeBadge type={'grass'}/>                    
                    <TypeBadge type={'water'}/>                    
                    <TypeBadge type={'fire'}/>                    
                    <TypeBadge type={'electric'}/>                    
                    <TypeBadge type={'fighting'}/>                    
                    <TypeBadge type={'normal'}/>                    
                    <TypeBadge type={'psychic'}/>                    
                    <TypeBadge type={'flying'}/>                    
                    <TypeBadge type={'ghost'}/>                    
                    <TypeBadge type={'fairy'}/>                    
                    <TypeBadge type={'steel'}/>                    
                    <TypeBadge type={'rock'}/>                    
                    <TypeBadge type={'ice'}/>                    
                    <TypeBadge type={'ground'}/>                    
                </TypeWrapper>
            </div>
            <TypeTitle>{type} Pokemons</TypeTitle>
            <Wrapper>    
                {
                    data && !loading &&
                       data.map(poke => <Card poke={poke}/>)
                      
                }
                {
                    loading &&
                    arr.map(() => <Skeleton />)
                }
            </Wrapper>
        </div>
    )
}

const TypeTitle = styled.h2`
    text-transform: capitalize;
    text-align: center;
    margin: 2rem 0 0 0;
    color: ${props => props.theme.colors.fontPrimary};
`

export default PokemonByTypes

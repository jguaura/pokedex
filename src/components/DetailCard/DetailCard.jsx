import React from 'react'
import styled from '@emotion/styled'
import TypeBadge from '../TypeBadge/TypeBadge'
import { CardContent } from '../Card/Card'
import uuid from 'uuid'

const DetailCard = ({ poke }) => {
    return (
        <DetailContent>
            <div className="card-container">
                <h2>{poke.name}</h2>
                <div className="card-container__sprite">
                    <img src={poke.sprite} alt="pokemon img" />
                </div>
                <div className="card-container__description">
                    {poke.description}
                </div>
                <h3>Type</h3>
                <div className="card-container__types">
                    {
                        poke.types.map(type => <TypeBadge type={type} key={uuid.v4()}/>)
                    }
                </div>
                <h3>Weak against</h3>
                <div className="card-container__against">
                    {
                        poke.weakto.map((type, index) => <TypeBadge type={type} key={uuid.v4()}/>)
                    }
                </div>
            </div>
        </DetailContent>
    )
}

const DetailContent = styled(CardContent)`

    .card-container {
        display: flex;
        flex-direction: column;

        h2 {margin: 1rem 0;}

        &__sprite {
            width: 100%;
            background-color: #eee;

            @media (min-width: 550px) {
                width: 50%;
            }
        }

        &__description {
            margin: 1rem 0;
            @media (min-width: 550px) {
                width: 70%;
            }
        }

        &__types {
            width: 100%;
            flex: auto;
        }

        &__against {
            display: flex;
        }

        &__types, &__against {
            box-sizing: border-box;
            margin: 1rem 0 2rem 0;
            justify-content: flex-start;
            &:last-of-type {margin-bottom: 0;} 
        }


        .icon {
            margin: 0 0 0 1rem;
                &:first-of-type {
                    margin: 0;
                }
        }
    }
`

export default DetailCard

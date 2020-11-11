import React from 'react'
import styled from '@emotion/styled'
import TypeBadge from '../TypeBadge/TypeBadge'
import { CardContent } from '../Card/Card'
import uuid from 'uuid'

const DetailCard = ({ poke }) => {
    return (
        <DetailContent>
                <div className="text-header">
                    <h4>{poke.name}</h4>
                    <h4>#{poke.number}</h4>
                </div>
            <div className="card-container">
                <div className="container-box">
                    <div className="card-container__sprite">
                        <img src={poke.sprite} alt="pokemon img" />
                    </div>
                </div>
                <div className="container-box">
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
                
            </div>
        </DetailContent>
    )
}

const DetailContent = styled(CardContent)`
    * { color: ${props => props.theme.colors.fontPrimary} }
    padding-bottom: 20px;
    @media(min-width: 1230px) {
        width: 70%;
    }

    .text-header {
        display: flex;
        justify-content: space-between;
    
        h4 {
            font-size: 1.3rem;
            margin: 2rem 0 1rem 0;
            &:last-of-type {
                color: ${props => props.theme.colors.fontSecondary};
                font-weight: normal;    
            }
            @media (min-width: 1230px) {
                font-size: 2rem;
                margin: 2rem 0 1rem 0;
            }    
        }
    }
    .card-container {
        display: flex;
        flex-direction: column;

        @media(min-width: 550px) {
            flex-direction: row;
        }

        h2 {margin: 1rem 0;}


        &__sprite {
            width: 100%;
            background-color: #eee;

            @media (min-width: 550px) {
                /* width: 50%; */
                height: 100%;
            }
        }

        &__description {
            margin: 1rem 0;

            @media (min-width: 550px) {
                width: 100%;
                margin: 0 0 1rem 0;
            }
            @media (min-width: 1000px) {
                width: 60%;
                margin-bottom: 2rem;
            }
            @media (min-width: 1230px) {
                font-size: 1.4rem;
                width: 100%;
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
            
            @media (min-width: 550px) {
                margin: 1rem 0 1rem 0;
            }
            @media (min-width: 1000px) {
                margin: 1.5rem 0 2rem 0;
            }
        }


        .icon {
            margin: 0 0 0 1rem;
                &:first-of-type {
                    margin: 0;
                }
        }

        .container-box {
            &:last-of-type {
                @media (min-width: 550px) {
                    margin-left: 1rem;
                }
            }
        }
    }
`

export default DetailCard

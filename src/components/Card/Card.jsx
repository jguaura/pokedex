import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import TypeBadge from './../TypeBadge/TypeBadge'
import uuid from 'uuid'

const Card = ({ poke, passRef }) => {
    return (
            <CardContent className="card">
                <div className="card-container">
                    <div className="card-container__sprite">
                        <Link to={`/pokemon/${poke.id}`}>
                            <img ref={passRef && passRef} src={poke.sprite} alt={poke.id}/>
                        </Link>
                    </div>
                    <div className="card-container__text">
                        <div className="text-header">
                            <h4>{poke.name}</h4>
                            <h4>#{poke.number}</h4>
                        </div>
                        <div className="card-container__types">
                            {   
                                poke.types.map(type => <TypeBadge type={type} key={type}/>)
                            }
                        </div>
                    </div>
                </div>
            </CardContent>
    )
}

export const CardContent = styled.div`
    .card-container {
        display: flex;

        * {margin: 0; padding: 0}

        &__sprite {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            img {width:80%}
        }

        &__text {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 150px;
            width: 50%;

            .text-header {
                width: 100%;
                padding: 10px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            h4 {
                /* margin-top: 1rem; */
                font-size: 1.2rem;
                &:last-of-type {
                    font-weight: normal;
                    color: #3a3a3a;
                }
            }
        }

        &__types {
            display: flex;
            width: 60%;
            justify-content: space-evenly;
            flex: 1;

            @media(min-width: 550px) {
                width: 100%;
            }
        }
    }

    .icon {
        border-radius: 100%;
        height: 40px;
        width: 40px;
        margin:auto;
        transition: 200ms all;
    }

    .icon:hover{
        filter: saturate(200%);
        transform: scale(1.1);
        cursor: pointer;
    }

    .icon img {
        height: 60%;
        width: 60%;
        margin: 20%;
        position: relative;
        z-index: 2;
    }

    .bug {
        background: #92BC2C;
        box-shadow: 0 0 20px #92BC2C;
    }

    .dark {
        background: #595761;
        box-shadow: 0 0 20px #595761;
    }

    .dragon {
        background: #0C69C8;
        box-shadow: 0 0 20px #0C69C8;
    }

    .electric {
        background: #F2D94E;
        box-shadow: 0 0 20px #F2D94E;
    }

    .fire {
        background: #FBA54C;
        box-shadow: 0 0 20px #FBA54C;
    }

    .fairy {
        background: #EE90E6;
        box-shadow: 0 0 20px #EE90E6;
    }

    .fighting {
        background: #D3425F;
        box-shadow: 0 0 20px #D3425F;
    }

    .flying {
        background: #A1BBEC;
        box-shadow: 0 0 20px #A1BBEC;
    }

    .ghost {
        background: #5F6DBC;
        box-shadow: 0 0 20px #5F6DBC;
    }

    .grass {
        background: #5FBD58;
        box-shadow: 0 0 20px #5FBD58;
    }

    .ground {
        background: #DA7C4D;
        box-shadow: 0 0 20px #DA7C4D;
    }

    .ice {
        background: #75D0C1;
        box-shadow: 0 0 20px #75D0C1;
    }

    .normal {
        background: #A0A29F;
        box-shadow: 0 0 20px #A0A29F;
    }

    .poison {
        background: #B763CF;
        box-shadow: 0 0 20px #B763CF;
    }

    .psychic {
        background: #FA8581;
        box-shadow: 0 0 20px #FA8581;
    }

    .rock {
        background: #C9BB8A;
        box-shadow: 0 0 20px #C9BB8A;
    }

    .steel {
        background: #5695A3;
        box-shadow: 0 0 20px #5695A3;
    }

    .water {
        background: #539DDF;
        box-shadow: 0 0 20px #539DDF;
    }

`

export default Card

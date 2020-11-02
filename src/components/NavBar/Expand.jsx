import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Item from './Item'

const Expand = ({setOpen}) => {
    return (
        <Expanded className="expand">
            <p onClick={() => setOpen(prevVal => !prevVal)}>X</p>
            <div className="expand-grid">
                <Link to='/'>
                    <Item setOpen={setOpen} imgSrc={'pikachu'} text={'All Pokemons'}/>
                </Link>
                <Link to='/types/grass'>
                    <Item setOpen={setOpen} imgSrc={'snorlax'} text={'Pokemons by type'}/>
                </Link>
                <Link to='/'>
                    <Item setOpen={setOpen} imgSrc={'jigglypuff'} text={'Coming soon...'}/>
                </Link>
                <Link to='/'>
                    <Item setOpen={setOpen} imgSrc={'psyduck'} text={'Coming soon...'}/>
                </Link>
            </div>
        </Expanded>
    )
}

const Expanded = styled.div`
    &.expand {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        box-sizing: border-box;
    }
    
    p {
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
        margin-left: auto;
        cursor: pointer;
    }

    .expand-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
        /* background-image: radial-gradient( circle 344px at 1.4% 0%,  rgba(242,185,252,1) 19.3%, rgba(250,254,190,1) 80.7% ); */
        a { text-decoration: none; color: #fff;}
        @media (min-width: 767px) {
            width: 50%;
            gap: 10px;
            margin: 0 auto;
        }
        &__col {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 150px;
            background-color: #3a3a3a;
            text-decoration: none;
            border: 1px solid;
            border-image-source: radial-gradient( circle 344px at 1.4% 0%,  rgba(242,185,252,1) 19.3%, rgba(250,254,190,1) 80.7% );
            border-image-slice: 1;
            cursor: pointer;

            img { margin-bottom: 1rem; width: 45px;}
        }
    }
`

export default Expand

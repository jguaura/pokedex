import React, { useEffect, useContext } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Item from '../NavBar/Item'

import { ReactComponent as Instagram } from '../../assets/social-icons/instagram.svg'
import { ReactComponent as Linkedin } from '../../assets/social-icons/linkedin.svg'
import { ReactComponent as Github } from '../../assets/social-icons/logotipo-de-github.svg'
import { ReactComponent as Twitter } from '../../assets/social-icons/gorjeo.svg'

import { downMenu, upMenu } from './../../gsap/animations'
import AppContext from '../../context/context'


const NewExpand = () => {
    const { open, setOpen, dimensions,clicked } = useContext(AppContext)
    
    useEffect(() => {
        console.log('frm new expand', open)
        console.log('frm new click', clicked)
        open
            ? downMenu(dimensions.h - 60)
            : upMenu() 
    }, [open])
    return (
        <Expanded className="expand" >
            <div className="expand-grid">
                <Link to='/'>
                    <Item imgSrc={'pikachu'} text={'All Pokemons'} setOpen={setOpen}/>
                </Link>
                <Link to='/types/grass'>
                    <Item imgSrc={'snorlax'} text={'Pokemons by type'} setOpen={setOpen} />
                </Link>
                <Link to='/'>
                    <Item imgSrc={'jigglypuff'} text={'Coming soon...'} setOpen={setOpen} />
                </Link>
                <Link to='/'>
                    <Item imgSrc={'psyduck'} text={'Coming soon...'} setOpen={setOpen} />
                </Link>
            </div>
            <div className="expand-footer">
                <a href="https://jguaura.ml" className="" target="_blank" rel="noopener noreferrer">jguaura.ml</a>
                jguaura@gmail.com
            </div>
            <div className="expand-icons">
                <a href="https://www.linkedin.com/in/jguaura/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="social-icon linkedin" fill="#ccc" stroke="#ccc" />
                </a>
                <a href="https://github.com/jguaura" target="_blank" rel="noopener noreferrer">
                    <Github className="social-icon github" fill="#ccc" stroke="#ccc" />
                </a>
                <a href="https://www.instagram.com/jguaura/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="social-icon instagram" fill="#ccc" stroke="ccc" />
                </a>
                <a href="https://www.instagram.com/jguaura/" target="_blank" rel="noopener noreferrer">
                    <Twitter className="social-icon twitter" fill="#ccc" stroke="#ccc" />
                </a> 
            </div>
        </Expanded>
    )
}

const Expanded = styled.div`
    &.expand {
        display: none;
        flex-direction: column;
        padding: 0 20px;
        box-sizing: border-box;
        position: absolute;
        top: 60px;
        min-height: auto;
        height: 0;
        overflow: hidden;
    }

    .close-btn {
        width: 25px;
        height: 25px;
        margin: 1.5rem 0 1.5rem auto;
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
        padding-top: 20px;
        a { text-decoration: none; color: #fff;}
        @media (min-width: 767px) {
            width: 50%;
            gap: 20px;
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

            @media(min-width: 767px) {
                padding: 20px;
            }

            @media(max-width: 450px) {
                height: 120px;
            }

        }
    }

    .expand-icons {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin: 0 0 2rem 0;
        margin-top: auto;
        @media (min-width: 767px) {
            width: 50%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 2rem;
        }
        .social-icon {
            width: 40px;
            height: 40px;
            transition: .4s ease-out;
            &:hover {
                transform: translateY(-15px)
            }
            @media(min-width: 767px) { 
                padding: 20px 20px 20px 0px;
                &:last-of-type {
                    padding: 20px 0px 20px 0px;
                }

             }
        }
    }

    .expand-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem 0 2rem 0;
        font-size: 1.2rem;
        color: ${props => props.theme.colors.navText};

        a { color: ${props => props.theme.colors.navText}; margin-bottom: 1rem; }
    }
`

export default NewExpand

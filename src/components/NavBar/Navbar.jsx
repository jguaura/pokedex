import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Expand from './Expand'
import Bar from './Bar'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const fixed = () => {
        console.log(open, 'open render test')
    }

    useEffect(() => {
        (() => {
            console.log('render tes', open)
        })()
    }, [open])

    return (
        <Navibar>
            {
                !open 
                    ? <Bar setOpen={setOpen} />
                    : <Expand  setOpen={setOpen}/>
            }
        </Navibar>
    )
}

const Navibar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3a3a3a;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 3;

    .nav {
        height:60px;
        display: flex;
        position: relative;

        
        .nav-logo {
            width: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width:40px;
                height:40px;
            }
        }

        .nav-searchbar {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            
            input {
                box-sizing: border-box;
                width: 100%;
                padding: 7px 5px;
            }
        }

        .nav-menu {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 15%;

            img {
                height: 35px;
                width: 35px;
            }
        }
    }

    .expand {
            position: fixed;
            /* top: 60px; */
            background-color: #3a3a3a;
            min-height: 100vh;
            width: 100%;
            overflow: hidden;
            z-index: 3;
        }
    
`

export default Navbar

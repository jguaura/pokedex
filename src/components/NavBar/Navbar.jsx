import React, { useState } from 'react'
import styled from '@emotion/styled'
import Bar from './Bar'
import { AppProvider } from './../../context/context';
import NewExpand from './../newExpand/NewExpand';

const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const [darkMode, setDarkMode] = useState(true)
    const [open, setOpen] = useState(false)
    const [dimensions, setDimensions] = useState({h: window.innerHeight, w: window.innerWidth})
    
    const context = {
        open,
        setOpen,
        clicked,
        setClicked,
        darkMode,
        setDarkMode,
        dimensions
    }
        
    return (
        <AppProvider value={context}>
            <Navibar>
                <Bar />
                <NewExpand />
            </Navibar>
        </AppProvider>
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
    box-shadow: ${props => props.theme.colors.navShadow};

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

        .nav-theme {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20%;
            @media (min-width: 767px) {
                width: 5%;
            }
            .theme-icon {
                width:30px;
                height:30px;
                cursor: pointer;
            }
        }

        .nav-menu {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20%;
            cursor: pointer;
            @media (min-width: 767px) {
                width: 10%;
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

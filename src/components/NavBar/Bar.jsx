import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Menu } from '../../assets/social-icons/menu.svg'
import { ReactComponent as Close } from '../../assets/social-icons/cerrar.svg'
import { ReactComponent as Moon} from '../../assets/social-icons/noche.svg'
import { ReactComponent as Sun} from '../../assets/social-icons/sol.svg'
import AppContext from '../../context/context'
import MainContext from '../../context/mainContext'
const Bar = () => {
    const { open, setOpen, setClicked } = useContext(AppContext)
    const { darkMode, setDarkMode } = useContext(MainContext)
    
    return (
        <div className="nav">
            <div className="nav-logo" onClick={() => setOpen(false)}>
                <Link to="/">
                    <img src={'https://res.cloudinary.com/jguaura/image/upload/c_scale,w_40/v1604305665/Pokedex/nav-pokeball.15df305c_sk5ql0.webp'} alt=""/>
                </Link>
            </div>
            
            <div className="nav-searchbar">
                {/* 
                    <input type="text" placeholder="Search" disabled={true}/>
                */}
            </div>
            <div className="nav-theme">
                {
                    darkMode
                        ?   <Moon className="theme-icon" onClick={() => setDarkMode(darkMode => !darkMode)} />
                        :   <Sun className="theme-icon" onClick={() => setDarkMode(darkMode => !darkMode)} />
                }
            </div>
            <div className="nav-menu" onClick={() => setOpen(prev => !prev)}>
            {
                open
                    ? <Close style={{width: '40px'}} fill="#fff" stroke="#ccc" />
                    : <Menu style={{width: '40px'}} fill="#fff" stroke="#ccc"/>
            }
            </div>
        </div>
    )
}

export default Bar

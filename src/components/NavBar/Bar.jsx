import React from 'react'
import { Link } from 'react-router-dom'

const Bar = ({ setOpen }) => {
    return (
        <div className="nav">
            <div className="nav-logo">
                <Link to="/">
                    <img src={'https://res.cloudinary.com/jguaura/image/upload/c_scale,w_40/v1604305665/Pokedex/nav-pokeball.15df305c_sk5ql0.webp'} alt=""/>
                </Link>
            </div>
            
            <div className="nav-searchbar">
                {/* 
                    <input type="text" placeholder="Search" disabled={true}/>
                */}
            </div>
            <div className="nav-menu" onClick={() => setOpen(true)}>
                <img src={require('../../assets/menu.png')} alt="" />
            </div>
        </div>
    )
}

export default Bar

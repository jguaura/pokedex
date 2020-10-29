import React from 'react'
import { Link } from 'react-router-dom'

const Bar = ({ setOpen }) => {
    return (
        <div className="nav">
            <div className="nav-logo">
                <Link to="/">
                    <img src={require('../../assets/nav-pokeball.png')} alt=""/>
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

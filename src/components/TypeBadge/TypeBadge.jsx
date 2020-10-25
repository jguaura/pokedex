import React from 'react'
import { Link } from 'react-router-dom'

const TypeBadge = ({ type }) => {
    return (
            <div className={`icon ${type}`}>
                <Link to={`/types/${type}`}>
                    <img src={require(`../../assets/${type}.svg`)} alt='pokemon type' />
                </Link>
            </div> 
    )
}

export default TypeBadge

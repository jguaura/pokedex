import React from 'react'

const Item = ({ setOpen, imgSrc, text }) => {
    return (
        <div className="expand-grid__col" onClick={() => setOpen(false)}>
            <img src={require(`../../assets/${imgSrc}.png`)} alt=""/>
            <span>{text}</span>
        </div>
    )
}

export default Item

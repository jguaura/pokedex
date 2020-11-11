import React, { useRef } from 'react'
import { itemHover, itemLeave } from './../../gsap/animations'
const Item = ({ setOpen, imgSrc, text }) => {
    let itemRef = useRef(null)
    return (
        <div className="expand-grid__col" 
        ref={el => itemRef = el} 
        onClick={() => setOpen(false)} 
        onMouseEnter={() => itemHover(itemRef)} 
        onMouseLeave={() => itemLeave(itemRef)}
        >
            <img src={require(`../../assets/${imgSrc}.png`)} alt=""/>
            <span>{text}</span>
        </div>
    )
}

export default Item

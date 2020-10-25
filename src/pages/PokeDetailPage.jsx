import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePokeDetail } from '../hooks/hooks'
import DetailCard from './../components/DetailCard/DetailCard'
const PokeDetailPage = () => {
    let id = useParams()
    id = id.id
    const fromHook = usePokeDetail(id)
    
    return (
        <div key={4993598432}>
            {
                fromHook.detail &&
                fromHook.detail.data.map(poke => <DetailCard poke={poke} key={poke.id}/>)
            }
        </div>
    )
}

export default PokeDetailPage

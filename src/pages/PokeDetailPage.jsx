import React from 'react'
import { useParams } from 'react-router-dom'
import { usePokeDetail } from '../hooks/hooks'
import DetailCard from './../components/DetailCard/DetailCard'
import DetailSkeleton from './../components/DetailSkeleton/DetailSkeleton'
const PokeDetailPage = () => {
    let id = useParams()
    id = id.id
    const { detail, loading } = usePokeDetail(id)    
    return (
        <div key={4993598432}>
            {
                detail && !loading
                    ?   <DetailCard poke={detail.data[0]}/>
                    :   <DetailSkeleton />
            }
        </div>
    )
}

export default PokeDetailPage

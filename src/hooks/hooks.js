import { useEffect, useState } from 'react'
import axios from 'axios'

export function useGetPokes(limit, offset) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [pokes, setPokes] = useState([])
    const [hasMore, setHasMore] = useState(false)
    useEffect(() => {
        let cancel
        setLoading(true)
        setError(false)
            axios({
                method: 'GET',
                url: 'http://3.22.68.21/api/pokemon',
                params: {offset: offset, limit: limit},
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
            .then(res => {
                setPokes(prevPokes => {
                    return [...prevPokes, res.data.rows ]
                })
                setHasMore(offset < res.data.count)
                setLoading(false)
            })
            .catch(err => {
                if (axios.isCancel(err)) return
                setError(true)
            })
            return () => cancel()
            
    }, [limit, offset])
    
    return {
        loading,
        error,
        hasMore,
        pokes
    }
}

export function usePokeDetail(id) {
    const [detail, setDetail] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://3.22.68.21/api/pokemon/${id}`
        })
        .then(res => setDetail(res.data))
        .catch(err => console.error(err))
    }, [id])

    return { detail }
}

export function usePokeType(type) {
    const [data, setData] = useState()
    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://3.22.68.21/api/pokemon?type=${type}`
        })
        .then(res => setData(res.data.rows))
        .catch(err => console.error(err))
    }, [type])
    
    return data
}
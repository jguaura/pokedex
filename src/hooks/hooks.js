import { useEffect, useState } from 'react'
import axios from 'axios'
// const base_URL = 'https://jguaura.ml'
const base_URL = 'http://localhost:8080'

export function useGetPokes(limit, offset) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [pokes, setPokes] = useState([])
    const [hasMore, setHasMore] = useState(false)
    useEffect(() => {
        let cancel
            
        setError(false)
            axios({
                method: 'GET',
                url: `${base_URL}/api/pokemon`,
                params: {offset: offset, limit: limit},
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
            .then(res => {
                setPokes(prevPokes => {
                    return [...prevPokes, res.data.rows ]
                })
                setHasMore(offset < res.data.count)
                setTimeout(() => {setLoading(false)}, 1000)
            })
            .catch(err => {
                if (axios.isCancel(err)) return
                setError(true)
            })
            // .finally(() => {setLoading(false)})
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
            url: `${base_URL}/api/pokemon/${id}`
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
            url: `${base_URL}/api/pokemon?type=${type}`
        })
        .then(res => setData(res.data.rows))
        .catch(err => console.error(err))
    }, [type])
    
    return data
}
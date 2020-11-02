import React, { useRef, useState, useCallback } from 'react'
import styled from '@emotion/styled'
import Card from '../Card/Card'
import Skeleton from '../Skeleton/Skeleton'

// custom hook
import { useGetPokes } from './../../hooks/hooks'

const CardWrapper = () => {
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(10)
    const {
        loading,
        error,
        pokes,
        hasMore
    } = useGetPokes(limit, offset)
    const observer = useRef()
    let arr = new Array(10).fill(1)

    const lastPokeElRef = useCallback(node =>{
        if (loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                setOffset(prevOffset => prevOffset + limit)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore, limit])

    return (
        <Wrapper>
            {   
                pokes &&
                pokes.map(poke => poke.map((pk, index) => {
                    if (poke.length === index + 1) {
                        return <Card passRef={lastPokeElRef} poke={pk} key={poke.id}/>
                    } else {
                        return <Card poke={pk} key={poke.id}/> 
                    }
                }))
            }
            {
                loading &&
                arr.map(el => <Skeleton />)
            }
        </Wrapper>
    )
}

export const Wrapper = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100vh;

    a {
        text-decoration: none;
        color: #3a3a3a;
    }

    @media(min-width: 550px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    @media(min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr)
    }
`

export default CardWrapper

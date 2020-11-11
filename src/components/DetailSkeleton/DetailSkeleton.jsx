import React from 'react'
import styled from '@emotion/styled'

const DetailSkeleton = () => {
    return (
        <CardSkeleton>
            <div className="card-header">
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div className="content-wrapper"> 
                <div className="card-box"></div>
                <div className="text-wrapper">
                    <div className="card-description">
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <div className="card-types">
                        <div className="box-t"></div>
                        <div className="circle-wrapper">
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                    <div className="card-against">
                        <div className="box-t"></div>
                        <div className="circle-wrapper">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </CardSkeleton>
    )
}

const CardSkeleton = styled.div`
    width: 100%;
    margin-top: 2rem;
    border-radius: 4px;
    position: relative;
    overflow-x: hidden;

    @media(min-width: 1230px) {
        width: 70%;
        height: auto;
    }

    &::before {
        content: ' ';
        display: block;
        position: absolute;
        left: -100%;
        height: 100%;
        top: 0;
        width: 100%;
        background: linear-gradient(to right, transparent 0%, ${props => props.theme.colors.skeletonBox} 50%, transparent 100%);
        animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    }
    @keyframes load {
        from {
            left: -150px;
        }
        to   {
            left: 100%;
        }
    }

    .content-wrapper {
        @media (min-width: 1230px) {
            display:flex;
        }

        .text-wrapper {
            @media (min-width: 1230px) {
                flex: 1;
                margin-left: 2rem;
            }
        }
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        .box {
            background-color: ${props => props.theme.colors.skeletonBox};
            width: 35%;
            height: 25px;
            border-radius:12px;
            &:last-of-type {
                width: 20%;
            }
        }
    }
    .card-box {
        width: 100%;
        height: 290px;
        background-color: ${props => props.theme.colors.skeletonBox};
        margin-top: 1rem;

        @media(min-width: 1230px) {
            width: 30%;
        }
    }
    .card-description {
        margin-top: 1rem;
        .box {
            width: 90%;
            height: 25px;
            background-color: ${props => props.theme.colors.skeletonBox};
            border-radius: 12px;
            &:last-of-type {
                margin-top: .5rem;
                width: 55%;
            }
        }
    }
    .box-t {
        width: 25%;
        height: 25px;
        background-color: ${props => props.theme.colors.skeletonBox};
        border-radius: 12px;
        margin-bottom: .7rem;
    }
    .circle-wrapper {
        display: flex;
        .circle {
            background-color: ${props => props.theme.colors.skeletonBox};
            width:40px;
            height: 40px;
            border-radius:50%;
            margin-right: 1rem;
            &:last-of-type { margin-right: 0; }
        }
    }
    .card-types, .card-against {
        margin-top: 1.5rem;
    }
`

export default DetailSkeleton

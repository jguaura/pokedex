import React from 'react'
import styled from '@emotion/styled'

const Skeleton = () => {
    return (
        <SkeletonCard>
            <div className="card-img">
                <div className="box"></div>
            </div>
            <div className="card-content">
                <div className="content-title">
                    <div className="title"></div>
                    <div className="title"></div>
                </div>
                <div className="content-circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
        </SkeletonCard>
    )
}

const SkeletonCard = styled.div`
    display: flex;
    width: 100%;
    height: 120px;
    min-height: 120px;
    box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
    background-color: ${props => props.theme.colors.background};
    border-radius: 4px;
    position: relative;
    overflow-x: hidden;
    margin-bottom: 2rem;
    @media(min-width: 1230px) { height: 160px; }
    &::before {
        content: ' ';
        display: block;
        position: absolute;
        left: -100%;
        top: 0;
        height: 120px;
        width: 100%;
        background: linear-gradient(to right, transparent 0%, ${props => props.theme.colors.skeletonBox} 50%, transparent 100%);
        animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
        @media (min-width: 1230px) { height: 160px; }
    }
    @keyframes load {
        from {
            left: -150px;
        }
        to   {
            left: 100%;
        }
    }
        .card-img {
            flex: 1;
            .box {
                height: 100%;
                width: 100%;
                /* background-color: #D8D8D8; */
                background-color: ${props => props.theme.colors.skeletonBox}
            }
        }
        .card-content {
            width:60%;
            padding: 15px 10px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;

            .content-title {
                display: flex;
                justify-content: space-between; 
                .title { 
                    background-color: ${props => props.theme.colors.skeletonBox}; 
                    height: 20px; 
                    width: 60%;
                    border-radius: 12px; 
                    &:last-of-type {
                        width: 25%;
                    }
                }
            }

            .content-circles {
                display: flex;
                justify-content: center;
                margin: 1.3rem 0 0 0;
                @media (min-width: 1230px) {
                    margin-top: 2.2rem;
                }
                .circle {
                    width: 40px;
                    height:40px;
                    border-radius: 50%;
                    background-color: ${props => props.theme.colors.skeletonBox};
                    &:last-of-type {
                        margin-left: 1rem;
                        @media(min-width: 1230px) {margin-left: 3.5rem;}
                    }
                }
            }
        }

    }
`

export default Skeleton

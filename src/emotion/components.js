import styled from '@emotion/styled'
import 'typeface-lato'

export const MainWrapper = styled.div`
    font-family: 'Lato', sans-serif;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.background}
    /* min-height: 100vh; */
`
export const Container = styled.div`
    width: 90%;
    /* background-color: teal; */
    margin: 0 auto;
`

export const TypeWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 15px 5px;
    margin-top: 2rem;
    @media (min-width: 550px) {
        gap: 20px 0;
    }
    @media (min-width: 1000px) {
        gap: 30px 0;
    }

    .icon {
        border-radius: 100%;
        height: 40px;
        width: 40px;
        margin:auto;
        transition: 200ms all;
    }

    .icon:hover{
        filter: saturate(200%);
        transform: scale(1.1);
        cursor: pointer;
    }

    .icon img {
        height: 60%;
        width: 60%;
        margin: 20%;
        position: relative;
        z-index: 2;
    }

    .bug {
        background: #92BC2C;
        box-shadow: 0 0 20px #92BC2C;
    }

    .dark {
        background: #595761;
        box-shadow: 0 0 20px #595761;
    }

    .dragon {
        background: #0C69C8;
        box-shadow: 0 0 20px #0C69C8;
    }

    .electric {
        background: #F2D94E;
        box-shadow: 0 0 20px #F2D94E;
    }

    .fire {
        background: #FBA54C;
        box-shadow: 0 0 20px #FBA54C;
    }

    .fairy {
        background: #EE90E6;
        box-shadow: 0 0 20px #EE90E6;
    }

    .fighting {
        background: #D3425F;
        box-shadow: 0 0 20px #D3425F;
    }

    .flying {
        background: #A1BBEC;
        box-shadow: 0 0 20px #A1BBEC;
    }

    .ghost {
        background: #5F6DBC;
        box-shadow: 0 0 20px #5F6DBC;
    }

    .grass {
        background: #5FBD58;
        box-shadow: 0 0 20px #5FBD58;
    }

    .ground {
        background: #DA7C4D;
        box-shadow: 0 0 20px #DA7C4D;
    }

    .ice {
        background: #75D0C1;
        box-shadow: 0 0 20px #75D0C1;
    }

    .normal {
        background: #A0A29F;
        box-shadow: 0 0 20px #A0A29F;
    }

    .poison {
        background: #B763CF;
        box-shadow: 0 0 20px #B763CF;
    }

    .psychic {
        background: #FA8581;
        box-shadow: 0 0 20px #FA8581;
    }

    .rock {
        background: #C9BB8A;
        box-shadow: 0 0 20px #C9BB8A;
    }

    .steel {
        background: #5695A3;
        box-shadow: 0 0 20px #5695A3;
    }

    .water {
        background: #539DDF;
        box-shadow: 0 0 20px #539DDF;
    }
`
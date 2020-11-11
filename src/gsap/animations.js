import gsap from 'gsap'

const tl = gsap.timeline()

export const iconHover = (ref) => {
    gsap.to(ref, { 
        duration:.3,
        y: -10 
        })
}

export const iconLeave = (ref) => {
    gsap.fromTo(ref, .3, { y: -10 }, { y:0 })
}

export const itemHover = (ref) => {
    gsap.to(ref, { 
        duration: .2,
        background: 'linear-gradient(90deg, rgba(246,210,255,1) 0%, rgba(242,254,190,1) 82%)', 
        color: '#3a3a3a'
    })
}

export const itemLeave = (ref) => {
    gsap.to(ref, {
        duration: .2,
        background: '#3a3a3a',
        color: '#fff'
    })
}

export const downMenu = (param) => {
    
    tl
    .to('body', { css: { overflow: 'hidden'} })
    .to('.expand', {
        duration: .7,
        css: { display: 'flex', height: param },
        ease: 'expo.inOut'
    })
}

export const upMenu = () => {
    tl
    .to('.expand', {
        duration: .7,
        css: { display: 'none', height: '0vh'},
        ease: 'expo.inOut'
    })
    .to('body', { css: { overflow: 'visible'} })
}
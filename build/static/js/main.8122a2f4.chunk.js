(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{37:function(n,e,t){n.exports=t(87)},42:function(n,e,t){},43:function(n,e,t){},51:function(n,e,t){var a={"./bug.svg":52,"./dark.svg":53,"./dragon.svg":54,"./electric.svg":55,"./fairy.svg":56,"./fighting.svg":57,"./fire.svg":58,"./flying.svg":59,"./ghost.svg":60,"./grass.svg":61,"./ground.svg":62,"./ice.svg":63,"./normal.svg":64,"./poison.svg":65,"./psychic.svg":66,"./rock.svg":67,"./steel.svg":68,"./water.svg":69};function r(n){var e=c(n);return t(e)}function c(n){if(!t.o(a,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return a[n]}r.keys=function(){return Object.keys(a)},r.resolve=c,n.exports=r,r.id=51},52:function(n,e,t){n.exports=t.p+"static/media/bug.14540979.svg"},53:function(n,e,t){n.exports=t.p+"static/media/dark.b7d4f578.svg"},54:function(n,e,t){n.exports=t.p+"static/media/dragon.18a1dbc9.svg"},55:function(n,e,t){n.exports=t.p+"static/media/electric.68b142da.svg"},56:function(n,e,t){n.exports=t.p+"static/media/fairy.603e08d1.svg"},57:function(n,e,t){n.exports=t.p+"static/media/fighting.8ce4fa81.svg"},58:function(n,e,t){n.exports=t.p+"static/media/fire.33d14b30.svg"},59:function(n,e,t){n.exports=t.p+"static/media/flying.8c1e094f.svg"},60:function(n,e,t){n.exports=t.p+"static/media/ghost.ff397345.svg"},61:function(n,e,t){n.exports=t.p+"static/media/grass.d589dd00.svg"},62:function(n,e,t){n.exports=t.p+"static/media/ground.289c4927.svg"},63:function(n,e,t){n.exports=t.p+"static/media/ice.f82b7e5d.svg"},64:function(n,e,t){n.exports=t.p+"static/media/normal.8f2a7aaa.svg"},65:function(n,e,t){n.exports=t.p+"static/media/poison.183135e9.svg"},66:function(n,e,t){n.exports=t.p+"static/media/psychic.60982f05.svg"},67:function(n,e,t){n.exports=t.p+"static/media/rock.499a0fa1.svg"},68:function(n,e,t){n.exports=t.p+"static/media/steel.95342da3.svg"},69:function(n,e,t){n.exports=t.p+"static/media/water.e29fb8e3.svg"},87:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(32),o=t.n(c),i=(t(42),t(43),t(10)),s=t(1),u=t(8),d=t(7),l=t(9),p=t(13),m=t.n(p),f=function(n){var e=n.type;return r.a.createElement("div",{className:"icon ".concat(e)},r.a.createElement(i.b,{to:"/types/".concat(e)},r.a.createElement("img",{src:t(51)("./".concat(e,".svg")),alt:"pokemon type"})))};function g(){var n=Object(u.a)(["\n    .card-container {\n        display: flex;\n\n        * {margin: 0; padding: 0}\n\n        &__sprite {\n            width: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            img {width:80%}\n        }\n\n        &__text {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            flex: 1;\n            height: 150px;\n            \n            h4 {\n                margin-top: 1rem;\n                font-size: 1.3rem;\n            }\n        }\n\n        &__types {\n            display: flex;\n            width: 60%;\n            justify-content: space-evenly;\n            flex: 1;\n\n            @media(min-width: 550px) {\n                width: 100%;\n            }\n        }\n    }\n\n    .icon {\n        border-radius: 100%;\n        height: 40px;\n        width: 40px;\n        margin:auto;\n        transition: 200ms all;\n    }\n\n    .icon:hover{\n        filter: saturate(200%);\n        transform: scale(1.1);\n        cursor: pointer;\n    }\n\n    .icon img {\n        height: 60%;\n        width: 60%;\n        margin: 20%;\n        position: relative;\n        z-index: 2;\n    }\n\n    .bug {\n        background: #92BC2C;\n        box-shadow: 0 0 20px #92BC2C;\n    }\n\n    .dark {\n        background: #595761;\n        box-shadow: 0 0 20px #595761;\n    }\n\n    .dragon {\n        background: #0C69C8;\n        box-shadow: 0 0 20px #0C69C8;\n    }\n\n    .electric {\n        background: #F2D94E;\n        box-shadow: 0 0 20px #F2D94E;\n    }\n\n    .fire {\n        background: #FBA54C;\n        box-shadow: 0 0 20px #FBA54C;\n    }\n\n    .fairy {\n        background: #EE90E6;\n        box-shadow: 0 0 20px #EE90E6;\n    }\n\n    .fighting {\n        background: #D3425F;\n        box-shadow: 0 0 20px #D3425F;\n    }\n\n    .flying {\n        background: #A1BBEC;\n        box-shadow: 0 0 20px #A1BBEC;\n    }\n\n    .ghost {\n        background: #5F6DBC;\n        box-shadow: 0 0 20px #5F6DBC;\n    }\n\n    .grass {\n        background: #5FBD58;\n        box-shadow: 0 0 20px #5FBD58;\n    }\n\n    .ground {\n        background: #DA7C4D;\n        box-shadow: 0 0 20px #DA7C4D;\n    }\n\n    .ice {\n        background: #75D0C1;\n        box-shadow: 0 0 20px #75D0C1;\n    }\n\n    .normal {\n        background: #A0A29F;\n        box-shadow: 0 0 20px #A0A29F;\n    }\n\n    .poison {\n        background: #B763CF;\n        box-shadow: 0 0 20px #B763CF;\n    }\n\n    .psychic {\n        background: #FA8581;\n        box-shadow: 0 0 20px #FA8581;\n    }\n\n    .rock {\n        background: #C9BB8A;\n        box-shadow: 0 0 20px #C9BB8A;\n    }\n\n    .steel {\n        background: #5695A3;\n        box-shadow: 0 0 20px #5695A3;\n    }\n\n    .water {\n        background: #539DDF;\n        box-shadow: 0 0 20px #539DDF;\n    }\n\n"]);return g=function(){return n},n}var b=l.a.div(g()),x=function(n){var e=n.poke,t=n.passRef;return r.a.createElement(b,{className:"card"},r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"card-container__sprite"},r.a.createElement(i.b,{to:"/pokemon/".concat(e.id)},r.a.createElement("img",{ref:t&&t,src:e.sprite,alt:e.id}))),r.a.createElement("div",{className:"card-container__text"},r.a.createElement("h4",null,e.name),r.a.createElement("div",{className:"card-container__types"},e.types.map((function(n){return r.a.createElement(f,{type:n,key:n})}))))))},v=t(36),h=t(12),E=t.n(h),k="https://jguaura.ml";function y(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100vh;\n\n    a {\n        text-decoration: none;\n        color: #3a3a3a;\n    }\n\n    @media(min-width: 550px) {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        gap: 20px;\n    }\n\n    @media(min-width: 1000px) {\n        grid-template-columns: repeat(3, 1fr)\n    }\n"]);return y=function(){return n},n}var w=l.a.div(y()),j=function(){var n=Object(a.useState)(0),e=Object(d.a)(n,2),t=e[0],c=e[1],o=Object(a.useState)(5),i=Object(d.a)(o,2),s=i[0],u=(i[1],function(n,e){var t=Object(a.useState)(!0),r=Object(d.a)(t,2),c=r[0],o=r[1],i=Object(a.useState)(!1),s=Object(d.a)(i,2),u=s[0],l=s[1],p=Object(a.useState)([]),m=Object(d.a)(p,2),f=m[0],g=m[1],b=Object(a.useState)(!1),x=Object(d.a)(b,2),h=x[0],y=x[1];return Object(a.useEffect)((function(){var t;return o(!0),l(!1),E()({method:"GET",url:"".concat(k,"/api/pokemon"),params:{offset:e,limit:n},cancelToken:new E.a.CancelToken((function(n){return t=n}))}).then((function(n){g((function(e){return[].concat(Object(v.a)(e),[n.data.rows])})),y(e<n.data.count),o(!1)})).catch((function(n){E.a.isCancel(n)||l(!0)})),function(){return t()}}),[n,e]),{loading:c,error:u,hasMore:h,pokes:f}}(s,t)),l=u.loading,p=(u.error,u.pokes),m=u.hasMore,f=Object(a.useRef)(),g=Object(a.useCallback)((function(n){l||(f.current&&f.current.disconnect(),f.current=new IntersectionObserver((function(n){n[0].isIntersecting&&m&&c((function(n){return n+s}))})),n&&f.current.observe(n))}),[l,m,s]);return r.a.createElement(w,null,p&&p.map((function(n){return n.map((function(e,t){return n.length===t+1?r.a.createElement(x,{passRef:g,poke:e,key:n.id}):r.a.createElement(x,{poke:e,key:n.id})}))})),l&&r.a.createElement("h1",{style:{marginTop:"auto"}},"Loading"))},O=function(){return r.a.createElement("div",null,r.a.createElement(j,null))};function _(){var n=Object(u.a)(["\n\n    .card-container {\n        display: flex;\n        flex-direction: column;\n\n        h2 {margin: 1rem 0;}\n\n        &__sprite {\n            width: 100%;\n            background-color: #eee;\n\n            @media (min-width: 550px) {\n                width: 50%;\n            }\n        }\n\n        &__description {\n            margin: 1rem 0;\n            @media (min-width: 550px) {\n                width: 70%;\n            }\n        }\n\n        &__types {\n            width: 100%;\n            flex: auto;\n        }\n\n        &__against {\n            display: flex;\n        }\n\n        &__types, &__against {\n            box-sizing: border-box;\n            margin: 1rem 0 2rem 0;\n            justify-content: flex-start;\n            &:last-of-type {margin-bottom: 0;} \n        }\n\n\n        .icon {\n            margin: 0 0 0 1rem;\n                &:first-of-type {\n                    margin: 0;\n                }\n        }\n    }\n"]);return _=function(){return n},n}var C=Object(l.a)(b)(_()),D=function(n){var e=n.poke;return r.a.createElement(C,null,r.a.createElement("div",{className:"card-container"},r.a.createElement("h2",null,e.name),r.a.createElement("div",{className:"card-container__sprite"},r.a.createElement("img",{src:e.sprite,alt:"pokemon img"})),r.a.createElement("div",{className:"card-container__description"},e.description),r.a.createElement("h3",null,"Type"),r.a.createElement("div",{className:"card-container__types"},e.types.map((function(n){return r.a.createElement(f,{type:n,key:m.a.v4()})}))),r.a.createElement("h3",null,"Weak against"),r.a.createElement("div",{className:"card-container__against"},e.weakto.map((function(n,e){return r.a.createElement(f,{type:n,key:m.a.v4()})})))))},B=function(){var n=Object(s.f)(),e=function(n){var e=Object(a.useState)(),t=Object(d.a)(e,2),r=t[0],c=t[1];return Object(a.useEffect)((function(){E()({method:"GET",url:"".concat(k,"/api/pokemon/").concat(n)}).then((function(n){return c(n.data)})).catch((function(n){return console.error(n)}))}),[n]),{detail:r}}(n=n.id);return r.a.createElement("div",{key:4993598432},e.detail&&e.detail.data.map((function(n){return r.a.createElement(D,{poke:n,key:n.id})})))},F=function(){var n=Object(s.f)(),e=function(n){var e=Object(a.useState)(),t=Object(d.a)(e,2),r=t[0],c=t[1];return Object(a.useEffect)((function(){E()({method:"GET",url:"".concat(k,"/api/pokemon?type=").concat(n)}).then((function(n){return c(n.data.rows)})).catch((function(n){return console.error(n)}))}),[n]),r}(n=n.type);return r.a.createElement("div",null,r.a.createElement("h2",{style:{textTransform:"capitalize",textAlign:"center"}},n," Pokemons"),"\\",r.a.createElement(w,null,e&&e.map((function(n){return r.a.createElement(x,{poke:n})}))))};function A(){var n=Object(u.a)(["\n    width: 90%;\n    /* background-color: teal; */\n    margin: 0 auto;\n"]);return A=function(){return n},n}function N(){var n=Object(u.a)(["\n    width: 100%;\n    /* min-height: 100vh; */\n"]);return N=function(){return n},n}var S=l.a.div(N()),T=l.a.div(A());var z=function(){return r.a.createElement(i.a,null,r.a.createElement(S,null,r.a.createElement(T,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:O}),r.a.createElement(s.a,{path:"/pokemon/:id",component:B}),r.a.createElement(s.a,{path:"/types/:type",component:F})))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.8122a2f4.chunk.js.map
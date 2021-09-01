(this["webpackJsonpmovie-browser"]=this["webpackJsonpmovie-browser"]||[]).push([[0],{37:function(e,n,t){"use strict";t.r(n);var r,i,o,c,a,l,s,d,u,b,f,p,j,h,x=t(0),m=t.n(x),g=t(16),O=t.n(g),v=t(7),w=t(6),y=t(3),k=t(2),z=k.default.h1(r||(r=Object(y.a)(["\n    font-size: 24px;\n    color: ",";\n    line-height: 40px;\n    flex-wrap: nowrap; \n    @media (max-width: ","px) {\n        font-size: 16px;\n        line-height: 20px;\n    }\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.breakpoint.mobile})),C=k.default.img(i||(i=Object(y.a)(["\n    width: 34px;\n    @media (max-width: ","px) {\n        width: 20px;\n    }\n"])),(function(e){return e.theme.breakpoint.mobile})),S=k.default.div(o||(o=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-basis: 50%;\n    flex-wrap: nowrap;\n    width: 100%;\n\n    @media (max-width: ","px) {\n        flex-basis: 100%;\n    }\n"])),(function(e){return e.theme.breakpoint.mobile})),E=t.p+"static/media/camera.b470e4d1.svg",_=t(1),P=function(){return Object(_.jsxs)(S,{children:[Object(_.jsx)(C,{src:E,alt:""}),"\xa0",Object(_.jsx)(z,{children:"Movies Browser"})]})},L=k.default.img(c||(c=Object(y.a)(["\n    margin: 10px 20px;\n"]))),F=k.default.div(a||(a=Object(y.a)(["\nborder-radius: 33px;\nbackground-color: ",";\ndisplay: flex;\nmax-height: 48px;\nmax-width: 432px;\nborder: 1px solid;\nmargin-top: 10px;\nmargin-bottom: 10px;\n"])),(function(e){return e.theme.color.white})),I=k.default.input(l||(l=Object(y.a)([" \nwidth: 90vw;\nborder-radius: 33px;\nborder: none;\n&::placeholder {\n    font-size: 16px;\n    color: ",";\n}\n"])),(function(e){return e.theme.color.darkGrey})),U=t.p+"static/media/search.d40a7fee.svg",M="szukaj",B=function(){var e=Object(w.h)(),n=Object(w.g)(),t=new URLSearchParams(e.search).get(M);return Object(_.jsxs)(F,{children:[Object(_.jsx)(L,{src:U,alt:""}),Object(_.jsx)(I,{placeholder:"Search for movies...",value:t||"",onChange:function(t){var r=t.target,i=new URLSearchParams(e.search);""===r.value.trim()?i.delete(M):i.set(M,r.value),n.push("".concat(e.pathname,"?").concat(i.toString()))}})]})},D=k.default.ul(s||(s=Object(y.a)(["\n    display: flex;\n    list-style: none;\n    margin: 0;\n    align-items: center;\n    flex-basis: 50%;\n"]))),R="active",G=Object(k.default)(v.c).attrs((function(){return{activeClassName:R}}))(d||(d=Object(y.a)(["\n  \n  color: ",";\n  text-decoration: none;\n  border-radius: 33px;\n  padding: 10px;\n  \n  &."," {\n    border: 1px solid ",";\n  }\n  \n  &:hover {\n  }\n"])),(function(e){return e.theme.color.white}),R,(function(e){return e.theme.color.white})),W=k.default.li(u||(u=Object(y.a)(["\n    margin: 20px;\n    text-transform: uppercase;\n    text-decoration: none;\n"]))),T=k.default.div(b||(b=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 90%;\n    flex-wrap: wrap; \n    \n"]))),H=k.default.nav(f||(f=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    max-width: 1368px;\n    margin: 0 auto;\n    flex-wrap: wrap;\n"]))),N=k.default.div(p||(p=Object(y.a)(["\n    color: ",";\n    background: ",";\n    min-height: 94px;\n    padding: 15px;\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.black})),Z=function(e){e.moviesPath,e.peoplePath;return Object(_.jsx)(N,{children:Object(_.jsx)(H,{children:Object(_.jsxs)(T,{children:[Object(_.jsxs)(D,{children:[Object(_.jsx)(P,{}),Object(_.jsx)(W,{children:Object(_.jsx)(G,{to:"/movies",children:"Movies"})}),Object(_.jsx)(W,{children:Object(_.jsx)(G,{to:"/people",children:"People"})})]}),Object(_.jsx)(B,{})]})})})},A=t(4),J=k.default.div(j||(j=Object(y.a)(["\n    max-width: 1368px;\n    margin: 0 auto;\n"]))),Y=t(15),q=Object(Y.b)({name:"movies",initialState:{movies:[],movie:[],credits:[],genres:[]},reducers:{setMovies:function(e,n){var t=n.payload;e.movies=t},setMovie:function(e,n){var t=n.payload;e.movie=t},setCredits:function(e,n){var t=n.payload;e.credits=t},setGenres:function(e,n){var t=n.payload;e.genres=t}}}),K=q.actions,Q=K.setMovies,V=K.setMovie,X=K.setCredits,$=K.setGenres,ee=function(e){return e.movies.movies},ne=function(e){return e.movies.genres.genres},te=function(e){return e.movies.movie.genres},re=function(e){return e.movies.movie},ie=function(e){return e.movies.credits.cast},oe=function(e){return e.movies.credits.crew},ce=q.reducer,ae=["title","titleId"];function le(){return(le=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function se(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function de(e,n){var t=e.title,r=e.titleId,i=se(e,ae);return x.createElement("svg",le({width:24,height:23,viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),t?x.createElement("title",{id:r},t):null,h||(h=x.createElement("path",{d:"M23.1451 8.04083L16.0641 7.01183L12.9011 0.599825C12.8092 0.443683 12.6781 0.314249 12.5207 0.224324C12.3634 0.134399 12.1853 0.0870972 12.0041 0.0870972C11.8229 0.0870972 11.6449 0.134399 11.4875 0.224324C11.3302 0.314249 11.1991 0.443683 11.1071 0.599825L7.93814 7.01183L0.857139 8.04083C0.672479 8.06748 0.498959 8.14526 0.356195 8.26538C0.213431 8.3855 0.107117 8.54316 0.0492738 8.72054C-0.00856983 8.89792 -0.0156366 9.08794 0.0288724 9.26913C0.0733813 9.45032 0.167691 9.61544 0.301139 9.74583L5.42614 14.7398L4.21714 21.7928C4.18563 21.9767 4.2062 22.1658 4.27652 22.3386C4.34684 22.5114 4.46411 22.6611 4.61507 22.7708C4.76603 22.8804 4.94465 22.9457 5.13075 22.9591C5.31685 22.9725 5.50299 22.9337 5.66814 22.8468L12.0011 19.5178L18.3341 22.8468C18.4993 22.9337 18.6854 22.9725 18.8715 22.9591C19.0576 22.9457 19.2362 22.8804 19.3872 22.7708C19.5382 22.6611 19.6554 22.5114 19.7258 22.3386C19.7961 22.1658 19.8166 21.9767 19.7851 21.7928L18.5761 14.7398L23.7011 9.74583C23.8345 9.61557 23.9289 9.45061 23.9735 9.26957C24.0181 9.08853 24.0112 8.89862 23.9536 8.72129C23.896 8.54396 23.7899 8.38628 23.6474 8.26603C23.5049 8.14579 23.3316 8.06779 23.1471 8.04083H23.1451Z",fill:"#FCD420"})))}var ue,be,fe,pe,je,he,xe,me,ge,Oe,ve,we,ye,ke,ze,Ce,Se,Ee,_e,Pe,Le,Fe,Ie=x.forwardRef(de),Ue=(t.p,function(){return Object(_.jsx)(Ie,{})}),Me=k.default.div(ue||(ue=Object(y.a)(["\n    background-color: ",";\n    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);\n    padding: ",";\n    display: flex;\n    flex-direction: ",";\n    gap: ",";\n"])),(function(e){return e.theme.color.white}),(function(e){return e.oversize?"40px":"16px"}),(function(e){return e.oversize?"row":"column"}),(function(e){return e.oversize?"40px":"8px"})),Be=k.default.img(be||(be=Object(y.a)(["\n    display: block;\n    aspect-ratio: 2/3;\n    width: ",";\n    border-radius: 5px;\n"])),(function(e){return e.width?e.width:"100%"})),De=k.default.div(fe||(fe=Object(y.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n"]))),Re=Object(k.default)(v.b)(pe||(pe=Object(y.a)(["\n    text-decoration: none;\n    color: currentColor;\n\n    &:hover {\n        color: darkred;\n    }\n    \n    &:active {\n        color: crimson;\n    }\n"]))),Ge=k.default.h2(je||(je=Object(y.a)(["\n    font-weight: 600;\n    text-align: ",";\n    font-size: ",";\n    line-height: 1.2;\n    margin-top: 8px;\n    margin-bottom: ",";\n"])),(function(e){return e.minimal?"center":"left"}),(function(e){return e.oversize?"36px":"22px"}),(function(e){return e.oversize?"24px":"8px"})),We=k.default.span(he||(he=Object(y.a)(["\n    font-weight: 400; \n    text-align: ",";\n    font-size: ",";\n    font-size: ",";\n    line-height: 1.2;\n    margin-bottom: ",";\n"])),(function(e){return e.minimal?"center":"left"}),(function(e){return e.oversize?"36px":"16px"}),(function(e){return e.minimal?"18px":"16px"}),(function(e){return e.oversize?"24px":"12px"})),Te=k.default.div(xe||(xe=Object(y.a)(["\n    margin-bottom: 8px;\n"]))),He=k.default.span(me||(me=Object(y.a)(["\n    font-size: 18px;\n    line-height: 1.2;\n    color: ",";\n"])),(function(e){return e.theme.color.stormGrey})),Ne=k.default.span(ge||(ge=Object(y.a)(["\n    font-size: 18px;\n    line-height: 1.2;\n    margin-left: 10px;\n"]))),Ze=k.default.div(Oe||(Oe=Object(y.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: ",";\n    margin-bottom: 16px;\n"])),(function(e){return e.oversize?"16px":"8px"})),Ae=k.default.span(ve||(ve=Object(y.a)(["\n    padding: 8px 16px;\n    margin-top: ",";\n    margin-bottom: ",";\n    font-size: 14px;\n    border-radius: 5px;\n    background-color: ",";\n    color: ",";\n"])),(function(e){return e.oversize?"24px":"0px"}),(function(e){return e.oversize?"24px":"0px"}),(function(e){return e.theme.color.mystic}),(function(e){return e.theme.color.woodsmoke})),Je=k.default.div(we||(we=Object(y.a)(["\n    margin-top: auto;\n"]))),Ye=k.default.span(ye||(ye=Object(y.a)(["\n    font-weight: 500;\n    font-size: 22px;\n    line-height: 1.3;\n    margin-left: 8px;\n"]))),qe=k.default.span(ke||(ke=Object(y.a)(["\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.2;\n    margin-left: 8px;\n    align-self: flex-end;\n"]))),Ke=k.default.span(ze||(ze=Object(y.a)(["\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.2;\n    margin-left: 12px;\n    align-self: flex-end;\n"]))),Qe=k.default.p(Ce||(Ce=Object(y.a)(["\n    font-size: 20px;\n    line-height: 1.6;\n    margin: 24px 0px;\n    font-weight: 400;\n"]))),Ve=function(e){var n=e.oversize,t=e.minimal,r=e.imageWidth,i=e.titleUrl,o=e.imageUrl,c=e.title,a=e.subtitle,l=e.countries,s=e.releaseDate,d=e.genreIds,u=e.genresList,b=e.rating,f=e.votes,p=e.overview,j=Object(A.c)(ne);return Object(_.jsxs)(Me,{oversize:n,children:[Object(_.jsx)(Be,{src:o,width:r,alt:"image"}),Object(_.jsxs)(De,{children:[Object(_.jsx)(Re,{to:i,children:Object(_.jsx)(Ge,{oversize:n,minimal:t,children:c})}),Object(_.jsx)(We,{oversize:n,minimal:t,children:a}),l&&Object(_.jsxs)(Te,{children:[Object(_.jsx)(He,{children:"Production: "}),Object(_.jsx)(Ne,{children:l&&l.map((function(e){return e.name})).join(", ")})]}),s&&Object(_.jsxs)(Te,{children:[Object(_.jsx)(He,{children:"Release date: "}),Object(_.jsx)(Ne,{children:s})]}),d&&Object(_.jsx)(Ze,{children:j&&d&&d.map((function(e){return Object(_.jsx)(Ae,{children:j[j.findIndex((function(n){return n.id===e}))].name},e)}))}),u&&Object(_.jsx)(Ze,{oversize:!0,children:u.map((function(e,n){return Object(_.jsx)(Ae,{oversize:!0,children:u[n].name},u[n].id)}))}),b&&f&&Object(_.jsxs)(Je,{children:[Object(_.jsx)(Ue,{}),Object(_.jsx)(Ye,{children:b}),Object(_.jsx)(qe,{children:"/ 10"}),Object(_.jsxs)(Ke,{children:[f," votes"]})]}),p&&Object(_.jsx)(Qe,{children:p})]})]})},Xe=Object(Y.b)({name:"global",initialState:{config:{change_keys:[],images:{backdrop_sizes:[],base_url:"",logo_sizes:[],poster_sizes:[],profile_sizes:[],secure_base_url:"",still_sizes:[]}},totalPages:500,state:"idle",posterSize:"w500",backdropSize:"w1280"},reducers:{setConfig:function(e,n){var t=n.payload;e.config=t},setPosterSize:function(e,n){var t=n.payload;e.posterSize=t},setBackdropSize:function(e,n){var t=n.payload;e.backdropSize=t},setTotalPages:function(e,n){var t=n.payload;e.totalPages=t},setState:function(e,n){var t=n.payload;e.state=t}}}),$e=Xe.actions,en=$e.setConfig,nn=$e.setPosterSize,tn=($e.setBackdropSize,$e.setTotalPages),rn=$e.setState,on=function(e){return e.global.config.images.secure_base_url},cn=function(e){return e.global.config.images.poster_sizes},an=function(e){return e.global.posterSize},ln=function(e){return e.global.totalPages},sn=function(e){return e.global.state},dn=Xe.reducer,un=k.default.div(Se||(Se=Object(y.a)(["\n    width: 640px;\n    margin: 40px auto;\n"]))),bn=Object(k.default)(v.b)(Ee||(Ee=Object(y.a)(["\n    text-decoration: none;\n    padding: 8px 16px;\n    border-radius: 5px;\n    background-color: ",";\n    margin: 0px 12px;\n    font-size: 14px;\n    color: ",";\n\n    ","\n"])),(function(e){return e.theme.color.cornflowerBlue}),(function(e){return e.theme.color.mineShaft}),(function(e){return e.disabled&&Object(k.css)(_e||(_e=Object(y.a)(["\n        background-color: ",";\n        color: ",";\n        cursor: default;\n    "])),(function(e){return e.theme.color.mystic}),(function(e){return e.theme.color.woodsmoke}))})),fn=k.default.span(Pe||(Pe=Object(y.a)(["\n    font-size: 16px;\n    line-height: 1.5;\n    color: ",";\n    margin: 0px 8px;\n"])),(function(e){return e.theme.color.darkGrey})),pn=k.default.span(Le||(Le=Object(y.a)(["\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n    color: ",";\n    margin: 0px 8px;\n"])),(function(e){return e.theme.color.woodsmoke})),jn=["title","titleId"];function hn(){return(hn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function xn(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function mn(e,n){var t=e.title,r=e.titleId,i=xn(e,jn);return x.createElement("svg",hn({width:7,height:12,viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),t?x.createElement("title",{id:r},t):null,Fe||(Fe=x.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.68799 5.3035C6.88777 5.48824 7 5.73877 7 6C7 6.26123 6.88777 6.51176 6.68799 6.6965L1.79343 11.2213C1.59491 11.4011 1.32763 11.5013 1.04967 11.5C0.771718 11.4987 0.505548 11.396 0.309002 11.2143C0.112456 11.0326 0.00141732 10.7866 1.3474e-05 10.5296C-0.00139037 10.2727 0.106955 10.0256 0.301505 9.84207L4.45757 6L0.301505 2.15793C0.106955 1.97441 -0.00139037 1.72732 1.3474e-05 1.47037C0.00141732 1.21341 0.112456 0.967353 0.309002 0.785657C0.505548 0.60396 0.771718 0.50131 1.04967 0.500012C1.32763 0.498715 1.59491 0.598874 1.79343 0.778726L6.68799 5.3035Z",fill:"currentColor"})))}var gn,On,vn,wn=x.forwardRef(mn),yn=(t.p,Object(k.default)(wn)(gn||(gn=Object(y.a)(["\n    margin-left: 8px;\n    color: ",";\n\n    ","\n"])),(function(e){return e.theme.color.scienceBlue}),(function(e){return e.disabled&&Object(k.css)(On||(On=Object(y.a)(["\n    color: ",";\n    "])),(function(e){return e.theme.color.darkGrey}))}))),kn=function(e){var n=e.disabled;return Object(_.jsx)(yn,{disabled:n})},zn=["title","titleId"];function Cn(){return(Cn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Sn(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function En(e,n){var t=e.title,r=e.titleId,i=Sn(e,zn);return x.createElement("svg",Cn({width:7,height:12,viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),t?x.createElement("title",{id:r},t):null,vn||(vn=x.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.31201 5.3035C0.11223 5.48824 0 5.73877 0 6C0 6.26123 0.11223 6.51176 0.31201 6.6965L5.20657 11.2213C5.40509 11.4011 5.67237 11.5013 5.95033 11.5C6.22828 11.4987 6.49445 11.396 6.691 11.2143C6.88754 11.0326 6.99858 10.7866 6.99999 10.5296C7.00139 10.2727 6.89305 10.0256 6.69849 9.84207L2.54243 6L6.69849 2.15793C6.89305 1.97441 7.00139 1.72732 6.99999 1.47037C6.99858 1.21341 6.88754 0.967353 6.691 0.785657C6.49445 0.60396 6.22828 0.50131 5.95033 0.500012C5.67237 0.498715 5.40509 0.598874 5.20657 0.778726L0.31201 5.3035Z",fill:"currentColor"})))}var _n,Pn,Ln,Fn,In=x.forwardRef(En),Un=(t.p,Object(k.default)(In)(_n||(_n=Object(y.a)(["\n    margin-right: 8px;\n    color: ",";\n\n    ","\n"])),(function(e){return e.theme.color.scienceBlue}),(function(e){return e.disabled&&Object(k.css)(Pn||(Pn=Object(y.a)(["\n    color: ",";\n    "])),(function(e){return e.theme.color.darkGrey}))}))),Mn=function(e){var n=e.disabled;return Object(_.jsx)(Un,{disabled:n})},Bn=function(){var e=Object(A.b)(),n=Object(w.i)().page,t=n||1,r=Object(A.c)(ln);t>r&&e(rn("error"));var i=function(){return 1===+t},o=function(){return+t===+r};return Object(_.jsxs)(un,{children:[Object(_.jsxs)(bn,{to:"/movies/1",disabled:i(),children:[Object(_.jsx)(Mn,{disabled:i()}),"First"]}),Object(_.jsxs)(bn,{to:"/movies/".concat(1===+t?1:+t-1),disabled:i(),children:[Object(_.jsx)(Mn,{disabled:i()}),"Previous"]}),Object(_.jsx)(fn,{children:"Page"}),Object(_.jsx)(pn,{children:t}),Object(_.jsx)(fn,{children:"of"}),Object(_.jsx)(pn,{children:r}),Object(_.jsxs)(bn,{to:"/movies/".concat(+t===+r?+t:+t+1),disabled:o(),children:["Next",Object(_.jsx)(kn,{disabled:o()})]}),Object(_.jsxs)(bn,{to:"/movies/".concat(r),disabled:o(),children:["Last",Object(_.jsx)(kn,{disabled:o()})]})]})},Dn=["title","titleId"];function Rn(){return(Rn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Gn(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Wn(e,n){var t=e.title,r=e.titleId,i=Gn(e,Dn);return x.createElement("svg",Rn({width:91,height:91,viewBox:"0 0 91 91",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),t?x.createElement("title",{id:r},t):null,Ln||(Ln=x.createElement("circle",{cx:45.5,cy:45.5,r:39.8125,stroke:"#DDDDEE",strokeWidth:11.375})),Fn||(Fn=x.createElement("path",{d:"M73.6517 17.3483C81.118 24.8146 85.3125 34.9411 85.3125 45.5C85.3125 56.0589 81.118 66.1854 73.6517 73.6517",stroke:"black",strokeWidth:11.375})))}var Tn,Hn,Nn,Zn,An,Jn,Yn,qn,Kn,Qn,Vn,Xn,$n,et,nt,tt,rt,it=x.forwardRef(Wn),ot=(t.p,k.default.div(Tn||(Tn=Object(y.a)(["\n    width: 91px;\n    height: 91px;\n    margin: 120px auto;\n    animation:spin 1s linear infinite;\n    @keyframes spin { 100% {transform:rotate(360deg);} };\n"])))),ct=function(){return Object(_.jsx)(ot,{children:Object(_.jsx)(it,{})})},at=k.default.header(Hn||(Hn=Object(y.a)(["\n    font-weight: 600;\n    font-size: 36px;\n    line-height: 1.2;\n    color: ",";\n"])),(function(e){return e.theme.color.woodsmoke})),lt=function(e){var n=e.message;return Object(_.jsxs)(J,{children:[Object(_.jsx)(at,{children:n}),Object(_.jsx)(ct,{})]})},st=k.default.div(Nn||(Nn=Object(y.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\ntext-align: center;\nposition: absolute;\ntop: 50%;\nleft: 50%;\nmargin-right: -50%;\ntransform: translate(-50%, -50%)\n"]))),dt=k.default.img(Zn||(Zn=Object(y.a)([""]))),ut=k.default.header(An||(An=Object(y.a)(["\nfont-size: 36px;\nline-height: 120%;\n@media(max-width: ","px) {\n  font-size: 28px;\n}\n@media(max-width: ","px) {\n  font-size: 18px;\n}\n"])),(function(e){return e.theme.breakpoint.mobileMin}),(function(e){return e.theme.breakpoint.mobile})),bt=k.default.p(Jn||(Jn=Object(y.a)(["\nfont-size: 22px;\n@media(max-width: ","px) {\n  font-size: 12px;\n}\n@media(max-width: ","px) {\n  font-size: 16px;\n"])),(function(e){return e.theme.breakpoint.mobileMin}),(function(e){return e.theme.breakpoint.mobile})),ft=Object(k.default)(v.c)(Yn||(Yn=Object(y.a)(["\nfont-size: 14px;\nfont-weight: bold;\nline-height: 19px;\ncolor: ",";\nbackground: ",";\ntext-decoration: none;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\npadding: 16px 24px;\nborder-radius: 5px;\n@media(max-width: ","px) {\n  font-size: 10px;\n}\n@media(max-width: ","px) {\n  font-size: 12px;\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.blue}),(function(e){return e.theme.breakpoint.mobileMin}),(function(e){return e.theme.breakpoint.mobile})),pt=t.p+"static/media/error.fb129407.svg",jt=function(){return Object(_.jsxs)(st,{children:[Object(_.jsx)(dt,{src:pt,alt:""}),Object(_.jsx)(ut,{children:"Oooops! Something went\xa0wrong..."}),Object(_.jsxs)(bt,{children:["Please, check your network connection ",Object(_.jsx)("br",{}),"and try again"]}),Object(_.jsx)(ft,{to:"/",children:"Back to Home page"})]})},ht=k.default.div(qn||(qn=Object(y.a)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 24px;\n"]))),xt=function(){var e=Object(A.b)();Object(x.useEffect)((function(){fetch("https://api.themoviedb.org/3/configuration?api_key=768f7875782193f5e4797762314da0b7&language=en-US").then((function(e){return e.json()})).then((function(n){return e(en(n))}))}),[])},mt=function(){var e=Object(A.b)(),n=Object(w.i)(),t=n.page?n.page:1,r="https://api.themoviedb.org/3/movie/popular?api_key=768f7875782193f5e4797762314da0b7&page=".concat(t,"&language=en-US");Object(x.useEffect)((function(){e(rn("loading")),fetch(r).then((function(e){if(!e.ok)throw new Error(e.statusText);return e})).then((function(e){return e.json()})).then((function(n){e(tn(n.total_pages)),e(Q(n.results))})).then(void setTimeout((function(){e(rn("success"))}),1e3)).catch((function(n){e(rn("error")),console.error("Unfortunately, something went wrong...",n)}))}),[t])},gt=function(){var e=Object(A.b)(),n=Object(A.c)(ee),t=Object(A.c)(sn),r=Object(A.c)(on),i=Object(A.c)(cn),o=Object(A.c)(an);xt(),function(){var e=Object(A.b)();Object(x.useEffect)((function(){fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=768f7875782193f5e4797762314da0b7&language=en-US").then((function(e){return e.json()})).then((function(n){return e($(n))}))}),[])}(),mt(),Object(x.useEffect)((function(){window.scrollTo(0,0)}),[]);return window.addEventListener("resize",(function(){var n=window.innerWidth;e(nn(n>"1280"?i[4]:n>"768"?i[3]:n>"480"?i[2]:i[1]))})),Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(J,{children:[Object(_.jsxs)(ht,{title:"Movies",children:["loading"===t&&Object(_.jsx)(lt,{message:"Loading movies list..."}),"error"===t&&Object(_.jsx)(jt,{}),"success"===t&&n&&n.map((function(e,t){return Object(_.jsx)(Ve,{movieId:n[t].id,titleUrl:"/movie/".concat(n[t].id),imageWidth:"292px",imageUrl:"".concat(r).concat(o).concat(n[t].poster_path),title:n[t].title,subtitle:new Date(Date.parse(n[t].release_date)).getFullYear(),genreIds:n[t].genre_ids,rating:n[t].vote_average,votes:n[t].vote_count},n[t].id)}))]}),Object(_.jsx)(Bn,{})]})})},Ot=k.default.div(Kn||(Kn=Object(y.a)(["\n    background-color: ",";\n    width: 100%;\n"])),(function(e){return e.theme.color.black})),vt=k.default.div(Qn||(Qn=Object(y.a)(["\n    max-width: 1920px;\n    max-height: 770px;\n    background-repeat: no-repeat; \n    background-position: center;\n    background-size: cover;\n    margin: 0 auto;\n"]))),wt=k.default.div(Vn||(Vn=Object(y.a)(["\n    background: linear-gradient(\n        270deg, #000000 14.11%, \n        rgba(0, 0, 0, 0.873268) 15.08%, \n        rgba(0, 0, 0, 0.720529) 16.51%, \n        rgba(0, 0, 0, 0.294577) 19.99%, \n        rgba(0, 0, 0, 0.159921) 21.88%, \n        rgba(0, 0, 0, 0) 25.68%\n        ), \n        linear-gradient(\n            90deg, #000000 13.6%, \n            rgba(0, 0, 0, 0.984059) 14.58%, \n            rgba(0, 0, 0, 0.967732) 15.44%, \n            rgba(0, 0, 0, 0.865569) 16.3%, \n            rgba(0, 0, 0, 0.230315) 22.87%, \n            rgba(0, 0, 0, 0) 26.64%\n            ), \n            linear-gradient(\n                180deg, #000000 0%, \n                rgba(0, 0, 0, 0.689555) 4.66%, \n                rgba(0, 0, 0, 0.439033) 9.34%, \n                rgba(0, 0, 0, 0.20628) 15.16%, \n                rgba(0, 0, 0, 0) 24.22%\n                ), \n                linear-gradient(\n                    189.44deg, \n                    rgba(0, 0, 0, 0) 58.48%, \n                    rgba(0, 0, 0, 0.106473) 63.17%, \n                    rgba(0, 0, 0, 0.235359) 68.85%, \n                    rgba(0, 0, 0, 0.492821) 78.08%, \n                    rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%\n                    );\n    height: 770px;\n    background-repeat: no-repeat;\n    display:flex;\n    flex-direction: column;\n    justify-content: flex-end;\n"]))),yt=k.default.h1(Xn||(Xn=Object(y.a)(["\n    color: ",";\n    font-size: 64px;\n"])),(function(e){return e.theme.color.white})),kt=k.default.div($n||($n=Object(y.a)(["\n    max-width: 1368px;\n    color: ",";\n    padding-left: 56px;  \n"])),(function(e){return e.theme.color.white})),zt=k.default.p(et||(et=Object(y.a)(["\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.2;\n    margin-left: 8px;\n    align-self: flex-end;\n"]))),Ct=k.default.p(nt||(nt=Object(y.a)(["\n    font-weight: 500;\n    font-size: 30px;\n    line-height: 1.3;\n    margin-left: 12px;\n    display: flex;\n    align-items: center;\n"]))),St=function(e){var n=e.backdropUrl,t=e.title,r=e.rating,i=e.votes;return Object(_.jsx)(Ot,{children:Object(_.jsx)(vt,{style:{backgroundImage:'url("'.concat(n,'")')},children:Object(_.jsx)(wt,{children:Object(_.jsxs)(kt,{children:[Object(_.jsx)(yt,{children:t}),Object(_.jsx)(Ue,{}),Object(_.jsxs)(zt,{children:[" ",r]}),Object(_.jsxs)(Ct,{children:[i," votes"]})]})})})})},Et=m.a.lazy((function(){return t.e(3).then(t.bind(null,39))})),_t=function(){var e=Object(A.b)(),n=Object(w.i)().id,t=Object(A.c)(re),r=Object(A.c)(on),i=Object(A.c)(an),o=Object(A.c)(cn),c=Object(A.c)(ie),a=Object(A.c)(oe),l=Object(A.c)(te);xt(),function(){var e=Object(w.i)().id,n="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=768f7875782193f5e4797762314da0b7&language=en-US"),t=Object(A.b)();Object(x.useEffect)((function(){fetch(n).then((function(e){return e.json()})).then((function(e){return t(V(e))}))}),[])}(),function(e){var n="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=768f7875782193f5e4797762314da0b7&language=en-US"),t=Object(A.b)();Object(x.useEffect)((function(){fetch(n).then((function(e){return e.json()})).then((function(e){return t(X(e))}))}),[])}(n),Object(x.useEffect)((function(){window.scrollTo(0,0)}),[]);return window.addEventListener("resize",(function(){var n=window.innerWidth;e(nn(n>"1280"?o[4]:n>"768"?o[3]:n>"480"?o[2]:o[1]))})),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(St,{backdropUrl:"".concat(r,"original").concat(t.backdrop_path),title:t.original_title,rating:t.vote_average,votes:t.vote_count}),Object(_.jsxs)(J,{children:[Object(_.jsx)(Ve,{oversize:!0,movieId:n,imageWidth:"312px",titleUrl:"/movie/".concat(n),imageUrl:t&&"".concat(r).concat(i).concat(t.poster_path),title:t.title,subtitle:t&&new Date(Date.parse(t.release_date)).getFullYear().toString(),countries:t.production_countries,releaseDate:t.release_date,genresList:l,rating:t.vote_average,votes:t.vote_count,overview:t.overview},n),Object(_.jsxs)(x.Suspense,{fallback:Object(_.jsx)(ct,{}),children:[c&&Object(_.jsx)(Et,{title:"Cast",body:c&&c.map((function(e,n){return Object(_.jsx)(Ve,{minimal:!0,titleUrl:"/people/".concat(c[n].id),imageUrl:"".concat(r).concat(i).concat(c[n].profile_path),title:c[n].name,subtitle:c[n].character},c[n].credit_id)}))}),a&&Object(_.jsx)(Et,{title:"Crew",body:a&&a.map((function(e,n){return Object(_.jsx)(Ve,{minimal:!0,titleUrl:"/people/".concat(a[n].id),imageUrl:"".concat(r).concat(i).concat(a[n].profile_path),title:a[n].name,subtitle:a[n].job},a[n].credit_id)}))})]})]})]})},Pt=k.default.header(tt||(tt=Object(y.a)(["\nfont-weight: 600;\nfont-size: 36px;\nline-height: 1.2;\nmargin-top: 50px;\n@media(max-width: ","px) {\n    font-size: 20px;\n    margin-top: 20px;\n  }\n  @media(max-width: ","px) {\n    font-size: 26px;\n    margin-top: 30px;\n  "])),(function(e){return e.theme.breakpoint.mobileMin}),(function(e){return e.theme.breakpoint.mobile})),Lt=k.default.img(rt||(rt=Object(y.a)(["\nmargin: 0 auto;\ndisplay: block;\nWidth: 668px;\nHeight: 508px;\nmargin-top: 50px;\n@media(max-width: ","px) {\n    Width: 150px;\n    Height: 105px;\n  }\n  @media(max-width: ","px) {\n    Width: 270px;\n    Height: 205px;\n  "])),(function(e){return e.theme.breakpoint.mobileMin}),(function(e){return e.theme.breakpoint.mobile})),Ft=t.p+"static/media/noResults.1c908993.svg",It=function(){return Object(_.jsxs)(J,{children:[Object(_.jsx)(Pt,{children:"Sorry, the page not found..."}),Object(_.jsx)(Lt,{src:Ft,alt:""})]})};var Ut,Mt=function(){return Object(_.jsxs)(v.a,{children:[Object(_.jsx)(Z,{moviesPath:"/movies",peoplePath:"/people"}),Object(_.jsxs)(w.d,{children:[Object(_.jsx)(w.b,{path:"/movie/:id",children:Object(_.jsx)(_t,{})}),Object(_.jsx)(w.b,{path:"/movies/:page",children:Object(_.jsx)(gt,{})}),Object(_.jsx)(w.b,{path:"/movies",children:Object(_.jsx)(gt,{})}),Object(_.jsx)(w.b,{path:"/people",children:Object(_.jsx)(It,{})}),Object(_.jsx)(w.b,{path:"/",children:Object(_.jsx)(w.a,{to:"/movies"})})]})]})},Bt=function(e){e&&e instanceof Function&&t.e(4).then(t.bind(null,38)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),r(e),i(e),o(e),c(e)}))},Dt=t(25),Rt=Object(k.createGlobalStyle)(Ut||(Ut=Object(y.a)(['\n  html {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: "Poppins", sans-serif;\n    background-color:',";\n  }\n    \n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n"])),(function(e){return e.theme.color.whisper})),Gt=Object(Y.a)({reducer:{movies:ce,global:dn}});O.a.render(Object(_.jsx)(m.a.StrictMode,{children:Object(_.jsx)(A.a,{store:Gt,children:Object(_.jsxs)(k.ThemeProvider,{theme:{color:{white:"#FFFFFF",blue:"#0044CC",cornflowerBlue:"#D6E4FF",mineShaft:"#333333",scienceBlue:"#0044CC",mystic:"#E4E6F0",mercury:"#E5E5E5",woodsmoke:"#18181B",stormGrey:"#74788B",darkGrey:"#7E839A",black:"#000000",whisper:"#F5F5FA"},breakpoint:{mobile:"767",mobileMin:"320"}},children:[Object(_.jsx)(Dt.Normalize,{}),Object(_.jsx)(Rt,{}),Object(_.jsx)(Mt,{})]})})}),document.getElementById("root")),Bt()}},[[37,1,2]]]);
//# sourceMappingURL=main.e8ede749.chunk.js.map
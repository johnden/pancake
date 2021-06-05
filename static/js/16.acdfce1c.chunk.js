(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[16],{1146:function(e,t,n){"use strict";n.r(t);var c,r,i,a,s,o,l,d,b,j,u,f,O,p,m,h=n(17),x=n(0),v=n(8),g=n(3),w=n(20),k=n(183),C=n(204),y=n.n(C),S=n(34),N=n(103),F=n(49),T=n(209),P=n(30),I=n(5),q=n.n(I),A=n(16),D=n(18),E=v.e.div(c||(c=Object(h.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),U=n(151),H=n.n(U),J=n(187),Q=n(72),R=n(44),W=n(2),Y=Object(v.e)(g.Pb)(r||(r=Object(h.a)(["\n  font-weight: 600;\n"]))),_=v.e.div(i||(i=Object(h.a)(["\n  margin-bottom: 16px;\n"]))),B=v.e.div(a||(a=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),L=v.e.label(s||(s=Object(h.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),z=function(e){var t=e.nft,n=e.tokenIds,c=e.onSuccess,r=e.onDismiss,i=Object(x.useState)(!1),a=Object(D.a)(i,2),s=a[0],o=a[1],l=Object(x.useState)(""),d=Object(D.a)(l,2),b=d[0],j=d[1],u=Object(x.useState)(null),f=Object(D.a)(u,2),O=f[0],p=f[1],m=Object(w.b)().t,h=Object(S.c)().account,v=Object(R.h)(Object(J.a)(t.type)),k=Object(Q.a)().toastSuccess,C=function(){var e=Object(A.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,H.a.utils.isAddress(b)){e.next=6;break}p(m("Please enter a valid wallet address")),e.next=8;break;case 6:return e.next=8,v.methods.transferFrom(h,b,n[0]).send({from:h}).on("sending",(function(){o(!0)})).on("receipt",(function(){r(),c(),k(m("NFT successfully transferred!"))})).on("error",(function(){console.error(O),p(m("Unable to transfer NFT")),o(!1)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(W.jsxs)(g.nb,{title:m("Transfer NFT"),onDismiss:r,children:[Object(W.jsxs)(_,{children:[O&&Object(W.jsx)(g.Pb,{color:"failure",mb:"8px",children:O}),Object(W.jsxs)(E,{children:[Object(W.jsxs)(g.Pb,{children:[m("Transferring"),":"]}),Object(W.jsx)(Y,{children:m("1x %nftName% NFT",{nftName:t.name})})]}),Object(W.jsxs)(L,{htmlFor:"transferAddress",children:[m("Receiving address"),":"]}),Object(W.jsx)(g.Y,{id:"transferAddress",name:"address",type:"text",placeholder:m("Paste address"),value:b,onChange:function(e){var t=e.target.value;j(t)},isWarning:O,disabled:s})]}),Object(W.jsxs)(B,{children:[Object(W.jsx)(g.q,{width:"100%",variant:"secondary",onClick:r,children:m("Cancel")}),Object(W.jsx)(g.q,{width:"100%",onClick:C,disabled:!h||s||!b,children:m("Confirm")})]})]})},G=v.e.div(o||(o=Object(h.a)(["\n  margin-bottom: 16px;\n"]))),K=v.e.div(l||(l=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),M=function(e){var t=e.nft,n=e.onSuccess,c=e.onClaim,r=e.onDismiss,i=Object(x.useState)(!1),a=Object(D.a)(i,2),s=a[0],o=a[1],l=Object(w.b)().t,d=Object(S.c)().account,b=Object(Q.a)(),j=b.toastError,u=b.toastSuccess,f=function(){var e=Object(A.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c().once("sending",(function(){o(!0)})).once("receipt",(function(){u(l("Successfully claimed!")),r(),n()})).once("error",(function(e){console.error("Unable to claim NFT",e),j(l("Error"),l("Unable to claim NFT, please try again.")),o(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(W.jsxs)(g.nb,{title:l("Claim Collectible"),onDismiss:r,children:[Object(W.jsx)(G,{children:Object(W.jsxs)(g.R,{alignItems:"center",mb:"8px",justifyContent:"space-between",children:[Object(W.jsxs)(g.Pb,{children:[l("You will receive"),":"]}),Object(W.jsx)(g.Pb,{bold:!0,children:l("1x %nftName% Collectible",{nftName:t.name})})]})}),Object(W.jsxs)(K,{children:[Object(W.jsx)(g.q,{width:"100%",variant:"secondary",onClick:r,children:l("Cancel")}),Object(W.jsx)(g.q,{width:"100%",onClick:f,disabled:!d,isLoading:s,endIcon:s?Object(W.jsx)(g.g,{color:"currentColor",spin:!0}):null,children:l("Confirm")})]})]})},V=v.e.div(d||(d=Object(h.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.cardBorder})),X=v.e.img(b||(b=Object(h.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 32px 32px 0 0;\n"]))),Z=v.e.video(j||(j=Object(h.a)(["\n  height: 100%;\n  width: 100%;\n"]))),$=function(e){var t=e.nft,n=e.isOwned,c=void 0!==n&&n,r=t.images,i=t.name,a=t.video,s="/images/nfts/".concat(r.lg);if(a){var o=Object(W.jsxs)(Z,{autoPlay:!0,controls:!1,loop:!0,muted:!0,poster:s,children:[Object(W.jsx)("source",{src:a.webm,type:"video/webm"}),Object(W.jsx)("source",{src:a.mp4,type:"video/mp4"})]});return c?Object(W.jsx)("a",{href:r.ipfs,target:"_blank",rel:"noreferrer noopener",children:o}):o}var l=Object(W.jsx)(X,{src:s,alt:i});return Object(W.jsx)(V,{children:c?Object(W.jsx)("a",{href:r.ipfs,target:"_blank",rel:"noreferrer noopener",children:l}):l})},ee=Object(v.e)(E)(u||(u=Object(h.a)(["\n  min-height: 28px;\n"]))),te=Object(v.e)(g.q).attrs({variant:"text"})(f||(f=Object(h.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),ne=v.e.div(O||(O=Object(h.a)(["\n  padding: 24px;\n"]))),ce=function(e){var t,n=e.nft,c=e.canClaim,r=void 0!==c&&c,i=e.tokenIds,a=void 0===i?[]:i,s=e.onClaim,o=e.refresh,l=Object(x.useState)(!1),d=Object(D.a)(l,2),b=d[0],j=d[1],u=Object(w.b)().t,f=Object(P.H)().profile,O=n.identifier,p=n.name,m=n.description,h=a.length>0,v=b?g.I:g.F,k=function(){var e=Object(A.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!b);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){o()},y=Object(g.jc)(Object(W.jsx)(z,{nft:n,tokenIds:a,onSuccess:C})),S=Object(D.a)(y,1)[0],N=Object(g.jc)(Object(W.jsx)(M,{nft:n,onSuccess:C,onClaim:s})),F=Object(D.a)(N,1)[0];return Object(W.jsxs)(g.u,{isActive:h,children:[Object(W.jsx)($,{nft:n,isOwned:h}),Object(W.jsxs)(g.v,{children:[Object(W.jsxs)(ee,{children:[Object(W.jsx)(g.S,{children:p}),h&&Object(W.jsx)(g.Nb,{outline:!0,variant:"secondary",children:u("In Wallet")}),(null===f||void 0===f||null===(t=f.nft)||void 0===t?void 0:t.identifier)===O&&Object(W.jsx)(g.Nb,{outline:!0,variant:"success",children:u("Profile Pic")})]}),r&&Object(W.jsx)(g.q,{width:"100%",mt:"24px",onClick:F,children:u("Claim this NFT")}),h&&Object(W.jsx)(g.q,{width:"100%",variant:"secondary",mt:"24px",onClick:S,children:u("Transfer")})]}),Object(W.jsxs)(g.w,{p:"0",children:[Object(W.jsx)(te,{width:"100%",endIcon:Object(W.jsx)(v,{width:"24px",color:"primary"}),onClick:k,children:u("Details")}),b&&Object(W.jsx)(ne,{children:Object(W.jsx)(g.Pb,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:u(m)})})]})]})},re=v.e.div(p||(p=Object(h.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),ie=n(12),ae=n(94),se=function(e){var t=e.nft,n=Object(ae.a)(e,["nft"]),c=Object(x.useState)(!1),r=Object(D.a)(c,2),i=r[0],a=r[1],s=Object(S.c)().account,o=Object(R.b)(),l=t.variationId;return Object(x.useEffect)((function(){s&&function(){var e=Object(A.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.methods.canClaimSingle(s,l).call();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,l,o,a]),Object(W.jsx)(ce,Object(ie.a)(Object(ie.a)({nft:t},n),{},{canClaim:i,onClaim:function(){return o.methods.mintNFT(l).send({from:s})}}))},oe={"easter-storm":1,"easter-flipper":2,"easter-caker":3},le=function(e){var t=e.nft,n=Object(ae.a)(e,["nft"]),c=Object(x.useState)(!1),r=Object(D.a)(c,2),i=r[0],a=r[1],s=Object(S.c)().account,o=Object(P.H)().profile,l=t.identifier,d=(null!==o&&void 0!==o?o:{}).team,b=Object(R.i)();return Object(x.useEffect)((function(){s&&d&&function(){var e=Object(A.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.methods.canClaim(s).call();case 2:t=e.sent,a(!!t&&d.id===oe[l]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,l,d,b,a]),Object(W.jsx)(ce,Object(ie.a)(Object(ie.a)({nft:t},n),{},{canClaim:i,onClaim:function(){return b.methods.mintNFT().send({from:s})}}))},de={hiccup:se,bullish:se,"easter-storm":le,"easter-flipper":le,"easter-caker":le},be=function(){var e=Object(P.l)().tokenIds,t=Object(F.b)(),n=Object(S.c)().account,c=function(){t(Object(T.b)(n))};return Object(W.jsx)(re,{children:y()(N.b,"sortOrder").map((function(t){var n,r=null!==(n=de[t.identifier])&&void 0!==n?n:ce;return Object(W.jsx)("div",{children:Object(W.jsx)(r,{nft:t,tokenIds:e[t.identifier],refresh:c})},t.name)}))})},je=v.e.div(m||(m=Object(h.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(w.b)().t;return Object(W.jsxs)(k.a,{children:[Object(W.jsx)(je,{children:Object(W.jsx)(g.S,{as:"h1",scale:"xxl",color:"secondary",children:e("Pancake Collectibles")})}),Object(W.jsx)(be,{})]})}}}]);
//# sourceMappingURL=16.acdfce1c.chunk.js.map
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2276],{2276:(e,t,n)=>{n.d(t,{C:()=>Le});var r=n(1504),o=n.t(r,2),l=n(7616),u=n(9648),i=n(7368),a=n(5948),c=n(1792),s=n(1403),d=n(1408),f=n(7384),p=n(4008),m=n(8512),v=n(4904),g=n(6803),h=n(5720),E=n(1892),w=n(6840);function y(e,t){let n=(0,r.useRef)([]),o=(0,m.y)(e);(0,r.useEffect)((()=>{let e=[...n.current];for(let[r,l]of t.entries())if(n.current[r]!==l){let r=o(t,e);return n.current=t,r}}),[o,...t])}var b=n(9208);var L=n(872);function T(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var P=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(P||{});let S=(0,u.op)((function(e,t){let n=(0,r.useRef)(null),o=(0,i.q)(n,t),{initialFocus:a,containers:c,features:s=30,...w}=e;(0,d.g)()||(s=1);let y=(0,h.o)(n);F({ownerDocument:y},Boolean(16&s));let L=M({ownerDocument:y,container:n,initialFocus:a},Boolean(2&s));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=(0,g.E)();(0,E.K)(null==e?void 0:e.defaultView,"focus",(e=>{if(!o||!l.current)return;let u=T(n);t.current instanceof HTMLElement&&u.add(t.current);let i=r.current;if(!i)return;let a=e.target;a&&a instanceof HTMLElement?D(u,a)?(r.current=a,(0,p.vL)(a)):(e.preventDefault(),e.stopPropagation(),(0,p.vL)(i)):(0,p.vL)(r.current)}),!0)}({ownerDocument:y,container:n,containers:c,previousActiveElement:L},Boolean(8&s));let P=(0,v.Y)(),S=(0,m.y)((e=>{let t=n.current;t&&(0,l._)(P.current,{[v.w.Forwards]:()=>{(0,p.iZ)(t,p.O8.First,{skipElements:[e.relatedTarget]})},[v.w.Backwards]:()=>{(0,p.iZ)(t,p.O8.Last,{skipElements:[e.relatedTarget]})}})})),C=(0,b.S)(),O=(0,r.useRef)(!1),A={ref:o,onKeyDown(e){"Tab"==e.key&&(O.current=!0,C.requestAnimationFrame((()=>{O.current=!1})))},onBlur(e){let t=T(c);n.current instanceof HTMLElement&&t.add(n.current);let r=e.relatedTarget;r instanceof HTMLElement&&"true"!==r.dataset.headlessuiFocusGuard&&(D(t,r)||(O.current?(0,p.iZ)(n.current,(0,l._)(P.current,{[v.w.Forwards]:()=>p.O8.Next,[v.w.Backwards]:()=>p.O8.Previous})|p.O8.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&(0,p.vL)(e.target)))}};return r.createElement(r.Fragment,null,Boolean(4&s)&&r.createElement(f._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:S,features:f.B.Focusable}),(0,u.ai)({ourProps:A,theirProps:w,defaultTag:"div",name:"FocusTrap"}),Boolean(4&s)&&r.createElement(f._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:S,features:f.B.Focusable}))})),C=Object.assign(S,{features:P}),O=[];function F({ownerDocument:e},t){let n=function(e=!0){let t=(0,r.useRef)(O.slice());return y((([e],[n])=>{!0===n&&!1===e&&(0,w.y)((()=>{t.current.splice(0)})),!1===n&&!0===e&&(t.current=O.slice())}),[e,O,t]),(0,m.y)((()=>{var e;return null!=(e=t.current.find((e=>null!=e&&e.isConnected)))?e:null}))}(t);y((()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&(0,p.vL)(n())}),[t]),(0,L.g)((()=>{t&&(0,p.vL)(n())}))}function M({ownerDocument:e,container:t,initialFocus:n},o){let l=(0,r.useRef)(null),u=(0,g.E)();return y((()=>{if(!o)return;let r=t.current;r&&(0,w.y)((()=>{if(!u.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t)return void(l.current=t)}else if(r.contains(t))return void(l.current=t);null!=n&&n.current?(0,p.vL)(n.current):(0,p.iZ)(r,p.O8.First)===p._I.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=null==e?void 0:e.activeElement}))}),[o]),l}function D(e,t){for(let n of e)if(n.contains(t))return!0;return!1}!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}((()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&O[0]!==e.target&&(O.unshift(e.target),O=O.filter((e=>null!=e&&e.isConnected)),O.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}));var A=n(824),R=n(4308),k=n(1423);let x=(0,r.createContext)(null);function N(){let e=(0,r.useContext)(x);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,N),e}return e}let I=(0,u.op)((function(e,t){let n=(0,s.I)(),{id:r=`headlessui-description-${n}`,...o}=e,l=N(),a=(0,i.q)(t);(0,k.m)((()=>l.register(r)),[r,l.register]);let c={ref:a,...l.props,id:r};return(0,u.ai)({ourProps:c,theirProps:o,slot:l.slot||{},defaultTag:"p",name:l.name||"Description"})})),_=Object.assign(I,{});var B=n(7168);let H=(0,r.createContext)((()=>{}));H.displayName="StackContext";var q,W=((q=W||{})[q.Add=0]="Add",q[q.Remove=1]="Remove",q);function U({children:e,onUpdate:t,type:n,element:o,enabled:l}){let u=(0,r.useContext)(H),i=(0,m.y)(((...e)=>{null==t||t(...e),u(...e)}));return(0,k.m)((()=>{let e=void 0===l||!0===l;return e&&i(0,n,o),()=>{e&&i(1,n,o)}}),[i,n,o,l]),r.createElement(H.Provider,{value:i},e)}var $=n(4560);const G="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:j,useEffect:K,useLayoutEffect:V,useDebugValue:Y}=o;function Z(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!G(n,e)}catch{return!0}}const X=!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement)?function(e,t,n){return t()}:function(e,t,n){const r=t(),[{inst:o},l]=j({inst:{value:r,getSnapshot:t}});return V((()=>{o.value=r,o.getSnapshot=t,Z(o)&&l({inst:o})}),[e,r,t]),K((()=>(Z(o)&&l({inst:o}),e((()=>{Z(o)&&l({inst:o})})))),[e]),Y(r),r},z=X;var J=n(3408);function Q(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=(null!=(n=t.defaultView)?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,l=e-o;n.style(r,"paddingRight",`${l}px`)}}}function ee(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function te(){if(!ee())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function o(e){return r.containers.flatMap((e=>e())).some((t=>t.contains(e)))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let l=null;n.addEventListener(t,"click",(e=>{if(e.target instanceof HTMLElement)try{let n=e.target.closest("a");if(!n)return;let{hash:r}=new URL(n.href),u=t.querySelector(r);u&&!o(u)&&(l=u)}catch{}}),!0),n.addEventListener(t,"touchmove",(e=>{e.target instanceof HTMLElement&&!o(e.target)&&e.preventDefault()}),{passive:!1}),n.add((()=>{window.scrollTo(0,window.pageYOffset+e),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)}))}}}function ne(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let re=function(e,t){let n=e(),r=new Set;return{getSnapshot:()=>n,subscribe:e=>(r.add(e),()=>r.delete(e)),dispatch(e,...o){let l=t[e].call(n,...o);l&&(n=l,r.forEach((e=>e())))}}}((()=>new Map),{PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:(0,J.O)(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:ne(n)},o=[te(),Q(),{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];o.forEach((({before:e})=>null==e?void 0:e(r))),o.forEach((({after:e})=>null==e?void 0:e(r)))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});function oe(e,t,n){let r=function(e){return z(e.subscribe,e.getSnapshot,e.getSnapshot)}(re),o=e?r.get(e):void 0,l=!!o&&o.count>0;return(0,k.m)((()=>{if(e&&t)return re.dispatch("PUSH",e,n),()=>re.dispatch("POP",e,n)}),[t,e]),l}re.subscribe((()=>{let e=re.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&re.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&re.dispatch("TEARDOWN",n)}}));let le=new Map,ue=new Map;function ie(e,t=!0){(0,k.m)((()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=ue.get(r))?n:0;return ue.set(r,o+1),0!==o||(le.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=ue.get(r))?e:1;if(1===t?ue.delete(r):ue.set(r,t-1),1!==t)return;let n=le.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,le.delete(r))}}),[e,t])}var ae,ce=n(4224),se=((ae=se||{})[ae.Open=0]="Open",ae[ae.Closed=1]="Closed",ae),de=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(de||{});let fe={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},pe=(0,r.createContext)(null);function me(e){let t=(0,r.useContext)(pe);if(null===t){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,me),t}return t}function ve(e,t){return(0,l._)(t.type,fe,e,t)}pe.displayName="DialogContext";let ge=u.B4.RenderStrategy|u.B4.Static;let he=(0,u.op)((function(e,t){var n;let o=(0,s.I)(),{id:c=`headlessui-dialog-${o}`,open:f,onClose:p,initialFocus:v,__demoMode:g=!1,...w}=e,[y,b]=(0,r.useState)(0),L=(0,B.qc)();void 0===f&&null!==L&&(f=(L&B.Ad.Open)===B.Ad.Open);let T=(0,r.useRef)(null),P=(0,i.q)(T,t),S=(0,h.o)(T),O=e.hasOwnProperty("open")||null!==L,F=e.hasOwnProperty("onClose");if(!O&&!F)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!O)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!F)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof f)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f}`);if("function"!=typeof p)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${p}`);let M=f?0:1,[D,k]=(0,r.useReducer)(ve,{titleId:null,descriptionId:null,panelRef:(0,r.createRef)()}),N=(0,m.y)((()=>p(!1))),I=(0,m.y)((e=>k({type:0,id:e}))),_=!!(0,d.g)()&&(!g&&0===M),H=y>1,q=null!==(0,r.useContext)(pe),[G,j]=(0,A.M)(),{resolveContainers:K,mainTreeNodeRef:V,MainTreeNode:Y}=(0,ce.G)({portals:G,defaultContainers:[null!=(n=D.panelRef.current)?n:T.current]}),Z=H?"parent":"leaf",X=null!==L&&(L&B.Ad.Closing)===B.Ad.Closing,z=!q&&!X&&_,J=(0,r.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==S?void 0:S.querySelectorAll("body > *"))?e:[]).find((e=>"headlessui-portal-root"!==e.id&&(e.contains(V.current)&&e instanceof HTMLElement))))?t:null}),[V]);ie(J,z);let Q=!!H||_,ee=(0,r.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==S?void 0:S.querySelectorAll("[data-headlessui-portal]"))?e:[]).find((e=>e.contains(V.current)&&e instanceof HTMLElement)))?t:null}),[V]);ie(ee,Q);let te=!(!_||H);(0,$.c)(K,N,te);let ne=!(H||0!==M);(0,E.K)(null==S?void 0:S.defaultView,"keydown",(e=>{ne&&(e.defaultPrevented||e.key===a.g.Escape&&(e.preventDefault(),e.stopPropagation(),N()))})),function(e,t,n=(()=>[document.body])){oe(e,t,(e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}}))}(S,!(X||0!==M||q),K),(0,r.useEffect)((()=>{if(0!==M||!T.current)return;let e=new ResizeObserver((e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&N()}}));return e.observe(T.current),()=>e.disconnect()}),[M,T,N]);let[re,le]=function(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=(0,m.y)((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(x.Provider,{value:o},e.children)}),[t])]}(),ue=(0,r.useMemo)((()=>[{dialogState:M,close:N,setTitleId:I},D]),[M,D,N,I]),ae=(0,r.useMemo)((()=>({open:0===M})),[M]),se={ref:P,id:c,role:"dialog","aria-modal":0===M||void 0,"aria-labelledby":D.titleId,"aria-describedby":re};return r.createElement(U,{type:"Dialog",enabled:0===M,element:T,onUpdate:(0,m.y)(((e,t)=>{"Dialog"===t&&(0,l._)(e,{[W.Add]:()=>b((e=>e+1)),[W.Remove]:()=>b((e=>e-1))})}))},r.createElement(R.o,{force:!0},r.createElement(A.a,null,r.createElement(pe.Provider,{value:ue},r.createElement(A.a.Group,{target:T},r.createElement(R.o,{force:!1},r.createElement(le,{slot:ae,name:"Dialog.Description"},r.createElement(C,{initialFocus:v,containers:K,features:_?(0,l._)(Z,{parent:C.features.RestoreFocus,leaf:C.features.All&~C.features.FocusLock}):C.features.None},r.createElement(j,null,(0,u.ai)({ourProps:se,theirProps:w,slot:ae,defaultTag:"div",features:ge,visible:0===M,name:"Dialog"}))))))))),r.createElement(Y,null))})),Ee=(0,u.op)((function(e,t){let n=(0,s.I)(),{id:o=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:a},c]=me("Dialog.Backdrop"),d=(0,i.q)(t);(0,r.useEffect)((()=>{if(null===c.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[c.panelRef]);let f=(0,r.useMemo)((()=>({open:0===a})),[a]);return r.createElement(R.o,{force:!0},r.createElement(A.a,null,(0,u.ai)({ourProps:{ref:d,id:o,"aria-hidden":!0},theirProps:l,slot:f,defaultTag:"div",name:"Dialog.Backdrop"})))})),we=(0,u.op)((function(e,t){let n=(0,s.I)(),{id:o=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:a},c]=me("Dialog.Panel"),d=(0,i.q)(t,c.panelRef),f=(0,r.useMemo)((()=>({open:0===a})),[a]),p=(0,m.y)((e=>{e.stopPropagation()}));return(0,u.ai)({ourProps:{ref:d,id:o,onClick:p},theirProps:l,slot:f,defaultTag:"div",name:"Dialog.Panel"})})),ye=(0,u.op)((function(e,t){let n=(0,s.I)(),{id:o=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:a,close:d}]=me("Dialog.Overlay"),f=(0,i.q)(t),p=(0,m.y)((e=>{if(e.target===e.currentTarget){if((0,c.g)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),d()}})),v=(0,r.useMemo)((()=>({open:0===a})),[a]);return(0,u.ai)({ourProps:{ref:f,id:o,"aria-hidden":!0,onClick:p},theirProps:l,slot:v,defaultTag:"div",name:"Dialog.Overlay"})})),be=(0,u.op)((function(e,t){let n=(0,s.I)(),{id:o=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:a,setTitleId:c}]=me("Dialog.Title"),d=(0,i.q)(t);(0,r.useEffect)((()=>(c(o),()=>c(null))),[o,c]);let f=(0,r.useMemo)((()=>({open:0===a})),[a]);return(0,u.ai)({ourProps:{ref:d,id:o},theirProps:l,slot:f,defaultTag:"h2",name:"Dialog.Title"})})),Le=Object.assign(he,{Backdrop:Ee,Panel:we,Overlay:ye,Title:be,Description:_})},824:(e,t,n)=>{n.d(t,{M:()=>E,a:()=>b});var r=n(1504),o=n(7104),l=n(9648),u=n(1423),i=n(4308),a=n(1408),c=n(7368),s=n(872),d=n(5720),f=n(168),p=n(8512);let m=r.Fragment;let v=r.Fragment,g=(0,r.createContext)(null);let h=(0,r.createContext)(null);function E(){let e=(0,r.useContext)(h),t=(0,r.useRef)([]),n=(0,p.y)((n=>(t.current.push(n),e&&e.register(n),()=>o(n)))),o=(0,p.y)((n=>{let r=t.current.indexOf(n);-1!==r&&t.current.splice(r,1),e&&e.unregister(n)})),l=(0,r.useMemo)((()=>({register:n,unregister:o,portals:t})),[n,o,t]);return[t,(0,r.useMemo)((()=>function({children:e}){return r.createElement(h.Provider,{value:l},e)}),[l])]}let w=(0,l.op)((function(e,t){let n=e,p=(0,r.useRef)(null),v=(0,c.q)((0,c.s)((e=>{p.current=e})),t),E=(0,d.o)(p),w=function(e){let t=(0,i.U)(),n=(0,r.useContext)(g),o=(0,d.o)(e),[l,u]=(0,r.useState)((()=>{if(!t&&null!==n||f._.isServer)return null;let e=null==o?void 0:o.getElementById("headlessui-portal-root");if(e)return e;if(null===o)return null;let r=o.createElement("div");return r.setAttribute("id","headlessui-portal-root"),o.body.appendChild(r)}));return(0,r.useEffect)((()=>{null!==l&&(null!=o&&o.body.contains(l)||null==o||o.body.appendChild(l))}),[l,o]),(0,r.useEffect)((()=>{t||null!==n&&u(n.current)}),[n,u,t]),l}(p),[y]=(0,r.useState)((()=>{var e;return f._.isServer?null:null!=(e=null==E?void 0:E.createElement("div"))?e:null})),b=(0,r.useContext)(h),L=(0,a.g)();return(0,u.m)((()=>{!w||!y||w.contains(y)||(y.setAttribute("data-headlessui-portal",""),w.appendChild(y))}),[w,y]),(0,u.m)((()=>{if(y&&b)return b.register(y)}),[b,y]),(0,s.g)((()=>{var e;!w||!y||(y instanceof Node&&w.contains(y)&&w.removeChild(y),w.childNodes.length<=0&&(null==(e=w.parentElement)||e.removeChild(w)))})),L&&w&&y?(0,o.createPortal)((0,l.ai)({ourProps:{ref:v},theirProps:n,defaultTag:m,name:"Portal"}),y):null})),y=(0,l.op)((function(e,t){let{target:n,...o}=e,u={ref:(0,c.q)(t)};return r.createElement(g.Provider,{value:n},(0,l.ai)({ourProps:u,theirProps:o,defaultTag:v,name:"Popover.Group"}))})),b=Object.assign(w,{Group:y})},1892:(e,t,n)=>{n.d(t,{K:()=>l});var r=n(1504),o=n(5884);function l(e,t,n,l){let u=(0,o.s)(n);(0,r.useEffect)((()=>{function n(e){u.current(e)}return(e=null!=e?e:window).addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}),[e,t,l])}},872:(e,t,n)=>{n.d(t,{g:()=>u});var r=n(1504),o=n(6840),l=n(8512);function u(e){let t=(0,l.y)(e),n=(0,r.useRef)(!1);(0,r.useEffect)((()=>(n.current=!1,()=>{n.current=!0,(0,o.y)((()=>{n.current&&t()}))})),[t])}},4560:(e,t,n)=>{n.d(t,{c:()=>a});var r=n(1504),o=n(4008),l=n(5884);function u(e,t,n){let o=(0,l.s)(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}var i=n(9788);function a(e,t,n=!0){let l=(0,r.useRef)(!1);function a(n,r){if(!l.current||n.defaultPrevented)return;let u=r(n);if(null===u||!u.getRootNode().contains(u))return;let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e);for(let e of i){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(u)||n.composed&&n.composedPath().includes(t))return}return!(0,o.qw)(u,o.ye.Loose)&&-1!==u.tabIndex&&n.preventDefault(),t(n,u)}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{l.current=n}))}),[n]);let c=(0,r.useRef)(null);u("mousedown",(e=>{var t,n;l.current&&(c.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),u("click",(e=>{c.current&&(a(e,(()=>c.current)),c.current=null)}),!0),(0,i.A)("blur",(e=>a(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}},5720:(e,t,n)=>{n.d(t,{o:()=>l});var r=n(1504),o=n(2448);function l(...e){return(0,r.useMemo)((()=>(0,o.e)(...e)),[...e])}},4224:(e,t,n)=>{n.d(t,{G:()=>i});var r=n(1504),o=n(7384),l=n(8512),u=n(5720);function i({defaultContainers:e=[],portals:t}={}){let n=(0,r.useRef)(null),i=(0,u.o)(n),a=(0,l.y)((()=>{var r;let o=[];for(let t of e)null!==t&&(t instanceof HTMLElement?o.push(t):"current"in t&&t.current instanceof HTMLElement&&o.push(t.current));if(null!=t&&t.current)for(let e of t.current)o.push(e);for(let e of null!=(r=null==i?void 0:i.querySelectorAll("html > *, body > *"))?r:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(n.current)||o.some((t=>e.contains(t)))||o.push(e));return o}));return{resolveContainers:a,contains:(0,l.y)((e=>a().some((t=>t.contains(e))))),mainTreeNodeRef:n,MainTreeNode:(0,r.useMemo)((()=>function(){return r.createElement(o._,{features:o.B.Hidden,ref:n})}),[n])}}},4904:(e,t,n)=>{n.d(t,{Y:()=>i,w:()=>u});var r,o=n(1504),l=n(9788),u=((r=u||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function i(){let e=(0,o.useRef)(0);return(0,l.A)("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}},9788:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(1504),o=n(5884);function l(e,t,n){let l=(0,o.s)(t);(0,r.useEffect)((()=>{function t(e){l.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}},7384:(e,t,n)=>{n.d(t,{B:()=>l,_:()=>u});var r=n(9648);var o,l=((o=l||{})[o.None=1]="None",o[o.Focusable=2]="Focusable",o[o.Hidden=4]="Hidden",o);let u=(0,r.op)((function(e,t){let{features:n=1,...o}=e,l={ref:t,"aria-hidden":2==(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}};return(0,r.ai)({ourProps:l,theirProps:o,slot:{},defaultTag:"div",name:"Hidden"})}))},4308:(e,t,n)=>{n.d(t,{U:()=>l,o:()=>u});var r=n(1504);let o=(0,r.createContext)(!1);function l(){return(0,r.useContext)(o)}function u(e){return r.createElement(o.Provider,{value:e.force},e.children)}},4008:(e,t,n)=>{n.d(t,{GS:()=>y,O8:()=>s,Uq:()=>b,_I:()=>d,iZ:()=>L,mm:()=>g,qw:()=>v,vL:()=>E,y6:()=>p,ye:()=>m});var r=n(3408),o=n(7616),l=n(2448);let u=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var i,a,c,s=((c=s||{})[c.First=1]="First",c[c.Previous=2]="Previous",c[c.Next=4]="Next",c[c.Last=8]="Last",c[c.WrapAround=16]="WrapAround",c[c.NoScroll=32]="NoScroll",c),d=((a=d||{})[a.Error=0]="Error",a[a.Overflow=1]="Overflow",a[a.Success=2]="Success",a[a.Underflow=3]="Underflow",a),f=((i=f||{})[i.Previous=-1]="Previous",i[i.Next=1]="Next",i);function p(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(u)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var m=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(m||{});function v(e,t=0){var n;return e!==(null==(n=(0,l.e)(e))?void 0:n.body)&&(0,o._)(t,{0:()=>e.matches(u),1(){let t=e;for(;null!==t;){if(t.matches(u))return!0;t=t.parentElement}return!1}})}function g(e){let t=(0,l.e)(e);(0,r.O)().nextFrame((()=>{t&&!v(t.activeElement,0)&&E(e)}))}var h=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(h||{});function E(e){null==e||e.focus({preventScroll:!0})}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",(e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")}),!0),document.addEventListener("click",(e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")}),!0));let w=["textarea","input"].join(",");function y(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function b(e,t){return L(p(),t,{relativeTo:e})}function L(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,u=Array.isArray(e)?n?y(e):e:p(e);o.length>0&&u.length>1&&(u=u.filter((e=>!o.includes(e)))),r=null!=r?r:l.activeElement;let i,a=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,u.indexOf(r))-1;if(4&t)return Math.max(0,u.indexOf(r))+1;if(8&t)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=32&t?{preventScroll:!0}:{},d=0,f=u.length;do{if(d>=f||d+f<=0)return 0;let e=c+d;if(16&t)e=(e+f)%f;else{if(e<0)return 3;if(e>=f)return 1}i=u[e],null==i||i.focus(s),d+=a}while(i!==l.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,w))&&n}(i)&&i.select(),2}}}]);
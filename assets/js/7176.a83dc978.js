"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7176],{7652:(e,t,r)=>{r.d(t,{_:()=>a});var n=r(1504);function a(e){var t=e.isOpen,r=e.onOpen,a=e.onClose,o=e.onInput,i=e.searchButtonRef;n.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key.toLowerCase()&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,r=t.tagName;return t.isContentEditable||"INPUT"===r||"SELECT"===r||"TEXTAREA"===r}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||r()),i&&i.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,r,a,o,i])}},9500:(e,t,r)=>{r.d(t,{Y:()=>l,a:()=>s});var n=r(1504),a=r(9936),o=r(9016);const i="q";function s(){return(0,o.E9)(i)}function l(){const{siteConfig:{baseUrl:e,themeConfig:t}}=(0,a.c)(),{algolia:{searchPagePath:r}}=t;return(0,n.useCallback)((t=>`${e}${r}?${i}=${encodeURIComponent(t)}`),[e,r])}},3928:(e,t,r)=>{function n(e,t){return void 0!==e&&void 0!==t&&new RegExp(e,"gi").test(t)}r.d(t,{_:()=>n})},9488:(e,t,r)=>{r.d(t,{Q:()=>a});var n=r(4559);function a(){const{locale:e,tags:t}=(0,n.mY)();return[`language:${e}`,t.map((e=>`docusaurus_tag:${e}`))]}},3800:(e,t,r)=>{r.d(t,{E:()=>a});var n=r(9936);function a(){const{siteConfig:{themeConfig:e}}=(0,n.c)();return e}},1088:(e,t,r)=>{r.d(t,{Q:()=>s});var n=r(1504),a=r(3928),o=r(1080),i=r(3800);function s(){const{withBaseUrl:e}=(0,o.E)(),{algolia:{externalUrlRegex:t,replaceSearchResultPathname:r}}=(0,i.E)();return(0,n.useCallback)((n=>{const o=new URL(n);if((0,a._)(t,o.href))return n;const i=`${o.pathname+o.hash}`;return e(function(e,t){return t?e.replaceAll(new RegExp(t.from,"g"),t.to):e}(i,r))}),[e,t,r])}},3796:(e,t,r)=>{r.d(t,{c:()=>a});var n=r(3652);const a={button:{buttonText:(0,n.G)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"}),buttonAriaLabel:(0,n.G)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"})},modal:{searchBox:{resetButtonTitle:(0,n.G)({id:"theme.SearchModal.searchBox.resetButtonTitle",message:"Clear the query",description:"The label and ARIA label for search box reset button"}),resetButtonAriaLabel:(0,n.G)({id:"theme.SearchModal.searchBox.resetButtonTitle",message:"Clear the query",description:"The label and ARIA label for search box reset button"}),cancelButtonText:(0,n.G)({id:"theme.SearchModal.searchBox.cancelButtonText",message:"Cancel",description:"The label and ARIA label for search box cancel button"}),cancelButtonAriaLabel:(0,n.G)({id:"theme.SearchModal.searchBox.cancelButtonText",message:"Cancel",description:"The label and ARIA label for search box cancel button"})},startScreen:{recentSearchesTitle:(0,n.G)({id:"theme.SearchModal.startScreen.recentSearchesTitle",message:"Recent",description:"The title for recent searches"}),noRecentSearchesText:(0,n.G)({id:"theme.SearchModal.startScreen.noRecentSearchesText",message:"No recent searches",description:"The text when no recent searches"}),saveRecentSearchButtonTitle:(0,n.G)({id:"theme.SearchModal.startScreen.saveRecentSearchButtonTitle",message:"Save this search",description:"The label for save recent search button"}),removeRecentSearchButtonTitle:(0,n.G)({id:"theme.SearchModal.startScreen.removeRecentSearchButtonTitle",message:"Remove this search from history",description:"The label for remove recent search button"}),favoriteSearchesTitle:(0,n.G)({id:"theme.SearchModal.startScreen.favoriteSearchesTitle",message:"Favorite",description:"The title for favorite searches"}),removeFavoriteSearchButtonTitle:(0,n.G)({id:"theme.SearchModal.startScreen.removeFavoriteSearchButtonTitle",message:"Remove this search from favorites",description:"The label for remove favorite search button"})},errorScreen:{titleText:(0,n.G)({id:"theme.SearchModal.errorScreen.titleText",message:"Unable to fetch results",description:"The title for error screen of search modal"}),helpText:(0,n.G)({id:"theme.SearchModal.errorScreen.helpText",message:"You might want to check your network connection.",description:"The help text for error screen of search modal"})},footer:{selectText:(0,n.G)({id:"theme.SearchModal.footer.selectText",message:"to select",description:"The explanatory text of the action for the enter key"}),selectKeyAriaLabel:(0,n.G)({id:"theme.SearchModal.footer.selectKeyAriaLabel",message:"Enter key",description:"The ARIA label for the Enter key button that makes the selection"}),navigateText:(0,n.G)({id:"theme.SearchModal.footer.navigateText",message:"to navigate",description:"The explanatory text of the action for the Arrow up and Arrow down key"}),navigateUpKeyAriaLabel:(0,n.G)({id:"theme.SearchModal.footer.navigateUpKeyAriaLabel",message:"Arrow up",description:"The ARIA label for the Arrow up key button that makes the navigation"}),navigateDownKeyAriaLabel:(0,n.G)({id:"theme.SearchModal.footer.navigateDownKeyAriaLabel",message:"Arrow down",description:"The ARIA label for the Arrow down key button that makes the navigation"}),closeText:(0,n.G)({id:"theme.SearchModal.footer.closeText",message:"to close",description:"The explanatory text of the action for Escape key"}),closeKeyAriaLabel:(0,n.G)({id:"theme.SearchModal.footer.closeKeyAriaLabel",message:"Escape key",description:"The ARIA label for the Escape key button that close the modal"}),searchByText:(0,n.G)({id:"theme.SearchModal.footer.searchByText",message:"Search by",description:"The text explain that the search is making by Algolia"})},noResultsScreen:{noResultsText:(0,n.G)({id:"theme.SearchModal.noResultsScreen.noResultsText",message:"No results for",description:"The text explains that there are no results for the following search"}),suggestedQueryText:(0,n.G)({id:"theme.SearchModal.noResultsScreen.suggestedQueryText",message:"Try searching for",description:"The text for the suggested query when no results are found for the following search"}),reportMissingResultsText:(0,n.G)({id:"theme.SearchModal.noResultsScreen.reportMissingResultsText",message:"Believe this query should return results?",description:"The text for the question where the user thinks there are missing results"}),reportMissingResultsLinkText:(0,n.G)({id:"theme.SearchModal.noResultsScreen.reportMissingResultsLinkText",message:"Let us know.",description:"The text for the link to report missing results"})}},placeholder:(0,n.G)({id:"theme.SearchModal.placeholder",message:"Search docs",description:"The placeholder of the input of the DocSearch pop-up modal"})}},8484:(e,t,r)=>{r.d(t,{i:()=>$});var n=r(1504),a=r(7616),o=r(9648),i=r(3408),s=r(9208),l=r(1423),c=r(7368),u=r(1403),d=r(5948);var h,m=((h=m||{})[h.First=0]="First",h[h.Previous=1]="Previous",h[h.Next=2]="Next",h[h.Last=3]="Last",h[h.Specific=4]="Specific",h[h.Nothing=5]="Nothing",h);function f(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),a=null!=n?n:-1,o=(()=>{switch(e.focus){case 0:return r.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=r.slice().reverse().findIndex(((e,r,n)=>!(-1!==a&&n.length-r-1>=a)&&!t.resolveDisabled(e)));return-1===e?e:r.length-1-e}case 2:return r.findIndex(((e,r)=>!(r<=a)&&!t.resolveDisabled(e)));case 3:{let e=r.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:r.length-1-e}case 4:return r.findIndex((r=>t.resolveId(r)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===o?n:o}var p=r(1792),v=r(4008),g=r(4560),y=r(2448);var b=r(7168),x=r(3048),S=r(5720),T=r(8512);function I(e){return[e.screenX,e.screenY]}function R(){let e=(0,n.useRef)([-1,-1]);return{wasMoved(t){let r=I(t);return(e.current[0]!==r[0]||e.current[1]!==r[1])&&(e.current=r,!0)},update(t){e.current=I(t)}}}let A=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function M(e){var t,r;let n=null!=(t=e.innerText)?t:"",a=e.cloneNode(!0);if(!(a instanceof HTMLElement))return n;let o=!1;for(let s of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))s.remove(),o=!0;let i=o?null!=(r=a.innerText)?r:"":n;return A.test(i)&&(i=i.replace(A,"")),i}function w(e){let t=(0,n.useRef)(""),r=(0,n.useRef)("");return(0,T.y)((()=>{let n=e.current;if(!n)return"";let a=n.innerText;if(t.current===a)return r.current;let o=function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let e=r.split(" ").map((e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():M(t).trim()}return null})).filter(Boolean);if(e.length>0)return e.join(", ")}return M(e).trim()}(n).trim().toLowerCase();return t.current=a,r.current=o,o}))}var k,E=((k=E||{})[k.Open=0]="Open",k[k.Closed=1]="Closed",k),D=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(D||{}),C=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(C||{});function F(e,t=(e=>e)){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,v.GS)(t(e.items.slice()),(e=>e.dataRef.current.domRef.current)),a=r?n.indexOf(r):null;return-1===a&&(a=null),{items:n,activeItemIndex:a}}let P={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,__demoMode:!1,menuState:0},2:(e,t)=>{var r;let n=F(e),a=f(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:a,activationTrigger:null!=(r=t.trigger)?r:1}},3:(e,t)=>{let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),a=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find((e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled})),o=a?e.items.indexOf(a):-1;return-1===o||o===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:o,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let r=F(e,(e=>[...e,{id:t.id,dataRef:t.dataRef}]));return{...e,...r}},6:(e,t)=>{let r=F(e,(e=>{let r=e.findIndex((e=>e.id===t.id));return-1!==r&&e.splice(r,1),e}));return{...e,...r,activationTrigger:1}}},L=(0,n.createContext)(null);function B(e){let t=(0,n.useContext)(L);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,B),t}return t}function G(e,t){return(0,a._)(t.type,P,e,t)}L.displayName="MenuContext";let N=n.Fragment;let O=o.B4.RenderStrategy|o.B4.Static;let _=n.Fragment;let U=(0,o.op)((function(e,t){let{__demoMode:r=!1,...i}=e,s=(0,n.useReducer)(G,{__demoMode:r,menuState:r?0:1,buttonRef:(0,n.createRef)(),itemsRef:(0,n.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:l,itemsRef:u,buttonRef:d},h]=s,m=(0,c.q)(t);(0,g.c)([d,u],((e,t)=>{var r;h({type:1}),(0,v.qw)(t,v.ye.Loose)||(e.preventDefault(),null==(r=d.current)||r.focus())}),0===l);let f=(0,T.y)((()=>{h({type:1})})),p=(0,n.useMemo)((()=>({open:0===l,close:f})),[l,f]),y={ref:m};return n.createElement(L.Provider,{value:s},n.createElement(b.uR,{value:(0,a._)(l,{0:b.Ad.Open,1:b.Ad.Closed})},(0,o.ai)({ourProps:y,theirProps:i,slot:p,defaultTag:N,name:"Menu"})))})),K=(0,o.op)((function(e,t){var r;let a=(0,u.I)(),{id:i=`headlessui-menu-button-${a}`,...l}=e,[h,f]=B("Menu.Button"),v=(0,c.q)(h.buttonRef,t),g=(0,s.S)(),y=(0,T.y)((e=>{switch(e.key){case d.g.Space:case d.g.Enter:case d.g.ArrowDown:e.preventDefault(),e.stopPropagation(),f({type:0}),g.nextFrame((()=>f({type:2,focus:m.First})));break;case d.g.ArrowUp:e.preventDefault(),e.stopPropagation(),f({type:0}),g.nextFrame((()=>f({type:2,focus:m.Last})))}})),b=(0,T.y)((e=>{if(e.key===d.g.Space)e.preventDefault()})),S=(0,T.y)((t=>{if((0,p.g)(t.currentTarget))return t.preventDefault();e.disabled||(0===h.menuState?(f({type:1}),g.nextFrame((()=>{var e;return null==(e=h.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),f({type:0})))})),I=(0,n.useMemo)((()=>({open:0===h.menuState})),[h]),R={ref:v,id:i,type:(0,x.y)(e,h.buttonRef),"aria-haspopup":"menu","aria-controls":null==(r=h.itemsRef.current)?void 0:r.id,"aria-expanded":e.disabled?void 0:0===h.menuState,onKeyDown:y,onKeyUp:b,onClick:S};return(0,o.ai)({ourProps:R,theirProps:l,slot:I,defaultTag:"button",name:"Menu.Button"})})),q=(0,o.op)((function(e,t){var r,a;let h=(0,u.I)(),{id:f=`headlessui-menu-items-${h}`,...p}=e,[g,x]=B("Menu.Items"),I=(0,c.q)(g.itemsRef,t),R=(0,S.o)(g.itemsRef),A=(0,s.S)(),M=(0,b.qc)(),w=null!==M?(M&b.Ad.Open)===b.Ad.Open:0===g.menuState;(0,n.useEffect)((()=>{let e=g.itemsRef.current;e&&0===g.menuState&&e!==(null==R?void 0:R.activeElement)&&e.focus({preventScroll:!0})}),[g.menuState,g.itemsRef,R]),function({container:e,accept:t,walk:r,enabled:a=!0}){let o=(0,n.useRef)(t),i=(0,n.useRef)(r);(0,n.useEffect)((()=>{o.current=t,i.current=r}),[t,r]),(0,l.m)((()=>{if(!e||!a)return;let t=(0,y.e)(e);if(!t)return;let r=o.current,n=i.current,s=Object.assign((e=>r(e)),{acceptNode:r}),l=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s,!1);for(;l.nextNode();)n(l.currentNode)}),[e,a,o,i])}({container:g.itemsRef.current,enabled:0===g.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let k=(0,T.y)((e=>{var t,r;switch(A.dispose(),e.key){case d.g.Space:if(""!==g.searchQuery)return e.preventDefault(),e.stopPropagation(),x({type:3,value:e.key});case d.g.Enter:if(e.preventDefault(),e.stopPropagation(),x({type:1}),null!==g.activeItemIndex){let{dataRef:e}=g.items[g.activeItemIndex];null==(r=null==(t=e.current)?void 0:t.domRef.current)||r.click()}(0,v.mm)(g.buttonRef.current);break;case d.g.ArrowDown:return e.preventDefault(),e.stopPropagation(),x({type:2,focus:m.Next});case d.g.ArrowUp:return e.preventDefault(),e.stopPropagation(),x({type:2,focus:m.Previous});case d.g.Home:case d.g.PageUp:return e.preventDefault(),e.stopPropagation(),x({type:2,focus:m.First});case d.g.End:case d.g.PageDown:return e.preventDefault(),e.stopPropagation(),x({type:2,focus:m.Last});case d.g.Escape:e.preventDefault(),e.stopPropagation(),x({type:1}),(0,i.O)().nextFrame((()=>{var e;return null==(e=g.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case d.g.Tab:e.preventDefault(),e.stopPropagation(),x({type:1}),(0,i.O)().nextFrame((()=>{(0,v.Uq)(g.buttonRef.current,e.shiftKey?v.O8.Previous:v.O8.Next)}));break;default:1===e.key.length&&(x({type:3,value:e.key}),A.setTimeout((()=>x({type:4})),350))}})),E=(0,T.y)((e=>{if(e.key===d.g.Space)e.preventDefault()})),D=(0,n.useMemo)((()=>({open:0===g.menuState})),[g]),C={"aria-activedescendant":null===g.activeItemIndex||null==(r=g.items[g.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(a=g.buttonRef.current)?void 0:a.id,id:f,onKeyDown:k,onKeyUp:E,role:"menu",tabIndex:0,ref:I};return(0,o.ai)({ourProps:C,theirProps:p,slot:D,defaultTag:"div",features:O,visible:w,name:"Menu.Items"})})),Q=(0,o.op)((function(e,t){let r=(0,u.I)(),{id:a=`headlessui-menu-item-${r}`,disabled:s=!1,...d}=e,[h,f]=B("Menu.Item"),p=null!==h.activeItemIndex&&h.items[h.activeItemIndex].id===a,g=(0,n.useRef)(null),y=(0,c.q)(t,g);(0,l.m)((()=>{if(h.__demoMode||0!==h.menuState||!p||0===h.activationTrigger)return;let e=(0,i.O)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=g.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[h.__demoMode,g,p,h.menuState,h.activationTrigger,h.activeItemIndex]);let b=w(g),x=(0,n.useRef)({disabled:s,domRef:g,get textValue(){return b()}});(0,l.m)((()=>{x.current.disabled=s}),[x,s]),(0,l.m)((()=>(f({type:5,id:a,dataRef:x}),()=>f({type:6,id:a}))),[x,a]);let S=(0,T.y)((()=>{f({type:1})})),I=(0,T.y)((e=>{if(s)return e.preventDefault();f({type:1}),(0,v.mm)(h.buttonRef.current)})),A=(0,T.y)((()=>{if(s)return f({type:2,focus:m.Nothing});f({type:2,focus:m.Specific,id:a})})),M=R(),k=(0,T.y)((e=>M.update(e))),E=(0,T.y)((e=>{M.wasMoved(e)&&(s||p||f({type:2,focus:m.Specific,id:a,trigger:0}))})),D=(0,T.y)((e=>{M.wasMoved(e)&&(s||p&&f({type:2,focus:m.Nothing}))})),C=(0,n.useMemo)((()=>({active:p,disabled:s,close:S})),[p,s,S]);return(0,o.ai)({ourProps:{id:a,ref:y,role:"menuitem",tabIndex:!0===s?void 0:-1,"aria-disabled":!0===s||void 0,disabled:void 0,onClick:I,onFocus:A,onPointerEnter:k,onMouseEnter:k,onPointerMove:E,onMouseMove:E,onPointerLeave:D,onMouseLeave:D},theirProps:d,slot:C,defaultTag:_,name:"Menu.Item"})})),$=Object.assign(U,{Button:K,Items:q,Item:Q})}}]);
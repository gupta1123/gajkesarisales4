"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2217],{16044:function(e,t,r){r.d(t,{_v:function(){return h},aJ:function(){return f},pn:function(){return d},u:function(){return p}});var n=r(59499),o=r(4730),i=r(67294),a=r(66908),l=r(82359),s=r(85893),u=["className","sideOffset"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var d=a.zt,p=a.fC,f=a.xz,h=i.forwardRef(function(e,t){var r=e.className,i=e.sideOffset,d=(0,o.Z)(e,u);return(0,s.jsx)(a.VY,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t,sideOffset:void 0===i?4:i,className:(0,l.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r)},d))});h.displayName=a.VY.displayName},52217:function(e,t,r){r.r(t),r(67294);var n=r(85372),o=r(74824),i=r(16044),a=r(85893);t.default=function(e){var t=e.latitude,r=e.longitude;return(0,a.jsx)(i.pn,{children:(0,a.jsxs)(i.u,{children:[(0,a.jsx)(i.aJ,{asChild:!0,children:(0,a.jsxs)(o.z,{variant:"outline",size:"sm",className:"flex items-center space-x-2 bg-white hover:bg-blue-50 text-blue-600 border-blue-200 hover:border-blue-300 transition-all duration-200",onClick:function(){window.open("https://www.google.com/maps/search/?api=1&query=".concat(t,",").concat(r),"_blank")},children:[(0,a.jsx)(n.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:"View on Map"})]})}),(0,a.jsx)(i._v,{children:(0,a.jsx)("p",{children:"Open location in Google Maps"})})]})})}},66908:function(e,t,r){r.d(t,{VY:function(){return F},fC:function(){return S},xz:function(){return A},zt:function(){return B}});var n=r(67294),o=r(36206),i=r(28771),a=r(25360),l=r(46063),s=r(91276),u=r(46066),c=(r(42651),r(29115)),d=r(75320),p=r(88426),f=r(77342),h=r(96219),x=r(85893),[g,v]=(0,a.b)("Tooltip",[u.D7]),y=(0,u.D7)(),b="TooltipProvider",m="tooltip.open",[w,C]=g(b),j=e=>{let{__scopeTooltip:t,delayDuration:r=700,skipDelayDuration:o=300,disableHoverableContent:i=!1,children:a}=e,[l,s]=n.useState(!0),u=n.useRef(!1),c=n.useRef(0);return n.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,x.jsx)(w,{scope:t,isOpenDelayed:l,delayDuration:r,onOpen:n.useCallback(()=>{window.clearTimeout(c.current),s(!1)},[]),onClose:n.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>s(!0),o)},[o]),isPointerInTransitRef:u,onPointerInTransitChange:n.useCallback(e=>{u.current=e},[]),disableHoverableContent:i,children:a})};j.displayName=b;var T="Tooltip",[E,O]=g(T),k=e=>{let{__scopeTooltip:t,children:r,open:o,defaultOpen:i=!1,onOpenChange:a,disableHoverableContent:l,delayDuration:c}=e,d=C(T,e.__scopeTooltip),p=y(t),[h,g]=n.useState(null),v=(0,s.M)(),b=n.useRef(0),w=l??d.disableHoverableContent,j=c??d.delayDuration,O=n.useRef(!1),[k=!1,P]=(0,f.T)({prop:o,defaultProp:i,onChange:e=>{e?(d.onOpen(),document.dispatchEvent(new CustomEvent(m))):d.onClose(),a?.(e)}}),M=n.useMemo(()=>k?O.current?"delayed-open":"instant-open":"closed",[k]),R=n.useCallback(()=>{window.clearTimeout(b.current),O.current=!1,P(!0)},[P]),_=n.useCallback(()=>{window.clearTimeout(b.current),P(!1)},[P]),L=n.useCallback(()=>{window.clearTimeout(b.current),b.current=window.setTimeout(()=>{O.current=!0,P(!0)},j)},[j,P]);return n.useEffect(()=>()=>window.clearTimeout(b.current),[]),(0,x.jsx)(u.fC,{...p,children:(0,x.jsx)(E,{scope:t,contentId:v,open:k,stateAttribute:M,trigger:h,onTriggerChange:g,onTriggerEnter:n.useCallback(()=>{d.isOpenDelayed?L():R()},[d.isOpenDelayed,L,R]),onTriggerLeave:n.useCallback(()=>{w?_():window.clearTimeout(b.current)},[_,w]),onOpen:R,onClose:_,disableHoverableContent:w,children:r})})};k.displayName=T;var P="TooltipTrigger",M=n.forwardRef((e,t)=>{let{__scopeTooltip:r,...a}=e,l=O(P,r),s=C(P,r),c=y(r),p=n.useRef(null),f=(0,i.e)(t,p,l.onTriggerChange),h=n.useRef(!1),g=n.useRef(!1),v=n.useCallback(()=>h.current=!1,[]);return n.useEffect(()=>()=>document.removeEventListener("pointerup",v),[v]),(0,x.jsx)(u.ee,{asChild:!0,...c,children:(0,x.jsx)(d.WV.button,{"aria-describedby":l.open?l.contentId:void 0,"data-state":l.stateAttribute,...a,ref:f,onPointerMove:(0,o.M)(e.onPointerMove,e=>{"touch"===e.pointerType||g.current||s.isPointerInTransitRef.current||(l.onTriggerEnter(),g.current=!0)}),onPointerLeave:(0,o.M)(e.onPointerLeave,()=>{l.onTriggerLeave(),g.current=!1}),onPointerDown:(0,o.M)(e.onPointerDown,()=>{h.current=!0,document.addEventListener("pointerup",v,{once:!0})}),onFocus:(0,o.M)(e.onFocus,()=>{h.current||l.onOpen()}),onBlur:(0,o.M)(e.onBlur,l.onClose),onClick:(0,o.M)(e.onClick,l.onClose)})})});M.displayName=P;var[R,_]=g("TooltipPortal",{forceMount:void 0}),L="TooltipContent",D=n.forwardRef((e,t)=>{let r=_(L,e.__scopeTooltip),{forceMount:n=r.forceMount,side:o="top",...i}=e,a=O(L,e.__scopeTooltip);return(0,x.jsx)(c.z,{present:n||a.open,children:a.disableHoverableContent?(0,x.jsx)(V,{side:o,...i,ref:t}):(0,x.jsx)(N,{side:o,...i,ref:t})})}),N=n.forwardRef((e,t)=>{let r=O(L,e.__scopeTooltip),o=C(L,e.__scopeTooltip),a=n.useRef(null),l=(0,i.e)(t,a),[s,u]=n.useState(null),{trigger:c,onClose:d}=r,p=a.current,{onPointerInTransitChange:f}=o,h=n.useCallback(()=>{u(null),f(!1)},[f]),g=n.useCallback((e,t)=>{let r=e.currentTarget,n={x:e.clientX,y:e.clientY},o=function(e,t){let r=Math.abs(t.top-e.y),n=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(r,n,o,i)){case i:return"left";case o:return"right";case r:return"top";case n:return"bottom";default:throw Error("unreachable")}}(n,r.getBoundingClientRect());u(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let r=0;r<e.length;r++){let n=e[r];for(;t.length>=2;){let e=t[t.length-1],r=t[t.length-2];if((e.x-r.x)*(n.y-r.y)>=(e.y-r.y)*(n.x-r.x))t.pop();else break}t.push(n)}t.pop();let r=[];for(let t=e.length-1;t>=0;t--){let n=e[t];for(;r.length>=2;){let e=r[r.length-1],t=r[r.length-2];if((e.x-t.x)*(n.y-t.y)>=(e.y-t.y)*(n.x-t.x))r.pop();else break}r.push(n)}return(r.pop(),1===t.length&&1===r.length&&t[0].x===r[0].x&&t[0].y===r[0].y)?t:t.concat(r)}(t)}([...function(e,t,r=5){let n=[];switch(t){case"top":n.push({x:e.x-r,y:e.y+r},{x:e.x+r,y:e.y+r});break;case"bottom":n.push({x:e.x-r,y:e.y-r},{x:e.x+r,y:e.y-r});break;case"left":n.push({x:e.x+r,y:e.y-r},{x:e.x+r,y:e.y+r});break;case"right":n.push({x:e.x-r,y:e.y-r},{x:e.x-r,y:e.y+r})}return n}(n,o),...function(e){let{top:t,right:r,bottom:n,left:o}=e;return[{x:o,y:t},{x:r,y:t},{x:r,y:n},{x:o,y:n}]}(t.getBoundingClientRect())])),f(!0)},[f]);return n.useEffect(()=>()=>h(),[h]),n.useEffect(()=>{if(c&&p){let e=e=>g(e,p),t=e=>g(e,c);return c.addEventListener("pointerleave",e),p.addEventListener("pointerleave",t),()=>{c.removeEventListener("pointerleave",e),p.removeEventListener("pointerleave",t)}}},[c,p,g,h]),n.useEffect(()=>{if(s){let e=e=>{let t=e.target,r={x:e.clientX,y:e.clientY},n=c?.contains(t)||p?.contains(t),o=!function(e,t){let{x:r,y:n}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let a=t[e].x,l=t[e].y,s=t[i].x,u=t[i].y;l>n!=u>n&&r<(s-a)*(n-l)/(u-l)+a&&(o=!o)}return o}(r,s);n?h():o&&(h(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[c,p,s,d,h]),(0,x.jsx)(V,{...e,ref:l})}),[z,I]=g(T,{isInside:!1}),V=n.forwardRef((e,t)=>{let{__scopeTooltip:r,children:o,"aria-label":i,onEscapeKeyDown:a,onPointerDownOutside:s,...c}=e,d=O(L,r),f=y(r),{onClose:g}=d;return n.useEffect(()=>(document.addEventListener(m,g),()=>document.removeEventListener(m,g)),[g]),n.useEffect(()=>{if(d.trigger){let e=e=>{let t=e.target;t?.contains(d.trigger)&&g()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,g]),(0,x.jsx)(l.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:s,onFocusOutside:e=>e.preventDefault(),onDismiss:g,children:(0,x.jsxs)(u.VY,{"data-state":d.stateAttribute,...f,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,x.jsx)(p.A4,{children:o}),(0,x.jsx)(z,{scope:r,isInside:!0,children:(0,x.jsx)(h.f,{id:d.contentId,role:"tooltip",children:i||o})})]})})});D.displayName=L;var Y="TooltipArrow";n.forwardRef((e,t)=>{let{__scopeTooltip:r,...n}=e,o=y(r);return I(Y,r).isInside?null:(0,x.jsx)(u.Eh,{...o,...n,ref:t})}).displayName=Y;var B=j,S=k,A=M,F=D}}]);
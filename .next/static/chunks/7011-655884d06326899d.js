"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7011],{74824:function(e,t,r){r.d(t,{d:function(){return f},z:function(){return p}});var n=r(59499),a=r(4730),i=r(67294),o=r(88426),s=r(45139),c=r(82359),u=r(85893),l=["className","variant","size","asChild"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var f=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),p=i.forwardRef(function(e,t){var r=e.className,i=e.variant,s=e.size,p=e.asChild,h=(0,a.Z)(e,l),v=void 0!==p&&p?o.g7:"button";return(0,u.jsx)(v,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({className:(0,c.cn)(f({variant:i,size:s,className:r})),ref:t},h))});p.displayName="Button"},77670:function(e,t,r){r.d(t,{X:function(){return N}});var n=r(59499),a=r(4730),i=r(67294),o=r(28771),s=r(25360),c=r(36206),u=r(77342),l=r(57898),d=r(7546),f=r(29115),p=r(75320),h=r(85893),v="Checkbox",[m,b]=(0,s.b)(v),[y,g]=m(v),j=i.forwardRef((e,t)=>{let{__scopeCheckbox:r,name:n,checked:a,defaultChecked:s,required:l,disabled:d,value:f="on",onCheckedChange:v,...m}=e,[b,g]=i.useState(null),j=(0,o.e)(t,e=>g(e)),x=i.useRef(!1),O=!b||!!b.closest("form"),[S=!1,P]=(0,u.T)({prop:a,defaultProp:s,onChange:v}),A=i.useRef(S);return i.useEffect(()=>{let e=b?.form;if(e){let t=()=>P(A.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[b,P]),(0,h.jsxs)(y,{scope:r,state:S,disabled:d,children:[(0,h.jsx)(p.WV.button,{type:"button",role:"checkbox","aria-checked":k(S)?"mixed":S,"aria-required":l,"data-state":E(S),"data-disabled":d?"":void 0,disabled:d,value:f,...m,ref:j,onKeyDown:(0,c.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,c.M)(e.onClick,e=>{P(e=>!!k(e)||!e),O&&(x.current=e.isPropagationStopped(),x.current||e.stopPropagation())})}),O&&(0,h.jsx)(w,{control:b,bubbles:!x.current,name:n,value:f,checked:S,required:l,disabled:d,style:{transform:"translateX(-100%)"}})]})});j.displayName=v;var x="CheckboxIndicator",O=i.forwardRef((e,t)=>{let{__scopeCheckbox:r,forceMount:n,...a}=e,i=g(x,r);return(0,h.jsx)(f.z,{present:n||k(i.state)||!0===i.state,children:(0,h.jsx)(p.WV.span,{"data-state":E(i.state),"data-disabled":i.disabled?"":void 0,...a,ref:t,style:{pointerEvents:"none",...e.style}})})});O.displayName=x;var w=e=>{let{control:t,checked:r,bubbles:n=!0,...a}=e,o=i.useRef(null),s=(0,l.D)(r),c=(0,d.t)(t);return i.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(s!==r&&t){let a=new Event("click",{bubbles:n});e.indeterminate=k(r),t.call(e,!k(r)&&r),e.dispatchEvent(a)}},[s,r,n]),(0,h.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:!k(r)&&r,...a,tabIndex:-1,ref:o,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function k(e){return"indeterminate"===e}function E(e){return k(e)?"indeterminate":e?"checked":"unchecked"}var S=r(62469),P=r(82359),A=["className"];function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var N=i.forwardRef(function(e,t){var r=e.className,n=(0,a.Z)(e,A);return(0,h.jsx)(j,C(C({ref:t,className:(0,P.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r)},n),{},{children:(0,h.jsx)(O,{className:(0,P.cn)("flex items-center justify-center text-current"),children:(0,h.jsx)(S.nQG,{className:"h-4 w-4"})})}))});N.displayName=j.displayName},36714:function(e,t,r){r.d(t,{pm:function(){return g}});var n=r(16835),a=r(77191),i=r(36864),o=r(27812),s=r(59499),c=r(67294);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d=0,f=new Map,p=function(e){if(!f.has(e)){var t=setTimeout(function(){f.delete(e),b({type:"REMOVE_TOAST",toastId:e})},1e6);f.set(e,t)}},h=function(e,t){switch(t.type){case"ADD_TOAST":return l(l({},e),{},{toasts:[t.toast].concat((0,o.Z)(e.toasts)).slice(0,1)});case"UPDATE_TOAST":return l(l({},e),{},{toasts:e.toasts.map(function(e){return e.id===t.toast.id?l(l({},e),t.toast):e})});case"DISMISS_TOAST":var r=t.toastId;return r?p(r):e.toasts.forEach(function(e){p(e.id)}),l(l({},e),{},{toasts:e.toasts.map(function(e){return e.id===r||void 0===r?l(l({},e),{},{open:!1}):e})});case"REMOVE_TOAST":if(void 0===t.toastId)return l(l({},e),{},{toasts:[]});return l(l({},e),{},{toasts:e.toasts.filter(function(e){return e.id!==t.toastId})})}},v=[],m={toasts:[]};function b(e){m=h(m,e),v.forEach(function(e){e(m)})}function y(e){var t=(0,i.Z)({},((0,a.Z)(e),e)),r=(d=(d+1)%Number.MAX_SAFE_INTEGER).toString(),n=function(){return b({type:"DISMISS_TOAST",toastId:r})};return b({type:"ADD_TOAST",toast:l(l({},t),{},{id:r,open:!0,onOpenChange:function(e){e||n()}})}),{id:r,dismiss:n,update:function(e){return b({type:"UPDATE_TOAST",toast:l(l({},e),{},{id:r})})}}}function g(){var e=c.useState(m),t=(0,n.Z)(e,2),r=t[0],a=t[1];return c.useEffect(function(){return v.push(a),function(){var e=v.indexOf(a);e>-1&&v.splice(e,1)}},[r]),l(l({},r),{},{toast:y,dismiss:function(e){return b({type:"DISMISS_TOAST",toastId:e})}})}},37011:function(e,t,r){r.r(t);var n=r(27812),a=r(50029),i=r(64687),o=r.n(i),s=r(67294),c=r(45007),u=r(33526),l=r(74824),d=r(52403),f=r(77670),p=r(36714),h=r(87066),v=r(85893);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e,t,r,i=(0,s.useState)(!1),b=i[0],y=i[1],g=(0,s.useState)(null),j=g[0],x=g[1],O=(0,s.useState)([]),w=O[0],k=O[1],E=(0,s.useState)([]),S=E[0],P=E[1],A=(0,s.useState)([]),T=A[0],C=A[1],N=(0,s.useState)([]),Z=N[0],D=N[1],I=(0,s.useState)([]),M=I[0],R=I[1],z=(0,c.v9)(function(e){return e.auth.token}),_=(0,p.pm)().toast;(0,s.useEffect)(function(){b||F()},[b]);var F=function(){x(null),k([]),P([]),R([])},B=(0,s.useCallback)((0,a.Z)(o().mark(function e(){var t,r,n;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.Z.get("https://api.gajkesaristeels.in/employee/getAll",{headers:{Authorization:"Bearer ".concat(z)}});case 3:return t=e.sent,e.next=6,h.Z.get("https://api.gajkesaristeels.in/employee/team/getAll",{headers:{Authorization:"Bearer ".concat(z)}});case 6:r=e.sent.data.map(function(e){return e.officeManager.id}),n=t.data.filter(function(e){return"Manager"===e.role&&e.deleted}).map(function(e){return e.id}),C(t.data.filter(function(e){return"Manager"===e.role&&!r.includes(e.id)&&!n.includes(e.id)})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Error fetching Regional managers:",e.t0),_({title:"Error",description:"Failed to fetch Regional managers. Please try again.",variant:"destructive"});case 17:case"end":return e.stop()}},e,null,[[0,13]])})),[z,_]),V=(0,s.useCallback)((0,a.Z)(o().mark(function e(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.Z.get("https://api.gajkesaristeels.in/employee/getCities",{headers:{Authorization:"Bearer ".concat(z)}});case 3:D(e.sent.data.sort(function(e,t){return e.localeCompare(t)}).map(function(e){return{value:e,label:e}})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching cities:",e.t0),_({title:"Error",description:"Failed to fetch cities. Please try again.",variant:"destructive"});case 12:case"end":return e.stop()}},e,null,[[0,8]])})),[z,_]);(0,s.useEffect)(function(){b&&z&&(B(),V())},[b,z,B,V]);var K=(e=(0,a.Z)(o().mark(function e(t){var r;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.map(function(e){return h.Z.get("https://api.gajkesaristeels.in/employee/getFieldOfficerByCity?city=".concat(e),{headers:{Authorization:"Bearer ".concat(z)}})}),e.next=4,Promise.all(r);case 4:R(e.sent.flatMap(function(e){return e.data}).filter(function(e){return"Field Officer"===e.role&&null===e.teamId})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching employees for cities ".concat(t.join(", "),":"),e.t0),_({title:"Error",description:"Failed to fetch employees for the selected cities. Please try again.",variant:"destructive"});case 13:case"end":return e.stop()}},e,null,[[0,9]])})),function(t){return e.apply(this,arguments)}),X=(t=(0,a.Z)(o().mark(function e(){var t,r,n,a;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(w.length>0&&j)){e.next=31;break}t=w.map(function(e){return e.value}),e.prev=2,r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return m(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,void 0)}}(e))){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}(t),e.prev=4,r.s();case 6:if((n=r.n()).done){e.next=12;break}return a=n.value,e.next=10,h.Z.put("https://api.gajkesaristeels.in/employee/assignCity",null,{params:{id:j.value,city:a},headers:{Authorization:"Bearer ".concat(z)}});case 10:e.next=6;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),r.e(e.t0);case 17:return e.prev=17,r.f(),e.finish(17);case 20:return _({title:"Success",description:"".concat(t.join(", ")," assigned to Regional Manager ID: ").concat(j.value)}),e.next=23,K(t);case 23:e.next=29;break;case 25:e.prev=25,e.t1=e.catch(2),console.error("Error assigning cities to Regional manager ".concat(j.value,":"),e.t1),_({title:"Error",description:"Failed to assign cities to Regional Manager ID: ".concat(j.value,". Please try again."),variant:"destructive"});case 29:e.next=32;break;case 31:_({title:"Error",description:"Please select at least one city and an Regional manager.",variant:"destructive"});case 32:case"end":return e.stop()}},e,null,[[2,25],[4,14,17,20]])})),function(){return t.apply(this,arguments)}),L=(r=(0,a.Z)(o().mark(function e(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return _({title:"Error",description:"Please select an Regional manager.",variant:"destructive"}),e.abrupt("return");case 3:if(0!==S.length){e.next=6;break}return _({title:"Error",description:"Please select at least one team member.",variant:"destructive"}),e.abrupt("return");case 6:return e.prev=6,e.next=9,h.Z.post("https://api.gajkesaristeels.in/employee/team/create",{officeManager:j.value,fieldOfficers:S},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(z)}});case 9:200===e.sent.status&&(_({title:"Success",description:"Team created successfully!"}),y(!1),F()),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(6),console.error("Error creating team:",e.t0),e.t0.response&&e.t0.response.data&&e.t0.response.data.message?_({title:"Error Creating Team",description:e.t0.response.data.message,variant:"destructive"}):_({title:"Error",description:"An unexpected error occurred. Please try again.",variant:"destructive"});case 17:case"end":return e.stop()}},e,null,[[6,13]])})),function(){return r.apply(this,arguments)});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.z,{onClick:function(){return y(!0)},children:"Add Team"}),(0,v.jsx)(u.Vq,{open:b,onOpenChange:y,children:(0,v.jsxs)(u.cZ,{children:[(0,v.jsx)(u.fK,{children:(0,v.jsx)(u.$N,{children:"Add New Team"})}),(0,v.jsxs)("div",{className:"space-y-4",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("label",{htmlFor:"officeManager",children:"Regional Manager"}),(0,v.jsx)(d.ZP,{id:"officeManager",value:j,onChange:function(e){x(e)},options:T.map(function(e){return{value:e.id,label:"".concat(e.firstName," ").concat(e.lastName)}}),placeholder:"Select an Regional Manager"})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("label",{htmlFor:"city",children:"Cities"}),(0,v.jsx)(d.ZP,{id:"city",isMulti:!0,value:w,onChange:k,options:Z,placeholder:"Select cities"}),(0,v.jsx)(l.z,{className:"mt-2",onClick:X,disabled:0===w.length,children:"OK"})]}),w.length>0&&(0,v.jsxs)("div",{children:[(0,v.jsx)("label",{children:"Team Members"}),(0,v.jsx)("div",{className:"max-h-60 overflow-y-auto",children:M.map(function(e){return(0,v.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,v.jsx)(f.X,{id:"employee-".concat(e.id),checked:S.includes(e.id),onCheckedChange:function(t){t?P([].concat((0,n.Z)(S),[e.id])):P(S.filter(function(t){return t!==e.id}))}}),(0,v.jsxs)("label",{htmlFor:"employee-".concat(e.id),children:[e.firstName," ",e.lastName]})]},e.id)})})]})]}),(0,v.jsxs)("div",{className:"flex justify-end space-x-2 mt-4",children:[(0,v.jsx)(l.z,{variant:"outline",onClick:function(){return y(!1)},children:"Cancel"}),(0,v.jsx)(l.z,{onClick:L,disabled:!j||0===S.length,children:"Create Team"})]})]})})]})}},36864:function(e,t,r){r.d(t,{Z:function(){return n}});function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}},77191:function(e,t,r){r.d(t,{Z:function(){return n}});function n(e){if(null==e)throw TypeError("Cannot destructure "+e)}},27812:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(52587),a=r(2937);function i(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
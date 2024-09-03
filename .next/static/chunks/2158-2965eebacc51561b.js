"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2158],{10054:function(e,t,a){a.d(t,{SP:function(){return p},dr:function(){return f},mQ:function(){return g},nU:function(){return x}});var n=a(59499),r=a(4730),s=a(67294),i=a(60434),c=a(82359),l=a(85893),o=["className"],d=["className"],u=["className"];function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var g=i.fC,f=s.forwardRef(function(e,t){var a=e.className,n=(0,r.Z)(e,o);return(0,l.jsx)(i.aV,h({ref:t,className:(0,c.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",a)},n))});f.displayName=i.aV.displayName;var p=s.forwardRef(function(e,t){var a=e.className,n=(0,r.Z)(e,d);return(0,l.jsx)(i.xz,h({ref:t,className:(0,c.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",a)},n))});p.displayName=i.xz.displayName;var x=s.forwardRef(function(e,t){var a=e.className,n=(0,r.Z)(e,u);return(0,l.jsx)(i.VY,h({ref:t,className:(0,c.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a)},n))});x.displayName=i.VY.displayName},2158:function(e,t,a){a.r(t);var n=a(59499),r=a(50029),s=a(64687),i=a.n(s),c=a(67294),l=a(33526),o=a(74824),d=a(18190),u=a(25141),m=a(10054),h=a(11163),g=a(35843),f=a(85893);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}t.default=function(e){var t,a,s=e.isOpen,p=e.onClose,v=e.token,j=e.existingData,N=(0,c.useState)(j||{clientFirstName:"",clientLastName:"",email:""}),y=N[0],b=N[1],C=(0,c.useState)("basic"),O=C[0],S=C[1],w=(0,c.useState)([]),I=w[0],P=w[1],F=(0,h.useRouter)();(0,c.useEffect)(function(){var e;(e=(0,r.Z)(i().mark(function e(){var t;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.gajkesaristeels.in/employee/getAll",{headers:{Authorization:"Bearer ".concat(v)}});case 3:return t=e.sent,e.next=6,t.json();case 6:P(e.sent),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error fetching employees:",e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])})),function(){return e.apply(this,arguments)})()},[v]);var k=function(e,t){var a=t;["pincode","monthlySale","primaryContact","secondaryContact","fieldOfficerId"].includes(e)&&(a=""===t?"":parseInt(t.toString(),10)),b(function(t){return x(x({},t),{},(0,n.Z)({},e,a))})},_=(t=(0,r.Z)(i().mark(function e(){var t,a,n,r,s;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("requestBody",t=x(x({},y),{},{primaryContact:y.primaryContact?parseInt(y.primaryContact.toString(),10):void 0,secondaryContact:y.secondaryContact?parseInt(y.secondaryContact.toString(),10):void 0,pincode:y.pincode?parseInt(y.pincode.toString(),10):void 0,monthlySale:y.monthlySale?parseInt(y.monthlySale.toString(),10):void 0,latitude:10,longitude:-23,employeeId:y.fieldOfficerId})),a=j&&j.id?"https://api.gajkesaristeels.in/store/update?id=".concat(j.id):"https://api.gajkesaristeels.in/store/create",n=j&&j.id?"PUT":"POST",e.next=7,fetch(a,{method:n,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(v)},body:JSON.stringify(t)});case 7:if(console.log(r=e.sent),!r.ok){e.next=18;break}return e.next=12,r.json();case 12:console.log(s=e.sent),F.push("/CustomerDetailPage/".concat(s)),p(),e.next=19;break;case 18:console.error("Failed to update/create customer");case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.error("Error updating/creating customer:",e.t0);case 24:case"end":return e.stop()}},e,null,[[0,21]])})),function(){return t.apply(this,arguments)});return(0,f.jsx)(l.Vq,{open:s,onOpenChange:p,children:(0,f.jsxs)(l.cZ,{className:"sm:max-w-[600px]",children:[(0,f.jsxs)(l.fK,{children:[(0,f.jsx)(l.$N,{children:"Add Customer"}),(0,f.jsx)(l.Be,{children:"Enter the details of the new customer."})]}),(0,f.jsxs)(m.mQ,{value:O,onValueChange:S,className:"mt-4",children:[(0,f.jsxs)(m.dr,{children:[(0,f.jsx)(m.SP,{value:"basic",children:"Basic Info"}),(0,f.jsx)(m.SP,{value:"contact",children:"Contact"}),(0,f.jsx)(m.SP,{value:"address",children:"Address"}),(0,f.jsx)(m.SP,{value:"additional",children:"Additional"})]}),(0,f.jsx)(m.nU,{value:"basic",className:"mt-4",children:(0,f.jsxs)("div",{className:"grid gap-4",children:[(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"storeName",className:"text-right",children:"Shop Name"}),(0,f.jsx)(d.I,{id:"storeName",value:y.storeName||"",className:"col-span-3",onChange:function(e){return k("storeName",e.target.value)}})]}),(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"clientFirstName",className:"text-right",children:"First Name"}),(0,f.jsx)(d.I,{id:"clientFirstName",value:y.clientFirstName||"",className:"col-span-3",onChange:function(e){return k("clientFirstName",e.target.value)}})]}),(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"clientLastName",className:"text-right",children:"Last Name"}),(0,f.jsx)(d.I,{id:"clientLastName",value:y.clientLastName||"",className:"col-span-3",onChange:function(e){return k("clientLastName",e.target.value)}})]})]})}),(0,f.jsx)(m.nU,{value:"contact",className:"mt-4",children:(0,f.jsxs)("div",{className:"grid gap-4",children:[(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"primaryContact",className:"text-right",children:"Primary Contact"}),(0,f.jsx)(d.I,{id:"primaryContact",type:"tel",value:y.primaryContact||"",className:"col-span-3",onChange:function(e){return k("primaryContact",e.target.value)}})]}),(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"secondaryContact",className:"text-right",children:"Secondary Contact"}),(0,f.jsx)(d.I,{id:"secondaryContact",type:"tel",value:y.secondaryContact||"",className:"col-span-3",onChange:function(e){return k("secondaryContact",e.target.value)}})]}),(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"email",className:"text-right",children:"Email"}),(0,f.jsx)(d.I,{id:"email",type:"email",value:y.email||"",className:"col-span-3",onChange:function(e){return k("email",e.target.value)}})]})]})}),(0,f.jsx)(m.nU,{value:"address",className:"mt-4",children:(0,f.jsxs)("div",{className:"grid gap-4",children:[(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"addressLine1",className:"text-right",children:"Address Line 1"}),(0,f.jsx)(d.I,{id:"addressLine1",value:y.addressLine1||"",className:"col-span-3",onChange:function(e){return k("addressLine1",e.target.value)}})]}),(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"addressLine2",className:"text-right",children:"Address Line 2"}),(0,f.jsx)(d.I,{id:"addressLine2",value:y.addressLine2||"",className:"col-span-3",onChange:function(e){return k("addressLine2",e.target.value)}})]}),(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"city",className:"text-right",children:"City"}),(0,f.jsx)(d.I,{id:"city",value:y.city||"",className:"col-span-3",onChange:function(e){return k("city",e.target.value)}})]}),(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"state",className:"text-right",children:"State"}),(0,f.jsx)(d.I,{id:"state",value:y.state||"",className:"col-span-3",onChange:function(e){return k("state",e.target.value)}})]}),(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"country",className:"text-right",children:"Country"}),(0,f.jsx)(d.I,{id:"country",value:y.country||"",className:"col-span-3",onChange:function(e){return k("country",e.target.value)}})]}),(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"pincode",className:"text-right",children:"Pincode"}),(0,f.jsx)(d.I,{id:"pincode",type:"number",value:y.pincode||"",className:"col-span-3",onChange:function(e){return k("pincode",e.target.value)}})]})]})}),(0,f.jsx)(m.nU,{value:"additional",className:"mt-4",children:(0,f.jsxs)("div",{className:"grid gap-4",children:[(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"gstNumber",className:"text-right",children:"GST Number"}),(0,f.jsx)(d.I,{id:"gstNumber",value:y.gstNumber||"",className:"col-span-3",onChange:function(e){return k("gstNumber",e.target.value)}})]}),(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"monthlySale",className:"text-right",children:"Monthly Sale"}),(0,f.jsx)(d.I,{id:"monthlySale",type:"number",value:y.monthlySale||"",className:"col-span-3",onChange:function(e){return k("monthlySale",e.target.value)}})]}),(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"clientType",className:"text-right",children:"Client Type"}),(0,f.jsx)("div",{className:"col-span-3",children:(0,f.jsxs)(g.h_,{children:[(0,f.jsx)(g.$F,{className:"w-full",children:(0,f.jsx)(d.I,{id:"clientType",value:y.clientType||"",placeholder:"Select Client Type",readOnly:!0,className:"cursor-pointer text-gray-400"})}),(0,f.jsxs)(g.AW,{children:[(0,f.jsx)(g.Xi,{onClick:function(){return k("clientType","Project")},children:"Project"}),(0,f.jsx)(g.Xi,{onClick:function(){return k("clientType","Shop")},children:"Shop"})]})]})})]}),(0,f.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,f.jsx)(u._,{htmlFor:"fieldOfficer",className:"text-right",children:"Field Officer"}),(0,f.jsx)("div",{className:"col-span-3",children:(0,f.jsxs)(g.h_,{children:[(0,f.jsx)(g.$F,{className:"w-full",children:(0,f.jsx)(d.I,{id:"fieldOfficer",value:y.fieldOfficerId?null===(a=I.find(function(e){return e.id===y.fieldOfficerId}))||void 0===a?void 0:a.firstName:"",placeholder:"Select Field Officer",readOnly:!0,className:"cursor-pointer text-gray-400"})}),(0,f.jsx)(g.AW,{children:I.map(function(e){return(0,f.jsxs)(g.Xi,{onClick:function(){return k("fieldOfficerId",e.id.toString())},children:[e.firstName," ",e.lastName]},e.id)})})]})})]})]})})]}),(0,f.jsxs)(l.cN,{children:[(0,f.jsx)(o.z,{variant:"outline",onClick:p,children:"Cancel"}),"basic"!==O&&(0,f.jsx)(o.z,{variant:"outline",onClick:function(){"additional"===O?S("address"):"address"===O?S("contact"):"contact"===O&&S("basic")},children:"Previous"}),"additional"!==O?(0,f.jsx)(o.z,{onClick:function(){"basic"===O?S("contact"):"contact"===O?S("address"):"address"===O&&S("additional")},children:"Next"}):(0,f.jsx)(o.z,{onClick:_,children:"Add Customer"})]})]})})}},60434:function(e,t,a){a.d(t,{VY:function(){return _},aV:function(){return F},fC:function(){return P},xz:function(){return k}});var n=a(67294),r=a(36206),s=a(25360),i=a(66681),c=a(29115),l=a(75320),o=a(78990),d=a(77342),u=a(91276),m=a(85893),h="Tabs",[g,f]=(0,s.b)(h,[i.Pc]),p=(0,i.Pc)(),[x,v]=g(h),j=n.forwardRef((e,t)=>{let{__scopeTabs:a,value:n,onValueChange:r,defaultValue:s,orientation:i="horizontal",dir:c,activationMode:h="automatic",...g}=e,f=(0,o.gm)(c),[p,v]=(0,d.T)({prop:n,onChange:r,defaultProp:s});return(0,m.jsx)(x,{scope:a,baseId:(0,u.M)(),value:p,onValueChange:v,orientation:i,dir:f,activationMode:h,children:(0,m.jsx)(l.WV.div,{dir:f,"data-orientation":i,...g,ref:t})})});j.displayName=h;var N="TabsList",y=n.forwardRef((e,t)=>{let{__scopeTabs:a,loop:n=!0,...r}=e,s=v(N,a),c=p(a);return(0,m.jsx)(i.fC,{asChild:!0,...c,orientation:s.orientation,dir:s.dir,loop:n,children:(0,m.jsx)(l.WV.div,{role:"tablist","aria-orientation":s.orientation,...r,ref:t})})});y.displayName=N;var b="TabsTrigger",C=n.forwardRef((e,t)=>{let{__scopeTabs:a,value:n,disabled:s=!1,...c}=e,o=v(b,a),d=p(a),u=w(o.baseId,n),h=I(o.baseId,n),g=n===o.value;return(0,m.jsx)(i.ck,{asChild:!0,...d,focusable:!s,active:g,children:(0,m.jsx)(l.WV.button,{type:"button",role:"tab","aria-selected":g,"aria-controls":h,"data-state":g?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:u,...c,ref:t,onMouseDown:(0,r.M)(e.onMouseDown,e=>{s||0!==e.button||!1!==e.ctrlKey?e.preventDefault():o.onValueChange(n)}),onKeyDown:(0,r.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&o.onValueChange(n)}),onFocus:(0,r.M)(e.onFocus,()=>{let e="manual"!==o.activationMode;g||s||!e||o.onValueChange(n)})})})});C.displayName=b;var O="TabsContent",S=n.forwardRef((e,t)=>{let{__scopeTabs:a,value:r,forceMount:s,children:i,...o}=e,d=v(O,a),u=w(d.baseId,r),h=I(d.baseId,r),g=r===d.value,f=n.useRef(g);return n.useEffect(()=>{let e=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,m.jsx)(c.z,{present:s||g,children:({present:a})=>(0,m.jsx)(l.WV.div,{"data-state":g?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":u,hidden:!a,id:h,tabIndex:0,...o,ref:t,style:{...e.style,animationDuration:f.current?"0s":void 0},children:a&&i})})});function w(e,t){return`${e}-trigger-${t}`}function I(e,t){return`${e}-content-${t}`}S.displayName=O;var P=j,F=y,k=C,_=S}}]);
"use strict";exports.id=9960,exports.ids=[9960],exports.modules={9222:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{d:()=>u,z:()=>p});var a=r(6689),n=r(4338),i=r(6926),l=r(8710),o=r(997),c=e([n,i,l]);[n,i,l]=c.then?(await c)():c;let m=["className","variant","size","asChild"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}let u=(0,i.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),p=a.forwardRef((e,t)=>{let{className:r,variant:s,size:a,asChild:i=!1}=e,c=function(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,m),p=i?n.Slot:"button";return o.jsx(p,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){var s,a;s=t,a=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(s))in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({className:(0,l.cn)(u({variant:s,size:a,className:r})),ref:t},c))});p.displayName="Button",s()}catch(e){s(e)}})},5474:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Ol:()=>b,SZ:()=>j,Zb:()=>x,aY:()=>v,eW:()=>N,ll:()=>g});var a=r(6689),n=r(8710),i=r(997),l=e([n]);n=(l.then?(await l)():l)[0];let m=["className"],u=["className"],p=["className"],f=["className"],y=["className"],h=["className"];function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var s,a;s=t,a=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(s))in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}let x=a.forwardRef((e,t)=>{let{className:r}=e,s=d(e,m);return i.jsx("div",c({ref:t,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",r)},s))});x.displayName="Card";let b=a.forwardRef((e,t)=>{let{className:r}=e,s=d(e,u);return i.jsx("div",c({ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",r)},s))});b.displayName="CardHeader";let g=a.forwardRef((e,t)=>{let{className:r}=e,s=d(e,p);return i.jsx("h3",c({ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",r)},s))});g.displayName="CardTitle";let j=a.forwardRef((e,t)=>{let{className:r}=e,s=d(e,f);return i.jsx("p",c({ref:t,className:(0,n.cn)("text-sm text-muted-foreground",r)},s))});j.displayName="CardDescription";let v=a.forwardRef((e,t)=>{let{className:r}=e,s=d(e,y);return i.jsx("div",c({ref:t,className:(0,n.cn)("p-6 pt-0",r)},s))});v.displayName="CardContent";let N=a.forwardRef((e,t)=>{let{className:r}=e,s=d(e,h);return i.jsx("div",c({ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",r)},s))});N.displayName="CardFooter",s()}catch(e){s(e)}})},1079:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{$0:()=>D,Dj:()=>P,dN:()=>O,kN:()=>w,ng:()=>v,nt:()=>N,tl:()=>j});var a=r(6689),n=r(2132),i=r(8710),l=r(9222),o=r(997),c=e([i,l]);[i,l]=c.then?(await c)():c;let p=["className"],f=["className"],y=["className"],h=["className","isActive","size"],x=["className"],b=["className"],g=["className"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){var s,a;s=t,a=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(s))in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}let j=e=>{let{className:t}=e,r=u(e,p);return o.jsx("nav",m({role:"navigation","aria-label":"pagination",className:(0,i.cn)("mx-auto flex w-full justify-center",t)},r))};j.displayName="Pagination";let v=a.forwardRef((e,t)=>{let{className:r}=e,s=u(e,f);return o.jsx("ul",m({ref:t,className:(0,i.cn)("flex flex-row items-center gap-1",r)},s))});v.displayName="PaginationContent";let N=a.forwardRef((e,t)=>{let{className:r}=e,s=u(e,y);return o.jsx("li",m({ref:t,className:(0,i.cn)("",r)},s))});N.displayName="PaginationItem";let w=e=>{let{className:t,isActive:r,size:s="icon"}=e,a=u(e,h);return o.jsx("a",m({"aria-current":r?"page":void 0,className:(0,i.cn)((0,l.d)({variant:r?"outline":"ghost",size:s}),t)},a))};w.displayName="PaginationLink";let O=e=>{let{className:t}=e,r=u(e,x);return(0,o.jsxs)(w,m(m({"aria-label":"Go to previous page",size:"default",className:(0,i.cn)("gap-1 pl-2.5",t)},r),{},{children:[o.jsx(n.ChevronLeftIcon,{className:"h-4 w-4"}),o.jsx("span",{children:"Previous"})]}))};O.displayName="PaginationPrevious";let D=e=>{let{className:t}=e,r=u(e,b);return(0,o.jsxs)(w,m(m({"aria-label":"Go to next page",size:"default",className:(0,i.cn)("gap-1 pr-2.5",t)},r),{},{children:[o.jsx("span",{children:"Next"}),o.jsx(n.ChevronRightIcon,{className:"h-4 w-4"})]}))};D.displayName="PaginationNext";let P=e=>{let{className:t}=e,r=u(e,g);return(0,o.jsxs)("span",m(m({"aria-hidden":!0,className:(0,i.cn)("flex h-9 w-9 items-center justify-center",t)},r),{},{children:[o.jsx(n.DotsHorizontalIcon,{className:"h-4 w-4"}),o.jsx("span",{className:"sr-only",children:"More pages"})]}))};P.displayName="PaginationEllipsis",s()}catch(e){s(e)}})},7731:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>c});var a=r(6689),n=r(8248),i=r(467),l=r(997),o=e([n,i]);[n,i]=o.then?(await o)():o;let c=({selectedOption:e,onDateRangeChange:t})=>{let{0:r,1:s}=(0,a.useState)(!1),{0:o,1:c}=(0,a.useState)(!1),{0:d,1:m}=(0,a.useState)((0,n.format)(new Date,"yyyy-MM-dd")),{0:u,1:p}=(0,a.useState)((0,n.format)(new Date,"yyyy-MM-dd")),f=e=>{if(s(!1),"Custom Date Range"===e)c(!0);else{let r="",s="";switch(e){case"Today":r=(0,n.format)(new Date,"yyyy-MM-dd"),s=(0,n.format)(new Date,"yyyy-MM-dd");break;case"Last 7 Days":r=(0,n.format)((0,n.subDays)(new Date,7),"yyyy-MM-dd"),s=(0,n.format)(new Date,"yyyy-MM-dd");break;case"Last 15 Days":r=(0,n.format)((0,n.subDays)(new Date,15),"yyyy-MM-dd"),s=(0,n.format)(new Date,"yyyy-MM-dd");break;case"Last 30 Days":r=(0,n.format)((0,n.subDays)(new Date,30),"yyyy-MM-dd"),s=(0,n.format)(new Date,"yyyy-MM-dd")}t(r,s,e)}};return(0,l.jsxs)("div",{className:"relative inline-block text-left",children:[l.jsx("div",{children:(0,l.jsxs)("button",{type:"button",className:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",id:"options-menu","aria-haspopup":"true","aria-expanded":r,onClick:()=>{s(!r)},children:[e,l.jsx(i.ChevronDownIcon,{className:"-mr-1 ml-2 h-5 w-5","aria-hidden":"true"})]})}),r&&l.jsx("div",{className:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10",children:l.jsx("div",{className:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu",children:["Today","Last 7 Days","Last 15 Days","Last 30 Days","Custom Date Range"].map(t=>l.jsx("a",{href:"#",className:`${t===e?"bg-gray-100 text-gray-900":"text-gray-700"} block px-4 py-2 text-sm`,role:"menuitem",onClick:()=>f(t),children:t},t))})}),o&&l.jsx("div",{className:"fixed inset-0 z-20 overflow-y-auto",children:(0,l.jsxs)("div",{className:"flex items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0",children:[l.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:l.jsx("div",{className:"absolute inset-0 bg-gray-900 opacity-75"})}),l.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),(0,l.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[l.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:l.jsx("div",{children:(0,l.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:text-left",children:[l.jsx("h3",{className:"text-2xl leading-6 font-semibold text-gray-900 mb-4",children:"Custom Date Range"}),(0,l.jsxs)("div",{className:"mt-4",children:[l.jsx("label",{htmlFor:"startDate",className:"block text-sm font-medium text-gray-700 mb-1",children:"Start Date"}),l.jsx("input",{type:"date",name:"startDate",id:"startDate",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",value:d,onChange:e=>m(e.target.value)})]}),(0,l.jsxs)("div",{className:"mt-4",children:[l.jsx("label",{htmlFor:"endDate",className:"block text-sm font-medium text-gray-700 mb-1",children:"End Date"}),l.jsx("input",{type:"date",name:"endDate",id:"endDate",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",value:u,onChange:e=>p(e.target.value)})]})]})})}),(0,l.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[l.jsx("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-3 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>{t(d,u,"Custom Date Range"),c(!1)},children:"Apply"}),l.jsx("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-6 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>c(!1),children:"Cancel"})]})]})]})})]})};s()}catch(e){s(e)}})},5377:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>j});var a=r(6689),n=r.n(a),i=r(8248),l=r(467),o=r(3655),c=r(5474),d=r(9222),m=r(1079),u=r(8176),p=r(7731),f=r(1163),y=r(997),h=e([i,l,c,d,m,p]);[i,l,c,d,m,p]=h.then?(await h)():h;let x=({title:e,value:t})=>(0,y.jsxs)(c.Zb,{children:[y.jsx(c.Ol,{children:y.jsx(c.ll,{children:e})}),y.jsx(c.aY,{children:y.jsx("p",{className:"text-4xl font-bold",children:t})})]}),b=({data:e})=>(0,y.jsxs)(c.Zb,{children:[y.jsx(c.Ol,{children:y.jsx(c.ll,{children:"Visits by Purpose"})}),y.jsx(c.aY,{children:y.jsx(o.ResponsiveContainer,{width:"100%",height:300,children:(0,y.jsxs)(o.BarChart,{data:e,children:[y.jsx(o.CartesianGrid,{strokeDasharray:"3 3"}),y.jsx(o.XAxis,{dataKey:"purpose"}),y.jsx(o.YAxis,{}),y.jsx(o.Tooltip,{contentStyle:{backgroundColor:"rgba(0, 0, 0, 0.8)",border:"none"}}),y.jsx(o.Legend,{}),y.jsx(o.Bar,{dataKey:"visits",fill:"#1a202c"})]})})})]}),g=({visits:e,onViewDetails:t,currentPage:r,onPageChange:s})=>{let[a,o]=n().useState("desc"),[d,u]=n().useState("visit_date"),[p,f]=n().useState(null),h=e=>e.checkinTime&&e.checkoutTime?{emoji:"✅",status:"Completed",color:"bg-purple-100 text-purple-800"}:e.checkoutTime?{emoji:"⏱️",status:"Checked Out",color:"bg-orange-100 text-orange-800"}:e.checkinTime?{emoji:"\uD83D\uDD70️",status:"On Going",color:"bg-green-100 text-green-800"}:{emoji:"\uD83D\uDCC5",status:"Assigned",color:"bg-blue-100 text-blue-800"},x=e=>{e===d?o("asc"===a?"desc":"asc"):(u(e),o("desc")),f(e)},b=Math.ceil(e.length/10),g=[...e].sort((e,t)=>{let r=e[d],s=t[d];return null==r?1:null==s?-1:"string"==typeof r&&"string"==typeof s?"asc"===a?r.localeCompare(s):s.localeCompare(r):r<s?"asc"===a?-1:1:r>s?"asc"===a?1:-1:0}),j=(r-1)*10,v=g.slice(j,j+10);return(0,y.jsxs)(c.Zb,{children:[y.jsx(c.Ol,{children:y.jsx(c.ll,{children:"Recent Completed Visits"})}),y.jsx(c.aY,{children:(0,y.jsxs)("table",{className:"w-full",children:[y.jsx("thead",{children:(0,y.jsxs)("tr",{children:[(0,y.jsxs)("th",{className:"px-4 py-2 cursor-pointer",onClick:()=>x("storeName"),children:["Store","storeName"===p&&("asc"===a?y.jsx(l.ChevronUpIcon,{className:"w-4 h-4 inline-block ml-1"}):y.jsx(l.ChevronDownIcon,{className:"w-4 h-4 inline-block ml-1"}))]}),(0,y.jsxs)("th",{className:"px-4 py-2 cursor-pointer",onClick:()=>x("employeeName"),children:["Employee","employeeName"===p&&("asc"===a?y.jsx(l.ChevronUpIcon,{className:"w-4 h-4 inline-block ml-1"}):y.jsx(l.ChevronDownIcon,{className:"w-4 h-4 inline-block ml-1"}))]}),(0,y.jsxs)("th",{className:"px-4 py-2 cursor-pointer",onClick:()=>x("visit_date"),children:["Date","visit_date"===p&&("asc"===a?y.jsx(l.ChevronUpIcon,{className:"w-4 h-4 inline-block ml-1"}):y.jsx(l.ChevronDownIcon,{className:"w-4 h-4 inline-block ml-1"}))]}),(0,y.jsxs)("th",{className:"px-4 py-2 cursor-pointer",onClick:()=>x("purpose"),children:["Purpose","purpose"===p&&("asc"===a?y.jsx(l.ChevronUpIcon,{className:"w-4 h-4 inline-block ml-1"}):y.jsx(l.ChevronDownIcon,{className:"w-4 h-4 inline-block ml-1"}))]}),(0,y.jsxs)("th",{className:"px-4 py-2 cursor-pointer",onClick:()=>x("employeeState"),children:["City","employeeState"===p&&("asc"===a?y.jsx(l.ChevronUpIcon,{className:"w-4 h-4 inline-block ml-1"}):y.jsx(l.ChevronDownIcon,{className:"w-4 h-4 inline-block ml-1"}))]}),y.jsx("th",{className:"px-4 py-2",children:"Status"}),y.jsx("th",{className:"px-4 py-2",children:"Actions"})]})}),(0,y.jsxs)("tbody",{children:[v.map(e=>{let{emoji:r,status:s,color:a}=h(e);return"Completed"!==s?null:(0,y.jsxs)("tr",{children:[y.jsx("td",{className:"px-4 py-2",children:e.storeName}),y.jsx("td",{className:"px-4 py-2 capitalize",children:e.employeeName}),y.jsx("td",{className:"px-4 py-2",children:(0,i.format)((0,i.parseISO)(e.visit_date),"dd MMM ''yy")}),y.jsx("td",{className:"px-4 py-2",children:e.purpose}),y.jsx("td",{className:"px-4 py-2 capitalize",children:e.employeeState}),(0,y.jsxs)("td",{className:`px-4 py-2 ${a}`,children:[r," ",s]}),y.jsx("td",{className:"px-4 py-2",children:y.jsx("button",{className:"text-blue-500 hover:text-blue-700",onClick:()=>t(e.id),children:"View"})})]},e.id)}),0===v.length&&y.jsx("tr",{children:y.jsx("td",{className:"px-4 py-2 text-center",colSpan:7,children:"No visits available"})})]})]})}),b>1&&v.length>0&&y.jsx(m.tl,{children:(0,y.jsxs)(m.ng,{children:[y.jsx(m.nt,{children:y.jsx(m.kN,{onClick:()=>s(r-1),className:1===r?"pointer-events-none opacity-50":"",children:"Previous"})}),Array.from({length:b},(e,t)=>y.jsx(m.nt,{children:y.jsx(m.kN,{onClick:()=>s(t+1),className:r===t+1?"bg-gray-300":"",children:t+1})},t)),y.jsx(m.nt,{children:y.jsx(m.kN,{onClick:()=>s(r+1),className:r===b?"pointer-events-none opacity-50":"",children:"Next"})})]})})]})},j=({employeeDetails:e,selectedEmployee:t,setSelectedEmployee:r,handleDateRangeChange:s,selectedOption:n,handleViewDetails:i,currentPage:l,setCurrentPage:o,isLoading:c})=>{let m=(0,f.useRouter)(),h=(0,a.useMemo)(()=>{if(!e||!e.visitDto)return[];let t=e.visitDto.filter(e=>e.checkinTime&&e.checkoutTime).reduce((e,t)=>{let r=t.purpose?t.purpose.trim().toLowerCase():"unknown";return e[r]||(e[r]=0),e[r]++,e},{});return Object.entries(t).map(([e,t])=>({purpose:e.charAt(0).toUpperCase()+e.slice(1),visits:Number(t)}))},[e]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:"flex justify-between items-center mb-8",children:[y.jsx("h1",{className:"text-3xl font-bold capitalize",children:t}),y.jsx(d.z,{variant:"ghost",size:"lg",onClick:()=>r(null),children:"Back"})]}),(0,y.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",children:[y.jsx(x,{title:"Total Completed Visits",value:e.statsDto?e.statsDto.completedVisitCount:0}),y.jsx(x,{title:"Full Days",value:e.statsDto?e.statsDto.fullDays:0}),y.jsx(x,{title:"Half Days",value:e.statsDto?e.statsDto.halfDays:0}),y.jsx(x,{title:"Absences",value:e.statsDto?e.statsDto.absences:0})]}),y.jsx("div",{className:"mb-8",children:y.jsx(p.default,{selectedOption:n,onDateRangeChange:s})}),c?y.jsx("div",{className:"flex justify-center items-center h-64",children:y.jsx(u.ClipLoader,{color:"#4A90E2",size:50})}):(0,y.jsxs)(y.Fragment,{children:[y.jsx(g,{visits:e.visitDto||[],onViewDetails:e=>{m.push({pathname:`/VisitDetailPage/${e}`,query:{returnTo:"employeeDetails",employeeId:t,startDate:n.split(",")[0],endDate:n.split(",")[1]}})},currentPage:l,onPageChange:o}),y.jsx("div",{className:"mt-8",children:y.jsx(b,{data:h})})]})]})};s()}catch(e){s(e)}})},5571:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r(6859),a=r.n(s),n=r(997);class i extends a(){render(){return(0,n.jsxs)(s.Html,{children:[(0,n.jsxs)(s.Head,{children:[n.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",rel:"stylesheet"}),n.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"})]}),(0,n.jsxs)("body",{children:[n.jsx(s.Main,{}),n.jsx(s.NextScript,{})]})]})}}let l=i},1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))}};
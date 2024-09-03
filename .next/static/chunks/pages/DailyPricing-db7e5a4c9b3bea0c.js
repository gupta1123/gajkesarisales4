(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3791],{27484:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",r="minute",n="hour",a="week",s="month",i="quarter",c="year",o="date",u="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},p="en",m={};m[p]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}};var h="$isDayjsObject",y=function(e){return e instanceof x||!(!e||!e[h])},v=function e(t,r,n){var a;if(!t)return p;if("string"==typeof t){var s=t.toLowerCase();m[s]&&(a=s),r&&(m[s]=r,a=s);var i=t.split("-");if(!a&&i.length>1)return e(i[0])}else{var c=t.name;m[c]=t,a=c}return!n&&a&&(p=a),a||!n&&p},b=function(e,t){if(y(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new x(r)},g={s:f,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(r/60),2,"0")+":"+f(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,s),i=r-a<0,c=t.clone().add(n+(i?-1:1),s);return+(-(n+(r-a)/(i?a-c:c-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(u){return({M:s,y:c,w:a,d:"day",D:o,h:n,m:r,s:t,ms:e,Q:i})[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};g.l=v,g.i=y,g.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function f(e){this.$L=v(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[h]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(l);if(n){var a=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return g},p.isValid=function(){return this.$d.toString()!==u},p.isSame=function(e,t){var r=b(e);return this.startOf(t)<=r&&r<=this.endOf(t)},p.isAfter=function(e,t){return b(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<b(e)},p.$g=function(e,t,r){return g.u(e)?this[t]:this.set(r,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,i){var u=this,l=!!g.u(i)||i,d=g.p(e),f=function(e,t){var r=g.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return l?r:r.endOf("day")},p=function(e,t){return g.w(u.toDate()[e].apply(u.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},m=this.$W,h=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case c:return l?f(1,0):f(31,11);case s:return l?f(1,h):f(0,h+1);case a:var b=this.$locale().weekStart||0,x=(m<b?m+7:m)-b;return f(l?y-x:y+(6-x),h);case"day":case o:return p(v+"Hours",0);case n:return p(v+"Minutes",1);case r:return p(v+"Seconds",2);case t:return p(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(a,i){var u,l=g.p(a),d="set"+(this.$u?"UTC":""),f=((u={}).day=d+"Date",u[o]=d+"Date",u[s]=d+"Month",u[c]=d+"FullYear",u[n]=d+"Hours",u[r]=d+"Minutes",u[t]=d+"Seconds",u[e]=d+"Milliseconds",u)[l],p="day"===l?this.$D+(i-this.$W):i;if(l===s||l===c){var m=this.clone().set(o,1);m.$d[f](p),m.init(),this.$d=m.set(o,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[g.p(e)]()},p.add=function(e,i){var o,u=this;e=Number(e);var l=g.p(i),d=function(t){var r=b(u);return g.w(r.date(r.date()+Math.round(t*e)),u)};if(l===s)return this.set(s,this.$M+e);if(l===c)return this.set(c,this.$y+e);if("day"===l)return d(1);if(l===a)return d(7);var f=((o={})[r]=6e4,o[n]=36e5,o[t]=1e3,o)[l]||1,p=this.$d.getTime()+e*f;return g.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||u;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=g.z(this),s=this.$H,i=this.$m,c=this.$M,o=r.weekdays,l=r.months,f=r.meridiem,p=function(e,r,a,s){return e&&(e[r]||e(t,n))||a[r].slice(0,s)},m=function(e){return g.s(s%12||12,e,"0")},h=f||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(d,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return g.s(t.$y,4,"0");case"M":return c+1;case"MM":return g.s(c+1,2,"0");case"MMM":return p(r.monthsShort,c,l,3);case"MMMM":return p(l,c);case"D":return t.$D;case"DD":return g.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(r.weekdaysMin,t.$W,o,2);case"ddd":return p(r.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(s);case"HH":return g.s(s,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return h(s,i,!0);case"A":return h(s,i,!1);case"m":return String(i);case"mm":return g.s(i,2,"0");case"s":return String(t.$s);case"ss":return g.s(t.$s,2,"0");case"SSS":return g.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")})},p.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},p.diff=function(e,o,u){var l,d=this,f=g.p(o),p=b(e),m=(p.utcOffset()-this.utcOffset())*6e4,h=this-p,y=function(){return g.m(d,p)};switch(f){case c:l=y()/12;break;case s:l=y();break;case i:l=y()/3;break;case a:l=(h-m)/6048e5;break;case"day":l=(h-m)/864e5;break;case n:l=h/36e5;break;case r:l=h/6e4;break;case t:l=h/1e3;break;default:l=h}return u?l:g.a(l)},p.daysInMonth=function(){return this.endOf(s).$D},p.$locale=function(){return m[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=v(e,t,!0);return n&&(r.$L=n),r},p.clone=function(){return g.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),w=x.prototype;return b.prototype=w,[["$ms",e],["$s",t],["$m",r],["$H",n],["$W","day"],["$M",s],["$y",c],["$D",o]].forEach(function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),b.extend=function(e,t){return e.$i||(e(t,x,b),e.$i=!0),b},b.locale=v,b.isDayjs=y,b.unix=function(e){return b(1e3*e)},b.en=m[p],b.Ls=m,b.p={},b},e.exports=t()},82422:function(e,t,r){"use strict";r.d(t,{Ol:function(){return v},SZ:function(){return g},Zb:function(){return y},aY:function(){return x},eW:function(){return w},ll:function(){return b}});var n=r(59499),a=r(4730),s=r(67294),i=r(82359),c=r(85893),o=["className"],u=["className"],l=["className"],d=["className"],f=["className"],p=["className"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y=s.forwardRef(function(e,t){var r=e.className,n=(0,a.Z)(e,o);return(0,c.jsx)("div",h({ref:t,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",r)},n))});y.displayName="Card";var v=s.forwardRef(function(e,t){var r=e.className,n=(0,a.Z)(e,u);return(0,c.jsx)("div",h({ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r)},n))});v.displayName="CardHeader";var b=s.forwardRef(function(e,t){var r=e.className,n=(0,a.Z)(e,l);return(0,c.jsx)("h3",h({ref:t,className:(0,i.cn)("font-semibold leading-none tracking-tight",r)},n))});b.displayName="CardTitle";var g=s.forwardRef(function(e,t){var r=e.className,n=(0,a.Z)(e,d);return(0,c.jsx)("p",h({ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r)},n))});g.displayName="CardDescription";var x=s.forwardRef(function(e,t){var r=e.className,n=(0,a.Z)(e,f);return(0,c.jsx)("div",h({ref:t,className:(0,i.cn)("p-6 pt-0",r)},n))});x.displayName="CardContent";var w=s.forwardRef(function(e,t){var r=e.className,n=(0,a.Z)(e,p);return(0,c.jsx)("div",h({ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",r)},n))});w.displayName="CardFooter"},18190:function(e,t,r){"use strict";r.d(t,{I:function(){return l}});var n=r(59499),a=r(4730),s=r(67294),i=r(82359),c=r(85893),o=["className","type"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var l=s.forwardRef(function(e,t){var r=e.className,s=e.type,l=(0,a.Z)(e,o);return(0,c.jsx)("input",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({type:s,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t},l))});l.displayName="Input"},14031:function(e,t,r){"use strict";r.d(t,{Bw:function(){return O},Ph:function(){return g},Ql:function(){return $},i4:function(){return w},ki:function(){return x}});var n=r(59499),a=r(4730),s=r(67294),i=r(62469),c=r(72116),o=r(82359),u=r(85893),l=["className","children"],d=["className"],f=["className"],p=["className","children","position"],m=["className"],h=["className","children"],y=["className"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g=c.fC;c.ZA;var x=c.B4,w=s.forwardRef(function(e,t){var r=e.className,n=e.children,s=(0,a.Z)(e,l);return(0,u.jsxs)(c.xz,b(b({ref:t,className:(0,o.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",r)},s),{},{children:[n,(0,u.jsx)(c.JO,{asChild:!0,children:(0,u.jsx)(i.jnn,{className:"h-4 w-4 opacity-50"})})]}))});w.displayName=c.xz.displayName;var j=s.forwardRef(function(e,t){var r=e.className,n=(0,a.Z)(e,d);return(0,u.jsx)(c.u_,b(b({ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",r)},n),{},{children:(0,u.jsx)(i.g8U,{})}))});j.displayName=c.u_.displayName;var N=s.forwardRef(function(e,t){var r=e.className,n=(0,a.Z)(e,f);return(0,u.jsx)(c.$G,b(b({ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",r)},n),{},{children:(0,u.jsx)(i.v4q,{})}))});N.displayName=c.$G.displayName;var O=s.forwardRef(function(e,t){var r=e.className,n=e.children,s=e.position,i=void 0===s?"popper":s,l=(0,a.Z)(e,p);return(0,u.jsx)(c.h_,{children:(0,u.jsxs)(c.VY,b(b({ref:t,className:(0,o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:i},l),{},{children:[(0,u.jsx)(j,{}),(0,u.jsx)(c.l_,{className:(0,o.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),(0,u.jsx)(N,{})]}))})});O.displayName=c.VY.displayName,s.forwardRef(function(e,t){var r=e.className,n=(0,a.Z)(e,m);return(0,u.jsx)(c.__,b({ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",r)},n))}).displayName=c.__.displayName;var $=s.forwardRef(function(e,t){var r=e.className,n=e.children,s=(0,a.Z)(e,h);return(0,u.jsxs)(c.ck,b(b({ref:t,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r)},s),{},{children:[(0,u.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,u.jsx)(c.wU,{children:(0,u.jsx)(i.nQG,{className:"h-4 w-4"})})}),(0,u.jsx)(c.eT,{children:n})]}))});$.displayName=c.ck.displayName,s.forwardRef(function(e,t){var r=e.className,n=(0,a.Z)(e,y);return(0,u.jsx)(c.Z0,b({ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",r)},n))}).displayName=c.Z0.displayName},29668:function(e,t,r){"use strict";r.r(t);var n=r(50029),a=r(64687),s=r.n(a),i=r(67294),c=r(45007),o=r(82422),u=r(14031),l=r(18190),d=r(20373),f=r(27484),p=r.n(f),m=r(26495),h=r(23148);r(13373);var y=r(85893);h.kL.register(h.uw,h.f$,h.ZL,h.Dx,h.u,h.De),t.default=function(){var e,t=(0,i.useState)([]),r=t[0],a=t[1],f=(0,i.useState)([]),h=(f[0],f[1]),v=(0,i.useState)(""),b=v[0],g=v[1],x=(0,i.useState)(p()().format("YYYY-MM-DD")),w=x[0],j=x[1],N=(0,i.useState)([]),O=N[0],$=N[1],D=(0,i.useState)(0),k=D[0],M=D[1],S=(0,i.useState)(!1),_=S[0],C=S[1],P=(0,i.useState)(!1),Z=P[0],Y=P[1],R=(0,c.v9)(function(e){return e.auth.token}),E=(0,c.v9)(function(e){return e.auth.role}),T=(0,c.v9)(function(e){return e.auth.teamId});(0,c.v9)(function(e){return e.auth.username}),(0,i.useEffect)(function(){A()},[b,w]);var A=(e=(0,n.Z)(s().mark(function e(){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,Promise.all([L(),z()]);case 3:C(!1);case 4:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)}),L=(0,i.useCallback)((0,n.Z)(s().mark(function e(){var t,r,n,i,c,o,u,l,d;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=p()(w).startOf("day").format("YYYY-MM-DD"),r=p()(w).endOf("day").format("YYYY-MM-DD"),n="MANAGER"===E?"https://api.gajkesaristeels.in/brand/getByTeamAndDate?id=".concat(T,"&start=").concat(t,"&end=").concat(r):"https://api.gajkesaristeels.in/brand/getByDateRange?start=".concat(t,"&end=").concat(r),e.next=6,fetch(n,{headers:{Authorization:"Bearer ".concat(R)}});case 6:return i=e.sent,e.next=9,i.json();case 9:a(c=e.sent),$(o=Array.from(new Set(c.map(function(e){var t;return"gajkesari"===e.brandName.toLowerCase()?e.city:null===(t=e.employeeDto)||void 0===t?void 0:t.city}).filter(function(e){return e&&""!==e.trim()})))),!b&&o.length>0&&g(o[0]),(u=c.find(function(e){return"gajkesari"===e.brandName.toLowerCase()}))?(M(u.price),Y((null===(l=u.employeeDto)||void 0===l?void 0:l.firstName)==="Test"&&(null===(d=u.employeeDto)||void 0===d?void 0:d.lastName)==="1")):(M(0),Y(!1)),e.next=24;break;case 18:e.prev=18,e.t0=e.catch(0),console.error("Error fetching brand data:",e.t0),a([]),M(0),Y(!1);case 24:case"end":return e.stop()}},e,null,[[0,18]])})),[E,w,T,R,b]),z=(0,i.useCallback)((0,n.Z)(s().mark(function e(){var t,r,n;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=p()(w).subtract(1,"day").format("YYYY-MM-DD"),e.prev=1,r="MANAGER"===E?"https://api.gajkesaristeels.in/brand/getByTeamAndDate?id=".concat(T,"&start=").concat(t,"&end=").concat(t):"https://api.gajkesaristeels.in/brand/getByDateRange?start=".concat(t,"&end=").concat(t),e.next=5,fetch(r,{headers:{Authorization:"Bearer ".concat(R)}});case 5:return n=e.sent,e.next=8,n.json();case 8:h(e.sent),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error("Error fetching previous day data:",e.t0),h([]);case 16:case"end":return e.stop()}},e,null,[[1,12]])})),[E,w,T,R]),H=r.filter(function(e){var t;return"gajkesari"===e.brandName.toLowerCase()?e.city===b:(null===(t=e.employeeDto)||void 0===t?void 0:t.city)===b}),I={labels:H.map(function(e){return e.brandName}).concat(["Gajkesari"]),datasets:[{label:"Competitor Prices (₹/ton)",data:H.map(function(e){return e.price}).concat([k]),backgroundColor:H.map(function(){return"rgba(0, 0, 0, 0.6)"}).concat(["rgba(128, 128, 128, 0.6)"]),borderColor:H.map(function(){return"rgba(0, 0, 0, 1)"}).concat(["rgba(128, 128, 128, 1)"]),borderWidth:1}]};return(0,y.jsx)("div",{className:"container-pricing mx-auto py-8 px-4 max-w-6xl",children:(0,y.jsxs)(o.Zb,{className:"shadow-lg",children:[(0,y.jsx)(o.Ol,{className:"bg-white",children:(0,y.jsx)(o.ll,{className:"text-3xl font-bold text-black",children:"Pricing Report"})}),(0,y.jsxs)(o.aY,{className:"p-6",children:[(0,y.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,y.jsxs)("div",{className:"flex space-x-4",children:[(0,y.jsxs)(u.Ph,{value:b,onValueChange:g,children:[(0,y.jsx)(u.i4,{className:"w-[150px]",children:(0,y.jsx)(u.ki,{placeholder:"Select City"})}),(0,y.jsx)(u.Bw,{children:O.map(function(e){return(0,y.jsx)(u.Ql,{value:e,children:e},e)})})]}),(0,y.jsx)(l.I,{type:"date",value:w,onChange:function(e){return j(e.target.value)},className:"w-[150px]"})]}),Z&&k>0&&(0,y.jsx)("div",{className:"text-right",children:(0,y.jsxs)("h2",{className:"text-2xl",children:["Gajkesari Rate: ",(0,y.jsxs)("span",{className:"font-bold",children:["₹",k,"/ton"]})]})})]}),_?(0,y.jsx)("div",{className:"flex justify-center items-center h-64",children:(0,y.jsx)(d.Z,{color:"#000000",size:50})}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"overflow-x-auto mb-8",children:(0,y.jsxs)("table",{className:"w-full border-collapse border-none shadow-lg rounded-lg overflow-hidden",children:[(0,y.jsx)("thead",{children:(0,y.jsxs)("tr",{className:"bg-gray-50",children:[(0,y.jsx)("th",{className:"p-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider",children:"Competitor"}),(0,y.jsx)("th",{className:"p-4 text-right text-sm font-semibold text-gray-600 uppercase tracking-wider",children:"Price (₹/ton)"}),(0,y.jsx)("th",{className:"p-4 text-right text-sm font-semibold text-gray-600 uppercase tracking-wider",children:"Field Officer"})]})}),(0,y.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:H.map(function(e){return(0,y.jsxs)("tr",{className:"hover:bg-gray-50 transition-colors duration-150 ease-in-out",children:[(0,y.jsx)("td",{className:"p-4 whitespace-nowrap text-sm font-medium text-gray-900",children:e.brandName}),(0,y.jsxs)("td",{className:"p-4 whitespace-nowrap text-sm text-gray-500 text-right",children:["₹",e.price.toFixed(2)]}),(0,y.jsx)("td",{className:"p-4 whitespace-nowrap text-sm text-gray-500 text-right",children:"gajkesari"===e.brandName.toLowerCase()?e.city:e.employeeDto?"".concat(e.employeeDto.firstName," ").concat(e.employeeDto.lastName):"N/A"})]},e.id)})})]})}),(0,y.jsx)("div",{className:"h-96",children:(0,y.jsx)(m.$Q,{data:I,options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0,ticks:{callback:function(e){var t="number"==typeof e?e:parseFloat(e);return"₹".concat(t)}}}},plugins:{legend:{display:!1},tooltip:{callbacks:{label:function(e){return"₹".concat(e.parsed.y,"/ton")}}}}}})})]})]})]})})}},92495:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DailyPricing",function(){return r(29668)}])},13373:function(){},20373:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(67294),a={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function s(e){var t=function(e){if("number"==typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var n=(e.match(/[^0-9]*$/)||"").toString();return a[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},o=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var a=document.createElement("style");document.head.appendChild(a);var s=a.sheet,i="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return s&&s.insertRule(i,0),n}("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip"),u=function(e){var t=e.loading,r=e.color,a=void 0===r?"#000000":r,u=e.speedMultiplier,l=e.cssOverride,d=e.size,f=void 0===d?35:d,p=c(e,["loading","color","speedMultiplier","cssOverride","size"]),m=i({background:"transparent !important",width:s(f),height:s(f),borderRadius:"100%",border:"2px solid",borderTopColor:a,borderBottomColor:"transparent",borderLeftColor:a,borderRightColor:a,display:"inline-block",animation:"".concat(o," ").concat(.75/(void 0===u?1:u),"s 0s infinite linear"),animationFillMode:"both"},void 0===l?{}:l);return void 0===t||t?n.createElement("span",i({style:m},p)):null}},26495:function(e,t,r){"use strict";r.d(t,{$Q:function(){return d},kL:function(){return o},x1:function(){return l}});var n=r(67294),a=r(23148);let s="label";function i(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,n=[];e.datasets=t.map(t=>{let a=e.datasets.find(e=>e[r]===t[r]);return!a||!t.data||n.includes(a)?{...t}:(n.push(a),Object.assign(a,t),a)})}let o=(0,n.forwardRef)(function(e,t){let{height:r=150,width:o=300,redraw:u=!1,datasetIdKey:l,type:d,data:f,options:p,plugins:m=[],fallbackContent:h,updateMode:y,...v}=e,b=(0,n.useRef)(null),g=(0,n.useRef)(),x=()=>{b.current&&(g.current=new a.kL(b.current,{type:d,data:function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,n={labels:[],datasets:[]};return t=e.labels,n.labels=t,c(n,e.datasets,r),n}(f,l),options:p&&{...p},plugins:m}),i(t,g.current))},w=()=>{i(t,null),g.current&&(g.current.destroy(),g.current=null)};return(0,n.useEffect)(()=>{!u&&g.current&&p&&function(e,t){let r=e.options;r&&t&&Object.assign(r,t)}(g.current,p)},[u,p]),(0,n.useEffect)(()=>{if(!u&&g.current){var e,t;e=g.current.config.data,t=f.labels,e.labels=t}},[u,f.labels]),(0,n.useEffect)(()=>{!u&&g.current&&f.datasets&&c(g.current.config.data,f.datasets,l)},[u,f.datasets]),(0,n.useEffect)(()=>{g.current&&(u?(w(),setTimeout(x)):g.current.update(y))},[u,p,f.labels,f.datasets,y]),(0,n.useEffect)(()=>{g.current&&(w(),setTimeout(x))},[d]),(0,n.useEffect)(()=>(x(),()=>w()),[]),n.createElement("canvas",Object.assign({ref:b,role:"img",height:r,width:o},v),h)});function u(e,t){return a.kL.register(t),(0,n.forwardRef)((t,r)=>n.createElement(o,Object.assign({},t,{ref:r,type:e})))}let l=u("line",a.ST),d=u("bar",a.vn)}},function(e){e.O(0,[2196,9545,6066,2116,9676,2888,9774,179],function(){return e(e.s=92495)}),_N_E=e.O()}]);
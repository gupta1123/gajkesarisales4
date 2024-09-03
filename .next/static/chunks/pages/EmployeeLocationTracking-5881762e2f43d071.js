(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6542],{90241:function(e,t,n){"use strict";n.r(t);var a=n(50029),r=n(64687),o=n.n(r),c=n(67294),i=n(45007),s=n(87066),l=n(24613),u=n(52403);n(15364);var p=n(31675),d=n.n(p),f=n(85893),m="https://api.gajkesaristeels.in";t.default=function(){var e,t,n,r,p=(0,c.useState)([]),h=p[0],g=p[1],v=(0,c.useState)(null),y=(v[0],v[1]),_=(0,c.useState)(null),k=_[0],w=_[1],x=(0,c.useRef)(null),E=(0,c.useRef)(null),N=(0,c.useRef)(null),T=(0,c.useState)(null),L=T[0],b=T[1],P=(0,i.v9)(function(e){return e.auth.token});(0,c.useEffect)(function(){return P?(A(),j()):w("Not authenticated. Please log in."),function(){E.current&&E.current.remove()}},[P]),(0,c.useEffect)(function(){L&&C()},[L]);var j=(e=(0,a.Z)(o().mark(function e(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.post("https://account.olamaps.io/realms/olamaps/protocol/openid-connect/token",new URLSearchParams({grant_type:"client_credentials",scope:"openid",client_id:"7ba2810b-f481-4e31-a0c6-d436b0c7c1eb",client_secret:"klymi04gaquWCnpa57hBEpMXR7YPhkLD"}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 3:b(e.sent.data.access_token),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error getting access token:",e.t0),w("Failed to authenticate with Ola Maps.");case 11:case"end":return e.stop()}},e,null,[[0,7]])})),function(){return e.apply(this,arguments)}),C=(t=(0,a.Z)(o().mark(function e(){var t;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(x.current&&!E.current&&L)){e.next=14;break}return e.prev=1,e.next=4,s.Z.get("https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",{headers:{Authorization:"Bearer ".concat(L)}});case 4:t=e.sent.data,E.current=new l.Map({container:x.current,style:t,center:[78.9629,20.5937],zoom:4,transformRequest:function(e,t){if(e.startsWith("https://api.olamaps.io"))return{url:e,headers:{Authorization:"Bearer ".concat(L)}}}}),E.current.addControl(new l.NavigationControl,"top-left"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Error initializing map:",e.t0),w("Failed to load the map. Please try again later.");case 14:case"end":return e.stop()}},e,null,[[1,10]])})),function(){return t.apply(this,arguments)}),A=(n=(0,a.Z)(o().mark(function e(){var t;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(m,"/employee/getAll"),{headers:{Authorization:"Bearer ".concat(P)}});case 3:Array.isArray((t=e.sent).data)?g(t.data.sort(function(e,t){return e.firstName.localeCompare(t.firstName)})):w("Unexpected data format received from server"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),w("Failed to fetch employees. Please try again later.");case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(){return n.apply(this,arguments)}),Z=(r=(0,a.Z)(o().mark(function e(t){var n;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(m,"/employee/getLiveLocation?id=").concat(t),{headers:{Authorization:"Bearer ".concat(P)}});case 3:y((n=e.sent).data),S(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w("Failed to fetch employee location. Please try again.");case 11:case"end":return e.stop()}},e,null,[[0,8]])})),function(e){return r.apply(this,arguments)}),S=function(e){if(E.current){N.current&&N.current.remove(),N.current=new l.Marker().setLngLat([e.longitude,e.latitude]).addTo(E.current);var t,n,a=(t=e.updatedAt,n=e.updatedTime,new Date("".concat(t,"T").concat(n)).toLocaleString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})),r=new l.Popup({offset:25}).setHTML('<div style="font-family: Arial, sans-serif; padding: 10px;">\n                    <h3 style="margin: 0 0 10px 0; color: #333;">'.concat(e.empName,'</h3>\n                    <p style="margin: 0; color: #666;">\n                        <strong>Last updated:</strong><br>\n                        ').concat(a,"\n                    </p>\n                </div>"));N.current.setPopup(r),E.current.flyTo({center:[e.longitude,e.latitude],zoom:12,essential:!0})}},z=h.map(function(e){return{value:e.id,label:"".concat(e.firstName," ").concat(e.lastName)}});return P?(0,f.jsxs)("div",{className:d().container,children:[(0,f.jsxs)("div",{className:d().sidebar,children:[(0,f.jsx)("h2",{className:d().title,children:"Employee Locations"}),k&&(0,f.jsx)("p",{className:d().error,children:k}),(0,f.jsx)(u.ZP,{options:z,onChange:function(e){return e&&Z(e.value)},placeholder:"Select an employee",className:d().select})]}),(0,f.jsx)("div",{ref:x,className:d().mapContainer})]}):(0,f.jsx)("div",{children:"Please log in to view employee locations."})}},54087:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/EmployeeLocationTracking",function(){return n(90241)}])},15364:function(){},31675:function(e){e.exports={container:"EmployeeLocationTracking_container__vlj6G",sidebar:"EmployeeLocationTracking_sidebar__bATyT",title:"EmployeeLocationTracking_title__MjoFs",error:"EmployeeLocationTracking_error__p89PV",select:"EmployeeLocationTracking_select__8N3VT",mapContainer:"EmployeeLocationTracking_mapContainer__GYahY",tooltip:"EmployeeLocationTracking_tooltip__ogQ1I"}}},function(e){e.O(0,[2644,9545,2403,3015,2888,9774,179],function(){return e(e.s=54087)}),_N_E=e.O()}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{SaUy:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),i=a.n(n),o=a("eomm"),l=a.n(o),r=a("tc1D"),p=a("sDeB"),d=a("3dwh"),s=a("o9J2"),c=a("CxiY"),m=a("4dTo"),u=a("WXeD"),g=a("vOnD"),f=g.a.div.withConfig({displayName:"style__SummaryContainer",componentId:"sc-1rroaxc-0"})([""]),b=g.a.div.withConfig({displayName:"style__UpcomingContainer",componentId:"sc-1rroaxc-1"})(["text-align:center;padding:40px 0 50px;.container{position:relative;}"]),h=g.a.div.withConfig({displayName:"style__Summary",componentId:"sc-1rroaxc-2"})(["margin-top:35px;min-height:400px;max-width:1000px;display:block;position:relative;text-align:left;"]),x=a("A80k"),y=a("5DmR"),v=a("0NY6"),w=a("NGGp"),_=i.a.createElement,N=function(t){var e=t.roadmap;if(e.upcoming)return _(i.a.Fragment,null,_(y.a,{roadmap:e}),_(b,null,_(x.a,{guide:{fileName:"upcoming"}})));var n=e.path.replace(/^\//,""),o=a("OP1z")("./".concat(n)).default;return _(f,null,_(y.a,{roadmap:e}),_(h,{className:"container"},_(w.a,null,_(o,null)),_(v.a,{title:e.description,url:e.url})))},k=a("TSYQ"),C=a.n(k),I=a("IP2g"),S=a("8tEE"),q=g.a.div.withConfig({displayName:"style__SummaryContainer",componentId:"rhlp1q-0"})([""]),O=g.a.div.withConfig({displayName:"style__Summary",componentId:"rhlp1q-1"})(["text-align:left;min-height:400px;display:flex;.container{position:relative;}"]),P=g.a.div.withConfig({displayName:"style__PageHeader",componentId:"rhlp1q-2"})(["padding-top:20px;padding-bottom:20px;h3{margin-bottom:4px;font-weight:600;font-size:21px;}p{margin-bottom:0;font-size:14px;color:#696969;a{color:#101010;}}"]),j=g.a.div.withConfig({displayName:"style__RoadmapMeta",componentId:"rhlp1q-3"})(["flex:1;"]),z=g.a.div.withConfig({displayName:"style__ShareRoadmap",componentId:"rhlp1q-4"})(["display:flex;align-items:center;a{margin-bottom:0;& + a{margin-left:5px;}}"]),D=g.a.div.withConfig({displayName:"style__MobileNavHeader",componentId:"rhlp1q-5"})(["padding:10px 0;display:flex;align-items:center;position:relative;"]),E=g.a.button.withConfig({displayName:"style__SidebarButton",componentId:"rhlp1q-6"})(["background:transparent;border:none !important;box-shadow:none !important;outline:none !important;-webkit-appearance:none;display:flex;align-items:center;svg{margin-right:10px;}"]),T=g.a.div.withConfig({displayName:"style__PageDetail",componentId:"rhlp1q-7"})(["padding:25px 0 100px;"]),M=g.a.h1.withConfig({displayName:"style__PageTitle",componentId:"rhlp1q-8"})(["font-size:40px;font-weight:700;"]),X=g.a.div.withConfig({displayName:"style__Sidebar",componentId:"rhlp1q-9"})(["padding-bottom:150px;ul{list-style:none;margin:0;padding:0;}.bullet{display:inline-block;margin-right:7px;width:7px;height:7px;min-width:7px;border-radius:100%;background:#efefef;transform:translateX(-4px);transition:background 0.5s ease;}.links-group{padding:30px 0 10px;width:260px;h3{font-size:12px;font-weight:600;text-transform:uppercase;padding-left:20px;}}.progress-badge{position:relative;top:-2px;margin-left:5px;}.links-group.in-progress{opacity:0.3;}.links-group li{list-style:none;margin:7px 0;a{font-size:14px;font-weight:normal;color:#696969;}.bullet{display:inline-block;margin-right:12px;width:7px;height:7px;min-width:7px;border-radius:100%;background:#efefef;transform:translateX(-4px);transition:background 0.5s ease;}&.active a{color:#101010;}&.active .bullet{background:#101010;}}"]),R=g.a.div.withConfig({displayName:"style__DesktopSidebarWrap",componentId:"rhlp1q-10"})(["border-left:1px solid #efefef;","{position:sticky;top:0;background:white;}"],X),U=g.a.div.withConfig({displayName:"style__MobileSidebarWrap",componentId:"rhlp1q-11"})(["position:absolute;z-index:999;background:white;width:100%;left:0;bottom:100%;overflow-y:scroll;box-shadow:rgba(0,0,0,0.1) 0 10px 20px;top:calc(100% + 1px);transition:bottom 0.5s ease 0s;&.visible{bottom:-50vh;}"]),W=Object(g.a)(X).withConfig({displayName:"style__MobileSidebar",componentId:"rhlp1q-12"})(["border-left:1px solid #efefef;margin-left:12px;padding-bottom:20px;.links-group{width:auto;}.progress-badge{position:relative;top:-2px;margin-left:5px;}"]),H=a("wHSu"),J=a("7T8v"),Y=a("QVTM"),B=i.a.createElement,G=function(t){var e=t.roadmap,i=Object(n.useState)(!1),o=i[0],l=i[1],r=e.sidebar,p=void 0===r?{}:r,d=e.page,s=void 0===d?{}:d,c=e.author,u=void 0===c?{}:c,g=Object.keys(p||{}).map((function(t,e){if(!t.startsWith("_")){var a=0!==e;return B("div",{className:"links-group ".concat(a?"in-progress":""),key:t},B("h3",null,t,a&&B("span",{className:"badge badge-warning progress-badge"},"In Progress")),B("ul",null,p[t].map((function(t){var e=t.url===s.url,a=t.url==="".concat(s.url,"/summary");return B("li",{className:C()({active:e||a}),key:t.url},B("a",{href:t.url},B("span",{className:"bullet"}),t.title))}))))}})),f=s.path.replace(/^\//,""),b=a("OP1z")("./".concat(f)).default;return B(q,null,B(P,{className:"border-top border-bottom text-center text-md-left"},B("div",{className:"container d-flex align-items-center flex-column flex-md-row"},B(j,null,B("h3",null,e.title),B("p",null,"Roadmap contributed by ",B("a",{href:u.url,target:"_blank"},u.name),e.contributorsCount>1&&' and <a href="'.concat(e.contributorsUrl,'">').concat(e.contributorsCount," others</a>"))),B(z,{className:"mt-2 mt-md-0"},B(Y.a,{href:m.url.repo,target:"_blank"},B(I.a,{icon:S.c})),B(Y.a,{href:Object(J.a)({text:e.title,url:e.url}),target:"_blank"},B(I.a,{icon:S.a})),B(Y.a,{href:Object(J.d)({text:e.title,url:e.url}),target:"_blank"},B(I.a,{icon:S.g})),B(Y.a,{href:Object(J.c)({text:e.title,url:e.url}),target:"_blank"},B(I.a,{icon:S.e}))))),B(D,{className:"border-bottom d-block d-md-none"},B("div",{className:"container"},B(E,{onClick:function(){return l((function(t){return!t}))}},B(I.a,{icon:H.b}),s.title)),B(U,{className:C()({visible:o})},B("div",{className:"container"},B(W,null,g)))),B(O,{className:"container"},B(R,{className:"d-none d-md-block"},B(X,null,g)),B(T,null,B(M,null,s.title),B(w.a,null,B(b,null)))))},Q=i.a.createElement,A=function(t){var e,a,n=t.roadmap,i=t.canonical;if(!n)return Q(l.a,{statusCode:404});var o=n.upcoming||!n.detailed;return Q(r.a,null,Q(u.a,{canonical:i,title:(null===n||void 0===n?void 0:null===(e=n.seo)||void 0===e?void 0:e.title)||n.title,description:(null===n||void 0===n?void 0:null===(a=n.seo)||void 0===a?void 0:a.description)||n.description,keywords:(null===n||void 0===n?void 0:n.keywords)||[]}),Q(p.a,null),Q(o?N:G,{roadmap:n}),Q(d.a,null))};A.getInitialProps=Object(s.a)((function(t){var e=t.req;return{canonical:"".concat(m.url.web).concat(e.url),roadmap:Object(c.a)(e)}}));e.default=A},uhS5:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[roadmap]",function(){return a("SaUy")}])}},[["uhS5",0,1,3,6,12,11,10,2,5,7,8,9,13,4]]]);
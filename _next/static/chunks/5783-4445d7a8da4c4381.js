"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5783],{65783:function(e,a,r){r.d(a,{UT:function(){return HashRouter},lr:function(){return useSearchParams}});var t=r(27378),n=r(14935),c=r(46403);function isHtmlElement(e){return null!=e&&"string"==typeof e.tagName}function createSearchParams(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((a,r)=>{let t=e[r];return a.concat(Array.isArray(t)?t.map(e=>[r,e]):[[r,t]])},[]))}function getSearchParamsForLocation(e,a){let r=createSearchParams(e);for(let e of a.keys())r.has(e)||a.getAll(e).forEach(a=>{r.append(e,a)});return r}function HashRouter(e){let{basename:a,children:r,window:o}=e,s=t.useRef();null==s.current&&(s.current=(0,c.q_)({window:o,v5Compat:!0}));let u=s.current,[i,l]=t.useState({action:u.action,location:u.location});return t.useLayoutEffect(()=>u.listen(l),[u]),t.createElement(n.F0,{basename:a,children:r,location:i.location,navigationType:i.action,navigator:u})}function useSearchParams(e){let a=t.useRef(createSearchParams(e)),r=(0,n.TH)(),c=t.useMemo(()=>getSearchParamsForLocation(r.search,a.current),[r.search]),o=(0,n.s0)(),s=t.useCallback((e,a)=>{let r=createSearchParams("function"==typeof e?e(c):e);o("?"+r,a)},[o,c]);return[c,s]}}}]);
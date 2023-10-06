import{r as a}from"./react-c4227e47.js";import{i as d,p as I,m as T,j as R,A as L,s as w,g as O,r as M,a as k}from"./@remix-run-8989dd9f.js";/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},y.apply(this,arguments)}const B=a.createContext(null),z=a.createContext(null),x=a.createContext(null),b=a.createContext(null),C=a.createContext({outlet:null,matches:[],isDataRoute:!1}),j=a.createContext(null);function ne(t,e){let{relative:r}=e===void 0?{}:e;E()||d(!1);let{basename:n,navigator:l}=a.useContext(x),{hash:o,pathname:s,search:u}=_(t,{relative:r}),i=s;return n!=="/"&&(i=s==="/"?n:R([n,s])),l.createHref({pathname:i,search:u,hash:o})}function E(){return a.useContext(b)!=null}function U(){return E()||d(!1),a.useContext(b).location}function D(t){a.useContext(x).static||a.useLayoutEffect(t)}function ae(){let{isDataRoute:t}=a.useContext(C);return t?H():S()}function S(){E()||d(!1);let t=a.useContext(B),{basename:e,navigator:r}=a.useContext(x),{matches:n}=a.useContext(C),{pathname:l}=U(),o=JSON.stringify(O(n).map(i=>i.pathnameBase)),s=a.useRef(!1);return D(()=>{s.current=!0}),a.useCallback(function(i,c){if(c===void 0&&(c={}),!s.current)return;if(typeof i=="number"){r.go(i);return}let p=M(i,JSON.parse(o),l,c.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:R([e,p.pathname])),(c.replace?r.replace:r.push)(p,c.state,c)},[e,r,o,l,t])}function _(t,e){let{relative:r}=e===void 0?{}:e,{matches:n}=a.useContext(C),{pathname:l}=U(),o=JSON.stringify(O(n).map(s=>s.pathnameBase));return a.useMemo(()=>M(t,JSON.parse(o),l,r==="path"),[t,o,l,r])}function A(t,e){return V(t,e)}function V(t,e,r){E()||d(!1);let{navigator:n}=a.useContext(x),{matches:l}=a.useContext(C),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let i=U(),c;if(e){var p;let f=typeof e=="string"?I(e):e;u==="/"||(p=f.pathname)!=null&&p.startsWith(u)||d(!1),c=f}else c=i;let v=c.pathname||"/",g=u==="/"?v:v.slice(u.length)||"/",m=T(t,{pathname:g}),h=Q(m&&m.map(f=>Object.assign({},f,{params:Object.assign({},s,f.params),pathname:R([u,n.encodeLocation?n.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:R([u,n.encodeLocation?n.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),l,r);return e&&h?a.createElement(b.Provider,{value:{location:y({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:L.Pop}},h):h}function W(){let t=$(),e=k(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},e),r?a.createElement("pre",{style:l},r):null,o)}const q=a.createElement(W,null);class G extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error?a.createElement(C.Provider,{value:this.props.routeContext},a.createElement(j.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function K(t){let{routeContext:e,match:r,children:n}=t,l=a.useContext(B);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(C.Provider,{value:e},n)}function Q(t,e,r){var n;if(e===void 0&&(e=[]),r===void 0&&(r=null),t==null){var l;if((l=r)!=null&&l.errors)t=r.matches;else return null}let o=t,s=(n=r)==null?void 0:n.errors;if(s!=null){let u=o.findIndex(i=>i.route.id&&(s==null?void 0:s[i.route.id]));u>=0||d(!1),o=o.slice(0,Math.min(o.length,u+1))}return o.reduceRight((u,i,c)=>{let p=i.route.id?s==null?void 0:s[i.route.id]:null,v=null;r&&(v=i.route.errorElement||q);let g=e.concat(o.slice(0,c+1)),m=()=>{let h;return p?h=v:i.route.Component?h=a.createElement(i.route.Component,null):i.route.element?h=i.route.element:h=u,a.createElement(K,{match:i,routeContext:{outlet:u,matches:g,isDataRoute:r!=null},children:h})};return r&&(i.route.ErrorBoundary||i.route.errorElement||c===0)?a.createElement(G,{location:r.location,revalidation:r.revalidation,component:v,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var J=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(J||{}),P=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(P||{});function X(t){let e=a.useContext(B);return e||d(!1),e}function Y(t){let e=a.useContext(z);return e||d(!1),e}function Z(t){let e=a.useContext(C);return e||d(!1),e}function F(t){let e=Z(),r=e.matches[e.matches.length-1];return r.route.id||d(!1),r.route.id}function $(){var t;let e=a.useContext(j),r=Y(P.UseRouteError),n=F(P.UseRouteError);return e||((t=r.errors)==null?void 0:t[n])}function H(){let{router:t}=X(J.UseNavigateStable),e=F(P.UseNavigateStable),r=a.useRef(!1);return D(()=>{r.current=!0}),a.useCallback(function(l,o){o===void 0&&(o={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,y({fromRouteId:e},o)))},[t,e])}function ee(t){d(!1)}function oe(t){let{basename:e="/",children:r=null,location:n,navigationType:l=L.Pop,navigator:o,static:s=!1}=t;E()&&d(!1);let u=e.replace(/^\/*/,"/"),i=a.useMemo(()=>({basename:u,navigator:o,static:s}),[u,o,s]);typeof n=="string"&&(n=I(n));let{pathname:c="/",search:p="",hash:v="",state:g=null,key:m="default"}=n,h=a.useMemo(()=>{let f=w(c,u);return f==null?null:{location:{pathname:f,search:p,hash:v,state:g,key:m},navigationType:l}},[u,c,p,v,g,m,l]);return h==null?null:a.createElement(x.Provider,{value:i},a.createElement(b.Provider,{children:r,value:h}))}function le(t){let{children:e,location:r}=t;return A(N(e),r)}new Promise(()=>{});function N(t,e){e===void 0&&(e=[]);let r=[];return a.Children.forEach(t,(n,l)=>{if(!a.isValidElement(n))return;let o=[...e,l];if(n.type===a.Fragment){r.push.apply(r,N(n.props.children,o));return}n.type!==ee&&d(!1),!n.props.index||!n.props.children||d(!1);let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=N(n.props.children,o)),r.push(s)}),r}export{x as N,oe as R,ae as a,U as b,_ as c,le as d,ee as e,ne as u};

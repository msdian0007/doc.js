import{_ as J,a as Ln}from"./@babel-f85afc27.js";import{c as Rn}from"./redux-cb156075.js";var k=function(n){return"@@redux-saga/"+n},On=k("CANCEL_PROMISE"),nn=k("CHANNEL_END"),en=k("IO"),Q=k("MATCH"),In=k("MULTICAST"),tn=k("SAGA_ACTION"),Mn=k("SELF_CANCELLATION"),wn=k("TASK"),I=k("TASK_CANCEL"),rn=k("TERMINATE"),jn=k("LOCATION"),Fn=function(n){return n==null},Pn=function(n){return n!=null},x=function(n){return typeof n=="function"},Dn=function(n){return typeof n=="string"},M=Array.isArray,D=function(n){return n&&x(n.then)},W=function(n){return n&&x(n.next)&&x(n.throw)},Kn=function(n){return x(n)&&n.hasOwnProperty("toString")},_n=function(n){return!!n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype},Un=function(n){return function(){return n}},Hn=Un(!0),y=function(){},Wn=function(n){return n},G=function(n,t){J(n,t),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach(function(a){n[a]=t[a]})},Gn=function(n,t){var a;return(a=[]).concat.apply(a,t.map(n))};function K(e,n){var t=e.indexOf(n);t>=0&&e.splice(t,1)}function bn(e){var n=!1;return function(){n||(n=!0,e())}}var qn=function(n){throw n},Bn=function(n){return{value:n,done:!0}};function Y(e,n,t){n===void 0&&(n=qn),t===void 0&&(t="iterator");var a={meta:{name:t},next:e,throw:n,return:Bn,isSagaIterator:!0};return typeof Symbol<"u"&&(a[Symbol.iterator]=function(){return a}),a}function Xn(e,n){var t=n.sagaStack;console.error(e),console.error(t)}var an=function(n){return Array.apply(null,new Array(n))},zn=function(n){return function(t){return n(Object.defineProperty(t,tn,{value:!0}))}},cn=function(n){return n===rn},on=function(n){return n===I},un=function(n){return cn(n)||on(n)};function fn(e,n){var t=Object.keys(e),a=t.length,o=0,u,f=M(e)?an(a):{},c={};function r(){o===a&&(u=!0,n(f))}return t.forEach(function(l){var i=function(h,p){u||(p||un(h)?(n.cancel(),n(h,p)):(f[l]=h,o++,r()))};i.cancel=y,c[l]=i}),n.cancel=function(){u||(u=!0,t.forEach(function(l){return c[l].cancel()}))},c}function b(e){return{name:e.name||"anonymous",location:ln(e)}}function ln(e){return e[jn]}var Vn="Channel's Buffer overflow!",Qn=1,Yn=3,sn=4;function Zn(e,n){e===void 0&&(e=10);var t=new Array(e),a=0,o=0,u=0,f=function(i){t[o]=i,o=(o+1)%e,a++},c=function(){if(a!=0){var i=t[u];return t[u]=null,a--,u=(u+1)%e,i}},r=function(){for(var i=[];a;)i.push(c());return i};return{isEmpty:function(){return a==0},put:function(i){if(a<e)f(i);else{var s;switch(n){case Qn:throw new Error(Vn);case Yn:t[o]=i,o=(o+1)%e,u=o;break;case sn:s=2*e,t=r(),a=t.length,o=t.length,u=0,t.length=s,e=s,f(i);break}}},take:c,flush:r}}var $n=function(n){return Zn(n,sn)},Jn="TAKE",ne="PUT",vn="ALL",ee="RACE",te="CALL",re="CPS",ae="FORK",ce="JOIN",oe="CANCEL",ue="SELECT",fe="ACTION_CHANNEL",ie="CANCELLED",le="FLUSH",se="GET_CONTEXT",ve="SET_CONTEXT",de=function(n,t){var a;return a={},a[en]=!0,a.combinator=!1,a.type=n,a.payload=t,a};function Ye(e){var n=de(vn,e);return n.combinator=!0,n}function he(){var e={};return e.promise=new Promise(function(n,t){e.resolve=n,e.reject=t}),e}var dn=[],_=0;function Ee(e){try{q(),e()}finally{gn()}}function hn(e){dn.push(e),_||(q(),pn())}function En(e){try{return q(),e()}finally{pn()}}function q(){_++}function gn(){_--}function pn(){gn();for(var e;!_&&(e=dn.shift())!==void 0;)Ee(e)}var ge=function(n){return function(t){return n.some(function(a){return B(a)(t)})}},pe=function(n){return function(t){return n(t)}},Z=function(n){return function(t){return t.type===String(n)}},Ce=function(n){return function(t){return t.type===n}},Cn=function(){return Hn};function B(e){var n=e==="*"?Cn:Dn(e)?Z:M(e)?ge:Kn(e)?Z:x(e)?pe:_n(e)?Ce:null;if(n===null)throw new Error("invalid pattern: "+e);return n(e)}var w={type:nn},X=function(n){return n&&n.type===nn};function ye(e){e===void 0&&(e=$n());var n=!1,t=[];function a(c){if(!n){if(t.length===0)return e.put(c);var r=t.shift();r(c)}}function o(c){n&&e.isEmpty()?c(w):e.isEmpty()?(t.push(c),c.cancel=function(){K(t,c)}):c(e.take())}function u(c){if(n&&e.isEmpty()){c(w);return}c(e.flush())}function f(){if(!n){n=!0;var c=t;t=[];for(var r=0,l=c.length;r<l;r++){var i=c[r];i(w)}}}return{take:o,put:a,flush:u,close:f}}function Se(){var e,n=!1,t=[],a=t,o=function(){a===t&&(a=t.slice())},u=function(){n=!0;var c=t=a;a=[],c.forEach(function(r){r(w)})};return e={},e[In]=!0,e.put=function(c){if(!n){if(X(c)){u();return}for(var r=t=a,l=0,i=r.length;l<i;l++){var s=r[l];s[Q](c)&&(s.cancel(),s(c))}}},e.take=function(c,r){if(r===void 0&&(r=Cn),n){c(w);return}c[Q]=r,o(),a.push(c),c.cancel=bn(function(){o(),K(a,c)})},e.close=u,e}function yn(){var e=Se(),n=e.put;return e.put=function(t){if(t[tn]){n(t);return}hn(function(){n(t)})},e}var O=0,N=1,P=2,Sn=3;function z(e,n){var t=e[On];x(t)&&(n.cancel=t),e.then(n,function(a){n(a,!0)})}var F=0,An=function(){return++F},C;function Ae(e,n){return e.isSagaIterator?{name:e.meta.name}:b(n)}function me(e){var n=e.context,t=e.fn,a=e.args;try{var o=t.apply(n,a);if(W(o))return o;var u=!1,f=function(r){return u?{value:r,done:!0}:(u=!0,{value:o,done:!D(o)})};return Y(f)}catch(c){return Y(function(){throw c})}}function Te(e,n,t){var a=n.channel,o=n.action,u=n.resolve;hn(function(){var f;try{f=(a?a.put:e.dispatch)(o)}catch(c){t(c,!0);return}u&&D(f)?z(f,t):t(f)})}function ke(e,n,t){var a=n.channel,o=a===void 0?e.channel:a,u=n.pattern,f=n.maybe,c=function(l){if(l instanceof Error){t(l,!0);return}if(X(l)&&!f){t(rn);return}t(l)};try{o.take(c,Pn(u)?B(u):null)}catch(r){t(r,!0);return}t.cancel=c.cancel}function Ne(e,n,t,a){var o=n.context,u=n.fn,f=n.args,c=a.task;try{var r=u.apply(o,f);if(D(r)){z(r,t);return}if(W(r)){U(e,r,c.context,F,b(u),!1,t);return}t(r)}catch(l){t(l,!0)}}function xe(e,n,t){var a=n.context,o=n.fn,u=n.args;try{var f=function(r,l){Fn(r)?t(l):t(r,!0)};o.apply(a,u.concat(f)),f.cancel&&(t.cancel=f.cancel)}catch(c){t(c,!0)}}function Le(e,n,t,a){var o=n.context,u=n.fn,f=n.args,c=n.detached,r=a.task,l=me({context:o,fn:u,args:f}),i=Ae(l,u);En(function(){var s=U(e,l,r.context,F,i,c,void 0);c?t(s):s.isRunning()?(r.queue.addTask(s),t(s)):s.isAborted()?r.queue.abort(s.error()):t(s)})}function Re(e,n,t,a){var o=a.task,u=function(r,l){if(r.isRunning()){var i={task:o,cb:l};l.cancel=function(){r.isRunning()&&K(r.joiners,i)},r.joiners.push(i)}else r.isAborted()?l(r.error(),!0):l(r.result())};if(M(n)){if(n.length===0){t([]);return}var f=fn(n,t);n.forEach(function(c,r){u(c,f[r])})}else u(n,t)}function H(e){e.isRunning()&&e.cancel()}function Oe(e,n,t,a){var o=a.task;n===Mn?H(o):M(n)?n.forEach(H):H(n),t()}function Ie(e,n,t,a){var o=a.digestEffect,u=F,f=Object.keys(n);if(f.length===0){t(M(n)?[]:{});return}var c=fn(n,t);f.forEach(function(r){o(n[r],u,c[r],r)})}function Me(e,n,t,a){var o=a.digestEffect,u=F,f=Object.keys(n),c=M(n)?an(f.length):{},r={},l=!1;f.forEach(function(i){var s=function(p,g){l||(g||un(p)?(t.cancel(),t(p,g)):(t.cancel(),l=!0,c[i]=p,t(c)))};s.cancel=y,r[i]=s}),t.cancel=function(){l||(l=!0,f.forEach(function(i){return r[i].cancel()}))},f.forEach(function(i){l||o(n[i],u,r[i],i)})}function we(e,n,t){var a=n.selector,o=n.args;try{var u=a.apply(void 0,[e.getState()].concat(o));t(u)}catch(f){t(f,!0)}}function je(e,n,t){var a=n.pattern,o=n.buffer,u=ye(o),f=B(a),c=function l(i){X(i)||e.channel.take(l,f),u.put(i)},r=u.close;u.close=function(){c.cancel(),r()},e.channel.take(c,f),t(u)}function Fe(e,n,t,a){var o=a.task;t(o.isCancelled())}function Pe(e,n,t){n.flush(t)}function De(e,n,t,a){var o=a.task;t(o.context[n])}function Ke(e,n,t,a){var o=a.task;G(o.context,n),t()}var _e=(C={},C[Jn]=ke,C[ne]=Te,C[vn]=Ie,C[ee]=Me,C[te]=Ne,C[re]=xe,C[ae]=Le,C[ce]=Re,C[oe]=Oe,C[ue]=we,C[fe]=je,C[ie]=Fe,C[le]=Pe,C[se]=De,C[ve]=Ke,C);function Ue(e,n,t){var a=[],o,u=!1;r(e);var f=function(){return a};function c(i){n(),l(),t(i,!0)}function r(i){a.push(i),i.cont=function(s,h){u||(K(a,i),i.cont=y,h?c(s):(i===e&&(o=s),a.length||(u=!0,t(o))))}}function l(){u||(u=!0,a.forEach(function(i){i.cont=y,i.cancel()}),a=[])}return{addTask:r,cancelAll:l,abort:c,getTasks:f}}function mn(e,n){return e+"?"+n}function He(e){var n=ln(e);if(n){var t=n.code,a=n.fileName,o=n.lineNumber,u=t+"  "+mn(a,o);return u}return""}function $(e){var n=e.name,t=e.location;return t?n+"  "+mn(t.fileName,t.lineNumber):n}function We(e){var n=Gn(function(t){return t.cancelledTasks},e);return n.length?["Tasks cancelled due to error:"].concat(n).join(`
`):""}var V=null,j=[],Ge=function(n){n.crashedEffect=V,j.push(n)},Tn=function(){V=null,j.length=0},be=function(n){V=n},qe=function(){var n=j[0],t=j.slice(1),a=n.crashedEffect?He(n.crashedEffect):null,o="The above error occurred in task "+$(n.meta)+(a?` 
 when executing effect `+a:"");return[o].concat(t.map(function(u){return"    created by "+$(u.meta)}),[We(j)]).join(`
`)};function Be(e,n,t,a,o,u,f){var c;f===void 0&&(f=y);var r=O,l,i,s=null,h=[],p=Object.create(t),g=Ue(n,function(){h.push.apply(h,g.getTasks().map(function(T){return T.meta.name}))},S);function d(){r===O&&(r=N,g.cancelAll(),S(I,!1))}function S(v,T){if(!T)v===I?r=N:r!==N&&(r=Sn),l=v,s&&s.resolve(v);else{if(r=P,Ge({meta:o,cancelledTasks:h}),A.isRoot){var L=qe();Tn(),e.onError(v,{sagaStack:L})}i=v,s&&s.reject(v)}A.cont(v,T),A.joiners.forEach(function(R){R.cb(v,T)}),A.joiners=null}function E(v){G(p,v)}function m(){return s||(s=he(),r===P?s.reject(i):r!==O&&s.resolve(l)),s.promise}var A=(c={},c[wn]=!0,c.id=a,c.meta=o,c.isRoot=u,c.context=p,c.joiners=[],c.queue=g,c.cancel=d,c.cont=f,c.end=S,c.setContext=E,c.toPromise=m,c.isRunning=function(){return r===O},c.isCancelled=function(){return r===N||r===O&&n.status===N},c.isAborted=function(){return r===P},c.result=function(){return l},c.error=function(){return i},c);return A}function U(e,n,t,a,o,u,f){var c=e.finalizeRunEffect(p);h.cancel=y;var r={meta:o,cancel:s,status:O},l=Be(e,r,t,a,o,u,f),i={task:l,digestEffect:g};function s(){r.status===O&&(r.status=N,h(I))}return f&&(f.cancel=l.cancel),h(),l;function h(d,S){try{var E;S?(E=n.throw(d),Tn()):on(d)?(r.status=N,h.cancel(),E=x(n.return)?n.return(I):{done:!0,value:I}):cn(d)?E=x(n.return)?n.return():{done:!0}:E=n.next(d),E.done?(r.status!==N&&(r.status=Sn),r.cont(E.value)):g(E.value,a,h)}catch(m){if(r.status===N)throw m;r.status=P,r.cont(m,!0)}}function p(d,S,E){if(D(d))z(d,E);else if(W(d))U(e,d,l.context,S,o,!1,E);else if(d&&d[en]){var m=_e[d.type];m(e,d.payload,E,i)}else E(d)}function g(d,S,E,m){m===void 0&&(m="");var A=An();e.sagaMonitor&&e.sagaMonitor.effectTriggered({effectId:A,parentEffectId:S,label:m,effect:d});var v;function T(L,R){v||(v=!0,E.cancel=y,e.sagaMonitor&&(R?e.sagaMonitor.effectRejected(A,L):e.sagaMonitor.effectResolved(A,L)),R&&be(d),E(L,R))}T.cancel=y,E.cancel=function(){v||(v=!0,T.cancel(),T.cancel=y,e.sagaMonitor&&e.sagaMonitor.effectCancelled(A))},c(d,A,T)}}function Xe(e,n){for(var t=e.channel,a=t===void 0?yn():t,o=e.dispatch,u=e.getState,f=e.context,c=f===void 0?{}:f,r=e.sagaMonitor,l=e.effectMiddlewares,i=e.onError,s=i===void 0?Xn:i,h=arguments.length,p=new Array(h>2?h-2:0),g=2;g<h;g++)p[g-2]=arguments[g];var d=n.apply(void 0,p),S=An();r&&(r.rootSagaStarted=r.rootSagaStarted||y,r.effectTriggered=r.effectTriggered||y,r.effectResolved=r.effectResolved||y,r.effectRejected=r.effectRejected||y,r.effectCancelled=r.effectCancelled||y,r.actionDispatched=r.actionDispatched||y,r.rootSagaStarted({effectId:S,saga:n,args:p}));var E;if(l){var m=Rn.apply(void 0,l);E=function(T){return function(L,R,kn){var Nn=function(xn){return T(xn,R,kn)};return m(Nn)(L)}}}else E=Wn;var A={channel:a,dispatch:zn(o),getState:u,sagaMonitor:r,onError:s,finalizeRunEffect:E};return En(function(){var v=U(A,d,c,S,b(n),!0,void 0);return r&&r.effectResolved(S,v),v})}function Ze(e){var n=e===void 0?{}:e,t=n.context,a=t===void 0?{}:t,o=n.channel,u=o===void 0?yn():o,f=n.sagaMonitor,c=Ln(n,["context","channel","sagaMonitor"]),r;function l(i){var s=i.getState,h=i.dispatch;return r=Xe.bind(null,J({},c,{context:a,channel:u,dispatch:h,getState:s,sagaMonitor:f})),function(p){return function(g){f&&f.actionDispatched&&f.actionDispatched(g);var d=p(g);return u.put(g),d}}}return l.run=function(){return r.apply(void 0,arguments)},l.setContext=function(i){G(a,i)},l}export{Ye as a,Ze as s};

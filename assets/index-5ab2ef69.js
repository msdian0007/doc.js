import{j as e,r as h,a as M}from"./react-d613f215.js";import{c as L}from"./react-dom-47e9a548.js";import{L as S,u as $,B as H}from"./react-router-dom-9e7b4a1b.js";import{d as z,a as _,b as U,c as G,B as Q,M as Z,e as K,f as y,g as Y,h as J,i as D,j as F,k as W,l as X,m as ee,n as se}from"./@mui-893cb32b.js";import{l as te}from"./react-to-print-7a131050.js";import{u as k,a as f,P as re}from"./react-redux-1dbde734.js";import{c as le,a as ae}from"./@reduxjs-44a25905.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./react-is-a192e302.js";import{k as ie,Q as ne}from"./react-toastify-08c97b68.js";import{v as C}from"./uuid-4a60fe23.js";import{r as O}from"./@material-tailwind-ffe1a7c7.js";import{e as T}from"./react-datepicker-1fcc0cd0.js";import{d as oe,e as w}from"./react-router-2050184f.js";import{a as ce,s as de}from"./@redux-saga-51eeb247.js";import{a as me}from"./redux-c04b8903.js";import"./@babel-00e6a03c.js";import"./scheduler-765c72db.js";import"./@remix-run-8989dd9f.js";import"./clsx-1229b3e0.js";import"./react-transition-group-6ae40098.js";import"./@emotion-fd7e9900.js";import"./stylis-79144faa.js";import"./use-sync-external-store-9438a5bf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./classnames-ca4f0f71.js";import"./tailwind-merge-873fa99f.js";import"./prop-types-387d7a00.js";import"./deepmerge-89e33937.js";import"./framer-motion-4269866b.js";import"./tslib-0eb4467e.js";import"./hey-listen-1a9438e0.js";import"./style-value-types-86c13b32.js";import"./popmotion-f8adf551.js";import"./framesync-409e5dda.js";import"./@motionone-d80c48bc.js";import"./material-ripple-effects-ffa693ae.js";import"./@floating-ui-ee6dd39f.js";import"./aria-hidden-606e0ff2.js";import"./tabbable-6ab97b54.js";import"./date-fns-d9f78ea9.js";import"./react-onclickoutside-ab78c2dc.js";import"./react-popper-8e2e1c1d.js";import"./react-fast-compare-c6faf58f.js";import"./@popperjs-f3391c26.js";import"./warning-e43464af.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=a(l);fetch(l.href,i)}})();const ue=e.jsx(e.Fragment,{}),xe=e.jsx(e.Fragment,{children:e.jsx("div",{className:"fixed bottom-0 left-0 w-full flex justify-center bg-primary-500/70",children:e.jsx("i",{className:"text-secondary-800 text-[0.8rem]",children:"made with 💛 by 🍁"})})}),q=({children:t,header:s=ue,footer:a=xe})=>e.jsxs(e.Fragment,{children:[s,t,a]}),pe=()=>e.jsx(e.Fragment,{children:e.jsx("header",{className:"bg-primary px-4 py-2 w-full z-20 fixed",children:e.jsx("div",{className:"flex justify-center",children:e.jsx(S,{to:"/",children:e.jsxs("span",{className:"font-bold text-primary-100 cursor-pointer",children:["DOC",e.jsx("i",{className:"text-dark",children:".js"})]})})})})}),he=[{title:"invoice",url:"document",icon:e.jsx(z,{sx:{fontSize:30},className:"w-24 h-24 mb-3 rounded-full shadow-lg"})},{title:"quotation",url:"document",icon:e.jsx(z,{sx:{fontSize:30},className:"w-24 h-24 mb-3 rounded-full shadow-lg"})},{title:"coming soon",url:null,icon:e.jsx(_,{sx:{fontSize:30},className:"w-24 h-24 mb-3 rounded-full shadow-lg"})},{title:"coming soon",url:null,icon:e.jsx(_,{sx:{fontSize:30},className:"w-24 h-24 mb-3 rounded-full shadow-lg"})}],ge=e.jsx(e.Fragment,{});let fe=({icon:t,url:s,title:a})=>e.jsxs("div",{className:"relative group/items w-full px-[4rem] sm:px-[2rem] py-[1rem] bg-primary-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("div",{className:"flex justify-end px-4 pt-4"}),e.jsxs("div",{className:"flex flex-col items-center pb-4",children:[t,e.jsx("span",{className:" text-gray-500 dark:text-gray-400",children:a})]}),e.jsx("div",{className:`absolute w-full h-full top-0 left-0 bg-black/80 rounded-lg flex justify-center items-center group-hover/items:visible invisible ${s?"inline":"hidden"}`,children:e.jsx(S,{to:{pathname:s,search:`type=${a}`},children:e.jsx("span",{className:"inline-flex items-center px-4 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Create"})})})]});const je=()=>{let t=he.map((s,a)=>h.createElement(fe,{...s,key:a}));return e.jsx(e.Fragment,{children:e.jsx(q,{header:ge,children:e.jsx("div",{className:"flex justify-center min-h-screen items-center",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-[1rem] text-center py-[2rem] mx-[1rem] 3xl:scale-150",children:t})})})})},R={type:"",basicDetails:{},senderDetails:{},receiverDetails:{},tableItems:[],paymentDetails:{},tAndCList:[]},P=le({name:"doc",initialState:R,reducers:{typeOfDocument:(t,{payload:s})=>{t.type=s},basicDetails:(t,{payload:s})=>{const{name:a,value:r}=s;t.basicDetails={...t.basicDetails,[a]:r}},senderDetails:(t,{payload:s})=>{t.senderDetails=s},receiverDetails:(t,{payload:s})=>{t.receiverDetails=s},addTableItems:(t,{payload:s})=>{t.tableItems.push(s)},updateTableItems:(t,{payload:s})=>{t.tableItems=s},deleteTableItems:(t,{payload:s})=>{t.tableItems=s},paymentDetailsReq:(t,{payload:s})=>{t.paymentDetails=s},addConditionsReq:(t,{payload:s})=>{t.tAndCList.push(s)},updateConditionsReq:(t,{payload:s})=>{t.tAndCList=s},deleteConditionsReq:(t,{payload:s})=>{t.tAndCList=s},clearFormReq:t=>R}}),{typeOfDocument:be,basicDetails:b,senderDetails:B,receiverDetails:E,addTableItems:ve,updateTableItems:ye,deleteTableItems:Ne,paymentDetailsReq:A,addConditionsReq:we,updateConditionsReq:Qs,deleteConditionsReq:Ce,clearFormReq:Se}=P.actions,De=P.reducer,Fe=()=>{const t=k(u=>u.document),{basicDetails:s,tableItems:a,paymentDetails:r,senderDetails:l,receiverDetails:i,tAndCList:n,type:d}=t;return{documentValidation:()=>{let u=Object.keys(t).length;function x(m,c){return Object.keys(m).length==c}let o=0;for(let m=0;m<1;m++)if(x(s,5)&&o++,a.length>0&&o++,x(r,4)&&o++,x(l,7)&&o++,x(i,7)&&o++,n.length>0&&o++,d&&o++,o===u)return{isReady:!0,count:o};return{isReady:!1,count:o}}}},ke=({children:t})=>{const s=h.useRef(),a=f(),[r]=$(),[l,i]=h.useState(!1),n=r.get("type"),{documentValidation:d}=Fe(),u=te.useReactToPrint({content:()=>s.current}),x=()=>{const{isReady:c,count:p}=d();c?u():ne.warn("all fields are mandatory!")};h.useEffect(()=>{const{count:c}=d();c>1?i(!0):i(!1)},[d]),h.useEffect(()=>{a(be(n))},[n]);let o,m;return l&&(o=e.jsx(e.Fragment,{children:e.jsx("div",{className:"fixed left-0 top-0 w-full flex justify-center z-30 py-[3rem]",children:e.jsx(U,{titleAccess:"Reset form",sx:{fontSize:30},className:"bg-primary-500 cursor-pointer text-white shadow-md shadow-primary-200 rounded-full p-2 hover:scale-105",onClick:()=>a(Se())})})})),m=e.jsx(e.Fragment,{children:e.jsx("div",{className:"fixed right-[10px] bottom-[25px] z-30",children:e.jsx(G,{titleAccess:"download PDF",sx:{fontSize:40},className:"bg-primary-500 cursor-pointer text-white shadow-md rounded-full p-2 hover:scale-105",onClick:x})})}),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative bg-primary-100 min-h-screen max-w-full md:w-auto  overflow-x-scroll flex items-center py-[4rem] px-[2rem]",children:[m,o,e.jsx("div",{className:"mx-auto z-0 shadow-lg shadow-slate-500",children:e.jsx("div",{ref:s,children:e.jsxs("div",{className:"a4_size_class bg-white py-8 text-[0.875rem]",children:[e.jsx("div",{className:" border-primary-400 border-[0.1rem]"}),e.jsxs("div",{className:"px-8 bg-white",children:[t,e.jsx(ie,{hideProgressBar:!0,autoClose:2e3,position:"top-center"})]})]})})})]})})},ze=[{title:"invoice",url:"/document"},{title:"quotation",url:"/document"},{title:"other",url:"/document"}],_e=48,Te=({document_num:t,logo:s,type:a})=>{const[r,l]=h.useState(null),i=!!r,n=h.useRef(),d=f(),u=c=>{l(c.currentTarget)},x=()=>{l(null)},o=c=>{const{files:p}=c.target;if(p){const g=URL.createObjectURL(p[0]);d(b({name:"logo",value:g}))}};let m;return s?m=e.jsxs("div",{className:"relative group/items cursor-pointer inline-block max-w-[180px] max-h-[100px] w-auto h-auto overflow-hidden",children:[e.jsx("img",{className:"",src:s,alt:"logo",onClick:()=>n.current.click()}),e.jsx("div",{className:"absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible",children:e.jsx(y,{className:"bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white",sx:{fontSize:25},onClick:()=>d(b({name:"logo",value:""}))})})]}):m=e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-[100px] h-[100px] rounded-full flex justify-center items-center bg-blue-gray-500",onClick:()=>n.current.click(),children:e.jsx("div",{className:"text-gray-300",children:"Upload logo"})})}),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative grid grid-cols-3 bg-slate-300 items-center my-[1.6rem]",children:[e.jsxs("div",{className:"col-span-1 items-center mx-auto",children:[e.jsx("div",{className:"cursor-pointer inline-block max-w-[180px] max-h-[100px] w-auto h-auto overflow-hidden",children:m}),e.jsx("input",{type:"file",id:"file",value:"",onChange:o,accept:"image/png, image/jpg, image/jpeg",ref:n,readOnly:!0,hidden:!0})]}),e.jsx("div",{className:"col-span-1"}),e.jsxs("div",{className:"col-span-1 grid grid-cols-1 justify-end items-center my-auto",children:[e.jsxs("div",{className:"w-auto flex justify-end",children:[e.jsx(Q,{id:"basic-button","aria-controls":i?"long-menu":void 0,"aria-haspopup":"true","aria-expanded":i?"true":void 0,onClick:u,sx:{padding:0},children:e.jsx("h1",{className:"text-2xl  text-black",children:a||"Invoice"})}),e.jsx(Z,{id:"long-menu",MenuListProps:{"aria-labelledby":"basic-button"},anchorEl:r,open:i,onClose:x,PaperProps:{style:{maxHeight:_e*4,width:"20ch"}},children:ze.map(({title:c,url:p})=>e.jsx(K,{selected:c===a,onClick:()=>x(),children:e.jsx(S,{to:{pathname:p,search:`type=${c}`},children:c})},c))})]}),e.jsx("input",{className:"text-end col-span-1 bg-white",name:"document_num",type:"text",placeholder:"#0001",onChange:c=>d(b(c.target))})]})]})})},Re=()=>e.jsxs("div",{className:" p-4 border-2 border-primary-100 mx-auto cursor-pointer",children:[e.jsx("span",{children:"To,"}),e.jsxs("div",{className:"flex gap-4 ml-4 items-center",children:[e.jsx("div",{className:"",children:e.jsx(Y,{sx:{fontSize:30}})}),e.jsx("span",{children:"Sender Details"})]})]}),Ie=()=>e.jsxs("div",{className:" p-4 border-2 border-primary-100 mx-auto cursor-pointer",children:[e.jsx("span",{children:"To,"}),e.jsxs("div",{className:"flex gap-4 ml-4 items-center",children:[e.jsx("div",{className:"",children:e.jsx(J,{sx:{fontSize:30}})}),e.jsx("span",{children:"Receiver Details"})]})]}),Oe={cName:"",address:"",locality:"",city:"",state:"",zip_code:"",country:""},qe=({setIsFormOpen:t,type:s,formDetails:a})=>{const[r,l]=h.useState(Oe),i=f(),n=u=>{const{name:x,value:o}=u.target;l(m=>({...m,[x]:o}))},d=u=>{u.preventDefault(),i(s==="sender"?B(r):E(r)),t(!1)};return h.useEffect(()=>{a&&l(a)},[a]),e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx("div",{id:"rdClose",className:"bg_main fixed top-0 left-0 w-full h-full z-10 ",children:e.jsx("form",{className:"flex h-full items-center",id:"moduleDetailsEditForm",action:"",onSubmit:d,children:e.jsxs("div",{className:"bg-white/70 w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3 mx-auto rounded-lg p-4 relative",children:[e.jsx("div",{className:"mx-auto flex justify-center",children:e.jsx("input",{className:"bg-gray-200 w-full p-2 my-4 rounded-lg",type:"text",placeholder:"Name/Company Name",name:"cName",value:r.cName,onChange:n,required:!0})}),e.jsx("div",{className:"mx-auto grid grid-cols-3 gap-4",children:e.jsx("input",{className:"bg-gray-200 p-2 my-4 rounded-lg col-span-2",type:"text",placeholder:"Address",name:"address",value:r.address,onChange:n,required:!0})}),e.jsx("div",{className:"mx-auto grid grid-cols-3 gap-4",children:e.jsx("input",{className:"bg-gray-200 p-2 my-4 rounded-lg col-span-2",type:"text",placeholder:"Locality",name:"locality",value:r.locality,onChange:n})}),e.jsxs("div",{className:"mx-auto grid grid-cols-4 gap-4",children:[e.jsx("input",{pattern:"[A-Za-z]+",className:"bg-gray-200 p-2 my-4 rounded-lg",type:"text",placeholder:"City",name:"city",value:r.city,onChange:n}),e.jsx("input",{pattern:"[A-Za-z]+",className:"bg-gray-200 p-2 my-4 rounded-lg",type:"text",placeholder:"State",name:"state",value:r.state,onChange:n,required:!0}),e.jsx("input",{pattern:"[0-9]+",className:"bg-gray-200 p-2 my-4 rounded-lg",type:"text",placeholder:"Post Code",name:"zip_code",value:r.zip_code,onChange:n,required:!0}),e.jsx("input",{pattern:"[A-Za-z]+",className:"bg-gray-200 p-2 my-4 rounded-lg",type:"text",placeholder:"Country/Region",name:"country",value:r.country,onChange:n,required:!0})]}),e.jsx("div",{className:"mx-auto flex justify-end",children:e.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ",children:"Add"})}),e.jsxs("div",{className:"absolute top-0 -right-8",children:[e.jsx("span",{className:"close text-2xl pl-1 text-white hover:text-red-800 cursor-pointer",onClick:()=>t(!1),children:"×"}),e.jsx("br",{})]})]})})})})})},I=({buttonDetails:t,type:s,cName:a,address:r,locality:l,city:i,state:n,zip_code:d,country:u})=>{const[x,o]=h.useState(!1),m=f(),c=()=>{if(s==="sender")return m(B({}));m(E({}))};let p,g,j;if(!a&&!r?(p=e.jsx(e.Fragment,{children:e.jsx("div",{className:"absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible",children:e.jsx(D,{className:"bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white",sx:{fontSize:25},onClick:()=>{o(!0)}})})}),j=t):(p=e.jsx(e.Fragment,{children:e.jsxs("div",{className:"absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible",children:[e.jsx(F,{className:"bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white",sx:{fontSize:25},onClick:()=>o(!0)}),e.jsx(y,{className:"bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white",sx:{fontSize:25},onClick:c})]})}),j=e.jsx(e.Fragment,{children:e.jsxs("div",{className:"p-1",children:[e.jsx("strong",{children:e.jsx("input",{className:"tracking-wide bg-white",placeholder:"Company Name",disabled:!0,value:a})}),e.jsxs("div",{className:"grid grid-cols-2 grid-rows-4 ",children:[e.jsx("input",{className:"col-span-2 bg-white",placeholder:"Address",value:r,disabled:!0}),e.jsx("input",{className:"col-span-2 bg-white",placeholder:"Locality",value:l,disabled:!0}),e.jsx("input",{className:"col-span-1 bg-white",placeholder:"City",value:i,disabled:!0}),e.jsx("input",{className:"col-span-1 bg-white",placeholder:"State",value:n,disabled:!0}),e.jsx("input",{className:"col-span-2 bg-white",placeholder:"Pincode",value:d,disabled:!0})]})]})})),x){let v;a&&r&&(v={cName:a,address:r,locality:l,city:i,state:n,zip_code:d,country:u});let N={setIsFormOpen:o,type:s,formDetails:v};g=e.jsx(qe,{...N})}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative group/items ",children:[j,p,g]})})},Pe=e.jsx(Re,{}),Be=e.jsx(Ie,{}),Ee=({senderDetails:t,receiverDetails:s,dateModule:a})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-2 mb-[1.6rem]",children:[e.jsx("div",{className:"col-span-4",children:e.jsx(I,{buttonDetails:Pe,type:"sender",...t})}),e.jsx("div",{className:"col-span-4",children:e.jsx(I,{buttonDetails:Be,type:"receiver",...s})}),e.jsx("div",{className:"col-span-4",children:a})]})}),Ae=({setIsFormOpen:t,itemId:s,tableItems:a})=>{const[r,l]=h.useState({id:C(),description:"",hsn_no:"",qty:"",unit_price:"",total:""}),i=f();var n=[];n=a;const d=c=>{const{name:p,value:g}=c.target;l(j=>({...j,[p]:g}))},u=c=>{if(c.preventDefault(),s){const p=n.map(g=>g.id===r.id?r:g);i(ye(p))}else i(ve(r));t(!1)},x=()=>{n.filter(c=>(c==null?void 0:c.id)===s?l(c):null)};let{unit_price:o,qty:m}=r;return h.useEffect(()=>{l(c=>({...c,total:o*m}))},[o,m]),h.useEffect(()=>{x()},[s]),e.jsx(e.Fragment,{children:e.jsx("div",{id:"rdClose",className:"bg_main fixed top-0 left-0 w-full h-full z-10 ",children:e.jsx("form",{className:"flex items-center h-full",onSubmit:u,children:e.jsxs("div",{className:"bg-white/70 w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3 mx-auto rounded-lg p-4 relative",children:[e.jsx("div",{className:"mx-auto flex justify-center",children:e.jsx("input",{className:"bg-gray-200 w-full p-2 my-4 rounded-lg",type:"text",placeholder:"Description",name:"description",value:r.description,onChange:d,required:!0})}),e.jsx("div",{className:"mx-auto grid grid-cols-3 gap-4",children:e.jsx("input",{className:"bg-gray-200 p-2 my-4 rounded-lg col-span-2",type:"number",placeholder:"HSN-No.",name:"hsn_no",min:"1",value:r.hsn_no,onChange:d,required:!0,list:"hsnNum"})}),e.jsx("div",{className:"mx-auto grid grid-cols-3 gap-4",children:e.jsx("input",{className:"bg-gray-200 p-2 my-4 rounded-lg col-span-2",type:"number",placeholder:"QTY",name:"qty",min:"1",value:r.qty,onChange:d,required:!0})}),e.jsx("div",{className:"mx-auto grid grid-cols-3 gap-4",children:e.jsx("input",{className:"bg-gray-200 p-2 my-4 rounded-lg col-span-2",type:"number",placeholder:"Unit Price",name:"unit_price",min:"1",value:r.unit_price,onChange:d,required:!0})}),e.jsx("div",{className:"mx-auto grid grid-cols-3 gap-4",children:e.jsx("input",{pattern:"[0-9]+",className:"bg-gray-200 p-2 my-4 rounded-lg col-span-2",type:"number",placeholder:"Total",name:"total",value:r.total,readOnly:!0})}),e.jsx("div",{className:"mx-auto flex justify-end",children:e.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ",children:"Add"})}),e.jsx("div",{className:"absolute top-0 -right-6 cursor-pointer",onClick:()=>t(!1),children:e.jsx("span",{className:"close text-2xl text-white hover:text-red-800",children:"×"})})]})})})})},Ve=({description:t,tableItems:s})=>{const[a,r]=h.useState(!1),[l,i]=h.useState(null),n=f();let d,u,x,o=[];o=s;const m=c=>{const p=o.filter(g=>g.id!==c);n(Ne(p))};if((o==null?void 0:o.length)<1?d=e.jsx(e.Fragment,{children:e.jsx("div",{className:"bottom-0 bg-primary-100 cursor-pointer hover:bg-primary-200 rounded-md w-full h-full py-2 flex justify-center items-center",onClick:()=>{r(!0),i(null)},children:e.jsxs("div",{className:"flex justify-center items-center gap-2 hover:scale-105 bg-primary-400 rounded-full px-4",children:[e.jsx("span",{className:"font-bold",children:"+"}),e.jsx("span",{children:"Add new item"})]})})}):(d=e.jsx(e.Fragment,{children:o.map(({description:c,hsn_no:p,qty:g,unit_price:j,total:v,id:N})=>e.jsxs("div",{className:"relative group/items",children:[e.jsxs("div",{className:"flex items-center border-b-2 ",children:[e.jsx("h2",{className:"w-2/5 px-2 py-1 break-words",children:c}),e.jsxs("div",{className:"flex w-3/5",children:[e.jsx("h2",{className:"w-1/3 flex justify-center ",children:p}),e.jsx("h2",{className:"w-1/5 flex justify-center",children:g}),e.jsx("h2",{className:"w-1/3 flex justify-end",children:j}),e.jsx("h2",{className:"w-1/3 flex justify-end pr-2",children:v})]})]}),e.jsxs("div",{className:"absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible",children:[e.jsx(F,{className:"bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white hover:text-yellow-500",sx:{fontSize:20},onClick:()=>{r(!0),i(N)}}),e.jsx(y,{className:"bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white hover:text-red-500",sx:{fontSize:20},onClick:()=>m(N)})]})]},N))}),u=e.jsx(e.Fragment,{children:e.jsx("div",{className:"absolute cursor-pointer z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-4 group-hover/items:visible",onClick:()=>{r(!0),i(null)},children:e.jsxs("div",{className:"flex justify-center items-center gap-2 hover:scale-105 bg-primary-400 rounded-full px-4",children:[e.jsx("span",{className:"font-bold",children:"+"}),e.jsx("span",{children:"Add new item"})]})})})),a){let c={setIsFormOpen:r,itemId:l,tableItems:s};x=e.jsx(Ae,{...c})}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mb-[1.6rem]",children:[e.jsxs("div",{className:"relative group/items",children:[e.jsxs("div",{className:"flex bg-primary-400 h-10 items-center ",children:[e.jsx("h2",{className:"w-2/5 px-2 ",children:e.jsx("strong",{children:"Description"})}),e.jsxs("div",{className:"flex w-3/5",children:[e.jsx("h2",{className:"w-1/3 flex justify-center py-1",children:e.jsx("strong",{children:"HSN Code"})}),e.jsx("h2",{className:"w-1/5 flex justify-center py-1",children:e.jsx("strong",{children:"Qty"})}),e.jsx("h2",{className:"w-1/3 flex justify-end py-1",children:e.jsx("strong",{children:"Unit Price"})}),e.jsx("h2",{className:"w-1/3 flex justify-end py-1 pr-2",children:e.jsx("strong",{children:"Amount"})})]})]}),u]}),d,x]})})},Me=({tableItems:t,type:s})=>{const[a,r]=h.useState(0);let l=0,i=0,n=0,d=[],u=0,x=0;return d=t,d.length>0&&(d.map(o=>{l+=o.total}),u=l*a/100,x=l-u,i=x*18/100,n=x+i),e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-end mb-[1.6rem]",children:e.jsxs("div",{className:"w-3/5 ",children:[e.jsxs("div",{className:"flex bg-slate-100",children:[e.jsx("strong",{className:"w-full py-1 px-2 bg-primary-400 border-b-2 ",children:"Total"}),e.jsx("h2",{className:"w-1/3 flex justify-end py-1 border-b-2 border-t-2 px-1",children:l.toLocaleString()})]}),e.jsxs("div",{className:`relative flex bg-slate-100 ${s!=="quotation"?"hidden":null}`,children:[e.jsx("strong",{className:"w-full py-1 px-2 bg-primary-400 border-b-2",children:"Discount"}),e.jsxs("div",{className:"absolute left-24",children:[e.jsx("input",{className:"w-14 outline-none py-1 px-2",type:"number",placeholder:"",name:"disc",value:a,onChange:o=>o.target.value>=0&&o.target.value<=100?r(o.target.value):null}),e.jsx("span",{className:"absolute right-1 items-center my-1",children:"%"})]}),e.jsx("h2",{className:"w-1/3 flex justify-end py-1 border-b-2 px-1",children:u.toLocaleString(void 0,{maximumFractionDigits:2})})]}),e.jsxs("div",{className:"flex bg-slate-100",children:[e.jsx("strong",{className:"w-full py-1 px-2 bg-primary-400 border-b-2",children:"GST-18%"}),e.jsx("h2",{className:"w-1/3 flex justify-end py-1 border-b-2 px-1",children:i.toLocaleString(void 0,{maximumFractionDigits:2})})]}),e.jsxs("div",{className:"flex bg-slate-100",children:[e.jsx("strong",{className:"w-full py-1 px-2 bg-primary-400 ",children:"Grand Total(Include Tax)"}),e.jsx("strong",{className:"w-1/3 flex justify-end py-1 px-1 bg-primary-200",children:"₹ "+n.toLocaleString(void 0,{maximumFractionDigits:2})})]})]})})})},Le=({setIsFormOpen:t,formDetails:s})=>{const a={account_number:"",bank_name:"",ifsc:"",gstin_no:""},[r,l]=h.useState(a),i=f(),n=u=>{const{name:x,value:o}=u.target;l(m=>({...m,[x]:o}))},d=u=>{u.preventDefault(),i(A(r)),t(!1)};return h.useEffect(()=>{s&&l(s)},[s]),e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx("div",{id:"rdClose",className:"bg_main fixed top-0 left-0 w-full h-full z-10 ",children:e.jsx("form",{className:"flex items-center h-full",id:"moduleDetailsEditForm",action:"",onSubmit:d,children:e.jsxs("div",{className:"bg-white/70 w-3/4 sm:w-3/5 md:w-1/2 lg:w-1/3 mx-auto rounded-lg p-4 relative",children:[e.jsx("div",{className:"mx-auto flex justify-center",children:e.jsx("input",{className:"bg-gray-200 w-full p-2 my-4 rounded-lg",type:"text",placeholder:"Account Number",name:"account_number",value:r.account_number,onChange:n,required:!0})}),e.jsx("div",{className:"mx-auto grid grid-cols-3 gap-4",children:e.jsx("input",{className:"bg-gray-200 p-2 my-4 rounded-lg col-span-2",type:"text",placeholder:"Bank Name",name:"bank_name",value:r.bank_name,onChange:n,required:!0})}),e.jsx("div",{className:"mx-auto grid grid-cols-3 gap-4",children:e.jsx("input",{className:"bg-gray-200 p-2 my-4 rounded-lg col-span-2",type:"text",placeholder:"IFSC",name:"ifsc",value:r.ifsc,onChange:n})}),e.jsx("div",{className:"mx-auto grid grid-cols-3 gap-4",children:e.jsx("input",{className:"bg-gray-200 p-2 my-4 rounded-lg col-span-2",type:"text",placeholder:"GSTIN No.",name:"gstin_no",value:r.gstin_no,onChange:n})}),e.jsx("div",{className:"mx-auto flex justify-end",children:e.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ",children:"Add"})}),e.jsxs("div",{className:"absolute top-0 -right-8",children:[e.jsx("span",{className:"close text-2xl pl-1 text-white hover:text-red-800 cursor-pointer",onClick:()=>t(!1),children:"×"}),e.jsx("br",{})]})]})})})})})},$e=({account_number:t,bank_name:s,ifsc:a,gstin_no:r,basicDetails:l})=>{const[i,n]=h.useState(!1),d=f(),u=h.useRef();let x,o,m;if(t&&s?(x=e.jsx(e.Fragment,{children:e.jsxs("div",{className:"absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible",children:[e.jsx(F,{className:"bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white",sx:{fontSize:25},onClick:()=>{n(!0)}}),e.jsx(y,{className:"bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white",sx:{fontSize:25},onClick:()=>d(A({}))})]})}),o=e.jsx(e.Fragment,{children:e.jsxs("div",{className:"p-1",children:[e.jsx("h2",{className:"",children:"Bank & Payment Details"}),e.jsx("table",{className:"3/4",children:e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Account Number:"}),e.jsx("td",{children:t})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Bank Name:"}),e.jsx("td",{children:s})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"IFSC:"}),e.jsx("td",{children:a})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"GSTIN No:"}),e.jsx("td",{children:r})]})]})})]})})):(x=e.jsx(e.Fragment,{children:e.jsx("div",{className:"absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-4 group-hover/items:visible",children:e.jsx(D,{className:"bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white",sx:{fontSize:25},onClick:()=>{n(!0)}})})}),o=e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-1 p-2 justify-center items-center border-[0.2rem] border-primary-100 h-auto w-auto min-w-[150px] ",children:[e.jsx(W,{className:"col-span-1 mx-auto",sx:{fontSize:30}}),e.jsx("span",{className:"col-span-1 mx-auto",children:"Payment Details"})]})})),i){let p;t&&s&&(p={account_number:t,bank_name:s,gstin_no:r,ifsc:a});let g={setIsFormOpen:n,formDetails:p};m=e.jsx(Le,{...g})}const c=p=>{let{name:g,files:j}=p.target;const v=URL.createObjectURL(j[0]);d(b({name:g,value:v}))};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flex items-center justify-between mb-[1.6rem]",children:[e.jsxs("div",{className:"relative group/items",children:[o,x]}),e.jsxs("div",{className:"mx-8",children:[e.jsxs("div",{className:`relative group/items w-full h-auto flex justify-center my-1 ${l!=null&&l.digital_sign?"inline":"hidden"}`,children:[e.jsx("img",{className:"max-w-[100px] max-h-[60px] ",src:l==null?void 0:l.digital_sign,alt:"sign"}),e.jsx("div",{className:"absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible",children:e.jsx(y,{className:"bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white",sx:{fontSize:25},onClick:()=>d(b({name:"digital_sign",value:""}))})})]}),e.jsx(O.Tooltip,{content:"Add Digital Sign",children:e.jsx("b",{className:"mx-auto w-fit  cursor-pointer text-gray-500 border-t-2 border-t-slate-400  py-1",onClick:()=>u.current.click(),children:"Authorized Signatory"})}),e.jsx("input",{name:"digital_sign",type:"file",accept:"image/*",value:"",readOnly:!0,hidden:!0,ref:u,onChange:c})]}),m]})})},He=({tAndCList:t})=>{const[s,a]=h.useState(!1);h.useState(null);const r=f(),[l,i]=h.useState({id:C(),tc:""}),n=m=>{m.preventDefault(),r(we(l)),i({id:C(),tc:""})},d=m=>{let c=t.filter(p=>p.id!==m);r(Ce(c))};let u,x,o;return(t==null?void 0:t.length)>0||s?(u=e.jsxs("div",{className:"relative group/items mb-[0.5rem]",children:[e.jsx("strong",{className:"  ",children:"Terms & Conditions"}),e.jsx("div",{className:"absolute left-[150px] top-0",children:e.jsxs("div",{className:"flex justify-center items-center invisible group-hover/items:visible gap-2 hover:scale-105 bg-primary-400 rounded-full px-4 cursor-pointer",onClick:()=>a(!0),children:[e.jsx("span",{className:"font-bold",children:"+"}),e.jsx("span",{children:"Add new t&c"})]})})]}),x=e.jsx("ol",{className:"text-xs list-disc",children:t==null?void 0:t.map(({id:m,tc:c})=>e.jsxs("div",{className:"relative group/items",children:[e.jsx("li",{className:"ml-5 break-words",children:c},m),e.jsx("div",{className:"absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-2 group-hover/items:visible",children:e.jsx(y,{className:"bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white hover:text-red-500",sx:{fontSize:20},onClick:()=>d(m)})})]},m))})):(s||(u=e.jsxs("div",{className:"relative group/items h-auto w-auto max-w-[150px] mb-6",children:[e.jsxs("div",{className:"grid grid-cols-1 p-2 justify-center items-center border-[0.2rem] border-primary-100  ",children:[e.jsx(se,{className:"col-span-1 mx-auto",sx:{fontSize:30}}),e.jsx("span",{className:"col-span-1 mx-auto",children:"T&C"})]}),e.jsx("div",{className:"absolute z-10 bottom-0 bg-black/60 rounded-md w-full h-full invisible flex justify-center items-center gap-4 group-hover/items:visible",children:e.jsx(D,{className:"bg-primary-500 hover:scale-110 rounded-full p-1 cursor-pointer text-white",sx:{fontSize:25},onClick:()=>{a(!0)}})})]})),x=e.jsx(e.Fragment,{})),s&&(o=e.jsx("div",{className:" mb-8",children:e.jsx("form",{onSubmit:n,children:e.jsxs("div",{className:"relative w-fit",children:[e.jsx("textarea",{className:"border-[0.2rem] border-primary-100 p-1 focus:border-primary-400 outline-none",name:"tc",id:"T&C",cols:"40",rows:"2",value:l.tc,required:!0,onChange:m=>i({...l,[m.target.name]:m.target.value})}),e.jsxs("div",{className:"absolute z-10 -bottom-5 right-0 flex justify-center items-center gap-2 ",children:[e.jsx("button",{type:"submit",children:e.jsx(X,{className:"bg-primary-500 hover:scale-110 w-5 rounded-md cursor-pointer text-white",sx:{fontSize:20}})}),e.jsx(ee,{className:"bg-primary-500 hover:scale-110 rounded-md cursor-pointer text-white",sx:{fontSize:20},onClick:()=>a(!1)})]})]})})}),(t==null?void 0:t.length)>0&&(u=e.jsxs("div",{className:"relative group/items",children:[e.jsx("strong",{className:" ",children:"Terms & Conditions"}),e.jsx("div",{className:"absolute left-[150px] top-0",children:e.jsxs("div",{className:"flex justify-center items-center invisible group-hover/items:visible gap-2 hover:scale-105 bg-primary-400 rounded-full px-4 cursor-pointer",children:[e.jsx("span",{className:"font-bold",children:"+"}),e.jsx("span",{children:"Add new t&c"})]})})]}))),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mb-[1.6rem]",children:[e.jsx("div",{children:u}),e.jsx("div",{children:x}),o]})})},Ue=()=>{const t=f(),{date:s,due_date:a}=k(r=>r.document.basicDetails);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"relative group/items h-full",children:e.jsxs("div",{className:"grid grid-cols-2 text-end content-end",children:[e.jsx("strong",{className:"col-span-2",children:"Issue date:"}),e.jsx("div",{className:"col-span-1"}),e.jsx("div",{className:"col-span-1 relative",children:e.jsx("div",{className:` border-primary-100 rounded-lg ${s?"border-0":"border-2"}`,children:e.jsx(T,{selected:s,onChange:r=>t(b({name:"date",value:r})),placeholderText:"mm-dd-yyyy",todayButton:"Today",className:"bg-transparent text-right w-3/4 text-[0.875rem]"})})}),e.jsx("strong",{className:"col-span-2",children:"Due date:"}),e.jsx("div",{className:"col-span-1"}),e.jsx("div",{className:"col-span-1 relative",children:e.jsx("div",{className:` border-primary-100 rounded-lg ${a?"border-0":"border-2"}`,children:e.jsx(T,{selected:a,onChange:r=>t(b({name:"due_date",value:r})),placeholderText:"mm-dd-yyyy",todayButton:"Today",className:"bg-transparent text-right w-3/4 text-[0.875rem]"})})})]})})})},Ge=e.jsx(pe,{}),Qe=e.jsx(Ue,{}),Ze=()=>{const{basicDetails:t,tableItems:s,paymentDetails:a,senderDetails:r,receiverDetails:l,tAndCList:i,type:n}=k(d=>d.document);return e.jsx(e.Fragment,{children:e.jsx(q,{header:Ge,children:e.jsxs(ke,{children:[e.jsx(Te,{...t,type:n}),e.jsx(Ee,{senderDetails:r,receiverDetails:l,dateModule:Qe}),e.jsx(Ve,{tableItems:s}),e.jsx(Me,{tableItems:s,type:n}),e.jsx($e,{...a,basicDetails:t}),e.jsx(He,{tAndCList:i})]})})})};function Ke(){return e.jsx(e.Fragment,{children:e.jsx(H,{basename:"/doc.js",children:e.jsxs(oe,{children:[e.jsx(w,{exact:!0,path:"/",element:e.jsx(je,{})}),e.jsx(w,{path:"document/",children:e.jsx(w,{index:!0,element:e.jsx(Ze,{})})})]})})})}const Ye=me({document:De});function*Je(){}function*We(){yield ce([Je])}const V=de(),Xe=ae({reducer:Ye,middleware:()=>[V]});V.run(We);L.createRoot(document.getElementById("root")).render(e.jsx(M.StrictMode,{children:e.jsx(re,{store:Xe,children:e.jsx(O.ThemeProvider,{children:e.jsx(Ke,{})})})}));

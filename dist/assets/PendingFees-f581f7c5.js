import{f as U,u as w,a as y,j as r,i as E,r as c}from"./index-244a15a9.js";import{u as P,b as k,f as M}from"./AssestsBaseUrl-00ad65e7.js";import{U as R,s as p}from"./FinanceManager-db1d1088.js";import{U as N}from"./UserMemberContentWrapper-31c60411.js";import{B as V,L as B}from"./UserMemberProfileWrapper-960b6d0c.js";import{u as d,n as A,c as D}from"./StaffMemberConfig-81165041.js";import{N as I}from"./finance-manager-api-ad25b769.js";import{s as g}from"./PendingFees.module-400ac0f4.js";import"./UiTab.module-f6b989ec.js";import"./FormInputView-9b8ed792.js";import"./dayjs.min-cfa010e9.js";import"./CreateButton-e61916de.js";import"./auth-api-a6b9904c.js";import"./MethodType-30df8d44.js";import"./Modal-6d554a98.js";import"./Utils.module-b6acf444.js";import"./checkingRequiredField-382733fa.js";import"./PlateformUser.module-0e3694bb.js";import"./decrypt-87f2d320.js";const v=({studentFees:a})=>{var l,n,s;const{t:m}=P(),h=U(),x=w(),f=y(),j=()=>{x(`/${h.username}/student/profile`,{state:{...f.state,studentId:a==null?void 0:a._id}})};return r.jsxs("div",{className:g.pending_fees_card,onClick:j,title:"View Profile",children:[r.jsxs("div",{className:g.pending_fees_card_container,children:[r.jsx("img",{alt:"Student Avatar",src:a!=null&&a.studentProfilePhoto?`${E}/${a==null?void 0:a.studentProfilePhoto}`:`${k}/feed-user-avatar.svg`,loading:"lazy"}),r.jsxs("div",{className:g.pending_fees_card_inner,children:[r.jsx("h6",{children:`${a==null?void 0:a.studentFirstName} ${a!=null&&a.studentMiddleName?a==null?void 0:a.studentMiddleName:""} ${a==null?void 0:a.studentLastName}`}),r.jsxs("p",{children:[m("gr_number")," : ",(a==null?void 0:a.studentGRNO)??""," ",", ",((l=a==null?void 0:a.department)==null?void 0:l.dName)??""]}),r.jsxs("p",{children:[m("class")," "," : ",`${((n=a==null?void 0:a.studentClass)==null?void 0:n.className)??""} -  ${((s=a==null?void 0:a.studentClass)==null?void 0:s.classTitle)??""}`]})]})]}),r.jsxs("div",{className:g.pending_fees_card_inner,children:[r.jsxs("h6",{children:["Rs. ",a==null?void 0:a.studentRemainingFeeCount]}),r.jsx("p",{children:m("pending_fees")})]})]})},T=({fid:a})=>{const{t:m}=P(),[h,x]=c.useState(""),[f,j]=c.useState(1),[l,n]=c.useState(!0),[s,_]=d({skip:h}),{financeFeeList:i,financeFeeListLoading:$}=I({data:{finance:a,page:f,limit:10,search:h},skip:!a});c.useEffect(()=>{_&&l&&j(o=>o+1)},[_,l]),c.useEffect(()=>{i!=null&&i.length&&A(i==null?void 0:i.length,n)},[i==null?void 0:i.length]);const b=c.useCallback(D(o=>x(o),500),[]),C=o=>{b(o.target.value)};return r.jsxs(R,{children:[r.jsx(N,{children:r.jsxs("div",{className:p.fm_header_container,children:[r.jsx("h6",{children:m("pending_fees")}),r.jsx("div",{className:p.fm_search,children:r.jsx("section",{className:p.fm_search_container,children:r.jsxs("div",{className:p.fm_search_container_inner,children:[r.jsx("img",{className:p.fm_search_icon,alt:"search icon",src:`${M}/navbar-search.svg`}),r.jsx("input",{type:"text",placeholder:m("search"),onChange:C})]})})})]})}),r.jsx(V,{}),r.jsxs(N,{children:[$&&r.jsx(B,{}),i==null?void 0:i.map((o,S)=>(i==null?void 0:i.length)===S+1?r.jsx("div",{ref:s,children:r.jsx(v,{studentFees:o})},o==null?void 0:o._id):r.jsx(v,{studentFees:o},o==null?void 0:o._id))]})]})},ia=c.memo(T);export{ia as default};

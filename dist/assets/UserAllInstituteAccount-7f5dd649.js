import{r as h,h as C,j as i,i as $,Q as E}from"./index-40ad8b25.js";import{B,L as w}from"./UserMemberProfileWrapper-b0858c1e.js";import{M as I}from"./Modal-53e97914.js";import{U as y}from"./UserMemberContentWrapper-04d21be5.js";import{s as m}from"./PlateformUser.module-0e3694bb.js";import{u as k,b as N,c as z,f as D}from"./AssestsBaseUrl-2ebdccdb.js";import{d as Q,e as R}from"./DesignationConfig-bff95d73.js";import"./Utils.module-b6acf444.js";import"./UiTab.module-f6b989ec.js";import"./decrypt-a000b880.js";const T=({account:s,onClose:l,onRefetch:e})=>{var _,P,n,U,F,M,b,S,A,L;const{t:d}=k(),g=C(p=>p.baseChange.id),[f,t]=h.useState(""),[a,x]=h.useState(!1),{userActivatedMember:r}=Q({data:{uid:g,role:f??""},skip:!f});h.useEffect(()=>{f&&r&&(e(),x(p=>!p),l())},[f,r]);const j=()=>{x(p=>!p),t(()=>s==null?void 0:s._id)};return i.jsxs(i.Fragment,{children:[s!=null&&s.staffFirstName?i.jsxs("div",{className:m.assign_show_list_each,onClick:j,children:[i.jsx("img",{src:s!=null&&s.institute?(_=s==null?void 0:s.institute)!=null&&_.insProfilePhoto?`${$}/${(P=s==null?void 0:s.institute)==null?void 0:P.insProfilePhoto}`:`${N}/feed-staff-avatar.svg`:(n=s==null?void 0:s.institute)!=null&&n.staffProfilePhoto?`${$}/${(U=s==null?void 0:s.institute)==null?void 0:U.staffProfilePhoto}`:`${N}/feed-user-avatar.svg`,loading:"lazy",alt:"profile avatar"}),i.jsxs("div",{className:m.assign_each_paragraph,children:[i.jsx("h6",{children:((F=s==null?void 0:s.institute)==null?void 0:F.insName)??""}),i.jsxs("p",{children:[`${(s==null?void 0:s.staffFirstName)??""} ${(s==null?void 0:s.staffLastName)??""} ${(s==null?void 0:s.staffMiddleName)??""}`," ","(",d("staff"),")"]})]})]}):i.jsxs("div",{className:m.assign_show_list_each,onClick:j,children:[i.jsx("img",{src:s!=null&&s.institute?(M=s==null?void 0:s.institute)!=null&&M.insProfilePhoto?`${$}/${(b=s==null?void 0:s.institute)==null?void 0:b.insProfilePhoto}`:`${N}/feed-staff-avatar.svg`:(S=s==null?void 0:s.institute)!=null&&S.studentProfilePhoto?`${$}/${(A=s==null?void 0:s.institute)==null?void 0:A.studentProfilePhoto}`:`${N}/feed-user-avatar.svg`,loading:"lazy",alt:"profile avatar"}),i.jsxs("div",{className:m.assign_each_paragraph,children:[i.jsx("h6",{children:((L=s==null?void 0:s.institute)==null?void 0:L.insName)??""}),i.jsxs("p",{children:[`${(s==null?void 0:s.studentFirstName)??""} ${(s==null?void 0:s.studentLastName)??""} ${(s==null?void 0:s.studentMiddleName)??""}`," ","(",d("student"),")"]})]})]}),i.jsx(B,{customStyleBorder:{margin:"0"}}),a&&i.jsx(E,{})]})},W=h.memo(T),v=({onClose:s,onRefetch:l})=>{const{t:e}=k(),d=C(r=>r.baseChange.id),[g,f]=h.useState([]),{userMemberAllAccount:t,userMemberAllAccountLoading:a}=R({uid:d,skip:!d});h.useEffect(()=>{(t==null?void 0:t.length)>0&&f(t)},[t==null?void 0:t.length]);const x=r=>{if(r.target.value){let j=o(t,r.target.value);f(j)}else f(t)};return i.jsx(I,{onClose:s,children:i.jsxs("div",{className:m.modal_container,children:[i.jsx(y,{children:i.jsxs("div",{className:m.modal_container_outer_header,children:[i.jsx("div",{className:m.modal_container_header,children:i.jsx("h6",{children:e("switch_account")})}),i.jsx("img",{src:`${z}/close.svg`,alt:"close icon",onClick:s})]})}),i.jsx(B,{}),i.jsxs(y,{customStyle:{paddingBottom:"1rem"},children:[i.jsxs("div",{className:m.assign_search_container,style:{marginBottom:"1rem"},children:[i.jsx("input",{type:"text",placeholder:e("search"),className:m.assign_search_input,onChange:x}),i.jsx("img",{src:`${D}/navbar-search.svg`,alt:"search icon"})]}),a&&i.jsx(w,{}),g==null?void 0:g.map(r=>i.jsx(W,{account:r,onClose:s,onRefetch:l},r==null?void 0:r._id))]})]})})},o=(s,l)=>s.filter(e=>{let d="";return e!=null&&e.staffFirstName?d=`${e==null?void 0:e.staffFirstName} ${e!=null&&e.staffMiddleName?`${e==null?void 0:e.staffMiddleName} `:" "}${(e==null?void 0:e.staffLastName)??""}`:d=`${e==null?void 0:e.studentFirstName} ${e!=null&&e.studentMiddleName?`${e==null?void 0:e.studentMiddleName} `:" "}${(e==null?void 0:e.studentLastName)??""}`,d.includes(l)?e:null});export{v as default};

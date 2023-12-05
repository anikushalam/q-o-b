import{r as h,j as e,Q as q}from"./index-244a15a9.js";import{R,a as M,U as V,s as A}from"./FinanceManager-db1d1088.js";import{u as D,n as B,c as E}from"./StaffMemberConfig-81165041.js";import{U as y}from"./UserMemberContentWrapper-31c60411.js";import{u as C,c as Q,f as $}from"./AssestsBaseUrl-00ad65e7.js";import{B as L,L as H}from"./UserMemberProfileWrapper-960b6d0c.js";import{S as O,T as z,U as G,V as J}from"./finance-manager-api-ad25b769.js";import{s as n}from"./Income.module-200dd9e8.js";import{d as W,F as K}from"./dayjs.min-cfa010e9.js";import{M as Y}from"./Modal-6d554a98.js";import{F as I}from"./FormInputView-9b8ed792.js";import{F as X}from"./FormFileView-7962b5dc.js";import{A as Z}from"./AddButton-25307861.js";import{F as ee}from"./FormFile-06957915.js";import{T as se,a as te}from"./TileCard-bde068e5.js";import{F as ae,P as re}from"./PlateformUser-f77122cc.js";import{F as oe}from"./FormTextarea-e4599de9.js";import{C as ne}from"./CreateButton-e61916de.js";import{r as ce,e as le}from"./checkingRequiredField-382733fa.js";import{t as ie}from"./transaction_constant-ad8d613b.js";import"./UiTab.module-f6b989ec.js";import"./auth-api-a6b9904c.js";import"./MethodType-30df8d44.js";import"./PlateformUser.module-0e3694bb.js";import"./decrypt-87f2d320.js";import"./Utils.module-b6acf444.js";const de=({fid:s})=>{var t,d,m,u;const{t:c}=C(),{financeExpenseBalance:a}=O({fid:s,skip:!s});return e.jsxs("div",{className:n.right,children:[e.jsxs("div",{className:n.rightHead,style:{"--bg-expense-color":"rgb(231, 75, 75)"},children:[e.jsx("h6",{children:c("total_expense")}),e.jsxs("h6",{children:[c("rs"),((t=a==null?void 0:a.expenseBalance)==null?void 0:t.financeExpenseCashBalance)+((d=a==null?void 0:a.expenseBalance)==null?void 0:d.financeExpenseBankBalance)]})]}),e.jsxs("div",{className:n.rightBody,children:[e.jsxs("h6",{children:[" ",c("by_cash")," : ",c("rs"),(m=a==null?void 0:a.expenseBalance)==null?void 0:m.financeExpenseCashBalance]}),e.jsxs("h6",{children:[" ",c("by_bank")," : ",c("rs"),(u=a==null?void 0:a.expenseBalance)==null?void 0:u.financeExpenseBankBalance]})]})]})},me=h.memo(de),w=({expense:s,setExpenseId:c})=>{var d;const{t:a}=C(),t=()=>{c(s==null?void 0:s._id)};return e.jsxs("div",{onClick:t,className:n.card_container,children:[e.jsxs("h6",{className:n.invoice_number,children:[a("invoice_no")," "," : "," ",s==null?void 0:s.invoice_number]}),e.jsxs("div",{className:n.sidebarheader,children:[e.jsxs("div",{className:n.text,children:[e.jsx("p",{className:n.rcv,children:a("paid_to")}),e.jsx("h6",{children:s!=null&&s.expensePaid?s==null?void 0:s.expensePaid:(d=s==null?void 0:s.expensePaidUser)==null?void 0:d.userLegalName}),e.jsx("p",{className:n.rcv,children:W(s==null?void 0:s.createdAt).format("MMMM D, YYYY")})]}),e.jsxs("div",{className:n.text,children:[e.jsxs("p",{className:n.rcv,children:[s!=null&&s.expense_quantity?s==null?void 0:s.expense_quantity:"N/A"," ",a("quantity")]}),e.jsxs("h6",{children:[a("rs")," ",s==null?void 0:s.expenseAmount]}),e.jsx("p",{className:n.rcv,children:s==null?void 0:s.expenseAccount})]})]})]})},he=({onClose:s,expenseId:c})=>{var d,m,u,v,j,g,x,p,b,_;const{t:a}=C(),{financeExpenseDetail:t}=z({expenseId:c,skip:!c});return e.jsx(Y,{onClose:s,children:e.jsxs("div",{className:n.income_detail,children:[e.jsxs("div",{className:n.detailTop,children:[e.jsx("div",{className:n.detailTopMid,children:e.jsx("h6",{children:(d=t==null?void 0:t.oneExpense)!=null&&d.expensePaid?(m=t==null?void 0:t.oneExpense)==null?void 0:m.expensePaid:(v=(u=t==null?void 0:t.oneExpense)==null?void 0:u.expensePaidUser)==null?void 0:v.userLegalName})}),e.jsx("div",{className:n.detailTopMid,children:e.jsxs("h6",{children:["Rs. ",(j=t==null?void 0:t.oneExpense)==null?void 0:j.expenseAmount]})})]}),e.jsxs(y,{children:[e.jsx(I,{label:`${a("transaction_mode")}: `,value:(g=t==null?void 0:t.oneExpense)==null?void 0:g.expenseAccount,customFormInput:{fontWeight:"500"}}),e.jsx(I,{label:`${a("description")}: `,value:(x=t==null?void 0:t.oneExpense)==null?void 0:x.expenseDesc,customFormInput:{fontWeight:"500"}}),e.jsx(I,{label:`${a("day_date")}: `,value:W((p=t==null?void 0:t.oneExpense)==null?void 0:p.createdAt).format("MMMM D, YYYY"),customFormInput:{fontWeight:"500"}}),(b=t==null?void 0:t.oneExpense)!=null&&b.expenseAck?e.jsx(X,{label:`${a("acknowlegement")}: `,value:{key:(_=t==null?void 0:t.oneExpense)==null?void 0:_.expenseAck},customFormInput:{fontWeight:"500"}}):null]})]})})},ue=({onClose:s,fid:c})=>{var o;const{t:a}=C(),[t,d]=h.useState({expenseAmount:"",expensePaid:"",expenseDesc:"",expenseAccount:"By Bank"}),[m,u]=h.useState(""),[v,j]=h.useState(!1),[g,x]=h.useState(!1),[p,b]=h.useState(""),[_,l]=h.useState(""),[T]=G(),F=r=>{r.target.name==="expenseAmount"?d(i=>({...i,[r.target.name]:r.target.value})):d(i=>({...i,[r.target.name]:r.target.value}))},P=r=>{d(i=>({...i,expenseAccount:r}))},U=r=>{u(r.target.files[0])},f=()=>{let r=ce(t,["expenseDesc"]);if(le(r)){if(c){j(S=>!S);const i=new FormData;i.append("expenseAmount",t.expenseAmount),p||i.append("expensePaid",t.expensePaid),i.append("expenseDesc",t.expenseDesc),i.append("expenseAccount",t.expenseAccount),i.append("file",m),T({fData:i,fid:c,is_inventory:"",user_query:p}).then(()=>{j(S=>!S),s()}).catch(()=>{j(S=>!S)})}}else l(r)},k=r=>{b(r==null?void 0:r._id),x(!1),d(i=>({...i,expensePaid:r==null?void 0:r.userLegalName}))},N=()=>{x(r=>!r)};return e.jsx(e.Fragment,{children:g?e.jsx(re,{onSelectUser:k,selectedId:p,onClose:N}):e.jsx(Y,{onClose:s,children:e.jsxs("div",{className:n.modal_container,children:[e.jsx(y,{children:e.jsxs("div",{className:n.modal_container_outer_header,children:[e.jsx("div",{className:n.modal_container_header,children:e.jsx("h6",{children:a("add_expense_receipt")})}),e.jsx("img",{src:`${Q}/close.svg`,alt:"close icon",onClick:s})]})}),e.jsx(L,{customStyleBorder:{marginBottom:"0"}}),e.jsxs(R,{children:[e.jsx(M,{label:"nominal_expenses",isActive:!0}),e.jsx(M,{label:"assets_inventory"})]}),e.jsxs(y,{customStyle:{paddingTop:"0"},children:[e.jsx(se,{label:"select_transaction_mode",children:(o=ie)==null?void 0:o.map(r=>e.jsx(te,{tile:r,onTile:P,activeTile:t.expenseAccount},r==null?void 0:r.key))}),e.jsx(K,{label:a("amount"),placeholder:a("amount_placeholder"),name:"expenseAmount",value:t.expenseAmount,type:"text",onChange:F,errorShow:_.expenseAmount}),e.jsx(ae,{label:a("paid_to"),placeholder:a("paid_to_placeholder"),name:"expensePaid",value:t.expensePaid,type:"text",onChange:F,errorShow:_.expensePaid,iconUrl:`${$}/navbar-search.svg`,searchLabel:"search_and_select",onSearchAction:N}),e.jsx(oe,{label:a("description"),placeholder:a("description_placeholder"),name:"expenseDesc",value:t.expenseDesc,type:"text",onChange:F,errorShow:_.expenseDesc}),e.jsx(ee,{label:a("acknowlegement_receipt"),name:"acknowlegement_receipt",value:m!=null&&m.name?{name:m==null?void 0:m.name}:"",onChange:U}),e.jsx(ne,{label:"save_receipt",onAction:f})]}),v&&e.jsx(q,{})]})})})},qe=({fid:s})=>{var k,N;const{t:c}=C(),[a,t]=h.useState(""),[d,m]=h.useState(1),[u,v]=h.useState(!0),[j,g]=D({skip:a}),[x,p]=h.useState(""),[b,_]=h.useState(!1),{financeExpense:l,financeExpenseLoading:T}=J({data:{fid:s,page:d,limit:10,search:a},skip:!s});h.useEffect(()=>{g&&u&&m(o=>o+1)},[g,u]),h.useEffect(()=>{var o;(o=l==null?void 0:l.allIncome)!=null&&o.length&&B(l==null?void 0:l.length,v)},[(k=l==null?void 0:l.allIncome)==null?void 0:k.length,B]);const F=h.useCallback(E(o=>t(o),500),[]),P=o=>{F(o.target.value)},U=()=>{p("")},f=()=>{_(o=>!o)};return e.jsxs(e.Fragment,{children:[e.jsxs(V,{children:[e.jsx(y,{children:e.jsxs("div",{className:A.fm_header_container,children:[e.jsx("h6",{children:c("expense_history")}),e.jsx("div",{className:A.fm_search,children:e.jsx("section",{className:A.fm_search_container,children:e.jsxs("div",{className:A.fm_search_container_inner,children:[e.jsx("img",{className:A.fm_search_icon,alt:"search icon",src:`${$}/navbar-search.svg`}),e.jsx("input",{type:"text",placeholder:c("search"),onChange:P})]})})})]})}),e.jsx(L,{}),e.jsxs(y,{customStyle:{paddingTop:"0.2rem"},children:[e.jsxs("div",{className:A.fm_add_button,children:[e.jsx(me,{fid:s}),e.jsx(Z,{label:"add_new_expense",onAction:f})]}),T&&e.jsx(H,{}),(N=l==null?void 0:l.allIncome)==null?void 0:N.map((o,r)=>{var i;return((i=l==null?void 0:l.allIncome)==null?void 0:i.length)===r+1?e.jsx("div",{ref:j,children:e.jsx(w,{expense:o,setExpenseId:p})},o==null?void 0:o._id):e.jsx(w,{expense:o,setExpenseId:p},o==null?void 0:o._id)})]})]}),x&&e.jsx(he,{onClose:U,expenseId:x}),b&&e.jsx(ue,{onClose:f,fid:s})]})};export{qe as default};

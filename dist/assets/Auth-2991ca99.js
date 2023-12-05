import{u as A,r as u,j as e,a as W}from"./index-134e5887.js";import{s as n,G as $}from"./GetStarted-9421d584.js";import{A as B}from"./AuthCardWrapper-52a27227.js";import{A as y}from"./AuthFormFieldWithIcon-c38c5e96.js";import{B as P,N as H}from"./NotifyEvent-d5f1ad68.js";import{u as C,a as E}from"./AssestsBaseUrl-075cad6e.js";import{u as O,a as G}from"./auth-api-6dacce9f.js";import{r as V,e as z}from"./checkingRequiredField-382733fa.js";import{u as J}from"./use-login-ad938b30.js";import{i as K,a as Q,t as I}from"./invalidateAuthUsername-b1b2606f.js";import{d as R}from"./decrypt-8baef3ab.js";import"./CreateButton-26558557.js";import"./Utils.module-b6acf444.js";import"./MethodType-30df8d44.js";const T=({isUser:t,onUserMobile:s})=>{const{t:i}=C(),o=A(),[a,v]=u.useState({insUserName:"",insPassword:""}),[b,_]=u.useState(!1),[g,x]=u.useState(""),[N,d]=u.useState({open:!1,msg:"",variant:"error"}),[j]=O(),{userDispatchAction:S}=J(),p=l=>{v(f=>({...f,[l.target.name]:l.target.value}))},m=l=>{l.preventDefault();let f=V(a);z(f)?(_(h=>!h),K(a==null?void 0:a.insUserName)?d({msg:"Special Character not allowed in username.",open:!0,variant:"error"}):j({login:a}).then(h=>{var L,q,F;const r=R((L=h==null?void 0:h.data)==null?void 0:L.encrypt);r!=null&&r.login?S({token:r==null?void 0:r.token,user:r==null?void 0:r.user,isUniversal:(q=r==null?void 0:r.user)==null?void 0:q.is_universal,phoneNumber:(F=r==null?void 0:r.user)==null?void 0:F.code_arr}):d({msg:"Invalid Credentials",open:!0,variant:"error"}),_(D=>!D)}).catch(h=>{d({msg:`Time out of request with reason ${h}`,open:!0,variant:"error"}),_(r=>!r)})):x(f)},c=()=>{let l="";t?l="/user/forget":l="/institute/forget",o(l)};return e.jsxs("form",{onSubmit:m,children:[e.jsx(y,{label:i("username"),placeholder:i("username_placeholder"),fieldIconUrl:`${E}/auth-user.svg`,validate:g.insUserName,name:"insUserName",value:a.insUserName,onChange:p}),e.jsx(y,{label:i("password"),placeholder:i("password_placeholder"),fieldIconUrl:`${E}/auth-password.svg`,validate:g.insPassword,name:"insPassword",value:a.insPassword,onChange:p,type:"password",isPassword:!0}),e.jsx("div",{className:n.auth_forget_container,children:e.jsx("p",{className:n.auth_forget_text,onClick:c,children:i("forgot_password")})}),e.jsx(P,{type:"submit",buttonText:i("login"),disabled:b}),t?e.jsx("div",{className:n.auth_footer_container,children:e.jsx("p",{className:n.auth_forget_text,onClick:s,children:i("continue_with_mobile_no")})}):e.jsx("div",{className:n.auth_footer_container,children:e.jsxs("p",{className:n.auth_forget_text,children:[i("new_to_qviple")," ",i("signup")]})}),e.jsx(H,{eventState:N,eventStateHandler:d})]})},X=({onUserName:t})=>{const{t:s}=C(),i=A(),[o]=G(),[a,v]=u.useState(""),[b,_]=u.useState(!1),[g,x]=u.useState(""),[N,d]=u.useState({open:!1,msg:"",variant:"error"}),j=p=>{v(p.target.value)},S=p=>{p.preventDefault(),a?(_(m=>!m),o({userPhoneNumber:a,status:"Not Verified",is_qid:Q(a)}).then(m=>{var l;let c=R((l=m==null?void 0:m.data)==null?void 0:l.encrypt);c!=null&&c.userPhoneNumber&&(i("/verify",{state:{phoneNumber:c==null?void 0:c.ePhone,type:I(a)==="qviple id"?"mobile number":I(a)}}),_(f=>!f))}).catch(()=>{d({open:!0,msg:"Time out of request...",variant:"error"})})):x({state:"* required"})};return e.jsxs("form",{onSubmit:S,className:n.auth_login_form,children:[e.jsx(y,{label:s("user_email_number_qviple_id"),placeholder:s("user_email_number_qviple_id_placeholder"),fieldIconUrl:`${E}/auth-flag.svg`,validate:g.state,name:"mobile_number",value:a,onChange:j}),e.jsxs("p",{className:n.auth_privacy_and_policy,children:[s("mobile_login_note")," ",e.jsx("span",{className:n.auth_privacy_and_policy_link,children:e.jsx("a",{href:"/q/terms/condition",children:s("terms_condition")})})," ",s("and"),e.jsx("span",{className:n.auth_privacy_and_policy_link,children:e.jsx("a",{href:"/q/privacy/policy",children:s("privacy_policy")})})]}),e.jsx(P,{type:"submit",buttonText:s("send_otp"),disabled:b}),e.jsx("div",{className:n.auth_footer_container,children:e.jsx("p",{className:n.auth_forget_text,onClick:t,children:s("login_with_user_name")})}),e.jsx(H,{eventState:N,eventStateHandler:d})]})},w="USER_MOBILE",k="USER_NAME",M="INSTITUTE_USER_NAME",U=[w,k],Y=()=>{const{t}=C(),[s,i]=u.useState("USER_MOBILE"),o=()=>{i(w)},a=()=>{i(k)},v=()=>{i(M)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:n.auth_login_tab_container,children:[e.jsx("div",{className:U!=null&&U.includes(s)?n.auth_login_tab_active:n.auth_login_tab,onClick:o,children:t("user_staff_student")}),e.jsx("div",{className:s===M?n.auth_login_tab_active:n.auth_login_tab,onClick:v,children:t("institute")})]}),s===w?e.jsx(X,{onUserName:a}):s===k?e.jsx(T,{isUser:!0,onUserMobile:o}):e.jsx(T,{})]})},Z=()=>{const t=W(o=>o.baseChange),s=A();return{autoLogin:()=>{var o,a;t!=null&&t.token&&(t!=null&&t.id)&&((o=t==null?void 0:t.currentLogin)!=null&&o.username)&&s(`/${(a=t==null?void 0:t.currentLogin)==null?void 0:a.username}/feed`)}}},_e=()=>{const{autoLogin:t}=Z();return u.useEffect(()=>{t()},[]),e.jsx($,{children:e.jsx(B,{children:e.jsx(Y,{})})})};export{_e as default};

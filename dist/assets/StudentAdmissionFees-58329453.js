import{f as J,a as W,j as e,L as K,r as p,Q as U,i as ee}from"./index-40ad8b25.js";import{u as q,e as T,c as F,b as te,f as _e}from"./AssestsBaseUrl-2ebdccdb.js";import{u as se,d as re,s as i,e as ce,f as ne,g as ae,h as oe,a as de,i as he,n as ue,j as ie,k as pe,l as le}from"./StaffMemberConfig-a8337ee7.js";import{r as X,e as Z}from"./checkingRequiredField-382733fa.js";import{U as N}from"./UserMemberContentWrapper-04d21be5.js";import{M as B}from"./Modal-53e97914.js";import{B as E,L as Q,M as fe}from"./UserMemberProfileWrapper-b0858c1e.js";import{F as H,d as je}from"./dayjs.min-c62bdfdc.js";import{F as xe}from"./FormTextarea-7f064199.js";import{C as L}from"./CreateButton-86dcb64a.js";const me="_sp_main_11bfu_1",ge="_sp_main_head_11bfu_8",be="_sp_main_head_span_11bfu_24",ye="_sp_main_head_span_requested_11bfu_28",ve="_sp_main_other_11bfu_32",Ne="_spmo_allow_11bfu_38",Se="_sph_main_11bfu_45",ke="_sph_main_info_11bfu_51",qe="_sph_main_info_inner_11bfu_63",Ce="_sp_fw_11bfu_83",we="_sp_fhw_11bfu_89",Fe="_link_hold_container_11bfu_108",D={sp_main:me,sp_main_head:ge,sp_main_head_span:be,sp_main_head_span_requested:ye,sp_main_other:ve,spmo_allow:Ne,sph_main:Se,sph_main_info:ke,sph_main_info_inner:qe,sp_fw:Ce,sp_fhw:we,link_hold_container:Fe},Ae="_admission_fees_container_1qzj3_1",$e="_admission_fees_amount_1qzj3_12",ze="_admission_fees_amount_top_1qzj3_23",De="_admission_fees_grant_1qzj3_37",Be="_pending_btn_1qzj3_55",Ee="_paid_btn_1qzj3_72",Ie="_refund_btn_1qzj3_90",Pe="_card_title_1qzj3_108",Oe="_collect_btn_1qzj3_132",Re="_add_remark_1qzj3_149",Me="_add_remark_btn_1qzj3_154",Te="_add_remark_text_1qzj3_167",Ue="_remark_modal_1qzj3_176",Le="_save_remark_1qzj3_179",We="_remark_modal_title_1qzj3_199",He="_edit_icon_1qzj3_210",Ve="_student_admission_fees_card_container_1qzj3_216",Ye="_student_admission_card_title_1qzj3_232",Ge="_student_admission_count_container_1qzj3_253",Je="_student_admission_count_1qzj3_253",Ke="_student_admission_count_image_1qzj3_281",Xe="_show_text_1qzj3_291",Ze="_student_admission_cash_card_1qzj3_307",Qe="_view_receipt_btn_1qzj3_318",et="_student_admission_collect_btn_1qzj3_336",tt="_remark_card_container_1qzj3_354",_t="_image_refund_btn_1qzj3_366",st="_add_scholar_number_btn_1qzj3_381",rt="_admission_fees_1qzj3_1",ct="_card_hold_container_1qzj3_429",y={admission_fees_container:Ae,admission_fees_amount:$e,admission_fees_amount_top:ze,admission_fees_grant:De,pending_btn:Be,paid_btn:Ee,refund_btn:Ie,card_title:Pe,collect_btn:Oe,add_remark:Re,add_remark_btn:Me,add_remark_text:Te,remark_modal:Ue,save_remark:Le,remark_modal_title:We,edit_icon:He,student_admission_fees_card_container:Ve,student_admission_card_title:Ye,student_admission_count_container:Ge,student_admission_count:Je,student_admission_count_image:Ke,show_text:Xe,student_admission_cash_card:Ze,view_receipt_btn:Qe,student_admission_collect_btn:et,remark_card_container:tt,image_refund_btn:_t,add_scholar_number_btn:st,admission_fees:rt,card_hold_container:ct},Y=(t,_,c)=>t+_+c,nt=()=>{var r,u,h,n,j,o,l,x,d;const{t}=q(),_=J(),c=W(),{oneStudentFeesStat:s}=se({sid:(r=c.state)==null?void 0:r.sid,skip:!((u=c.state)!=null&&u.sid)});return e.jsxs("div",{className:y.admission_fees,children:[e.jsxs("div",{children:[e.jsxs("h5",{style:{color:"#008000"},children:[t("rs")," ",Y(((h=s==null?void 0:s.student)==null?void 0:h.studentPaidFeeCount)||0,((n=s==null?void 0:s.student)==null?void 0:n.admissionPaidFeeCount)||0,((j=s==null?void 0:s.student)==null?void 0:j.hostelPaidFeeCount)||0)]}),e.jsx("h6",{style:{marginBottom:"1.5rem"},children:t("total_fees_paid")}),e.jsxs("h5",{style:{color:"#121212"},children:[t("rs")," ",Y(((o=s==null?void 0:s.student)==null?void 0:o.studentRemainingFeeCount)||0,((l=s==null?void 0:s.student)==null?void 0:l.admissionRemainFeeCount)||0,((x=s==null?void 0:s.student)==null?void 0:x.hostelRemainFeeCount)||0)]}),e.jsx("h6",{children:t("total_outs")})]}),e.jsxs("div",{children:[e.jsx(K,{to:`/q/${_.username}/student/profile`,state:c.state,children:e.jsxs("div",{className:y.card_hold_container,children:[e.jsx("img",{src:`${T}/link-forward.svg`,alt:"forword link"}),e.jsx("h6",{children:t("view_profile")})]})}),e.jsxs("h5",{style:{color:"#121212",marginTop:"1.5rem"},children:[t("rs")," ",((d=s==null?void 0:s.student)==null?void 0:d.applicable_fees_pending)??0]}),e.jsx("h6",{children:t("applicable_outs")})]})]})},at=({uniqueGr:t,onClose:_,studentId:c})=>{const{t:s}=q(),[r,u]=p.useState(!1),[h,n]=p.useState(!1),[j]=re(),[o,l]=p.useState({query_content:"",query_gr:t??""});p.useEffect(()=>{t&&l(d=>({...d,query_gr:t??""}))},[t]);const x=()=>{let d=X(o);Z(d)?(u(a=>!a),j({sid:c,grNumberContent:o}).then(()=>{u(a=>!a),_()}).catch({})):n(d)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsxs("div",{className:i.modal_container,children:[e.jsx(N,{children:e.jsxs("div",{className:i.modal_container_outer_header,children:[e.jsx("div",{className:i.modal_container_header,children:e.jsx("h6",{children:s("update_student_gr_number")})}),e.jsx("img",{src:`${F}/close.svg`,alt:"close icon",onClick:_})]})}),e.jsx(E,{}),e.jsxs(N,{customStyle:{paddingTop:"0"},children:[e.jsx(H,{label:s("student_gr"),placeholder:s("student_gr_placeholder"),name:"query_gr",value:o==null?void 0:o.query_gr,type:"text",onChange:d=>l(a=>({...a,query_gr:d.target.value})),errorShow:h.query_gr}),e.jsx(xe,{label:s("gr_student_message_label"),placeholder:s("gr_student_message_label_placeholder"),name:"query_content",value:o.query_content,type:"text",onChange:d=>l(a=>({...a,query_content:d.target.value})),errorShow:h.query_content}),e.jsx(L,{label:"update",onAction:x})]})]})}),r&&e.jsx(U,{})]})},Pt=({profilePhoto:t,name:_,grNumber:c,rollNumber:s,classTitle:r,isAdmission:u,isGr:h})=>{var a;const{t:n}=q(),j=J(),o=W(),[l,x]=p.useState(!1),d=()=>{x(f=>!f)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:D.sph_main,children:[e.jsxs("div",{className:D.sph_main_info,children:[e.jsx("img",{src:t?`${ee}/${t}`:`${te}/feed-user-avatar.svg`,alt:"user icon"}),e.jsxs("div",{className:D.sph_main_info_inner,children:[e.jsx("h6",{children:_??""}),e.jsxs("p",{children:[n("roll_no")," "," : ",s??""]}),e.jsxs("p",{children:[n("gr_number")," "," : ",c??""," ","  ",h==="Locked"?e.jsxs("span",{className:D.sp_main_head_span_requested,children:["(",n("reuqtested"),")"]}):e.jsxs("span",{className:D.sp_main_head_span,onClick:d,children:["(",n("edit"),")"]})]}),e.jsxs("p",{children:[n("active_class")," "," : "," ",r??""]})]})]}),e.jsx("div",{children:u?e.jsx(nt,{}):e.jsx(K,{to:`/${j.username}/student/profile/admission`,state:o.state,children:e.jsxs("div",{className:D.link_hold_container,style:{right:"35%"},children:[e.jsx("img",{src:`${T}/link-forward.svg`,alt:"forword link"}),e.jsx("h6",{children:n("admission_fees")})]})})})]}),l&&e.jsx(at,{onClose:d,uniqueGr:c,studentId:(a=o.state)==null?void 0:a.studentId})]})},ot="_student_fees_header_container_1bf19_1",dt="_student_fees_header_column_1bf19_18",ht="_student_fees_row_amount_1bf19_23",ut="_student_fees_btn_container_1bf19_48",it="_student_fees_btn_container_active_1bf19_77",pt="_student_alll_fees_data_1bf19_81",lt="_student_admission_fees_container_1bf19_87",ft="_student_internal_card_1bf19_95",jt="_student_internal_card_btn_pay_1bf19_133",xt="_student_internal_card_btn_paid_1bf19_151",mt={student_fees_header_container:ot,student_fees_header_column:dt,student_fees_row_amount:ht,student_fees_btn_container:ut,student_fees_btn_container_active:it,student_alll_fees_data:pt,student_admission_fees_container:lt,student_internal_card:ft,student_internal_card_btn_pay:jt,student_internal_card_btn_paid:xt},gt=({onClose:t,installment:_,admission:c})=>{var v,g,A,$;const{t:s}=q(),r=W();let u=new Date;const[h,n]=p.useState(!1),[j,o]=p.useState(""),[l]=ce(),[x]=ne(),[d,a]=p.useState({amount:"",mode:"Online",fee_payment_mode:"Government/Scholarship",fee_payment_amount:"",transaction_date:(v=u.toISOString())==null?void 0:v.substring(0,10),fee_bank_name:"",fee_bank_holder:"",fee_utr_reference:""}),f=C=>{a(S=>({...S,amount:+C.target.value,fee_payment_amount:+C.target.value}))},m=()=>{var C,S,w,b,z,I,P,O,R,k;d.fee_payment_amount?((C=r==null?void 0:r.state)==null?void 0:C.exceedAmount)>=payData.amount&&(n(M=>!M),(_==null?void 0:_.studentId)!==""&&((S=_==null?void 0:_.install)==null?void 0:S.appId)!==""&&((w=r==null?void 0:r.state)==null?void 0:w.scid)!==""&&(n(!0),_!=null&&_.is_already_made?x({sid:_==null?void 0:_.studentId,appId:(b=_==null?void 0:_.install)==null?void 0:b.appId,governmentData:{...payData,type:(z=_==null?void 0:_.install)==null?void 0:z.installmentValue,scid:(I=r==null?void 0:r.state)==null?void 0:I.scid,remain_1:(P=_==null?void 0:_.install)==null?void 0:P._id,rid:_==null?void 0:_.rid}}).then(M=>{M.data.paid&&(n(V=>!V),t())}).catch({}):l({sid:_==null?void 0:_.studentId,appId:(O=_==null?void 0:_.install)==null?void 0:O.appId,governmentData:{...payData,type:(R=_==null?void 0:_.install)==null?void 0:R.installmentValue,scid:(k=r==null?void 0:r.state)==null?void 0:k.scid}}).then(M=>{M.data.paid&&(n(V=>!V),t())}).catch({}))):o({fee_payment_amount:"* required"})};return console.info("installment",_,c),e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsxs("div",{className:i.modal_container,children:[e.jsx(N,{children:e.jsxs("div",{className:i.modal_container_outer_header,children:[e.jsx("div",{className:i.modal_container_header,children:e.jsxs("h6",{children:[s("allot_scholer_to_student"),`${((g=_==null?void 0:_.student)==null?void 0:g.studentFirstName)??""} ${((A=_==null?void 0:_.student)==null?void 0:A.studentMiddleName)??""} ${(($=_==null?void 0:_.student)==null?void 0:$.studentLastName)??""}`]})}),e.jsx("img",{src:`${F}/close.svg`,alt:"close icon",onClick:t})]})}),e.jsx(E,{}),e.jsxs(N,{customStyle:{paddingTop:"0"},children:[e.jsx(H,{label:s("enter_amount"),placeholder:s("enter_amount_placeholder"),name:"fee_payment_amount",value:d.fee_payment_amount,type:"tel",onChange:f,errorShow:j.fee_payment_amount}),e.jsx(L,{label:"allot",onAction:m})]})]})}),h&&e.jsx(U,{})]})},bt=({admission:t,install:_})=>{var j,o,l,x,d,a,f,m;const{t:c}=q(),s=W(),[r,u]=p.useState(""),h=()=>{var v;((v=s.state)==null?void 0:v.collectAs)==="SCHOLARSHIP"&&u("SCHOLARSHIP")},n=()=>{u("")};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:y.student_admission_cash_card,children:[e.jsxs("section",{className:y.admission_fees_amount,children:[e.jsxs("h6",{children:[(_==null?void 0:_.status)==="Paid"?(_==null?void 0:_.installmentValue)??"":_==null?void 0:_.installmentValue," ",(_==null?void 0:_.status)==="Paid"&&e.jsx("span",{children:je((j=_==null?void 0:_.fee_receipt)==null?void 0:j.fee_transaction_date).format("DD-MMM-YYYY")})]}),e.jsxs("h6",{children:[c("rs"),(_==null?void 0:_.remainAmount)??0]})]}),e.jsx("section",{className:y.admission_fees_grant,children:(_==null?void 0:_.status)==="Paid"?e.jsxs(e.Fragment,{children:[e.jsx("h6",{children:((o=_==null?void 0:_.fee_receipt)==null?void 0:o.fee_payment_mode)==="By Cash"?"Offline":(l=_==null?void 0:_.fee_receipt)!=null&&l.fee_payment_mode?(x=_==null?void 0:_.fee_receipt)==null?void 0:x.fee_payment_mode:(_==null?void 0:_.refund_status)??""}),e.jsx("h6",{children:((d=_==null?void 0:_.fee_receipt)==null?void 0:d.set_off_status)==="Set Off"?"SetOff":((a=_==null?void 0:_.fee_receipt)==null?void 0:a.fee_payment_mode)==="By Cash"?"Cash":((f=_==null?void 0:_.fee_receipt)==null?void 0:f.fee_payment_mode)==="Exempted/Unrecovered"?"N/A":"Bank"})]}):e.jsx(e.Fragment,{children:(_==null?void 0:_.status)==="Receipt Rejected"?e.jsxs("h6",{children:[`${c("reason")} : `,(m=_==null?void 0:_.fee_receipt)==null?void 0:m.reason]}):e.jsxs("h6",{children:[c("due_on"),_==null?void 0:_.dueDate]})})}),(_==null?void 0:_.status)==="Paid"?e.jsx("button",{className:y.view_receipt_btn,children:c("view_receipt")}):e.jsx("button",{className:y.student_admission_collect_btn,style:(_==null?void 0:_.status)==="Receipt Requested"?{width:"100%",backgroundColor:"#B8B83E"}:(_==null?void 0:_.status)==="Receipt Rejected"?{width:"100%",backgroundColor:"#B8B83E"}:(t==null?void 0:t.button_status)==="Collect As Scholarship"?{backgroundColor:"#1d22c9f7"}:{width:"100%"},onClick:h,children:(_==null?void 0:_.status)==="Receipt Requested"?c("receipt_requested"):(t==null?void 0:t.button_status)==="Collect As Scholarship"?c("scholarship_outs"):c("collect_fees")})]}),r==="SCHOLARSHIP"&&e.jsx(gt,{onClose:n,installment:_,admission:t})]})},yt=({onClose:t,setScholarNumber:_,filledNumber:c,rcid:s})=>{const{t:r}=q(),[u,h]=p.useState(!1),[n,j]=p.useState(c??""),[o,l]=p.useState(!1),[x]=ae(),d=()=>{n?n!==c&&s&&(h(a=>!a),x({rcid:s,scholarData:{scholar_ship_number:n}}).then(()=>{t(),_(n),h(a=>!a)}).catch({})):l({c_number:"* required"})};return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsxs("div",{className:i.modal_container,children:[e.jsx(N,{children:e.jsxs("div",{className:i.modal_container_outer_header,children:[e.jsx("div",{className:i.modal_container_header,children:e.jsx("h6",{children:r("scholarship_application_no")})}),e.jsx("img",{src:`${F}/close.svg`,alt:"close icon",onClick:t})]})}),e.jsx(E,{}),e.jsxs(N,{customStyle:{paddingTop:"0"},children:[e.jsx(H,{placeholder:r("scholarship_application_no_placeholder"),name:"scholar",value:n,type:"text",onChange:a=>j(a.target.value),errorShow:o.query_gr}),e.jsx(L,{label:"update",onAction:d})]})]})}),u&&e.jsx(U,{})]})},vt=({onClose:t,rid:_,sid:c,onParentClose:s})=>{const{t:r}=q(),[u,h]=p.useState(!1),[n,j]=p.useState(!1),[o,l]=p.useState({verify:""}),[x]=oe(),d=()=>{let a=X(o);Z(a)&&o.verify==="Confirm"?(h(f=>!f),x({rid:_,sid:c}).then(()=>{s(),h(f=>!f)}).catch({})):j(a)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsxs("div",{className:i.modal_container,children:[e.jsx(N,{children:e.jsxs("div",{className:i.modal_container_outer_header,children:[e.jsx("div",{className:i.modal_container_header,children:e.jsx("h6",{children:r("confirm_drop_admission_fees")})}),e.jsx("img",{src:`${F}/close.svg`,alt:"close icon",onClick:t})]})}),e.jsx(E,{}),e.jsxs(N,{customStyle:{paddingTop:"0"},children:[e.jsx(H,{label:r("type_confirm_to_continue"),placeholder:r("type_confirm_to_continue"),name:"verify",value:o==null?void 0:o.verify,type:"text",onChange:a=>l(f=>({...f,verify:a.target.value})),errorShow:n.verify}),e.jsx(L,{label:"confirm",onAction:d})]})]})}),u&&e.jsx(U,{})]})},G=({structure:t,selectedStructure:_,onSelect:c})=>{const{t:s}=q(),r=()=>{c(t)};return e.jsxs("div",{className:_===(t==null?void 0:t._id)?`${i.fees_card} ${i.fees_card_hover_active}`:`${i.fees_card} ${i.fees_card_hover}`,onClick:r,style:{cursor:"pointer"},children:[e.jsx("img",{src:`${F}/category.svg`,alt:"categor icon"}),e.jsxs("div",{className:i.fees_card_text,children:[e.jsx("div",{className:i.fees_card_text_bottom,children:e.jsx("h6",{children:(t==null?void 0:t.unique_structure_name)??""})}),e.jsxs("div",{className:i.fees_card_text_bottom,children:[e.jsxs("h6",{children:[s("applicable_fees_only")," ",s("rs"),(t==null?void 0:t.applicable_fees)??0]}),e.jsxs("h6",{children:[s("total_admission_fees")," "," : "," ",s("rs"),(t==null?void 0:t.total_admission_fees)??0]})]})]})]})},Nt=({onClose:t,did:_,bid:c,cmid:s,selectedStructure:r,onSelectedStrucutre:u})=>{var w;const{t:h}=q(),[n,j]=p.useState(""),[o,l]=p.useState(1),[x,d]=p.useState(!0),[a,f]=de({skip:n}),[m,v]=p.useState(""),{financeAllFeeStructure:g,financeAllFeeStructureLoading:A}=he({data:{did:_,page:o,limit:10,search:n,filterBy:s,batchBy:c},skip:!_});p.useEffect(()=>{f&&x&&l(b=>b+1)},[f,x]),p.useEffect(()=>{g!=null&&g.length&&ue(g==null?void 0:g.length,d)},[g==null?void 0:g.length]);const $=p.useCallback(ie(b=>j(b),500),[]),C=b=>{$(b.target.value)},S=b=>{v(b)};return e.jsx(e.Fragment,{children:m?e.jsx(B,{onClose:t,children:e.jsxs("div",{className:i.modal_container,children:[e.jsx(N,{children:e.jsxs("div",{className:i.modal_container_outer_header,children:[e.jsx("div",{className:i.modal_container_header,children:e.jsx("h6",{children:h("fee_structure")})}),e.jsx("img",{src:`${F}/close.svg`,alt:"close icon",onClick:()=>S("")})]})}),e.jsx(E,{}),e.jsxs(N,{customStyle:{paddingTop:"0.3rem"},children:[e.jsxs("div",{className:i.fee_middle_section,children:[e.jsx("p",{children:h("fee_structure_of_student_is")}),e.jsx("h6",{children:(w=m==null?void 0:m.category_master)==null?void 0:w.category_name}),e.jsxs("p",{children:[" ",h("total_admission_fees")," "," : "," ",h("rs")," ",e.jsx("span",{style:{fontWeight:"600"},children:(m==null?void 0:m.total_admission_fees)??0})]}),e.jsxs("p",{children:[h("applicable_fees_amount")," "," : "," ",h("rs")," ",e.jsx("span",{style:{fontWeight:"600"},children:(m==null?void 0:m.applicable_fees)??0})]})]}),e.jsx(L,{label:"confirm",onAction:u})]})]})}):e.jsx(B,{onClose:t,children:e.jsxs("div",{className:i.modal_container,style:{maxWidth:"40rem"},children:[e.jsx(N,{children:e.jsxs("div",{className:i.modal_container_outer_header,children:[e.jsx("div",{className:i.modal_container_header,children:e.jsx("h6",{children:h("edit_fees_structure")})}),e.jsx("img",{src:`${F}/close.svg`,alt:"close icon",onClick:t})]})}),e.jsx(E,{}),e.jsxs(N,{customStyle:{paddingTop:"0.3rem"},children:[e.jsxs("div",{className:i.fm_search_full_container_inner,style:{marginBottom:"0.6rem"},children:[e.jsx("input",{type:"text",placeholder:h("search"),className:i.fm_search_full_container_inner,onChange:C}),e.jsx("img",{src:`${_e}/navbar-search.svg`,alt:"search icon",className:i.fm_search_full_icon})]}),A&&e.jsx(Q,{}),g==null?void 0:g.map((b,z)=>(g==null?void 0:g.length)===z+1?e.jsx("div",{ref:a,children:e.jsx(G,{structure:b,selectedStructure:r,onSelect:S})},b==null?void 0:b._id):e.jsx(G,{structure:b,selectedStructure:r,onSelect:S},b==null?void 0:b._id))]})]})})})},St=({structureId:t,onClose:_,aid:c,applicationId:s,sid:r,rid:u,did:h,bid:n,cmid:j,onParentClose:o})=>{const{disabled:l,setDisabled:x}=p.useState(!1),[d]=pe(),a=f=>{t===(f==null?void 0:f._id)||c&&r&&s&&t&&u&&(x(m=>!m),d({aid:c,appId:s,sid:r,updateStrucutre:{old_fee_struct:t,new_fee_struct:f==null?void 0:f._id,rid:u}}).then(()=>{o(),x(m=>!m)}).catch({}))};return e.jsxs(e.Fragment,{children:[e.jsx(Nt,{onClose:_,did:h,bid:n,cmid:j,selectedStructure:t,onSelectedStrucutre:a}),l&&e.jsx(U,{})]})},kt=({onClose:t,rid:_,sid:c,is_drop:s,structureId:r,aid:u,applicationId:h,did:n,bid:j,cmid:o})=>{const{t:l}=q(),[x,d]=p.useState(!1),[a,f]=p.useState(!1),m=()=>{f(g=>!g)},v=()=>{d(g=>!g)};return e.jsx(e.Fragment,{children:x?e.jsx(vt,{rid:_,sid:c,onClose:v,onParentClose:t}):a?e.jsx(St,{structureId:r,onClose:m,aid:u,applicationId:h,sid:c,rid:_,did:n,bid:j,cmid:o,onParentClose:t}):e.jsxs(fe,{onClose:t,children:[e.jsx("h6",{onClick:m,children:l("edit_fees_structure")}),s?e.jsx("h6",{onClick:v,children:l("drop")}):null]})})},qt=({admission:t,isFeesData:_,sid:c})=>{var d,a,f,m,v,g,A,$,C,S,w,b,z,I,P,O,R;const{t:s}=q(),[r,u]=p.useState(!1),[h,n]=p.useState(!1),[j,o]=p.useState(""),l=()=>{n(k=>!k)},x=()=>{u(k=>!k)};return p.useEffect(()=>{t!=null&&t.scholar_ship_number&&o(t==null?void 0:t.scholar_ship_number)},[t==null?void 0:t.scholar_ship_number]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:y.student_admission_fees_card_container,style:{maxWidth:_?"44%":"30%",minWidth:_?"44%":"30%"},children:[e.jsxs("section",{className:y.student_admission_card_title,children:[e.jsxs("h6",{style:{marginBottom:"0.3rem"},children:[(t==null?void 0:t.card_type)==="Promote"?((a=(d=t==null?void 0:t.student)==null?void 0:d.studentClass)==null?void 0:a.classTitle)??"":((f=t==null?void 0:t.appId)==null?void 0:f.applicationName)??""," "]}),e.jsx("p",{style:{marginBottom:"0.3rem"},children:((m=t==null?void 0:t.fee_structure)==null?void 0:m.unique_structure_name)??""}),e.jsx("img",{src:`${F}/menu.svg`,alt:"menu icon",onClick:()=>u(!0),className:y.edit_icon,title:"Menu",style:{cursor:"pointer"}})]}),e.jsx("div",{className:y.student_admission_count_container,onClick:l,children:e.jsx("button",{className:y.add_scholar_number_btn,children:j||t!=null&&t.scholar_ship_number?e.jsxs(e.Fragment,{children:[s("edit_scholarship_application_no"),e.jsx("span",{style:{color:"#121212"},children:j||(t==null?void 0:t.scholar_ship_number)})]}):s("add_scholarship_application_no_if_applicable")})}),e.jsxs("section",{className:y.student_admission_count_container,style:{marginBottom:"1.5rem"},children:[e.jsxs("div",{className:y.student_admission_count,children:[e.jsxs("h5",{style:{color:"#121212"},children:[s("rs")," ",((v=t==null?void 0:t.fee_structure)==null?void 0:v.total_admission_fees)??0,e.jsx("span",{style:{fontSize:"13px",fontWeight:"400",color:"#121212"},children:` (${s("rs")} ${((g=t==null?void 0:t.fee_structure)==null?void 0:g.applicable_fees)??0})`})]}),e.jsx("h6",{style:{marginBottom:"1rem"},children:s("total_applicable_fees")}),e.jsxs("h5",{style:{color:"#008000"},children:[s("rs")," ",(t==null?void 0:t.paid_fee)??0,e.jsx("span",{style:{fontSize:"13px",fontWeight:"400",color:"#121212"},children:` (${s("rs")} ${((A=t==null?void 0:t.fee_structure)==null?void 0:A.applicable_fees)-(t==null?void 0:t.paid_fee)>0?(($=t==null?void 0:t.fee_structure)==null?void 0:$.applicable_fees)-(t==null?void 0:t.paid_fee):0})`})]}),e.jsx("h6",{children:s("paid_oustanding")})]}),e.jsx("div",{className:y.student_admission_count_image,children:(t==null?void 0:t.status)==="Paid"?(t==null?void 0:t.paid_fee)-(t==null?void 0:t.applicable_fee)>0?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:`${T}/fees-refund.svg`,alt:"pending icon"}),e.jsxs("div",{className:y.show_text,children:[e.jsxs("h6",{style:{fontWeight:"600"},children:[s("rs")," ",(t==null?void 0:t.paid_fee)-(t==null?void 0:t.applicable_fee)]}),e.jsxs("h6",{children:[" ",s("excess")]}),e.jsx("button",{className:y.image_refund_btn,children:s("refund")})]})]}):e.jsx("img",{src:`${T}/fees-paid.svg`,alt:"pending icon",style:{width:"140px",height:"140px"}}):t!=null&&t.remaining_fee?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:`${T}/fees-pending.svg`,alt:"pending icon",style:{width:"140px",height:"140px"}}),e.jsxs("div",{className:y.show_text,children:[e.jsxs("h6",{style:{fontWeight:"600"},children:[s("rs")," ",(t==null?void 0:t.remaining_fee)??0]}),e.jsxs("h6",{children:[" ",s("pending")]})]})]}):""})]}),(C=t==null?void 0:t.remaining_array)==null?void 0:C.map(k=>e.jsx(bt,{install:k,admission:t},k==null?void 0:k._id)),e.jsx("div",{className:y.remark_card_container,children:e.jsx("section",{className:y.add_remark,children:e.jsxs("h6",{className:y.add_remark_text,children:[s("remark")," ",(t==null?void 0:t.remark)??""]})})})]}),h&&e.jsx(yt,{onClose:l,setScholarNumber:o,filledNumber:j,rcid:t==null?void 0:t._id}),r&&e.jsx(kt,{sid:c,rid:t==null?void 0:t._id,is_drop:(t==null?void 0:t.drop_status)!=="Disable",onClose:x,aid:(w=(S=t==null?void 0:t.appId)==null?void 0:S.admissionAdmin)==null?void 0:w._id,applicationId:(b=t==null?void 0:t.appId)==null?void 0:b._id,did:(z=t==null?void 0:t.fee_structure)==null?void 0:z.department,bid:(I=t==null?void 0:t.fee_structure)==null?void 0:I.batch_master,cmid:(O=(P=t==null?void 0:t.fee_structure)==null?void 0:P.class_master)==null?void 0:O._id,structureId:(R=t==null?void 0:t.fee_structure)==null?void 0:R.id})]})},Ot=({sid:t,isFeesData:_})=>{var r;const{oneStudentAdmissionFees:c,oneStudentAdmissionFeesLoading:s}=le({sid:t,skip:!t});return e.jsxs("div",{className:mt.student_admission_fees_container,children:[s&&e.jsx(Q,{}),(r=c==null?void 0:c.array)==null?void 0:r.map(u=>e.jsx(qt,{admission:u,isFeesData:_,sid:t},u==null?void 0:u._id))]})};export{Ot as S,mt as a,Pt as b,D as s};

import{j as i,L as m,f as v,h as p,i as h}from"./index-840de58d.js";import{g as b,d as $,u as k,b as l,f as o}from"./AssestsBaseUrl-3e7ac4b0.js";const j="_dl_user_feed_1ykuz_1",x="_dl_user_feed_drawer_1ykuz_8",q="_dl_dw_1ykuz_12",K="_dl_dw_logo_1ykuz_23",z="_dd_card_1ykuz_38",L="_dd_card_active_1ykuz_49",U="_dc_layout_1ykuz_63",t={dl_user_feed:j,dl_user_feed_drawer:x,dl_dw:q,dl_dw_logo:K,dd_card:z,dd_card_active:L,dc_layout:U},D="_user_feed_drawer_inner_1q922_1",N="_user_feed_member_1q922_4",S="_user_feed_analytic_1q922_9",C="_uf_search_1q922_14",P="_uf_search_input_1q922_18",R="_ufu_application_1q922_37",E="_ufu_your_application_1q922_43",F="_ufu_your_application_inner_1q922_55",I="_ufu_ji_staff_1q922_69",M="_ufu_application_form_1q922_75",B="_ufu_ji_bottom_1q922_76",G="_ufu_ji_swtich_1q922_110",H="_ufu_designation_1q922_127",J="_ufu_ud_card_1q922_137",O="_uf_ufa_container_1q922_159",Q="_uf_ufa_container_inner_1q922_166",V={user_feed_drawer_inner:D,user_feed_member:N,user_feed_analytic:S,uf_search:C,uf_search_input:P,ufu_application:R,ufu_your_application:E,ufu_your_application_inner:F,ufu_ji_staff:I,ufu_application_form:M,ufu_ji_bottom:B,ufu_ji_swtich:G,ufu_designation:H,ufu_ud_card:J,uf_ufa_container:O,uf_ufa_container_inner:Q},W=({children:e})=>i.jsxs("div",{className:t.dl_dw,children:[i.jsxs("div",{className:t.dl_dw_logo,children:[i.jsx("img",{src:`${b}/hamburger.svg`,alt:"go back icon",style:{height:"0.9rem"}}),i.jsx("img",{className:t.f_right_qviple_logo,src:`${$}/qviple-text-logo.svg`,alt:"company logo"})]}),e]}),a=({drawer:e,isLink:n,url:_,parentState:s,onAction:u,isActive:c,customStyleContainer:r,customStyleIcon:d,customStylelabel:y})=>{const{t:g}=k();return n?i.jsx(m,{to:_,state:s,children:i.jsxs("div",{className:c?`${t.dd_card} ${t.dd_card_active}`:t.dd_card,style:r,children:[i.jsx("img",{src:c?e==null?void 0:e.fill:e==null?void 0:e.outline,alt:"drawer icon",style:d}),i.jsx("h6",{style:y,children:g(e==null?void 0:e.label)})]})}):i.jsxs("div",{className:t.dd_card,onClick:u,style:r,children:[i.jsx("img",{src:c?e==null?void 0:e.fill:e==null?void 0:e.outline,alt:"drawer icon",style:d}),i.jsx("h6",{style:y,children:g(e==null?void 0:e.label)})]})},A=({activeTab:e})=>{const n=v(),_=p(s=>s.baseChange.currentLogin);return i.jsxs(W,{children:[X.map(s=>s.key==="notification"?i.jsxs("div",{children:[i.jsx(a,{drawer:s,isLink:!0,url:`/${n.username}/${s.urlKey}`,isActive:e===s.key}),i.jsx("div",{className:V.user_feed_drawer_inner,children:f==null?void 0:f.map(u=>i.jsx(a,{drawer:u,isLink:!0,customStyleContainer:{padding:"0.5rem 0.3rem"},customStyleIcon:{height:"1.1rem"},customStylelabel:{fontSize:"11px"},isActive:e===s.key},u==null?void 0:u.id))})]},s==null?void 0:s.id):i.jsx(a,{url:`/${n.username}/${s.urlKey}`,drawer:s,isLink:!0,isActive:e===s.key},s==null?void 0:s.id)),i.jsx(a,{drawer:{label:"profile",outline:_!=null&&_.profilePhoto?`${h}/${_==null?void 0:_.profilePhoto}`:`${l}/feed-user-avatar.svg`,urlKey:"",key:"profile"},isLink:!0,customStyleIcon:{borderRadius:"50%",height:"2rem"},isActive:e==="profile"})]})},X=[{label:"dashboard",outline:`${o}/navbar-home.svg`,fill:`${o}/navbar-home-fill.svg`,urlKey:"feed",key:"dashboard",id:1},{label:"member",outline:`${o}/navbar-member.svg`,fill:`${o}/navbar-member-fill.svg`,urlKey:"member/staff",key:"member",id:2},{label:"notification",outline:`${o}/navbar-notification.svg`,fill:`${o}/navbar-notification-fill.svg`,urlKey:"notification",key:"notification",id:3},{label:"go_anonymous",outline:`${l}/anonymous.svg`,fill:`${l}/anonymous-fill.svg`,urlKey:"",key:"",id:4},{label:"switch_account",outline:`${l}/switch.svg`,fill:`${l}/switch-fill.svg`,urlKey:"",key:"",id:5},{label:"tutorials",outline:`${l}/tutorial.svg`,fill:`${l}/tutorial-fill.svg`,urlKey:"",key:"",id:6},{label:"transaction_history",outline:`${l}/history.svg`,fill:`${l}/history-fill.svg`,urlKey:"",key:"",id:7},{label:"support",outline:`${l}/support.svg`,fill:`${l}/support-fill.svg`,urlKey:"",key:"",id:8},{label:"setting",outline:`${l}/setting.svg`,fill:`${l}/setting-fill.svg`,urlKey:"",key:"",id:9},{label:"logout",outline:`${l}/logout.svg`,fill:`${l}/logout-fill.svg`,urlKey:"",key:"",id:10}],f=[{label:"social",outline:`${l}/social.svg`,fill:`${l}/social-fill.svg`,urlKey:"",key:"social",id:11},{label:"activity",outline:`${l}/activity.svg`,fill:`${l}/activity-fill.svg`,urlKey:"",key:"activity",id:12},{label:"alert",outline:`${l}/alert.svg`,fill:`${l}/alert-fill.svg`,urlKey:"",key:"alert",id:13},{label:"announcement",outline:`${l}/announcement.svg`,fill:`${l}/announcement-fill.svg`,urlKey:"",key:"announcement",id:14}];export{A as U,V as a,t as s};

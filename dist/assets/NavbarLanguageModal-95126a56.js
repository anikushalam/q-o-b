import{d as p,j as e,r as s}from"./index-244a15a9.js";import{B as u}from"./Modal-6d554a98.js";import{s as i}from"./Feed-387f85c9.js";import{s as m}from"./Utils.module-b6acf444.js";import"./AssestsBaseUrl-00ad65e7.js";import"./UserMemberProfileWrapper-960b6d0c.js";import"./DesignationConfig-4d528715.js";import"./UiTab.module-f6b989ec.js";import"./decrypt-87f2d320.js";import"./finance-manager-api-ad25b769.js";import"./MethodType-30df8d44.js";const v=({isHide:o,children:r})=>p.createPortal(e.jsx("div",{className:o?m.navbar_modal_hide_overlay:m.navbar_modal_overlay,children:r}),document.getElementById("overlay")),N=({onClose:o,languages:r,onChooseLanguage:n})=>{const[l,c]=s.useState(!1),t=s.useCallback(()=>{c(!0);let a=setTimeout(()=>{o()},500);return()=>clearTimeout(a)},[o]),d=a=>{n(a),t()};return e.jsxs(e.Fragment,{children:[e.jsx(u,{onBackdropClose:t,customBackdropStyle:{backgroundColor:"transparent"}}),e.jsx(v,{isHide:l,children:e.jsx("div",{className:i.navbar_languages_wrapper,children:r.map(a=>e.jsx("div",{className:i.navbar_languages_option,value:a.code,onClick:()=>d(a),children:a.name},a.code))})})]})};export{N as default};

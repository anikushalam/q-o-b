import{d as p,j as e,r as s}from"./index-40ad8b25.js";import{B as u}from"./Modal-53e97914.js";import{s as n}from"./Feed-d9bf9532.js";import{s as i}from"./Utils.module-b6acf444.js";import"./AssestsBaseUrl-2ebdccdb.js";import"./UserMemberProfileWrapper-b0858c1e.js";import"./DesignationConfig-bff95d73.js";import"./UiTab.module-f6b989ec.js";import"./decrypt-a000b880.js";const v=({isHide:o,children:r})=>p.createPortal(e.jsx("div",{className:o?i.navbar_modal_hide_overlay:i.navbar_modal_overlay,children:r}),document.getElementById("overlay")),B=({onClose:o,languages:r,onChooseLanguage:l})=>{const[m,c]=s.useState(!1),t=s.useCallback(()=>{c(!0);let a=setTimeout(()=>{o()},500);return()=>clearTimeout(a)},[o]),d=a=>{l(a),t()};return e.jsxs(e.Fragment,{children:[e.jsx(u,{onBackdropClose:t,customBackdropStyle:{backgroundColor:"transparent"}}),e.jsx(v,{isHide:m,children:e.jsx("div",{className:n.navbar_languages_wrapper,children:r.map(a=>e.jsx("div",{className:n.navbar_languages_option,value:a.code,onClick:()=>d(a),children:a.name},a.code))})})]})};export{B as default};

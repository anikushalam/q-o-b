import{r as m,j as a}from"./index-840de58d.js";import{s as r}from"./GetStarted-4d1d9af9.js";import{C as d}from"./CreateButton-390a73d1.js";import{u as i}from"./AssestsBaseUrl-3e7ac4b0.js";const _=({title:e,subTitle:t,titleStyle:c,subTitleStyle:o,isCreate:l,onCreate:n,children:h})=>{const{t:s}=i();return a.jsxs("div",{className:r.auth_card_wrapper,children:[l?a.jsxs("div",{className:r.auth_create_container,children:[a.jsxs("div",{children:[a.jsx("h6",{className:r.auth_card_title,style:c,children:s(e||"hello")}),a.jsx("h6",{className:r.auth_card_subtitle,style:o,children:t||s("welcome_to_qviple")})]}),a.jsx(d,{label:"create_new_account",customStyle:{margin:"0"},onAction:n})]}):a.jsxs(a.Fragment,{children:[a.jsx("h6",{className:r.auth_card_title,style:c,children:s(e||"hello")}),a.jsx("h6",{className:r.auth_card_subtitle,style:o,children:t||s("welcome_to_qviple")})]}),h]})},N=m.memo(_);export{N as A};

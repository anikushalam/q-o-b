import{r as f,t as T,v as R}from"./index-840de58d.js";function q(){if(console&&console.warn){for(var s=arguments.length,e=new Array(s),t=0;t<s;t++)e[t]=arguments[t];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const U={};function v(){for(var s=arguments.length,e=new Array(s),t=0;t<s;t++)e[t]=arguments[t];typeof e[0]=="string"&&U[e[0]]||(typeof e[0]=="string"&&(U[e[0]]=new Date),q(...e))}const j=(s,e)=>()=>{if(s.isInitialized)e();else{const t=()=>{setTimeout(()=>{s.off("initialized",t)},0),e()};s.on("initialized",t)}};function I(s,e,t){s.loadNamespaces(e,j(s,t))}function S(s,e,t,d){typeof t=="string"&&(t=[t]),t.forEach(r=>{s.options.ns.indexOf(r)<0&&s.options.ns.push(r)}),s.loadLanguages(e,j(s,d))}function E(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const d=e.languages[0],r=e.options?e.options.fallbackLng:!1,n=e.languages[e.languages.length-1];if(d.toLowerCase()==="cimode")return!0;const l=(w,y)=>{const a=e.services.backendConnector.state[`${w}|${y}`];return a===-1||a===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!l(e.isLanguageChangingTo,s)?!1:!!(e.hasResourceBundle(d,s)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||l(d,s)&&(!r||l(n,s)))}function z(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(v("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(s,{lng:t.lng,precheck:(r,n)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!n(r.isLanguageChangingTo,s))return!1}}):E(s,e,t)}const F=f.createContext();class A{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const P=(s,e)=>{const t=f.useRef();return f.useEffect(()=>{t.current=e?t.current:s},[s,e]),t.current};function k(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:t}=e,{i18n:d,defaultNS:r}=f.useContext(F)||{},n=t||d||R();if(n&&!n.reportNamespaces&&(n.reportNamespaces=new A),!n){v("You will need to pass in an i18next instance by using initReactI18next");const o=(c,i)=>typeof i=="string"?i:i&&typeof i=="object"&&typeof i.defaultValue=="string"?i.defaultValue:Array.isArray(c)?c[c.length-1]:c,u=[o,{},!1];return u.t=o,u.i18n={},u.ready=!1,u}n.options.react&&n.options.react.wait!==void 0&&v("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const l={...T(),...n.options.react,...e},{useSuspense:w,keyPrefix:y}=l;let a=s||r||n.options&&n.options.defaultNS;a=typeof a=="string"?[a]:a||["translation"],n.reportNamespaces.addUsedNamespaces&&n.reportNamespaces.addUsedNamespaces(a);const p=(n.isInitialized||n.initializedStoreOnce)&&a.every(o=>z(o,n,l));function m(){return n.getFixedT(e.lng||null,l.nsMode==="fallback"?a:a[0],y)}const[x,h]=f.useState(m);let b=a.join();e.lng&&(b=`${e.lng}${b}`);const C=P(b),g=f.useRef(!0);f.useEffect(()=>{const{bindI18n:o,bindI18nStore:u}=l;g.current=!0,!p&&!w&&(e.lng?S(n,e.lng,a,()=>{g.current&&h(m)}):I(n,a,()=>{g.current&&h(m)})),p&&C&&C!==b&&g.current&&h(m);function c(){g.current&&h(m)}return o&&n&&n.on(o,c),u&&n&&n.store.on(u,c),()=>{g.current=!1,o&&n&&o.split(" ").forEach(i=>n.off(i,c)),u&&n&&u.split(" ").forEach(i=>n.store.off(i,c))}},[n,b]);const L=f.useRef(!0);f.useEffect(()=>{g.current&&!L.current&&h(m),L.current=!1},[n,y]);const N=[x,n,p];if(N.t=x,N.i18n=n,N.ready=p,p||!p&&!w)return N;throw new Promise(o=>{e.lng?S(n,e.lng,a,()=>o()):I(n,a,()=>o())})}const M="https://d3dqpu54js2vfl.cloudfront.net/static/web/images/company_logo",O="https://d3dqpu54js2vfl.cloudfront.net/static/web/images/auth",B="https://d3dqpu54js2vfl.cloudfront.net/static/web/images/navbar",J="https://d3dqpu54js2vfl.cloudfront.net/static/web/images/feed",H="https://d3dqpu54js2vfl.cloudfront.net/static/web/images/user_member",W="https://d3dqpu54js2vfl.cloudfront.net/static/web/images/finance",Y="https://d3dqpu54js2vfl.cloudfront.net/static/web/images/loading",G="https://d3dqpu54js2vfl.cloudfront.net/static/web/images/utility";export{O as a,J as b,W as c,M as d,G as e,B as f,H as g,Y as h,k as u};

import{r as f,y as p}from"./index-By56YbRw.js";var c={exports:{}},a={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=f;function S(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var d=typeof Object.is=="function"?Object.is:S,v=o.useState,x=o.useEffect,l=o.useLayoutEffect,y=o.useDebugValue;function E(t,e){var r=e(),u=v({inst:{value:r,getSnapshot:e}}),n=u[0].inst,s=u[1];return l(function(){n.value=r,n.getSnapshot=e,i(n)&&s({inst:n})},[t,r,e]),x(function(){return i(n)&&s({inst:n}),t(function(){i(n)&&s({inst:n})})},[t]),y(r),r}function i(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!d(t,r)}catch{return!0}}function m(t,e){return e()}var h=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:E;a.useSyncExternalStore=o.useSyncExternalStore!==void 0?o.useSyncExternalStore:h;c.exports=a;var g=c.exports;const j=p(g);export{g as s,j as u};

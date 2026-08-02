var xa=n=>{throw TypeError(n)};var Zs=(n,t,e)=>t.has(n)||xa("Cannot "+e);var C=(n,t,e)=>(Zs(n,t,"read from private field"),e?e.call(n):t.get(n)),ot=(n,t,e)=>t.has(n)?xa("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),Y=(n,t,e,r)=>(Zs(n,t,"write to private field"),r?r.call(n,e):t.set(n,e),e),tt=(n,t,e)=>(Zs(n,t,"access private method"),e);import{S as uc,p as Ma,h as Ut,s as zr,i as $n,n as Hr,k as hi,l as Fa,t as ed,m as Dr,o as nd,q as rd,v as La,w as us,x as Ua,y as sd,a as Nt,z as qi,A as zi,e as cc}from"./index-ZdpLx_Ia.js";var Vt,H,sr,Ct,Ue,on,te,pe,ir,an,un,Be,je,me,cn,Q,Fn,di,fi,pi,mi,gi,_i,yi,lc,oc,id=(oc=class extends uc{constructor(t,e){super();ot(this,Q);ot(this,Vt);ot(this,H);ot(this,sr);ot(this,Ct);ot(this,Ue);ot(this,on);ot(this,te);ot(this,pe);ot(this,ir);ot(this,an);ot(this,un);ot(this,Be);ot(this,je);ot(this,me);ot(this,cn,new Set);this.options=e,Y(this,Vt,t),Y(this,pe,null),Y(this,te,Ma()),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(C(this,H).addObserver(this),Ba(C(this,H),this.options)?tt(this,Q,Fn).call(this):this.updateResult(),tt(this,Q,mi).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Ei(C(this,H),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Ei(C(this,H),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,tt(this,Q,gi).call(this),tt(this,Q,_i).call(this),C(this,H).removeObserver(this)}setOptions(t){const e=this.options,r=C(this,H);if(this.options=C(this,Vt).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Ut(this.options.enabled,C(this,H))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");tt(this,Q,yi).call(this),C(this,H).setOptions(this.options),e._defaulted&&!zr(this.options,e)&&C(this,Vt).getQueryCache().notify({type:"observerOptionsUpdated",query:C(this,H),observer:this});const s=this.hasListeners();s&&ja(C(this,H),r,this.options,e)&&tt(this,Q,Fn).call(this),this.updateResult(),s&&(C(this,H)!==r||Ut(this.options.enabled,C(this,H))!==Ut(e.enabled,C(this,H))||$n(this.options.staleTime,C(this,H))!==$n(e.staleTime,C(this,H)))&&tt(this,Q,di).call(this);const o=tt(this,Q,fi).call(this);s&&(C(this,H)!==r||Ut(this.options.enabled,C(this,H))!==Ut(e.enabled,C(this,H))||o!==C(this,me))&&tt(this,Q,pi).call(this,o)}getOptimisticResult(t){const e=C(this,Vt).getQueryCache().build(C(this,Vt),t),r=this.createResult(e,t);return ad(this,r)&&(Y(this,Ct,r),Y(this,on,this.options),Y(this,Ue,C(this,H).state)),r}getCurrentResult(){return C(this,Ct)}trackResult(t,e){return new Proxy(t,{get:(r,s)=>(this.trackProp(s),e==null||e(s),s==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&C(this,te).status==="pending"&&C(this,te).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(r,s))})}trackProp(t){C(this,cn).add(t)}getCurrentQuery(){return C(this,H)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=C(this,Vt).defaultQueryOptions(t),r=C(this,Vt).getQueryCache().build(C(this,Vt),e);return r.fetch().then(()=>this.createResult(r,e))}fetch(t){return tt(this,Q,Fn).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),C(this,Ct)))}createResult(t,e){var _;const r=C(this,H),s=this.options,o=C(this,Ct),a=C(this,Ue),c=C(this,on),d=t!==r?t.state:C(this,sr),{state:p}=t;let y={...p},T=!1,R;if(e._optimisticResults){const E=this.hasListeners(),v=!E&&Ba(t,e),A=E&&ja(t,r,e,s);(v||A)&&(y={...y,...rd(p.data,t.options)}),e._optimisticResults==="isRestoring"&&(y.fetchStatus="idle")}let{error:D,errorUpdatedAt:O,status:V}=y;R=y.data;let j=!1;if(e.placeholderData!==void 0&&R===void 0&&V==="pending"){let E;o!=null&&o.isPlaceholderData&&e.placeholderData===(c==null?void 0:c.placeholderData)?(E=o.data,j=!0):E=typeof e.placeholderData=="function"?e.placeholderData((_=C(this,un))==null?void 0:_.state.data,C(this,un)):e.placeholderData,E!==void 0&&(V="success",R=La(o==null?void 0:o.data,E,e),T=!0)}if(e.select&&R!==void 0&&!j)if(o&&R===(a==null?void 0:a.data)&&e.select===C(this,ir))R=C(this,an);else try{Y(this,ir,e.select),R=e.select(R),R=La(o==null?void 0:o.data,R,e),Y(this,an,R),Y(this,pe,null)}catch(E){Y(this,pe,E)}C(this,pe)&&(D=C(this,pe),R=C(this,an),O=Date.now(),V="error");const B=y.fetchStatus==="fetching",q=V==="pending",nt=V==="error",Lt=q&&B,ut=R!==void 0,m={status:V,fetchStatus:y.fetchStatus,isPending:q,isSuccess:V==="success",isError:nt,isInitialLoading:Lt,isLoading:Lt,data:R,dataUpdatedAt:y.dataUpdatedAt,error:D,errorUpdatedAt:O,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:t.isFetched(),isFetchedAfterMount:y.dataUpdateCount>d.dataUpdateCount||y.errorUpdateCount>d.errorUpdateCount,isFetching:B,isRefetching:B&&!q,isLoadingError:nt&&!ut,isPaused:y.fetchStatus==="paused",isPlaceholderData:T,isRefetchError:nt&&ut,isStale:Hi(t,e),refetch:this.refetch,promise:C(this,te),isEnabled:Ut(e.enabled,t)!==!1};if(this.options.experimental_prefetchInRender){const E=m.data!==void 0,v=m.status==="error"&&!E,A=qt=>{v?qt.reject(m.error):E&&qt.resolve(m.data)},g=()=>{const qt=Y(this,te,m.promise=Ma());A(qt)},Pt=C(this,te);switch(Pt.status){case"pending":t.queryHash===r.queryHash&&A(Pt);break;case"fulfilled":(v||m.data!==Pt.value)&&g();break;case"rejected":(!v||m.error!==Pt.reason)&&g();break}}return m}updateResult(){const t=C(this,Ct),e=this.createResult(C(this,H),this.options);if(Y(this,Ue,C(this,H).state),Y(this,on,this.options),C(this,Ue).data!==void 0&&Y(this,un,C(this,H)),zr(e,t))return;Y(this,Ct,e);const r=()=>{if(!t)return!0;const{notifyOnChangeProps:s}=this.options,o=typeof s=="function"?s():s;if(o==="all"||!o&&!C(this,cn).size)return!0;const a=new Set(o??C(this,cn));return this.options.throwOnError&&a.add("error"),Object.keys(C(this,Ct)).some(c=>{const h=c;return C(this,Ct)[h]!==t[h]&&a.has(h)})};tt(this,Q,lc).call(this,{listeners:r()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&tt(this,Q,mi).call(this)}},Vt=new WeakMap,H=new WeakMap,sr=new WeakMap,Ct=new WeakMap,Ue=new WeakMap,on=new WeakMap,te=new WeakMap,pe=new WeakMap,ir=new WeakMap,an=new WeakMap,un=new WeakMap,Be=new WeakMap,je=new WeakMap,me=new WeakMap,cn=new WeakMap,Q=new WeakSet,Fn=function(t){tt(this,Q,yi).call(this);let e=C(this,H).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(Hr)),e},di=function(){tt(this,Q,gi).call(this);const t=$n(this.options.staleTime,C(this,H));if(hi.isServer()||C(this,Ct).isStale||!Fa(t))return;const r=ed(C(this,Ct).dataUpdatedAt,t)+1;Y(this,Be,Dr.setTimeout(()=>{C(this,Ct).isStale||this.updateResult()},r))},fi=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(C(this,H)):this.options.refetchInterval)??!1},pi=function(t){tt(this,Q,_i).call(this),Y(this,me,t),!(hi.isServer()||Ut(this.options.enabled,C(this,H))===!1||!Fa(C(this,me))||C(this,me)===0)&&Y(this,je,Dr.setInterval(()=>{(this.options.refetchIntervalInBackground||nd.isFocused())&&tt(this,Q,Fn).call(this)},C(this,me)))},mi=function(){tt(this,Q,di).call(this),tt(this,Q,pi).call(this,tt(this,Q,fi).call(this))},gi=function(){C(this,Be)!==void 0&&(Dr.clearTimeout(C(this,Be)),Y(this,Be,void 0))},_i=function(){C(this,je)!==void 0&&(Dr.clearInterval(C(this,je)),Y(this,je,void 0))},yi=function(){const t=C(this,Vt).getQueryCache().build(C(this,Vt),this.options);if(t===C(this,H))return;const e=C(this,H);Y(this,H,t),Y(this,sr,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},lc=function(t){us.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(C(this,Ct))}),C(this,Vt).getQueryCache().notify({query:C(this,H),type:"observerResultsUpdated"})})},oc);function od(n,t){return Ut(t.enabled,n)!==!1&&n.state.data===void 0&&!(n.state.status==="error"&&Ut(t.retryOnMount,n)===!1)}function Ba(n,t){return od(n,t)||n.state.data!==void 0&&Ei(n,t,t.refetchOnMount)}function Ei(n,t,e){if(Ut(t.enabled,n)!==!1&&$n(t.staleTime,n)!=="static"){const r=typeof e=="function"?e(n):e;return r==="always"||r!==!1&&Hi(n,t)}return!1}function ja(n,t,e,r){return(n!==t||Ut(r.enabled,n)===!1)&&(!e.suspense||n.state.status!=="error")&&Hi(n,e)}function Hi(n,t){return Ut(t.enabled,n)!==!1&&n.isStaleByTime($n(t.staleTime,n))}function ad(n,t){return!zr(n.getCurrentResult(),t)}var ee,ge,Dt,ne,se,Fr,vi,ac,ud=(ac=class extends uc{constructor(t,e){super();ot(this,se);ot(this,ee);ot(this,ge);ot(this,Dt);ot(this,ne);Y(this,ee,t),this.setOptions(e),this.bindMethods(),tt(this,se,Fr).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const e=this.options;this.options=C(this,ee).defaultMutationOptions(t),zr(this.options,e)||C(this,ee).getMutationCache().notify({type:"observerOptionsUpdated",mutation:C(this,Dt),observer:this}),e!=null&&e.mutationKey&&this.options.mutationKey&&Ua(e.mutationKey)!==Ua(this.options.mutationKey)?this.reset():((r=C(this,Dt))==null?void 0:r.state.status)==="pending"&&C(this,Dt).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=C(this,Dt))==null||t.removeObserver(this)}onMutationUpdate(t){tt(this,se,Fr).call(this),tt(this,se,vi).call(this,t)}getCurrentResult(){return C(this,ge)}reset(){var t;(t=C(this,Dt))==null||t.removeObserver(this),Y(this,Dt,void 0),tt(this,se,Fr).call(this),tt(this,se,vi).call(this)}mutate(t,e){var r;return Y(this,ne,e),(r=C(this,Dt))==null||r.removeObserver(this),Y(this,Dt,C(this,ee).getMutationCache().build(C(this,ee),this.options)),C(this,Dt).addObserver(this),C(this,Dt).execute(t)}},ee=new WeakMap,ge=new WeakMap,Dt=new WeakMap,ne=new WeakMap,se=new WeakSet,Fr=function(){var e;const t=((e=C(this,Dt))==null?void 0:e.state)??sd();Y(this,ge,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},vi=function(t){us.batch(()=>{var e,r,s,o,a,c,h,d;if(C(this,ne)&&this.hasListeners()){const p=C(this,ge).variables,y=C(this,ge).context,T={client:C(this,ee),meta:this.options.meta,mutationKey:this.options.mutationKey};if((t==null?void 0:t.type)==="success"){try{(r=(e=C(this,ne)).onSuccess)==null||r.call(e,t.data,p,y,T)}catch(R){Promise.reject(R)}try{(o=(s=C(this,ne)).onSettled)==null||o.call(s,t.data,null,p,y,T)}catch(R){Promise.reject(R)}}else if((t==null?void 0:t.type)==="error"){try{(c=(a=C(this,ne)).onError)==null||c.call(a,t.error,p,y,T)}catch(R){Promise.reject(R)}try{(d=(h=C(this,ne)).onSettled)==null||d.call(h,void 0,t.error,p,y,T)}catch(R){Promise.reject(R)}}}this.listeners.forEach(p=>{p(C(this,ge))})})},ac),hc=Nt.createContext(!1),cd=()=>Nt.useContext(hc);hc.Provider;function ld(){let n=!1;return{clearReset:()=>{n=!1},reset:()=>{n=!0},isReset:()=>n}}var hd=Nt.createContext(ld()),dd=()=>Nt.useContext(hd),fd=(n,t,e)=>{const r=e!=null&&e.state.error&&typeof n.throwOnError=="function"?qi(n.throwOnError,[e.state.error,e]):n.throwOnError;(n.suspense||n.experimental_prefetchInRender||r)&&(t.isReset()||(n.retryOnMount=!1))},pd=n=>{Nt.useEffect(()=>{n.clearReset()},[n])},md=({result:n,errorResetBoundary:t,throwOnError:e,query:r,suspense:s})=>n.isError&&!t.isReset()&&!n.isFetching&&r&&(s&&n.data===void 0||qi(e,[n.error,r])),gd=n=>{if(n.suspense){const e=s=>s==="static"?s:Math.max(s??1e3,1e3),r=n.staleTime;n.staleTime=typeof r=="function"?(...s)=>e(r(...s)):e(r),typeof n.gcTime=="number"&&(n.gcTime=Math.max(n.gcTime,1e3))}},_d=(n,t)=>n.isLoading&&n.isFetching&&!t,yd=(n,t)=>(n==null?void 0:n.suspense)&&t.isPending,$a=(n,t,e)=>t.fetchOptimistic(n).catch(()=>{e.clearReset()});function Ed(n,t,e){var R,D,O,V;const r=cd(),s=dd(),o=zi(),a=o.defaultQueryOptions(n);(D=(R=o.getDefaultOptions().queries)==null?void 0:R._experimental_beforeQuery)==null||D.call(R,a);const c=o.getQueryCache().get(a.queryHash),h=n.subscribed!==!1;a._optimisticResults=r?"isRestoring":h?"optimistic":void 0,gd(a),fd(a,s,c),pd(s);const d=!o.getQueryCache().get(a.queryHash),[p]=Nt.useState(()=>new t(o,a)),y=p.getOptimisticResult(a),T=!r&&h;if(Nt.useSyncExternalStore(Nt.useCallback(j=>{const B=T?p.subscribe(us.batchCalls(j)):Hr;return p.updateResult(),B},[p,T]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),Nt.useEffect(()=>{p.setOptions(a)},[a,p]),yd(a,y))throw $a(a,p,s);if(md({result:y,errorResetBoundary:s,throwOnError:a.throwOnError,query:c,suspense:a.suspense}))throw y.error;if((V=(O=o.getDefaultOptions().queries)==null?void 0:O._experimental_afterQuery)==null||V.call(O,a,y),a.experimental_prefetchInRender&&!hi.isServer()&&_d(y,r)){const j=d?$a(a,p,s):c==null?void 0:c.promise;j==null||j.catch(Hr).finally(()=>{p.updateResult()})}return a.notifyOnChangeProps?y:p.trackResult(y)}function vd(n,t){return Ed(n,id)}function Td(n,t){const e=zi(),[r]=Nt.useState(()=>new ud(e,n));Nt.useEffect(()=>{r.setOptions(n)},[r,n]);const s=Nt.useSyncExternalStore(Nt.useCallback(a=>r.subscribe(us.batchCalls(a)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),o=Nt.useCallback((a,c)=>{r.mutate(a,c).catch(Hr)},[r]);if(s.error&&qi(r.options.throwOnError,[s.error]))throw s.error;return{...s,mutate:o,mutateAsync:s.mutate}}const Id=()=>{};var qa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},wd=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},fc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,y=(o&3)<<4|c>>4;let T=(c&15)<<2|d>>6,R=d&63;h||(R=64,a||(T=64)),r.push(e[p],e[y],e[T],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(dc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):wd(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const y=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||y==null)throw new Ad;const T=o<<2|c>>4;if(r.push(T),d!==64){const R=c<<4&240|d>>2;if(r.push(R),y!==64){const D=d<<6&192|y;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ad extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rd=function(n){const t=dc(n);return fc.encodeByteArray(t,!0)},Gr=function(n){return Rd(n).replace(/\./g,"")},bd=function(n){try{return fc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=()=>Sd().__FIREBASE_DEFAULTS__,Pd=()=>{if(typeof process>"u"||typeof qa>"u")return;const n=qa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&bd(n[1]);return t&&JSON.parse(t)},Gi=()=>{try{return Id()||Cd()||Pd()||Vd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Dd=n=>{var t,e;return(e=(t=Gi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},kd=n=>{const t=Dd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},pc=()=>{var n;return(n=Gi())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Od(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Gr(JSON.stringify(e)),Gr(JSON.stringify(a)),""].join(".")}const qn={};function Md(){const n={prod:[],emulator:[]};for(const t of Object.keys(qn))qn[t]?n.emulator.push(t):n.prod.push(t);return n}function Fd(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let za=!1;function Ld(n,t){if(typeof window>"u"||typeof document>"u"||!Ki(window.location.host)||qn[n]===t||qn[n]||za)return;qn[n]=t;function e(T){return`__firebase__banner__${T}`}const r="__firebase__banner",o=Md().prod.length>0;function a(){const T=document.getElementById(r);T&&T.remove()}function c(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function h(T,R){T.setAttribute("width","24"),T.setAttribute("id",R),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function d(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{za=!0,a()},T}function p(T,R){T.setAttribute("id",R),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function y(){const T=Fd(r),R=e("text"),D=document.getElementById(R)||document.createElement("span"),O=e("learnmore"),V=document.getElementById(O)||document.createElement("a"),j=e("preprendIcon"),B=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const q=T.element;c(q),p(V,O);const nt=d();h(B,j),q.append(B,D,V,nt),document.body.appendChild(q)}o?(D.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bd(){var n;const t=(n=Gi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jd(){return!Bd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wi(){try{return typeof indexedDB=="object"}catch{return!1}}function Qi(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function gc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="FirebaseError";class Ve extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=$d,Object.setPrototypeOf(this,Ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?qd(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ve(s,c,r)}}function qd(n,t){return n.replace(zd,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const zd=/\{\$([^}]+)}/g;function ln(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Ha(o)&&Ha(a)){if(!ln(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Ha(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=1e3,Gd=2,Kd=14400*1e3,Wd=.5;function Ga(n,t=Hd,e=Gd){const r=t*Math.pow(e,n),s=Math.round(Wd*r*(Math.random()-.5)*2);return Math.min(Kd,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n){return n&&n._delegate?n._delegate:n}class oe{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Nd;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yd(t))try{this.getOrInitializeService({instanceIdentifier:Me})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Me){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Me){return this.instances.has(t)}getOptions(t=Me){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Me){return this.component?this.component.multipleInstances?t:Me:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xd(n){return n===Me?void 0:n}function Yd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Qd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Zd={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},tf=K.INFO,ef={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},nf=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=ef[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xi{constructor(t){this.name=t,this._logLevel=tf,this._logHandler=nf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Zd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const rf=(n,t)=>t.some(e=>n instanceof e);let Ka,Wa;function sf(){return Ka||(Ka=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function of(){return Wa||(Wa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _c=new WeakMap,Ti=new WeakMap,yc=new WeakMap,ti=new WeakMap,Yi=new WeakMap;function af(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ye(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&_c.set(e,n)}).catch(()=>{}),Yi.set(t,n),t}function uf(n){if(Ti.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ti.set(n,t)}let Ii={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ti.get(n);if(t==="objectStoreNames")return n.objectStoreNames||yc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ye(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function cf(n){Ii=n(Ii)}function lf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ei(this),t,...e);return yc.set(r,t.sort?t.sort():[t]),ye(r)}:of().includes(n)?function(...t){return n.apply(ei(this),t),ye(_c.get(this))}:function(...t){return ye(n.apply(ei(this),t))}}function hf(n){return typeof n=="function"?lf(n):(n instanceof IDBTransaction&&uf(n),rf(n,sf())?new Proxy(n,Ii):n)}function ye(n){if(n instanceof IDBRequest)return af(n);if(ti.has(n))return ti.get(n);const t=hf(n);return t!==n&&(ti.set(n,t),Yi.set(t,n)),t}const ei=n=>Yi.get(n);function Ec(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=ye(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ye(a.result),h.oldVersion,h.newVersion,ye(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const df=["get","getKey","getAll","getAllKeys","count"],ff=["put","add","delete","clear"],ni=new Map;function Qa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ni.get(t))return ni.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=ff.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||df.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return ni.set(t,o),o}cf(n=>({...n,get:(t,e,r)=>Qa(t,e)||n.get(t,e,r),has:(t,e)=>!!Qa(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(mf(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function mf(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const wi="@firebase/app",Xa="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new Xi("@firebase/app"),gf="@firebase/app-compat",_f="@firebase/analytics-compat",yf="@firebase/analytics",Ef="@firebase/app-check-compat",vf="@firebase/app-check",Tf="@firebase/auth",If="@firebase/auth-compat",wf="@firebase/database",Af="@firebase/data-connect",Rf="@firebase/database-compat",bf="@firebase/functions",Sf="@firebase/functions-compat",Cf="@firebase/installations",Pf="@firebase/installations-compat",Vf="@firebase/messaging",Df="@firebase/messaging-compat",kf="@firebase/performance",Nf="@firebase/performance-compat",Of="@firebase/remote-config",xf="@firebase/remote-config-compat",Mf="@firebase/storage",Ff="@firebase/storage-compat",Lf="@firebase/firestore",Uf="@firebase/ai",Bf="@firebase/firestore-compat",jf="firebase",$f="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="[DEFAULT]",qf={[wi]:"fire-core",[gf]:"fire-core-compat",[yf]:"fire-analytics",[_f]:"fire-analytics-compat",[vf]:"fire-app-check",[Ef]:"fire-app-check-compat",[Tf]:"fire-auth",[If]:"fire-auth-compat",[wf]:"fire-rtdb",[Af]:"fire-data-connect",[Rf]:"fire-rtdb-compat",[bf]:"fire-fn",[Sf]:"fire-fn-compat",[Cf]:"fire-iid",[Pf]:"fire-iid-compat",[Vf]:"fire-fcm",[Df]:"fire-fcm-compat",[kf]:"fire-perf",[Nf]:"fire-perf-compat",[Of]:"fire-rc",[xf]:"fire-rc-compat",[Mf]:"fire-gcs",[Ff]:"fire-gcs-compat",[Lf]:"fire-fst",[Bf]:"fire-fst-compat",[Uf]:"fire-vertex","fire-js":"fire-js",[jf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Map,zf=new Map,Ri=new Map;function Ya(n,t){try{n.container.addComponent(t)}catch(e){ae.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ie(n){const t=n.name;if(Ri.has(t))return ae.debug(`There were multiple attempts to register component ${t}.`),!1;Ri.set(t,n);for(const e of Kr.values())Ya(e,n);for(const e of zf.values())Ya(e,n);return!0}function or(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Hf(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ee=new cs("app","Firebase",Gf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=$f;function vc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ai,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Ee.create("bad-app-name",{appName:String(s)});if(e||(e=pc()),!e)throw Ee.create("no-options");const o=Kr.get(s);if(o){if(ln(e,o.options)&&ln(r,o.config))return o;throw Ee.create("duplicate-app",{appName:s})}const a=new Jd(s);for(const h of Ri.values())a.addComponent(h);const c=new Kf(e,r,a);return Kr.set(s,c),c}function Tc(n=Ai){const t=Kr.get(n);if(!t&&n===Ai&&pc())return vc();if(!t)throw Ee.create("no-app",{appName:n});return t}function Ht(n,t,e){var r;let s=(r=qf[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ae.warn(c.join(" "));return}Ie(new oe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="firebase-heartbeat-database",Xf=1,Xn="firebase-heartbeat-store";let ri=null;function Ic(){return ri||(ri=Ec(Qf,Xf,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Xn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ee.create("idb-open",{originalErrorMessage:n.message})})),ri}async function Yf(n){try{const e=(await Ic()).transaction(Xn),r=await e.objectStore(Xn).get(wc(n));return await e.done,r}catch(t){if(t instanceof Ve)ae.warn(t.message);else{const e=Ee.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ae.warn(e.message)}}}async function Ja(n,t){try{const r=(await Ic()).transaction(Xn,"readwrite");await r.objectStore(Xn).put(t,wc(n)),await r.done}catch(e){if(e instanceof Ve)ae.warn(e.message);else{const r=Ee.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ae.warn(r.message)}}}function wc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=1024,Zf=30;class tp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new np(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Za();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Zf){const a=rp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ae.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Za(),{heartbeatsToSend:r,unsentEntries:s}=ep(this._heartbeatsCache.heartbeats),o=Gr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ae.warn(e),""}}}function Za(){return new Date().toISOString().substring(0,10)}function ep(n,t=Jf){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),tu(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),tu(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class np{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wi()?Qi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Yf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ja(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ja(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function tu(n){return Gr(JSON.stringify({version:2,heartbeats:n})).length}function rp(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n){Ie(new oe("platform-logger",t=>new pf(t),"PRIVATE")),Ie(new oe("heartbeat",t=>new tp(t),"PRIVATE")),Ht(wi,Xa,n),Ht(wi,Xa,"esm2017"),Ht("fire-js","")}sp("");var ip="firebase",op="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(ip,op,"app");var eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ve,Ac;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,m){function _(){}_.prototype=m.prototype,I.D=m.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(E,v,A){for(var g=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)g[Pt-2]=arguments[Pt];return m.prototype[v].apply(E,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,_){_||(_=0);var E=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)E[v]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(v=0;16>v;++v)E[v]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=I.g[0],_=I.g[1],v=I.g[2];var A=I.g[3],g=m+(A^_&(v^A))+E[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=A+(v^m&(_^v))+E[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=v+(_^A&(m^_))+E[2]+606105819&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(m^v&(A^m))+E[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(A^_&(v^A))+E[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(v^m&(_^v))+E[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=v+(_^A&(m^_))+E[6]+2821735955&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(m^v&(A^m))+E[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(A^_&(v^A))+E[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(v^m&(_^v))+E[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=v+(_^A&(m^_))+E[10]+4294925233&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(m^v&(A^m))+E[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(A^_&(v^A))+E[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(v^m&(_^v))+E[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=v+(_^A&(m^_))+E[14]+2792965006&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(m^v&(A^m))+E[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(v^A&(_^v))+E[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(m^_))+E[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(A^m))+E[11]+643717713&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(v^A))+E[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^A&(_^v))+E[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(m^_))+E[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(A^m))+E[15]+3634488961&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(v^A))+E[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^A&(_^v))+E[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(m^_))+E[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(A^m))+E[3]+4107603335&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(v^A))+E[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^A&(_^v))+E[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(m^_))+E[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(A^m))+E[7]+1735328473&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(v^A))+E[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(_^v^A)+E[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^v)+E[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=v+(A^m^_)+E[11]+1839030562&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^m)+E[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^A)+E[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^v)+E[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=v+(A^m^_)+E[7]+4139469664&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^m)+E[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^A)+E[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^v)+E[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=v+(A^m^_)+E[3]+3572445317&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^m)+E[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^A)+E[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^v)+E[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=v+(A^m^_)+E[15]+530742520&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^m)+E[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(v^(_|~A))+E[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~v))+E[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=v+(m^(A|~_))+E[14]+2878612391&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~m))+E[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~A))+E[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~v))+E[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=v+(m^(A|~_))+E[10]+4293915773&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~m))+E[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~A))+E[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~v))+E[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=v+(m^(A|~_))+E[6]+2734768916&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~m))+E[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~A))+E[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~v))+E[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=v+(m^(A|~_))+E[2]+718787259&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~m))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var _=m-this.blockSize,E=this.B,v=this.h,A=0;A<m;){if(v==0)for(;A<=_;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<m;)if(E[v++]=I.charCodeAt(A++),v==this.blockSize){s(this,E),v=0;break}}else for(;A<m;)if(E[v++]=I[A++],v==this.blockSize){s(this,E),v=0;break}}this.h=v,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var _=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=_&255,_/=256;for(this.u(I),I=Array(16),m=_=0;4>m;++m)for(var E=0;32>E;E+=8)I[_++]=this.g[m]>>>E&255;return I};function o(I,m){var _=c;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=m(I)}function a(I,m){this.h=m;for(var _=[],E=!0,v=I.length-1;0<=v;v--){var A=I[v]|0;E&&A==m||(_[v]=A,E=!1)}this.g=_}var c={};function h(I){return-128<=I&&128>I?o(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return y;if(0>I)return V(d(-I));for(var m=[],_=1,E=0;I>=_;E++)m[E]=I/_|0,_*=4294967296;return new a(m,0)}function p(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return V(p(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),E=y,v=0;v<I.length;v+=8){var A=Math.min(8,I.length-v),g=parseInt(I.substring(v,v+A),m);8>A?(A=d(Math.pow(m,A)),E=E.j(A).add(d(g))):(E=E.j(_),E=E.add(d(g)))}return E}var y=h(0),T=h(1),R=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-V(this).m();for(var I=0,m=1,_=0;_<this.g.length;_++){var E=this.i(_);I+=(0<=E?E:4294967296+E)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D(this))return"0";if(O(this))return"-"+V(this).toString(I);for(var m=d(Math.pow(I,6)),_=this,E="";;){var v=nt(_,m).g;_=j(_,v.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=v,D(_))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function D(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function O(I){return I.h==-1}n.l=function(I){return I=j(this,I),O(I)?-1:D(I)?0:1};function V(I){for(var m=I.g.length,_=[],E=0;E<m;E++)_[E]=~I.g[E];return new a(_,~I.h).add(T)}n.abs=function(){return O(this)?V(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],E=0,v=0;v<=m;v++){var A=E+(this.i(v)&65535)+(I.i(v)&65535),g=(A>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);E=g>>>16,A&=65535,g&=65535,_[v]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(I,m){return I.add(V(m))}n.j=function(I){if(D(this)||D(I))return y;if(O(this))return O(I)?V(this).j(V(I)):V(V(this).j(I));if(O(I))return V(this.j(V(I)));if(0>this.l(R)&&0>I.l(R))return d(this.m()*I.m());for(var m=this.g.length+I.g.length,_=[],E=0;E<2*m;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var v=0;v<I.g.length;v++){var A=this.i(E)>>>16,g=this.i(E)&65535,Pt=I.i(v)>>>16,qt=I.i(v)&65535;_[2*E+2*v]+=g*qt,B(_,2*E+2*v),_[2*E+2*v+1]+=A*qt,B(_,2*E+2*v+1),_[2*E+2*v+1]+=g*Pt,B(_,2*E+2*v+1),_[2*E+2*v+2]+=A*Pt,B(_,2*E+2*v+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function B(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function q(I,m){this.g=I,this.h=m}function nt(I,m){if(D(m))throw Error("division by zero");if(D(I))return new q(y,y);if(O(I))return m=nt(V(I),m),new q(V(m.g),V(m.h));if(O(m))return m=nt(I,V(m)),new q(V(m.g),m.h);if(30<I.g.length){if(O(I)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=T,E=m;0>=E.l(I);)_=Lt(_),E=Lt(E);var v=ut(_,1),A=ut(E,1);for(E=ut(E,2),_=ut(_,2);!D(E);){var g=A.add(E);0>=g.l(I)&&(v=v.add(_),A=g),E=ut(E,1),_=ut(_,1)}return m=j(I,v.j(m)),new q(v,m)}for(v=y;0<=I.l(m);){for(_=Math.max(1,Math.floor(I.m()/m.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(_),g=A.j(m);O(g)||0<g.l(I);)_-=E,A=d(_),g=A.j(m);D(A)&&(A=T),v=v.add(A),I=j(I,g)}return new q(v,I)}n.A=function(I){return nt(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)&I.i(E);return new a(_,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)|I.i(E);return new a(_,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)^I.i(E);return new a(_,this.h^I.h)};function Lt(I){for(var m=I.g.length+1,_=[],E=0;E<m;E++)_[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(_,I.h)}function ut(I,m){var _=m>>5;m%=32;for(var E=I.g.length-_,v=[],A=0;A<E;A++)v[A]=0<m?I.i(A+_)>>>m|I.i(A+_+1)<<32-m:I.i(A+_);return new a(v,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ac=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,ve=a}).apply(typeof eu<"u"?eu:typeof self<"u"?self:typeof window<"u"?window:{});var kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rc,Ln,bc,Lr,bi,Sc,Cc,Pc;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof kr=="object"&&kr];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in l))break t;l=l[w]}i=i[i.length-1],f=l[i],u=u(f),u!=f&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,f=!1,w={next:function(){if(!f&&l<i.length){var b=l++;return{value:u(b,i[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function d(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function p(i,u,l){return i.call.apply(i.bind,arguments)}function y(i,u,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),i.apply(u,w)}}return function(){return i.apply(u,arguments)}}function T(i,u,l){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,T.apply(null,arguments)}function R(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function D(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,w,b){for(var k=Array(arguments.length-2),J=2;J<arguments.length;J++)k[J-2]=arguments[J];return u.prototype[w].apply(f,k)}}function O(i){const u=i.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=i[f];return l}return[]}function V(i,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const w=i.length||0,b=f.length||0;i.length=w+b;for(let k=0;k<b;k++)i[w+k]=f[k]}else i.push(f)}}class j{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(i){return/^[\s\xa0]*$/.test(i)}function q(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function nt(i){return nt[" "](i),i}nt[" "]=function(){};var Lt=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ut(i,u,l){for(const f in i)u.call(l,i[f],f,i)}function I(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function m(i){const u={};for(const l in i)u[l]=i[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,u){let l,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(l in f)i[l]=f[l];for(let b=0;b<_.length;b++)l=_[b],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function v(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function A(i){c.setTimeout(()=>{throw i},0)}function g(){var i=Ps;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Pt{constructor(){this.h=this.g=null}add(u,l){const f=qt.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var qt=new j(()=>new vh,i=>i.reset());class vh{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Tn,In=!1,Ps=new Pt,xo=()=>{const i=c.Promise.resolve(void 0);Tn=()=>{i.then(Th)}};var Th=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){A(l)}var u=qt;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}In=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Et(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var Ih=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i})();function wn(i,u){if(Et.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(Lt){t:{try{nt(u.nodeName);var w=!0;break t}catch{}w=!1}w||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:wh[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&wn.aa.h.call(this)}}D(wn,Et);var wh={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var dr="closure_listenable_"+(1e6*Math.random()|0),Ah=0;function Rh(i,u,l,f,w){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=w,this.key=++Ah,this.da=this.fa=!1}function fr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function pr(i){this.src=i,this.g={},this.h=0}pr.prototype.add=function(i,u,l,f,w){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var k=Ds(i,u,f,w);return-1<k?(u=i[k],l||(u.fa=!1)):(u=new Rh(u,this.src,b,!!f,w),u.fa=l,i.push(u)),u};function Vs(i,u){var l=u.type;if(l in i.g){var f=i.g[l],w=Array.prototype.indexOf.call(f,u,void 0),b;(b=0<=w)&&Array.prototype.splice.call(f,w,1),b&&(fr(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Ds(i,u,l,f){for(var w=0;w<i.length;++w){var b=i[w];if(!b.da&&b.listener==u&&b.capture==!!l&&b.ha==f)return w}return-1}var ks="closure_lm_"+(1e6*Math.random()|0),Ns={};function Mo(i,u,l,f,w){if(Array.isArray(u)){for(var b=0;b<u.length;b++)Mo(i,u[b],l,f,w);return null}return l=Uo(l),i&&i[dr]?i.K(u,l,d(f)?!!f.capture:!1,w):bh(i,u,l,!1,f,w)}function bh(i,u,l,f,w,b){if(!u)throw Error("Invalid event type");var k=d(w)?!!w.capture:!!w,J=xs(i);if(J||(i[ks]=J=new pr(i)),l=J.add(u,l,f,k,b),l.proxy)return l;if(f=Sh(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)Ih||(w=k),w===void 0&&(w=!1),i.addEventListener(u.toString(),f,w);else if(i.attachEvent)i.attachEvent(Lo(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Sh(){function i(l){return u.call(i.src,i.listener,l)}const u=Ch;return i}function Fo(i,u,l,f,w){if(Array.isArray(u))for(var b=0;b<u.length;b++)Fo(i,u[b],l,f,w);else f=d(f)?!!f.capture:!!f,l=Uo(l),i&&i[dr]?(i=i.i,u=String(u).toString(),u in i.g&&(b=i.g[u],l=Ds(b,l,f,w),-1<l&&(fr(b[l]),Array.prototype.splice.call(b,l,1),b.length==0&&(delete i.g[u],i.h--)))):i&&(i=xs(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Ds(u,l,f,w)),(l=-1<i?u[i]:null)&&Os(l))}function Os(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[dr])Vs(u.i,i);else{var l=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(l,f,i.capture):u.detachEvent?u.detachEvent(Lo(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=xs(u))?(Vs(l,i),l.h==0&&(l.src=null,u[ks]=null)):fr(i)}}}function Lo(i){return i in Ns?Ns[i]:Ns[i]="on"+i}function Ch(i,u){if(i.da)i=!0;else{u=new wn(u,this);var l=i.listener,f=i.ha||i.src;i.fa&&Os(i),i=l.call(f,u)}return i}function xs(i){return i=i[ks],i instanceof pr?i:null}var Ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uo(i){return typeof i=="function"?i:(i[Ms]||(i[Ms]=function(u){return i.handleEvent(u)}),i[Ms])}function vt(){le.call(this),this.i=new pr(this),this.M=this,this.F=null}D(vt,le),vt.prototype[dr]=!0,vt.prototype.removeEventListener=function(i,u,l,f){Fo(this,i,u,l,f)};function bt(i,u){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new Et(u,i);else if(u instanceof Et)u.target=u.target||i;else{var w=u;u=new Et(f,i),E(u,w)}if(w=!0,l)for(var b=l.length-1;0<=b;b--){var k=u.g=l[b];w=mr(k,f,!0,u)&&w}if(k=u.g=i,w=mr(k,f,!0,u)&&w,w=mr(k,f,!1,u)&&w,l)for(b=0;b<l.length;b++)k=u.g=l[b],w=mr(k,f,!1,u)&&w}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],f=0;f<l.length;f++)fr(l[f]);delete i.g[u],i.h--}}this.F=null},vt.prototype.K=function(i,u,l,f){return this.i.add(String(i),u,!1,l,f)},vt.prototype.L=function(i,u,l,f){return this.i.add(String(i),u,!0,l,f)};function mr(i,u,l,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var w=!0,b=0;b<u.length;++b){var k=u[b];if(k&&!k.da&&k.capture==l){var J=k.listener,mt=k.ha||k.src;k.fa&&Vs(i.i,k),w=J.call(mt,f)!==!1&&w}}return w&&!f.defaultPrevented}function Bo(i,u,l){if(typeof i=="function")l&&(i=T(i,l));else if(i&&typeof i.handleEvent=="function")i=T(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function jo(i){i.g=Bo(()=>{i.g=null,i.i&&(i.i=!1,jo(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Ph extends le{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:jo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function An(i){le.call(this),this.h=i,this.g={}}D(An,le);var $o=[];function qo(i){ut(i.g,function(u,l){this.g.hasOwnProperty(l)&&Os(u)},i),i.g={}}An.prototype.N=function(){An.aa.N.call(this),qo(this)},An.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fs=c.JSON.stringify,Vh=c.JSON.parse,Dh=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Ls(){}Ls.prototype.h=null;function zo(i){return i.h||(i.h=i.i())}function Ho(){}var Rn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Us(){Et.call(this,"d")}D(Us,Et);function Bs(){Et.call(this,"c")}D(Bs,Et);var ke={},Go=null;function gr(){return Go=Go||new vt}ke.La="serverreachability";function Ko(i){Et.call(this,ke.La,i)}D(Ko,Et);function bn(i){const u=gr();bt(u,new Ko(u))}ke.STAT_EVENT="statevent";function Wo(i,u){Et.call(this,ke.STAT_EVENT,i),this.stat=u}D(Wo,Et);function St(i){const u=gr();bt(u,new Wo(u,i))}ke.Ma="timingevent";function Qo(i,u){Et.call(this,ke.Ma,i),this.size=u}D(Qo,Et);function Sn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function Cn(){this.g=!0}Cn.prototype.xa=function(){this.g=!1};function kh(i,u,l,f,w,b){i.info(function(){if(i.g)if(b)for(var k="",J=b.split("&"),mt=0;mt<J.length;mt++){var W=J[mt].split("=");if(1<W.length){var Tt=W[0];W=W[1];var It=Tt.split("_");k=2<=It.length&&It[1]=="type"?k+(Tt+"="+W+"&"):k+(Tt+"=redacted&")}}else k=null;else k=b;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+u+`
`+l+`
`+k})}function Nh(i,u,l,f,w,b,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+u+`
`+l+`
`+b+" "+k})}function Xe(i,u,l,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+xh(i,l)+(f?" "+f:"")})}function Oh(i,u){i.info(function(){return"TIMEOUT: "+u})}Cn.prototype.info=function(){};function xh(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var b=w[0];if(b!="noop"&&b!="stop"&&b!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return Fs(l)}catch{return u}}var _r={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},js;function yr(){}D(yr,Ls),yr.prototype.g=function(){return new XMLHttpRequest},yr.prototype.i=function(){return{}},js=new yr;function he(i,u,l,f){this.j=i,this.i=u,this.l=l,this.R=f||1,this.U=new An(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yo}function Yo(){this.i=null,this.g="",this.h=!1}var Jo={},$s={};function qs(i,u,l){i.L=1,i.v=Ir(Jt(u)),i.m=l,i.P=!0,Zo(i,null)}function Zo(i,u){i.F=Date.now(),Er(i),i.A=Jt(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),fa(l.i,"t",f),i.C=0,l=i.j.J,i.h=new Yo,i.g=Da(i.j,l?u:null,!i.m),0<i.O&&(i.M=new Ph(T(i.Y,i,i.g),i.O)),u=i.U,l=i.g,f=i.ca;var w="readystatechange";Array.isArray(w)||(w&&($o[0]=w.toString()),w=$o);for(var b=0;b<w.length;b++){var k=Mo(l,w[b],f||u.handleEvent,!1,u.h||u);if(!k)break;u.g[k.key]=k}u=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),bn(),kh(i.i,i.u,i.A,i.l,i.R,i.m)}he.prototype.ca=function(i){i=i.target;const u=this.M;u&&Zt(i)==3?u.j():this.Y(i)},he.prototype.Y=function(i){try{if(i==this.g)t:{const It=Zt(this.g);var u=this.g.Ba();const Ze=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||va(this.g)))){this.J||It!=4||u==7||(u==8||0>=Ze?bn(3):bn(2)),zs(this);var l=this.g.Z();this.X=l;e:if(ta(this)){var f=va(this.g);i="";var w=f.length,b=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ne(this),Pn(this);var k="";break e}this.h.i=new c.TextDecoder}for(u=0;u<w;u++)this.h.h=!0,i+=this.h.i.decode(f[u],{stream:!(b&&u==w-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=l==200,Nh(this.i,this.u,this.A,this.l,this.R,It,l),this.o){if(this.T&&!this.K){e:{if(this.g){var J,mt=this.g;if((J=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(J)){var W=J;break e}}W=null}if(l=W)Xe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hs(this,l);else{this.o=!1,this.s=3,St(12),Ne(this),Pn(this);break t}}if(this.P){l=!0;let jt;for(;!this.J&&this.C<k.length;)if(jt=Mh(this,k),jt==$s){It==4&&(this.s=4,St(14),l=!1),Xe(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==Jo){this.s=4,St(15),Xe(this.i,this.l,k,"[Invalid Chunk]"),l=!1;break}else Xe(this.i,this.l,jt,null),Hs(this,jt);if(ta(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||k.length!=0||this.h.h||(this.s=1,St(16),l=!1),this.o=this.o&&l,!l)Xe(this.i,this.l,k,"[Invalid Chunked Response]"),Ne(this),Pn(this);else if(0<k.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Ys(Tt),Tt.M=!0,St(11))}}else Xe(this.i,this.l,k,null),Hs(this,k);It==4&&Ne(this),this.o&&!this.J&&(It==4?Sa(this.j,this):(this.o=!1,Er(this)))}else Zh(this.g),l==400&&0<k.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Ne(this),Pn(this)}}}catch{}finally{}};function ta(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Mh(i,u){var l=i.C,f=u.indexOf(`
`,l);return f==-1?$s:(l=Number(u.substring(l,f)),isNaN(l)?Jo:(f+=1,f+l>u.length?$s:(u=u.slice(f,f+l),i.C=f+l,u)))}he.prototype.cancel=function(){this.J=!0,Ne(this)};function Er(i){i.S=Date.now()+i.I,ea(i,i.I)}function ea(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Sn(T(i.ba,i),u)}function zs(i){i.B&&(c.clearTimeout(i.B),i.B=null)}he.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Oh(this.i,this.A),this.L!=2&&(bn(),St(17)),Ne(this),this.s=2,Pn(this)):ea(this,this.S-i)};function Pn(i){i.j.G==0||i.J||Sa(i.j,i)}function Ne(i){zs(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,qo(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function Hs(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||Gs(l.h,i))){if(!i.K&&Gs(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Cr(l),br(l);else break t;Xs(l),St(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=Sn(T(l.Za,l),6e3));if(1>=sa(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else xe(l,11)}else if((i.K||l.g==i)&&Cr(l),!B(u))for(w=l.Da.g.parse(u),u=0;u<w.length;u++){let W=w[u];if(l.T=W[0],W=W[1],l.G==2)if(W[0]=="c"){l.K=W[1],l.ia=W[2];const Tt=W[3];Tt!=null&&(l.la=Tt,l.j.info("VER="+l.la));const It=W[4];It!=null&&(l.Aa=It,l.j.info("SVER="+l.Aa));const Ze=W[5];Ze!=null&&typeof Ze=="number"&&0<Ze&&(f=1.5*Ze,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const jt=i.g;if(jt){const Vr=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vr){var b=f.h;b.g||Vr.indexOf("spdy")==-1&&Vr.indexOf("quic")==-1&&Vr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ks(b,b.h),b.h=null))}if(f.D){const Js=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Js&&(f.ya=Js,Z(f.I,f.D,Js))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var k=i;if(f.qa=Va(f,f.J?f.ia:null,f.W),k.K){ia(f.h,k);var J=k,mt=f.L;mt&&(J.I=mt),J.B&&(zs(J),Er(J)),f.g=k}else Ra(f);0<l.i.length&&Sr(l)}else W[0]!="stop"&&W[0]!="close"||xe(l,7);else l.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?xe(l,7):Qs(l):W[0]!="noop"&&l.l&&l.l.ta(W),l.v=0)}}bn(4)}catch{}}var Fh=class{constructor(i,u){this.g=i,this.map=u}};function na(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ra(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function sa(i){return i.h?1:i.g?i.g.size:0}function Gs(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function Ks(i,u){i.g?i.g.add(u):i.h=u}function ia(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}na.prototype.cancel=function(){if(this.i=oa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function oa(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return O(i.i)}function Lh(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,f=0;f<l;f++)u.push(i[f]);return u}u=[],l=0;for(f in i)u[l++]=i[f];return u}function Uh(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const f in i)u[l++]=f;return u}}}function aa(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=Uh(i),f=Lh(i),w=f.length,b=0;b<w;b++)u.call(void 0,f[b],l&&l[b],i)}var ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bh(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),w=null;if(0<=f){var b=i[l].substring(0,f);w=i[l].substring(f+1)}else b=i[l];u(b,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Oe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Oe){this.h=i.h,vr(this,i.j),this.o=i.o,this.g=i.g,Tr(this,i.s),this.l=i.l;var u=i.i,l=new kn;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),ca(this,l),this.m=i.m}else i&&(u=String(i).match(ua))?(this.h=!1,vr(this,u[1]||"",!0),this.o=Vn(u[2]||""),this.g=Vn(u[3]||"",!0),Tr(this,u[4]),this.l=Vn(u[5]||"",!0),ca(this,u[6]||"",!0),this.m=Vn(u[7]||"")):(this.h=!1,this.i=new kn(null,this.h))}Oe.prototype.toString=function(){var i=[],u=this.j;u&&i.push(Dn(u,la,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(Dn(u,la,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Dn(l,l.charAt(0)=="/"?qh:$h,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Dn(l,Hh)),i.join("")};function Jt(i){return new Oe(i)}function vr(i,u,l){i.j=l?Vn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Tr(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function ca(i,u,l){u instanceof kn?(i.i=u,Gh(i.i,i.h)):(l||(u=Dn(u,zh)),i.i=new kn(u,i.h))}function Z(i,u,l){i.i.set(u,l)}function Ir(i){return Z(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Vn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Dn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,jh),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function jh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var la=/[#\/\?@]/g,$h=/[#\?:]/g,qh=/[#\?]/g,zh=/[#\?@]/g,Hh=/#/g;function kn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function de(i){i.g||(i.g=new Map,i.h=0,i.i&&Bh(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=kn.prototype,n.add=function(i,u){de(this),this.i=null,i=Ye(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function ha(i,u){de(i),u=Ye(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function da(i,u){return de(i),u=Ye(i,u),i.g.has(u)}n.forEach=function(i,u){de(this),this.g.forEach(function(l,f){l.forEach(function(w){i.call(u,w,f,this)},this)},this)},n.na=function(){de(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const w=i[f];for(let b=0;b<w.length;b++)l.push(u[f])}return l},n.V=function(i){de(this);let u=[];if(typeof i=="string")da(this,i)&&(u=u.concat(this.g.get(Ye(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return de(this),this.i=null,i=Ye(this,i),da(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function fa(i,u,l){ha(i,u),0<l.length&&(i.i=null,i.g.set(Ye(i,u),O(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const b=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var w=b;k[f]!==""&&(w+="="+encodeURIComponent(String(k[f]))),i.push(w)}}return this.i=i.join("&")};function Ye(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Gh(i,u){u&&!i.j&&(de(i),i.i=null,i.g.forEach(function(l,f){var w=f.toLowerCase();f!=w&&(ha(this,f),fa(this,w,l))},i)),i.j=u}function Kh(i,u){const l=new Cn;if(c.Image){const f=new Image;f.onload=R(fe,l,"TestLoadImage: loaded",!0,u,f),f.onerror=R(fe,l,"TestLoadImage: error",!1,u,f),f.onabort=R(fe,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=R(fe,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function Wh(i,u){const l=new Cn,f=new AbortController,w=setTimeout(()=>{f.abort(),fe(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(w),b.ok?fe(l,"TestPingServer: ok",!0,u):fe(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),fe(l,"TestPingServer: error",!1,u)})}function fe(i,u,l,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(l)}catch{}}function Qh(){this.g=new Dh}function Xh(i,u,l){const f=l||"";try{aa(i,function(w,b){let k=w;d(w)&&(k=Fs(w)),u.push(f+b+"="+encodeURIComponent(k))})}catch(w){throw u.push(f+"type="+encodeURIComponent("_badmap")),w}}function wr(i){this.l=i.Ub||null,this.j=i.eb||!1}D(wr,Ls),wr.prototype.g=function(){return new Ar(this.l,this.j)},wr.prototype.i=(function(i){return function(){return i}})({});function Ar(i,u){vt.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Ar,vt),n=Ar.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,On(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pa(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function pa(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?Nn(this):On(this),this.readyState==3&&pa(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Nn(this))},n.Qa=function(i){this.g&&(this.response=i,Nn(this))},n.ga=function(){this.g&&Nn(this)};function Nn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,On(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function On(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ma(i){let u="";return ut(i,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function Ws(i,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=ma(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):Z(i,u,l))}function it(i){vt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(it,vt);var Yh=/^https?$/i,Jh=["POST","PUT"];n=it.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():js.g(),this.v=this.o?zo(this.o):zo(js),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(b){ga(this,b);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)l.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())l.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(b=>b.toLowerCase()=="content-type"),w=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Jh,u,void 0))||f||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,k]of l)this.g.setRequestHeader(b,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ea(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){ga(this,b)}};function ga(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,_a(i),Rr(i)}function _a(i){i.A||(i.A=!0,bt(i,"complete"),bt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,bt(this,"complete"),bt(this,"abort"),Rr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rr(this,!0)),it.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ya(this):this.bb())},n.bb=function(){ya(this)};function ya(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Zt(i)!=4||i.Z()!=2)){if(i.u&&Zt(i)==4)Bo(i.Ea,0,i);else if(bt(i,"readystatechange"),Zt(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=k===0){var w=String(i.D).match(ua)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),f=!Yh.test(w?w.toLowerCase():"")}l=f}if(l)bt(i,"complete"),bt(i,"success");else{i.m=6;try{var b=2<Zt(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",_a(i)}}finally{Rr(i)}}}}function Rr(i,u){if(i.g){Ea(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||bt(i,"ready");try{l.onreadystatechange=f}catch{}}}function Ea(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Zt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Vh(u)}};function va(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Zh(i){const u={};i=(i.g&&2<=Zt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(B(i[f]))continue;var l=v(i[f]);const w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const b=u[w]||[];u[w]=b,b.push(l)}I(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xn(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function Ta(i){this.Aa=0,this.i=[],this.j=new Cn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xn("baseRetryDelayMs",5e3,i),this.cb=xn("retryDelaySeedMs",1e4,i),this.Wa=xn("forwardChannelMaxRetries",2,i),this.wa=xn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new na(i&&i.concurrentRequestLimit),this.Da=new Qh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ta.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,f){St(0),this.W=i,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Va(this,null,this.W),Sr(this)};function Qs(i){if(Ia(i),i.G==3){var u=i.U++,l=Jt(i.I);if(Z(l,"SID",i.K),Z(l,"RID",u),Z(l,"TYPE","terminate"),Mn(i,l),u=new he(i,i.j,u),u.L=2,u.v=Ir(Jt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Da(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Er(u)}Pa(i)}function br(i){i.g&&(Ys(i),i.g.cancel(),i.g=null)}function Ia(i){br(i),i.u&&(c.clearTimeout(i.u),i.u=null),Cr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Sr(i){if(!ra(i.h)&&!i.s){i.s=!0;var u=i.Ga;Tn||xo(),In||(Tn(),In=!0),Ps.add(u,i),i.B=0}}function td(i,u){return sa(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Sn(T(i.Ga,i,u),Ca(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new he(this,this.j,i);let b=this.o;if(this.S&&(b?(b=m(b),E(b,this.S)):b=this.S),this.m!==null||this.O||(w.H=b,b=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=Aa(this,w,u),l=Jt(this.I),Z(l,"RID",i),Z(l,"CVER",22),this.D&&Z(l,"X-HTTP-Session-Id",this.D),Mn(this,l),b&&(this.O?u="headers="+encodeURIComponent(String(ma(b)))+"&"+u:this.m&&Ws(l,this.m,b)),Ks(this.h,w),this.Ua&&Z(l,"TYPE","init"),this.P?(Z(l,"$req",u),Z(l,"SID","null"),w.T=!0,qs(w,l,null)):qs(w,l,u),this.G=2}}else this.G==3&&(i?wa(this,i):this.i.length==0||ra(this.h)||wa(this))};function wa(i,u){var l;u?l=u.l:l=i.U++;const f=Jt(i.I);Z(f,"SID",i.K),Z(f,"RID",l),Z(f,"AID",i.T),Mn(i,f),i.m&&i.o&&Ws(f,i.m,i.o),l=new he(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=Aa(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Ks(i.h,l),qs(l,f,u)}function Mn(i,u){i.H&&ut(i.H,function(l,f){Z(u,f,l)}),i.l&&aa({},function(l,f){Z(u,f,l)})}function Aa(i,u,l){l=Math.min(i.i.length,l);var f=i.l?T(i.l.Na,i.l,i):null;t:{var w=i.i;let b=-1;for(;;){const k=["count="+l];b==-1?0<l?(b=w[0].g,k.push("ofs="+b)):b=0:k.push("ofs="+b);let J=!0;for(let mt=0;mt<l;mt++){let W=w[mt].g;const Tt=w[mt].map;if(W-=b,0>W)b=Math.max(0,w[mt].g-100),J=!1;else try{Xh(Tt,k,"req"+W+"_")}catch{f&&f(Tt)}}if(J){f=k.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,f}function Ra(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;Tn||xo(),In||(Tn(),In=!0),Ps.add(u,i),i.v=0}}function Xs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Sn(T(i.Fa,i),Ca(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ba(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Sn(T(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),br(this),ba(this))};function Ys(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function ba(i){i.g=new he(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Jt(i.qa);Z(u,"RID","rpc"),Z(u,"SID",i.K),Z(u,"AID",i.T),Z(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&Z(u,"TO",i.ja),Z(u,"TYPE","xmlhttp"),Mn(i,u),i.m&&i.o&&Ws(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Ir(Jt(u)),l.m=null,l.P=!0,Zo(l,i)}n.Za=function(){this.C!=null&&(this.C=null,br(this),Xs(this),St(19))};function Cr(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Sa(i,u){var l=null;if(i.g==u){Cr(i),Ys(i),i.g=null;var f=2}else if(Gs(i.h,u))l=u.D,ia(i.h,u),f=1;else return;if(i.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var w=i.B;f=gr(),bt(f,new Qo(f,l)),Sr(i)}else Ra(i);else if(w=u.s,w==3||w==0&&0<u.X||!(f==1&&td(i,u)||f==2&&Xs(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),w){case 1:xe(i,5);break;case 4:xe(i,10);break;case 3:xe(i,6);break;default:xe(i,2)}}}function Ca(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function xe(i,u){if(i.j.info("Error code "+u),u==2){var l=T(i.fb,i),f=i.Xa;const w=!f;f=new Oe(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||vr(f,"https"),Ir(f),w?Kh(f.toString(),l):Wh(f.toString(),l)}else St(2);i.G=0,i.l&&i.l.sa(u),Pa(i),Ia(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Pa(i){if(i.G=0,i.ka=[],i.l){const u=oa(i.h);(u.length!=0||i.i.length!=0)&&(V(i.ka,u),V(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function Va(i,u,l){var f=l instanceof Oe?Jt(l):new Oe(l);if(f.g!="")u&&(f.g=u+"."+f.g),Tr(f,f.s);else{var w=c.location;f=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;var b=new Oe(null);f&&vr(b,f),u&&(b.g=u),w&&Tr(b,w),l&&(b.l=l),f=b}return l=i.D,u=i.ya,l&&u&&Z(f,l,u),Z(f,"VER",i.la),Mn(i,f),f}function Da(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new it(new wr({eb:l})):new it(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ka(){}n=ka.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Pr(){}Pr.prototype.g=function(i,u){return new xt(i,u)};function xt(i,u){vt.call(this),this.g=new Ta(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!B(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Je(this)}D(xt,vt),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Qs(this.g)},xt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Fs(i),i=l);u.i.push(new Fh(u.Ya++,i)),u.G==3&&Sr(u)},xt.prototype.N=function(){this.g.l=null,delete this.j,Qs(this.g),delete this.g,xt.aa.N.call(this)};function Na(i){Us.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}D(Na,Us);function Oa(){Bs.call(this),this.status=1}D(Oa,Bs);function Je(i){this.g=i}D(Je,ka),Je.prototype.ua=function(){bt(this.g,"a")},Je.prototype.ta=function(i){bt(this.g,new Na(i))},Je.prototype.sa=function(i){bt(this.g,new Oa)},Je.prototype.ra=function(){bt(this.g,"b")},Pr.prototype.createWebChannel=Pr.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Pc=function(){return new Pr},Cc=function(){return gr()},Sc=ke,bi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_r.NO_ERROR=0,_r.TIMEOUT=8,_r.HTTP_ERROR=6,Lr=_r,Xo.COMPLETE="complete",bc=Xo,Ho.EventType=Rn,Rn.OPEN="a",Rn.CLOSE="b",Rn.ERROR="c",Rn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,Ln=Ho,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,Rc=it}).apply(typeof kr<"u"?kr:typeof self<"u"?self:typeof window<"u"?window:{});const nu="@firebase/firestore",ru="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _n="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new Xi("@firebase/firestore");function tn(){return qe.logLevel}function N(n,...t){if(qe.logLevel<=K.DEBUG){const e=t.map(Ji);qe.debug(`Firestore (${_n}): ${n}`,...e)}}function ue(n,...t){if(qe.logLevel<=K.ERROR){const e=t.map(Ji);qe.error(`Firestore (${_n}): ${n}`,...e)}}function we(n,...t){if(qe.logLevel<=K.WARN){const e=t.map(Ji);qe.warn(`Firestore (${_n}): ${n}`,...e)}}function Ji(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Vc(n,r,e)}function Vc(n,t,e){let r=`FIRESTORE (${_n}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw ue(r),new Error(r)}function X(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Vc(t,s,r)}function U(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Ve{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ap{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(At.UNAUTHENTICATED)))}shutdown(){}}class up{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class cp{constructor(t){this.t=t,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Te;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Te,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},c=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Te)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Dc(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string",2055,{h:t}),new At(t)}}class lp{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class hp{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new lp(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(At.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class su{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dp{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Hf(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){X(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new su(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(X(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new su(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=fp(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function $(n,t){return n<t?-1:n>t?1:0}function Si(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return $(r,s);{const o=kc(),a=pp(o.encode(iu(n,e)),o.encode(iu(t,e)));return a!==0?a:$(r,s)}}e+=r>65535?2:1}return $(n.length,t.length)}function iu(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function pp(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return $(n[e],t[e]);return $(n.length,t.length)}function hn(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="__name__";class zt{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&F(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return zt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof zt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=zt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return $(t.length,e.length)}static compareSegments(t,e){const r=zt.isNumericId(t),s=zt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?zt.extractNumericId(t).compare(zt.extractNumericId(e)):Si(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ve.fromString(t.substring(4,t.length-2))}}class rt extends zt{construct(t,e,r){return new rt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new rt(e)}static emptyPath(){return new rt([])}}const mp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends zt{construct(t,e,r){return new _t(t,e,r)}static isValidIdentifier(t){return mp.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ou}static keyField(){return new _t([ou])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new x(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new x(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new _t(e)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(rt.fromString(t))}static fromName(t){return new M(rt.fromString(t).popFirst(5))}static empty(){return new M(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&rt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return rt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new rt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(n,t,e){if(!e)throw new x(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function _p(n,t,e,r){if(t===!0&&r===!0)throw new x(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function au(n){if(!M.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Nc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function to(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function Yn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=to(n);throw new x(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n,t){const e={typeString:n};return t&&(e.value=t),e}function ar(n,t){if(!Nc(n))throw new x(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new x(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=-62135596800,cu=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*cu);return new et(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<uu)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cu}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(ar(t,et._jsonSchema))return new et(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-uu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:lt("string",et._jsonSchemaVersion),seconds:lt("number"),nanoseconds:lt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new et(0,0))}static max(){return new L(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=-1;function yp(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new et(e+1,0):new et(e,r));return new Ae(s,M.empty(),t)}function Ep(n){return new Ae(n.readTime,n.key,Jn)}class Ae{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ae(L.min(),M.empty(),Jn)}static max(){return new Ae(L.max(),M.empty(),Jn)}}function vp(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ip{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Tp)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let s=0,o=0,a=!1;t.forEach((c=>{++s,c.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((s=>s?S.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((p=>{a[d]=p,++c,c===o&&r(a)}),(p=>s(p)))}}))}static doWhile(t,e){return new S(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function wp(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function En(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}ls.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=-1;function hs(n){return n==null}function Wr(n){return n===0&&1/n==-1/0}function Ap(n){return typeof n=="number"&&Number.isInteger(n)&&!Wr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="";function Rp(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=lu(t)),t=bp(n.get(e),t);return lu(t)}function bp(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Oc:e+="";break;default:e+=o}}return e}function lu(n){return n+Oc+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function De(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function xc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,e){this.comparator=t,this.root=e||gt.EMPTY}insert(t,e){return new st(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(t){return new st(this.comparator,this.root.remove(t,this.comparator).copy(null,null,gt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nr(this.root,t,this.comparator,!0)}}class Nr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class gt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??gt.RED,this.left=s??gt.EMPTY,this.right=o??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new gt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return gt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw F(27949);return t+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.comparator=t,this.data=new st(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new du(this.data.getIterator())}getIteratorFrom(t){return new du(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class du{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.fields=t,t.sort(_t.comparator)}static empty(){return new $t([])}unionWith(t){let e=new dt(_t.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new $t(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return hn(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Mc("Invalid base64 string: "+o):o}})(t);return new yt(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new yt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const Sp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Re(n){if(X(!!n,39018),typeof n=="string"){let t=0;const e=Sp.exec(n);if(X(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function be(n){return typeof n=="string"?yt.fromBase64String(n):yt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="server_timestamp",Lc="__type__",Uc="__previous_value__",Bc="__local_write_time__";function no(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Lc])===null||e===void 0?void 0:e.stringValue)===Fc}function ds(n){const t=n.mapValue.fields[Uc];return no(t)?ds(t):t}function Zn(n){const t=Re(n.mapValue.fields[Bc].timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(t,e,r,s,o,a,c,h,d,p){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const Qr="(default)";class tr{constructor(t,e){this.projectId=t,this.database=e||Qr}static empty(){return new tr("","")}get isDefaultDatabase(){return this.database===Qr}isEqual(t){return t instanceof tr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="__type__",Pp="__max__",Or={mapValue:{}},$c="__vector__",Xr="value";function Se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?no(n)?4:Dp(n)?9007199254740991:Vp(n)?10:11:F(28295,{value:n})}function Xt(n,t){if(n===t)return!0;const e=Se(n);if(e!==Se(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Zn(n).isEqual(Zn(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Re(s.timestampValue),c=Re(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return be(s.bytesValue).isEqual(be(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return at(s.geoPointValue.latitude)===at(o.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return at(s.integerValue)===at(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=at(s.doubleValue),c=at(o.doubleValue);return a===c?Wr(a)===Wr(c):isNaN(a)&&isNaN(c)}return!1})(n,t);case 9:return hn(n.arrayValue.values||[],t.arrayValue.values||[],Xt);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(hu(a)!==hu(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Xt(a[h],c[h])))return!1;return!0})(n,t);default:return F(52216,{left:n})}}function er(n,t){return(n.values||[]).find((e=>Xt(e,t)))!==void 0}function dn(n,t){if(n===t)return 0;const e=Se(n),r=Se(t);if(e!==r)return $(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const c=at(o.integerValue||o.doubleValue),h=at(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(n,t);case 3:return fu(n.timestampValue,t.timestampValue);case 4:return fu(Zn(n),Zn(t));case 5:return Si(n.stringValue,t.stringValue);case 6:return(function(o,a){const c=be(o),h=be(a);return c.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const p=$(c[d],h[d]);if(p!==0)return p}return $(c.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const c=$(at(o.latitude),at(a.latitude));return c!==0?c:$(at(o.longitude),at(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return pu(n.arrayValue,t.arrayValue);case 10:return(function(o,a){var c,h,d,p;const y=o.fields||{},T=a.fields||{},R=(c=y[Xr])===null||c===void 0?void 0:c.arrayValue,D=(h=T[Xr])===null||h===void 0?void 0:h.arrayValue,O=$(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((p=D==null?void 0:D.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:pu(R,D)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===Or.mapValue&&a===Or.mapValue)return 0;if(o===Or.mapValue)return 1;if(a===Or.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let y=0;y<h.length&&y<p.length;++y){const T=Si(h[y],p[y]);if(T!==0)return T;const R=dn(c[h[y]],d[p[y]]);if(R!==0)return R}return $(h.length,p.length)})(n.mapValue,t.mapValue);default:throw F(23264,{le:e})}}function fu(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=Re(n),r=Re(t),s=$(e.seconds,r.seconds);return s!==0?s:$(e.nanos,r.nanos)}function pu(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=dn(e[s],r[s]);if(o)return o}return $(e.length,r.length)}function fn(n){return Ci(n)}function Ci(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Re(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return be(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return M.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ci(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ci(e.fields[a])}`;return s+"}"})(n.mapValue):F(61005,{value:n})}function Ur(n){switch(Se(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ds(n);return t?16+Ur(t):16;case 5:return 2*n.stringValue.length;case 6:return be(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+Ur(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return De(r.fields,((o,a)=>{s+=o.length+Ur(a)})),s})(n.mapValue);default:throw F(13486,{value:n})}}function Pi(n){return!!n&&"integerValue"in n}function ro(n){return!!n&&"arrayValue"in n}function mu(n){return!!n&&"nullValue"in n}function gu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Br(n){return!!n&&"mapValue"in n}function Vp(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[jc])===null||e===void 0?void 0:e.stringValue)===$c}function zn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return De(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=zn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=zn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Dp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Pp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.value=t}static empty(){return new Mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Br(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=zn(e)}setAll(t){let e=_t.emptyPath(),r={},s=[];t.forEach(((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=zn(a):s.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Br(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Xt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Br(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){De(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new Mt(zn(this.value))}}function qc(n){const t=[];return De(n.fields,((e,r)=>{const s=new _t([e]);if(Br(r)){const o=qc(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new $t(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Rt(t,0,L.min(),L.min(),L.min(),Mt.empty(),0)}static newFoundDocument(t,e,r,s){return new Rt(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new Rt(t,2,e,L.min(),L.min(),Mt.empty(),0)}static newUnknownDocument(t,e){return new Rt(t,3,e,L.min(),L.min(),Mt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,e){this.position=t,this.inclusive=e}}function _u(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=dn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function yu(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Xt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,e="asc"){this.field=t,this.dir=e}}function kp(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{}class ht extends zc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Op(t,e,r):e==="array-contains"?new Fp(t,r):e==="in"?new Lp(t,r):e==="not-in"?new Up(t,r):e==="array-contains-any"?new Bp(t,r):new ht(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new xp(t,r):new Mp(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(dn(e,this.value)):e!==null&&Se(this.value)===Se(e)&&this.matchesComparison(dn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends zc{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Yt(t,e)}matches(t){return Hc(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Hc(n){return n.op==="and"}function Gc(n){return Np(n)&&Hc(n)}function Np(n){for(const t of n.filters)if(t instanceof Yt)return!1;return!0}function Vi(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+fn(n.value);if(Gc(n))return n.filters.map((t=>Vi(t))).join(",");{const t=n.filters.map((e=>Vi(e))).join(",");return`${n.op}(${t})`}}function Kc(n,t){return n instanceof ht?(function(r,s){return s instanceof ht&&r.op===s.op&&r.field.isEqual(s.field)&&Xt(r.value,s.value)})(n,t):n instanceof Yt?(function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,c)=>o&&Kc(a,s.filters[c])),!0):!1})(n,t):void F(19439)}function Wc(n){return n instanceof ht?(function(e){return`${e.field.canonicalString()} ${e.op} ${fn(e.value)}`})(n):n instanceof Yt?(function(e){return e.op.toString()+" {"+e.getFilters().map(Wc).join(" ,")+"}"})(n):"Filter"}class Op extends ht{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class xp extends ht{constructor(t,e){super(t,"in",e),this.keys=Qc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Mp extends ht{constructor(t,e){super(t,"not-in",e),this.keys=Qc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Qc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((r=>M.fromName(r.referenceValue)))}class Fp extends ht{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ro(e)&&er(e.arrayValue,this.value)}}class Lp extends ht{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&er(this.value.arrayValue,e)}}class Up extends ht{constructor(t,e){super(t,"not-in",e)}matches(t){if(er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!er(this.value.arrayValue,e)}}class Bp extends ht{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ro(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>er(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Pe=null}}function Eu(n,t=null,e=[],r=[],s=null,o=null,a=null){return new jp(n,t,e,r,s,o,a)}function so(n){const t=U(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Vi(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),hs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>fn(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>fn(r))).join(",")),t.Pe=e}return t.Pe}function io(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!kp(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Kc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!yu(n.startAt,t.startAt)&&yu(n.endAt,t.endAt)}function Di(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function $p(n,t,e,r,s,o,a,c){return new fs(n,t,e,r,s,o,a,c)}function oo(n){return new fs(n)}function vu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function qp(n){return n.collectionGroup!==null}function Hn(n){const t=U(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new dt(_t.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new Jr(o,r))})),e.has(_t.keyField().canonicalString())||t.Te.push(new Jr(_t.keyField(),r))}return t.Te}function Gt(n){const t=U(n);return t.Ie||(t.Ie=zp(t,Hn(n))),t.Ie}function zp(n,t){if(n.limitType==="F")return Eu(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Jr(s.field,o)}));const e=n.endAt?new Yr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yr(n.startAt.position,n.startAt.inclusive):null;return Eu(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ki(n,t,e){return new fs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ps(n,t){return io(Gt(n),Gt(t))&&n.limitType===t.limitType}function Xc(n){return`${so(Gt(n))}|lt:${n.limitType}`}function en(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>Wc(s))).join(", ")}]`),hs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>fn(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>fn(s))).join(",")),`Target(${r})`})(Gt(n))}; limitType=${n.limitType})`}function ms(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of Hn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,c,h){const d=_u(a,c,h);return a.inclusive?d<=0:d<0})(r.startAt,Hn(r),s)||r.endAt&&!(function(a,c,h){const d=_u(a,c,h);return a.inclusive?d>=0:d>0})(r.endAt,Hn(r),s))})(n,t)}function Hp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yc(n){return(t,e)=>{let r=!1;for(const s of Hn(n)){const o=Gp(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Gp(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):(function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?dn(h,d):F(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){De(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return xc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new st(M.comparator);function ce(){return Kp}const Jc=new st(M.comparator);function Un(...n){let t=Jc;for(const e of n)t=t.insert(e.key,e);return t}function Zc(n){let t=Jc;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function Fe(){return Gn()}function tl(){return Gn()}function Gn(){return new Ke((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Wp=new st(M.comparator),Qp=new dt(M.comparator);function z(...n){let t=Qp;for(const e of n)t=t.add(e);return t}const Xp=new dt($);function Yp(){return Xp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wr(t)?"-0":t}}function el(n){return{integerValue:""+n}}function Jp(n,t){return Ap(t)?el(t):ao(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this._=void 0}}function Zp(n,t,e){return n instanceof Zr?(function(s,o){const a={fields:{[Lc]:{stringValue:Fc},[Bc]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&no(o)&&(o=ds(o)),o&&(a.fields[Uc]=o),{mapValue:a}})(e,t):n instanceof pn?rl(n,t):n instanceof nr?sl(n,t):(function(s,o){const a=nl(s,o),c=Tu(a)+Tu(s.Ee);return Pi(a)&&Pi(s.Ee)?el(c):ao(s.serializer,c)})(n,t)}function tm(n,t,e){return n instanceof pn?rl(n,t):n instanceof nr?sl(n,t):e}function nl(n,t){return n instanceof ts?(function(r){return Pi(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class Zr extends gs{}class pn extends gs{constructor(t){super(),this.elements=t}}function rl(n,t){const e=il(t);for(const r of n.elements)e.some((s=>Xt(s,r)))||e.push(r);return{arrayValue:{values:e}}}class nr extends gs{constructor(t){super(),this.elements=t}}function sl(n,t){let e=il(t);for(const r of n.elements)e=e.filter((s=>!Xt(s,r)));return{arrayValue:{values:e}}}class ts extends gs{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Tu(n){return at(n.integerValue||n.doubleValue)}function il(n){return ro(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t,e){this.field=t,this.transform=e}}function nm(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof pn&&s instanceof pn||r instanceof nr&&s instanceof nr?hn(r.elements,s.elements,Xt):r instanceof ts&&s instanceof ts?Xt(r.Ee,s.Ee):r instanceof Zr&&s instanceof Zr})(n.transform,t.transform)}class rm{constructor(t,e){this.version=t,this.transformResults=e}}class re{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new re}static exists(t){return new re(void 0,t)}static updateTime(t){return new re(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class _s{}function ol(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ul(n.key,re.none()):new ys(n.key,n.data,re.none());{const e=n.data,r=Mt.empty();let s=new dt(_t.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new We(n.key,r,new $t(s.toArray()),re.none())}}function sm(n,t,e){n instanceof ys?(function(s,o,a){const c=s.value.clone(),h=wu(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,t,e):n instanceof We?(function(s,o,a){if(!jr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=wu(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(al(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function Kn(n,t,e,r){return n instanceof ys?(function(o,a,c,h){if(!jr(o.precondition,a))return c;const d=o.value.clone(),p=Au(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof We?(function(o,a,c,h){if(!jr(o.precondition,a))return c;const d=Au(o.fieldTransforms,h,a),p=a.data;return p.setAll(al(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((y=>y.field)))})(n,t,e,r):(function(o,a,c){return jr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,t,e)}function im(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=nl(r.transform,s||null);o!=null&&(e===null&&(e=Mt.empty()),e.set(r.field,o))}return e||null}function Iu(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&hn(r,s,((o,a)=>nm(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ys extends _s{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class We extends _s{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function al(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function wu(n,t,e){const r=new Map;X(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,tm(a,c,e[s]))}return r}function Au(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Zp(o,a,t))}return r}class ul extends _s{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class om extends _s{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&sm(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Kn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Kn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=tl();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=ol(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),z())}isEqual(t){return this.batchId===t.batchId&&hn(this.mutations,t.mutations,((e,r)=>Iu(e,r)))&&hn(this.baseMutations,t.baseMutations,((e,r)=>Iu(e,r)))}}class uo{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){X(t.mutations.length===r.length,58842,{Ve:t.mutations.length,me:r.length});let s=(function(){return Wp})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new uo(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,G;function lm(n){switch(n){case P.OK:return F(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function cl(n){if(n===void 0)return ue("GRPC error has no .code"),P.UNKNOWN;switch(n){case ct.OK:return P.OK;case ct.CANCELLED:return P.CANCELLED;case ct.UNKNOWN:return P.UNKNOWN;case ct.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ct.INTERNAL:return P.INTERNAL;case ct.UNAVAILABLE:return P.UNAVAILABLE;case ct.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ct.NOT_FOUND:return P.NOT_FOUND;case ct.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ct.ABORTED:return P.ABORTED;case ct.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ct.DATA_LOSS:return P.DATA_LOSS;default:return F(39323,{code:n})}}(G=ct||(ct={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=new ve([4294967295,4294967295],0);function Ru(n){const t=kc().encode(n),e=new Ac;return e.update(t),new Uint8Array(e.digest())}function bu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ve([e,r],0),new ve([s,o],0)]}class co{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Bn(`Invalid padding: ${e}`);if(r<0)throw new Bn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Bn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Bn(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=ve.fromNumber(this.fe)}pe(t,e,r){let s=t.add(e.multiply(ve.fromNumber(r)));return s.compare(hm)===1&&(s=new ve([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=Ru(t),[r,s]=bu(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);if(!this.ye(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new co(o,s,e);return r.forEach((c=>a.insert(c))),a}insert(t){if(this.fe===0)return;const e=Ru(t),[r,s]=bu(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);this.we(a)}}we(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Bn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,ur.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Es(L.min(),s,new st($),ce(),z())}}class ur{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new ur(r,e,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.be=s}}class ll{constructor(t,e){this.targetId=t,this.De=e}}class hl{constructor(t,e,r=yt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Su{constructor(){this.ve=0,this.Ce=Cu(),this.Fe=yt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=z(),e=z(),r=z();return this.Ce.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:F(38017,{changeType:o})}})),new ur(this.Fe,this.Me,t,e,r)}ke(){this.xe=!1,this.Ce=Cu()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class dm{constructor(t){this.We=t,this.Ge=new Map,this.ze=ce(),this.je=xr(),this.Je=xr(),this.He=new st($)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const r=this.tt(e);switch(t.state){case 0:this.nt(e)&&r.Be(t.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(t.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(r.Ke(),r.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),r.Be(t.resumeToken));break;default:F(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((r,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,r=t.De.count,s=this.st(e);if(s){const o=s.target;if(Di(o))if(r===0){const a=new M(o.path);this.Xe(e,a,Rt.newNoDocument(a,L.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this.ot(e);if(a!==r){const c=this._t(t),h=c?this.ut(c,t,a):1;if(h!==0){this.rt(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=be(r).toUint8Array()}catch(h){if(h instanceof Mc)return we("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new co(a,s,o)}catch(h){return we(h instanceof Bn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.fe===0?null:c}ut(t,e,r){return e.De.count===r-this.ht(t,e.targetId)?0:2}ht(t,e){const r=this.We.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Xe(e,o,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((o,a)=>{const c=this.st(a);if(c){if(o.current&&Di(c.target)){const h=new M(c.target.path);this.Tt(h).has(a)||this.It(a,h)||this.Xe(a,h,Rt.newNoDocument(h,t))}o.Ne&&(e.set(a,o.Le()),o.ke())}}));let r=z();this.Je.forEach(((o,a)=>{let c=!0;a.forEachWhile((h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(o))})),this.ze.forEach(((o,a)=>a.setReadTime(t)));const s=new Es(t,e,this.He,this.ze,r);return this.ze=ce(),this.je=xr(),this.Je=xr(),this.He=new st($),s}Ze(t,e){if(!this.nt(t))return;const r=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,r),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,r){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),r&&(this.ze=this.ze.insert(e,r))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Su,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new dt($),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new dt($),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Su),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function xr(){return new st(M.comparator)}function Cu(){return new st(M.comparator)}const fm={asc:"ASCENDING",desc:"DESCENDING"},pm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mm={and:"AND",or:"OR"};class gm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ni(n,t){return n.useProto3Json||hs(t)?t:{value:t}}function es(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function dl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function _m(n,t){return es(n,t.toTimestamp())}function Kt(n){return X(!!n,49232),L.fromTimestamp((function(e){const r=Re(e);return new et(r.seconds,r.nanos)})(n))}function lo(n,t){return Oi(n,t).canonicalString()}function Oi(n,t){const e=(function(s){return new rt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function fl(n){const t=rt.fromString(n);return X(yl(t),10190,{key:t.toString()}),t}function xi(n,t){return lo(n.databaseId,t.path)}function si(n,t){const e=fl(t);if(e.get(1)!==n.databaseId.projectId)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(ml(e))}function pl(n,t){return lo(n.databaseId,t)}function ym(n){const t=fl(n);return t.length===4?rt.emptyPath():ml(t)}function Mi(n){return new rt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ml(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Pu(n,t,e){return{name:xi(n,t),fields:e.value.mapValue.fields}}function Em(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,p){return d.useProto3Json?(X(p===void 0||typeof p=="string",58123),yt.fromBase64String(p||"")):(X(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),yt.fromUint8Array(p||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&(function(d){const p=d.code===void 0?P.UNKNOWN:cl(d.code);return new x(p,d.message||"")})(a);e=new hl(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=si(n,r.document.name),o=Kt(r.document.updateTime),a=r.document.createTime?Kt(r.document.createTime):L.min(),c=new Mt({mapValue:{fields:r.document.fields}}),h=Rt.newFoundDocument(s,o,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];e=new $r(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=si(n,r.document),o=r.readTime?Kt(r.readTime):L.min(),a=Rt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new $r([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=si(n,r.document),o=r.removedTargetIds||[];e=new $r([],o,s,null)}else{if(!("filter"in t))return F(11601,{At:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new cm(s,o),c=r.targetId;e=new ll(c,a)}}return e}function vm(n,t){let e;if(t instanceof ys)e={update:Pu(n,t.key,t.value)};else if(t instanceof ul)e={delete:xi(n,t.key)};else if(t instanceof We)e={update:Pu(n,t.key,t.data),updateMask:Pm(t.fieldMask)};else{if(!(t instanceof om))return F(16599,{Rt:t.type});e={verify:xi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const c=a.transform;if(c instanceof Zr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof pn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof nr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ts)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw F(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:_m(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)})(n,t.precondition)),e}function Tm(n,t){return n&&n.length>0?(X(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?Kt(s.updateTime):Kt(o);return a.isEqual(L.min())&&(a=Kt(o)),new rm(a,s.transformResults||[])})(e,t)))):[]}function Im(n,t){return{documents:[pl(n,t.path)]}}function wm(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=pl(n,s);const o=(function(d){if(d.length!==0)return _l(Yt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((p=>(function(T){return{field:nn(T.field),direction:bm(T.dir)}})(p)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Ni(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{Vt:e,parent:s}}function Am(n){let t=ym(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){X(r===1,65062);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=(function(y){const T=gl(y);return T instanceof Yt&&Gc(T)?T.getFilters():[T]})(e.where));let a=[];e.orderBy&&(a=(function(y){return y.map((T=>(function(D){return new Jr(rn(D.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(T)))})(e.orderBy));let c=null;e.limit&&(c=(function(y){let T;return T=typeof y=="object"?y.value:y,hs(T)?null:T})(e.limit));let h=null;e.startAt&&(h=(function(y){const T=!!y.before,R=y.values||[];return new Yr(R,T)})(e.startAt));let d=null;return e.endAt&&(d=(function(y){const T=!y.before,R=y.values||[];return new Yr(R,T)})(e.endAt)),$p(t,s,a,o,c,"F",h,d)}function Rm(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function gl(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=rn(e.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=rn(e.unaryFilter.field);return ht.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=rn(e.unaryFilter.field);return ht.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=rn(e.unaryFilter.field);return ht.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(n):n.fieldFilter!==void 0?(function(e){return ht.create(rn(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Yt.create(e.compositeFilter.filters.map((r=>gl(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(e.compositeFilter.op))})(n):F(30097,{filter:n})}function bm(n){return fm[n]}function Sm(n){return pm[n]}function Cm(n){return mm[n]}function nn(n){return{fieldPath:n.canonicalString()}}function rn(n){return _t.fromServerFormat(n.fieldPath)}function _l(n){return n instanceof ht?(function(e){if(e.op==="=="){if(gu(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NAN"}};if(mu(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(gu(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NOT_NAN"}};if(mu(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nn(e.field),op:Sm(e.op),value:e.value}}})(n):n instanceof Yt?(function(e){const r=e.getFilters().map((s=>_l(s)));return r.length===1?r[0]:{compositeFilter:{op:Cm(e.op),filters:r}}})(n):F(54877,{filter:n})}function Pm(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function yl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,e,r,s,o=L.min(),a=L.min(),c=yt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new _e(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t){this.gt=t}}function Dm(n){const t=Am({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ki(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.Dn=new Nm}addToCollectionParentIndex(t,e){return this.Dn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(Ae.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(Ae.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Nm{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new dt(rt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new dt(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},El=41943040;class kt{static withCacheSize(t){return new kt(t,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(El,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new mn(0)}static ur(){return new mn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="LruGarbageCollector",Om=1048576;function ku([n,t],[e,r]){const s=$(n,e);return s===0?$(t,r):s}class xm{constructor(t){this.Tr=t,this.buffer=new dt(ku),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ku(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Mm{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){N(Du,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){En(e)?N(Du,"Ignoring IndexedDB error during garbage collection: ",e):await yn(e)}await this.Rr(3e5)}))}}class Fm{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(ls.ue);const r=new xm(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Vu)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vu):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,s,o,a,c,h,d;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(t,s)))).next((y=>(r=y,c=Date.now(),this.removeTargets(t,r,e)))).next((y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((y=>(d=Date.now(),tn()<=K.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y}))))}}function Lm(n,t){return new Fm(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.changes=new Ke((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Rt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&Kn(r.mutation,s,$t.empty(),et.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,z()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=z()){const s=Fe();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=Un();return o.forEach(((c,h)=>{a=a.insert(c,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=Fe();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,z())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,c)=>{e.set(a,c)}))}))}computeViews(t,e,r,s){let o=ce();const a=Gn(),c=(function(){return Gn()})();return e.forEach(((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof We)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Kn(p.mutation,d,p.mutation.getFieldMask(),et.now())):a.set(d.key,$t.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,p)=>a.set(d,p))),e.forEach(((d,p)=>{var y;return c.set(d,new Bm(p,(y=a.get(d))!==null&&y!==void 0?y:null))})),c)))}recalculateAndSaveOverlays(t,e){const r=Gn();let s=new st(((a,c)=>a-c)),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const c of a)c.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||$t.empty();p=c.applyToLocalView(d,p),r.set(h,p);const y=(s.get(c.batchId)||z()).add(h);s=s.insert(c.batchId,y)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,p=h.value,y=tl();p.forEach((T=>{if(!o.has(T)){const R=ol(e.get(T),r.get(T));R!==null&&y.set(T,R),o=o.add(T)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return S.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):qp(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(Fe());let c=Jn,h=o;return a.next((d=>S.forEach(d,((p,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),o.get(p)?S.resolve():this.remoteDocumentCache.getEntry(t,p).next((T=>{h=h.insert(p,T)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,z()))).next((p=>({batchId:c,changes:Zc(p)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((r=>{let s=Un();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Un();return this.indexManager.getCollectionParents(t,o).next((c=>S.forEach(c,(h=>{const d=(function(y,T){return new fs(T,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((p=>{p.forEach(((y,T)=>{a=a.insert(y,T)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Rt.newInvalidDocument(p)))}));let c=Un();return a.forEach(((h,d)=>{const p=o.get(h);p!==void 0&&Kn(p.mutation,d,$t.empty(),et.now()),ms(e,d)&&(c=c.insert(h,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return S.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Kt(s.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:Dm(s.bundledQuery),readTime:Kt(s.readTime)}})(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.overlays=new st(M.comparator),this.kr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Fe();return S.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.wt(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=Fe(),o=e.length+1,a=new M(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new st(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Fe(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Fe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,p)=>c.set(d,p))),!(c.size()>=s)););return S.resolve(c)}wt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new um(e,r));let o=this.kr.get(e);o===void 0&&(o=z(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.qr=new dt(ft.Qr),this.$r=new dt(ft.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new ft(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new ft(t,e))}Gr(t,e){t.forEach((r=>this.removeReference(r,e)))}zr(t){const e=new M(new rt([])),r=new ft(e,t),s=new ft(e,t+1),o=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),o.push(a.key)})),o}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new M(new rt([])),r=new ft(e,t),s=new ft(e,t+1);let o=z();return this.$r.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new ft(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ft{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return M.comparator(t.key,e.key)||$(t.Hr,e.Hr)}static Ur(t,e){return $(t.Hr,e.Hr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new dt(ft.Qr)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new am(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new ft(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?eo:this.er-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ft(e,0),s=new ft(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);o.push(c)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new dt($);return e.forEach((s=>{const o=new ft(s,0),a=new ft(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],(c=>{r=r.add(c.Hr)}))})),S.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new ft(new M(o),0);let c=new dt($);return this.Yr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.Hr)),!0)}),a),S.resolve(this.ei(c))}ei(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){X(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return S.forEach(e.mutations,(s=>{const o=new ft(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=r}))}rr(t){}containsKey(t,e){const r=new ft(e,0),s=this.Yr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t){this.ni=t,this.docs=(function(){return new st(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(e))}getEntries(t,e){let r=ce();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Rt.newInvalidDocument(s))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ce();const a=e.path,c=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||vp(Ep(p),r)<=0||(s.has(p.key)||ms(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){F(9500)}ri(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Km(this)}getSize(t){return S.resolve(this.size)}}class Km extends Um{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(t){this.persistence=t,this.ii=new Ke((e=>so(e)),io),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.si=0,this.oi=new ho,this.targetCount=0,this._i=mn.ar()}forEachTarget(t,e){return this.ii.forEach(((r,s)=>e(s))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),S.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new mn(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.hr(e),S.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),S.waitFor(o).next((()=>s))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e){this.ai={},this.overlays={},this.ui=new ls(0),this.ci=!1,this.ci=!0,this.li=new zm,this.referenceDelegate=t(this),this.hi=new Wm(this),this.indexManager=new km,this.remoteDocumentCache=(function(s){return new Gm(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Vm(e),this.Ti=new $m(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new qm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new Hm(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new Qm(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return S.or(Object.values(this.ai).map((r=>()=>r.containsKey(t,e))))}}class Qm extends Ip{constructor(t){super(),this.currentSequenceNumber=t}}class fo{constructor(t){this.persistence=t,this.Ai=new ho,this.Ri=null}static Vi(t){return new fo(t)}get mi(){if(this.Ri)return this.Ri;throw F(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.mi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.mi,(r=>{const s=M.fromPath(r);return this.fi(t,s).next((o=>{o||e.removeEntry(s,L.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return S.or([()=>S.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class ns{constructor(t,e){this.persistence=t,this.gi=new Ke((r=>Rp(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Lm(this,e)}static Vi(t,e){return new ns(t,e)}Ii(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}yr(t){let e=0;return this.gr(t,(r=>{e++})).next((()=>e))}gr(t,e){return S.forEach(this.gi,((r,s)=>this.Sr(t,r,s).next((o=>o?S.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(t,(a=>this.Sr(t,a,e).next((c=>{c||(r++,o.removeEntry(a,L.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),S.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ur(t.data.value)),e}Sr(t,e,r){return S.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=s}static Es(t,e){let r=z(),s=z();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new po(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return jd()?8:wp(Ud())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ps(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ys(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Xm;return this.ws(t,e,a).next((c=>{if(o.result=c,this.Rs)return this.Ss(t,e,a,c.size)}))})).next((()=>o.result))}Ss(t,e,r,s){return r.documentReadCount<this.Vs?(tn()<=K.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",en(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),S.resolve()):(tn()<=K.DEBUG&&N("QueryEngine","Query:",en(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(tn()<=K.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",en(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Gt(e))):S.resolve())}ps(t,e){if(vu(e))return S.resolve(null);let r=Gt(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=ki(e,null,"F"),r=Gt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=z(...o);return this.gs.getDocuments(t,a).next((c=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.bs(e,c);return this.Ds(e,d,a,h.readTime)?this.ps(t,ki(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ys(t,e,r,s){return vu(e)||s.isEqual(L.min())?S.resolve(null):this.gs.getDocuments(t,r).next((o=>{const a=this.bs(e,o);return this.Ds(e,a,r,s)?S.resolve(null):(tn()<=K.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),en(e)),this.vs(t,a,e,yp(s,Jn)).next((c=>c)))}))}bs(t,e){let r=new dt(Yc(t));return e.forEach(((s,o)=>{ms(t,o)&&(r=r.add(o))})),r}Ds(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(t,e,r){return tn()<=K.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",en(e)),this.gs.getDocumentsMatchingQuery(t,e,Ae.min(),r)}vs(t,e,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="LocalStore",Jm=3e8;class Zm{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new st($),this.Ms=new Ke((o=>so(o)),io),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jm(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function tg(n,t,e,r){return new Zm(n,t,e,r)}async function Tl(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],c=[];let h=z();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){c.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function eg(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return(function(c,h,d,p){const y=d.batch,T=y.keys();let R=S.resolve();return T.forEach((D=>{R=R.next((()=>p.getEntry(h,D))).next((O=>{const V=d.docVersions.get(D);X(V!==null,48541),O.version.compareTo(V)<0&&(y.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))}))})),R.next((()=>c.mutationQueue.removeMutationBatch(h,y)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let h=z();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function Il(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function ng(n,t){const e=U(n),r=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const c=[];t.targetChanges.forEach(((p,y)=>{const T=s.get(y);if(!T)return;c.push(e.hi.removeMatchingKeys(o,p.removedDocuments,y).next((()=>e.hi.addMatchingKeys(o,p.addedDocuments,y))));let R=T.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?R=R.withResumeToken(yt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),s=s.insert(y,R),(function(O,V,j){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Jm?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(T,R,p)&&c.push(e.hi.updateTargetData(o,R))}));let h=ce(),d=z();if(t.documentUpdates.forEach((p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))})),c.push(rg(o,a,t.documentUpdates).next((p=>{h=p.Ls,d=p.ks}))),!r.isEqual(L.min())){const p=e.hi.getLastRemoteSnapshotVersion(o).next((y=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,r)));c.push(p)}return S.waitFor(c).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Fs=s,o)))}function rg(n,t,e){let r=z(),s=z();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=ce();return e.forEach(((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):N(mo,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)})),{Ls:a,ks:s}}))}function sg(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=eo),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function ig(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.hi.getTargetData(r,t).next((o=>o?(s=o,S.resolve(s)):e.hi.allocateTargetId(r).next((a=>(s=new _e(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(r.targetId,r),e.Ms.set(t,r.targetId)),r}))}async function Fi(n,t,e){const r=U(n),s=r.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!En(a))throw a;N(mo,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(s.target)}function Nu(n,t,e){const r=U(n);let s=L.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,p){const y=U(h),T=y.Ms.get(p);return T!==void 0?S.resolve(y.Fs.get(T)):y.hi.getTargetData(d,p)})(r,a,Gt(t)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((h=>{o=h}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:z()))).next((c=>(og(r,Hp(t),c),{documents:c,qs:o})))))}function og(n,t,e){let r=n.xs.get(t)||L.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.xs.set(t,r)}class Ou{constructor(){this.activeTargetIds=Yp()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ag{constructor(){this.Fo=new Ou,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Ou,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="ConnectivityMonitor";class Mu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){N(xu,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){N(xu,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr=null;function Li(){return Mr===null?Mr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mr++,"0x"+Mr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="RestConnection",cg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class lg{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Qr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=Li(),c=this.Go(t,e.toUriEncodedString());N(ii,`Sending RPC '${t}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,s,o);const{host:d}=new URL(c),p=Ki(d);return this.jo(t,c,h,r,p).then((y=>(N(ii,`Received RPC '${t}' ${a}: `,y),y)),(y=>{throw we(ii,`RPC '${t}' ${a} failed with error: `,y,"url: ",c,"request:",r),y}))}Jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}zo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+_n})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}Go(t,e){const r=cg[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class dg extends lg{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,s,o){const a=Li();return new Promise(((c,h)=>{const d=new Rc;d.setWithCredentials(!0),d.listenOnce(bc.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Lr.NO_ERROR:const y=d.getResponseJson();N(wt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(y)),c(y);break;case Lr.TIMEOUT:N(wt,`RPC '${t}' ${a} timed out`),h(new x(P.DEADLINE_EXCEEDED,"Request time out"));break;case Lr.HTTP_ERROR:const T=d.getStatus();if(N(wt,`RPC '${t}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const D=R==null?void 0:R.error;if(D&&D.status&&D.message){const O=(function(j){const B=j.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN})(D.status);h(new x(O,D.message))}else h(new x(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new x(P.UNAVAILABLE,"Connection failed."));break;default:F(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{N(wt,`RPC '${t}' ${a} completed.`)}}));const p=JSON.stringify(s);N(wt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",p,r,15)}))}P_(t,e,r){const s=Li(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Pc(),c=Cc(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");N(wt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const y=a.createWebChannel(p,h);this.T_(y);let T=!1,R=!1;const D=new hg({Ho:V=>{R?N(wt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(T||(N(wt,`Opening RPC '${t}' stream ${s} transport.`),y.open(),T=!0),N(wt,`RPC '${t}' stream ${s} sending:`,V),y.send(V))},Yo:()=>y.close()}),O=(V,j,B)=>{V.listen(j,(q=>{try{B(q)}catch(nt){setTimeout((()=>{throw nt}),0)}}))};return O(y,Ln.EventType.OPEN,(()=>{R||(N(wt,`RPC '${t}' stream ${s} transport opened.`),D.s_())})),O(y,Ln.EventType.CLOSE,(()=>{R||(R=!0,N(wt,`RPC '${t}' stream ${s} transport closed`),D.__(),this.I_(y))})),O(y,Ln.EventType.ERROR,(V=>{R||(R=!0,we(wt,`RPC '${t}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),D.__(new x(P.UNAVAILABLE,"The operation could not be completed")))})),O(y,Ln.EventType.MESSAGE,(V=>{var j;if(!R){const B=V.data[0];X(!!B,16349);const q=B,nt=(q==null?void 0:q.error)||((j=q[0])===null||j===void 0?void 0:j.error);if(nt){N(wt,`RPC '${t}' stream ${s} received error:`,nt);const Lt=nt.status;let ut=(function(_){const E=ct[_];if(E!==void 0)return cl(E)})(Lt),I=nt.message;ut===void 0&&(ut=P.INTERNAL,I="Unknown error status: "+Lt+" with message "+nt.message),R=!0,D.__(new x(ut,I)),y.close()}else N(wt,`RPC '${t}' stream ${s} received:`,B),D.a_(B)}})),O(c,Sc.STAT_EVENT,(V=>{V.stat===bi.PROXY?N(wt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===bi.NOPROXY&&N(wt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{D.o_()}),0),D}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function oi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n){return new gm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="PersistentStream";class Al{constructor(t,e,r,s,o,a,c,h){this.Fi=t,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new wl(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(ue(e.toString()),ue("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===e&&this.W_(r,s)}),(r=>{t((()=>{const s=new x(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return N(Fu,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(N(Fu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fg extends Al{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=Em(this.serializer,t),r=(function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Kt(a.readTime):L.min()})(t);return this.listener.J_(e,r)}H_(t){const e={};e.database=Mi(this.serializer),e.addTarget=(function(o,a){let c;const h=a.target;if(c=Di(h)?{documents:Im(o,h)}:{query:wm(o,h).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=dl(o,a.resumeToken);const d=Ni(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=es(o,a.snapshotVersion.toTimestamp());const d=Ni(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,t);const r=Rm(this.serializer,t);r&&(e.labels=r),this.k_(e)}Y_(t){const e={};e.database=Mi(this.serializer),e.removeTarget=t,this.k_(e)}}class pg extends Al{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return X(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){X(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Tm(t.writeResults,t.commitTime),r=Kt(t.commitTime);return this.listener.ta(r,e)}na(){const t={};t.database=Mi(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>vm(this.serializer,r)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{}class gg extends mg{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,Oi(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(P.UNKNOWN,o.toString())}))}Jo(t,e,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(t,Oi(e,r),s,a,c,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(P.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class _g{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ue(e),this._a=!1):N("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="RemoteStore";class yg{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Qe(this)&&(N(ze,"Restarting streams for network reachability change."),await(async function(h){const d=U(h);d.Ia.add(4),await cr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Ts(d)})(this))}))})),this.Aa=new _g(r,s)}}async function Ts(n){if(Qe(n))for(const t of n.da)await t(!0)}async function cr(n){for(const t of n.da)await t(!1)}function Rl(n,t){const e=U(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Eo(e)?yo(e):vn(e).x_()&&_o(e,t))}function go(n,t){const e=U(n),r=vn(e);e.Ta.delete(t),r.x_()&&bl(e,t),e.Ta.size===0&&(r.x_()?r.B_():Qe(e)&&e.Aa.set("Unknown"))}function _o(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}vn(n).H_(t)}function bl(n,t){n.Ra.$e(t),vn(n).Y_(t)}function yo(n){n.Ra=new dm({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),vn(n).start(),n.Aa.aa()}function Eo(n){return Qe(n)&&!vn(n).M_()&&n.Ta.size>0}function Qe(n){return U(n).Ia.size===0}function Sl(n){n.Ra=void 0}async function Eg(n){n.Aa.set("Online")}async function vg(n){n.Ta.forEach(((t,e)=>{_o(n,t)}))}async function Tg(n,t){Sl(n),Eo(n)?(n.Aa.la(t),yo(n)):n.Aa.set("Unknown")}async function Ig(n,t,e){if(n.Aa.set("Online"),t instanceof hl&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const c of o.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,t)}catch(r){N(ze,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await rs(n,r)}else if(t instanceof $r?n.Ra.Ye(t):t instanceof ll?n.Ra.it(t):n.Ra.et(t),!e.isEqual(L.min()))try{const r=await Il(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const c=o.Ra.Pt(a);return c.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ta.get(d);p&&o.Ta.set(d,p.withResumeToken(h.resumeToken,a))}})),c.targetMismatches.forEach(((h,d)=>{const p=o.Ta.get(h);if(!p)return;o.Ta.set(h,p.withResumeToken(yt.EMPTY_BYTE_STRING,p.snapshotVersion)),bl(o,h);const y=new _e(p.target,h,d,p.sequenceNumber);_o(o,y)})),o.remoteSyncer.applyRemoteEvent(c)})(n,e)}catch(r){N(ze,"Failed to raise snapshot:",r),await rs(n,r)}}async function rs(n,t,e){if(!En(t))throw t;n.Ia.add(1),await cr(n),n.Aa.set("Offline"),e||(e=()=>Il(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{N(ze,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await Ts(n)}))}function Cl(n,t){return t().catch((e=>rs(n,e,t)))}async function Is(n){const t=U(n),e=Ce(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:eo;for(;wg(t);)try{const s=await sg(t.localStore,r);if(s===null){t.Pa.length===0&&e.B_();break}r=s.batchId,Ag(t,s)}catch(s){await rs(t,s)}Pl(t)&&Vl(t)}function wg(n){return Qe(n)&&n.Pa.length<10}function Ag(n,t){n.Pa.push(t);const e=Ce(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function Pl(n){return Qe(n)&&!Ce(n).M_()&&n.Pa.length>0}function Vl(n){Ce(n).start()}async function Rg(n){Ce(n).na()}async function bg(n){const t=Ce(n);for(const e of n.Pa)t.X_(e.mutations)}async function Sg(n,t,e){const r=n.Pa.shift(),s=uo.from(r,t,e);await Cl(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Is(n)}async function Cg(n,t){t&&Ce(n).Z_&&await(async function(r,s){if((function(a){return lm(a)&&a!==P.ABORTED})(s.code)){const o=r.Pa.shift();Ce(r).N_(),await Cl(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Is(r)}})(n,t),Pl(n)&&Vl(n)}async function Lu(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),N(ze,"RemoteStore received new credentials");const r=Qe(e);e.Ia.add(3),await cr(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Ts(e)}async function Pg(n,t){const e=U(n);t?(e.Ia.delete(2),await Ts(e)):t||(e.Ia.add(2),await cr(e),e.Aa.set("Unknown"))}function vn(n){return n.Va||(n.Va=(function(e,r,s){const o=U(e);return o.ia(),new fg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Eg.bind(null,n),e_:vg.bind(null,n),n_:Tg.bind(null,n),J_:Ig.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),Eo(n)?yo(n):n.Aa.set("Unknown")):(await n.Va.stop(),Sl(n))}))),n.Va}function Ce(n){return n.ma||(n.ma=(function(e,r,s){const o=U(e);return o.ia(),new pg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Rg.bind(null,n),n_:Cg.bind(null,n),ea:bg.bind(null,n),ta:Sg.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await Is(n)):(await n.ma.stop(),n.Pa.length>0&&(N(ze,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new vo(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function To(n,t){if(ue("AsyncQueue",`${t}: ${n}`),En(n))return new x(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{static emptySet(t){return new sn(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=Un(),this.sortedSet=new st(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof sn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new sn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this.fa=new st(M.comparator)}track(t){const e=t.doc.key,r=this.fa.get(e);r?t.type!==0&&r.type===3?this.fa=this.fa.insert(e,t):t.type===3&&r.type!==1?this.fa=this.fa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.fa=this.fa.remove(e):t.type===1&&r.type===2?this.fa=this.fa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):F(63341,{At:t,ga:r}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,r)=>{t.push(r)})),t}}class gn{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((c=>{a.push({type:0,doc:c})})),new gn(t,e,sn.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ps(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class Dg{constructor(){this.queries=Bu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const s=U(e),o=s.queries;s.queries=Bu(),o.forEach(((a,c)=>{for(const h of c.wa)h.onError(r)}))})(this,new x(P.ABORTED,"Firestore shutting down"))}}function Bu(){return new Ke((n=>Xc(n)),ps)}async function kg(n,t){const e=U(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.ba()&&(r=2):(o=new Vg,r=t.ba()?0:1);try{switch(r){case 0:o.ya=await e.onListen(s,!0);break;case 1:o.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=To(a,`Initialization of query '${en(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&Io(e)}async function Ng(n,t){const e=U(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.wa.indexOf(t);a>=0&&(o.wa.splice(a,1),o.wa.length===0?s=t.ba()?0:1:!o.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Og(n,t){const e=U(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&Io(e)}function xg(n,t,e){const r=U(n),s=r.queries.get(t);if(s)for(const o of s.wa)o.onError(e);r.queries.delete(t)}function Io(n){n.Da.forEach((t=>{t.next()}))}var Ui,ju;(ju=Ui||(Ui={})).Fa="default",ju.Cache="cache";class Mg{constructor(t,e,r){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new gn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const r=e!=="Offline";return(!this.options.ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=gn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==Ui.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t){this.key=t}}class kl{constructor(t){this.key=t}}class Fg{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=z(),this.mutatedKeys=z(),this.Xa=Yc(t),this.eu=new sn(this.Xa)}get tu(){return this.Ha}nu(t,e){const r=e?e.ru:new Uu,s=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((p,y)=>{const T=s.get(p),R=ms(this.query,y)?y:null,D=!!T&&this.mutatedKeys.has(T.key),O=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;T&&R?T.data.isEqual(R.data)?D!==O&&(r.track({type:3,doc:R}),V=!0):this.iu(T,R)||(r.track({type:2,doc:R}),V=!0,(h&&this.Xa(R,h)>0||d&&this.Xa(R,d)<0)&&(c=!0)):!T&&R?(r.track({type:0,doc:R}),V=!0):T&&!R&&(r.track({type:1,doc:T}),V=!0,(h||d)&&(c=!0)),V&&(R?(a=a.add(R),o=O?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:c,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort(((p,y)=>(function(R,D){const O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{At:V})}};return O(R)-O(D)})(p.type,y.type)||this.Xa(p.doc,y.doc))),this.su(r),s=s!=null&&s;const c=e&&!s?this.ou():[],h=this.Za.size===0&&this.current&&!s?1:0,d=h!==this.Ya;return this.Ya=h,a.length!==0||d?{snapshot:new gn(this.query,t.eu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Uu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=z(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const e=[];return t.forEach((r=>{this.Za.has(r)||e.push(new kl(r))})),this.Za.forEach((r=>{t.has(r)||e.push(new Dl(r))})),e}uu(t){this.Ha=t.qs,this.Za=z();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return gn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const wo="SyncEngine";class Lg{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ug{constructor(t){this.key=t,this.lu=!1}}class Bg{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Ke((c=>Xc(c)),ps),this.Tu=new Map,this.Iu=new Set,this.du=new st(M.comparator),this.Eu=new Map,this.Au=new ho,this.Ru={},this.Vu=new Map,this.mu=mn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function jg(n,t,e=!0){const r=Ll(n);let s;const o=r.Pu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.cu()):s=await Nl(r,t,e,!0),s}async function $g(n,t){const e=Ll(n);await Nl(e,t,!0,!1)}async function Nl(n,t,e,r){const s=await ig(n.localStore,Gt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await qg(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Rl(n.remoteStore,s),c}async function qg(n,t,e,r,s){n.gu=(y,T,R)=>(async function(O,V,j,B){let q=V.view.nu(j);q.Ds&&(q=await Nu(O.localStore,V.query,!1).then((({documents:I})=>V.view.nu(I,q))));const nt=B&&B.targetChanges.get(V.targetId),Lt=B&&B.targetMismatches.get(V.targetId)!=null,ut=V.view.applyChanges(q,O.isPrimaryClient,nt,Lt);return qu(O,V.targetId,ut._u),ut.snapshot})(n,y,T,R);const o=await Nu(n.localStore,t,!0),a=new Fg(t,o.qs),c=a.nu(o.documents),h=ur.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);qu(n,e,d._u);const p=new Lg(t,e,a);return n.Pu.set(t,p),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),d.snapshot}async function zg(n,t,e){const r=U(n),s=r.Pu.get(t),o=r.Tu.get(s.targetId);if(o.length>1)return r.Tu.set(s.targetId,o.filter((a=>!ps(a,t)))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fi(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&go(r.remoteStore,s.targetId),Bi(r,s.targetId)})).catch(yn)):(Bi(r,s.targetId),await Fi(r.localStore,s.targetId,!0))}async function Hg(n,t){const e=U(n),r=e.Pu.get(t),s=e.Tu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),go(e.remoteStore,r.targetId))}async function Gg(n,t,e){const r=Zg(n);try{const s=await(function(a,c){const h=U(a),d=et.now(),p=c.reduce(((R,D)=>R.add(D.key)),z());let y,T;return h.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let D=ce(),O=z();return h.Os.getEntries(R,p).next((V=>{D=V,D.forEach(((j,B)=>{B.isValidDocument()||(O=O.add(j))}))})).next((()=>h.localDocuments.getOverlayedDocuments(R,D))).next((V=>{y=V;const j=[];for(const B of c){const q=im(B,y.get(B.key).overlayedDocument);q!=null&&j.push(new We(B.key,q,qc(q.value.mapValue),re.exists(!0)))}return h.mutationQueue.addMutationBatch(R,d,j,c)})).next((V=>{T=V;const j=V.applyToLocalDocumentSet(y,O);return h.documentOverlayCache.saveOverlays(R,V.batchId,j)}))})).then((()=>({batchId:T.batchId,changes:Zc(y)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,h){let d=a.Ru[a.currentUser.toKey()];d||(d=new st($)),d=d.insert(c,h),a.Ru[a.currentUser.toKey()]=d})(r,s.batchId,e),await lr(r,s.changes),await Is(r.remoteStore)}catch(s){const o=To(s,"Failed to persist write");e.reject(o)}}async function Ol(n,t){const e=U(n);try{const r=await ng(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Eu.get(o);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?X(a.lu,14607):s.removedDocuments.size>0&&(X(a.lu,42227),a.lu=!1))})),await lr(e,r,t)}catch(r){await yn(r)}}function $u(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Pu.forEach(((o,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const h=U(a);h.onlineState=c;let d=!1;h.queries.forEach(((p,y)=>{for(const T of y.wa)T.va(c)&&(d=!0)})),d&&Io(h)})(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Kg(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new st(M.comparator);a=a.insert(o,Rt.newNoDocument(o,L.min()));const c=z().add(o),h=new Es(L.min(),new Map,new st($),a,c);await Ol(r,h),r.du=r.du.remove(o),r.Eu.delete(t),Ao(r)}else await Fi(r.localStore,t,!1).then((()=>Bi(r,t,e))).catch(yn)}async function Wg(n,t){const e=U(n),r=t.batch.batchId;try{const s=await eg(e.localStore,t);Ml(e,r,null),xl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await lr(e,s)}catch(s){await yn(s)}}async function Qg(n,t,e){const r=U(n);try{const s=await(function(a,c){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return h.mutationQueue.lookupMutationBatch(d,c).next((y=>(X(y!==null,37113),p=y.keys(),h.mutationQueue.removeMutationBatch(d,y)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>h.localDocuments.getDocuments(d,p)))}))})(r.localStore,t);Ml(r,t,e),xl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await lr(r,s)}catch(s){await yn(s)}}function xl(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function Ml(n,t,e){const r=U(n);let s=r.Ru[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}function Bi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Tu.get(t))n.Pu.delete(r),e&&n.hu.pu(r,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((r=>{n.Au.containsKey(r)||Fl(n,r)}))}function Fl(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(go(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),Ao(n))}function qu(n,t,e){for(const r of e)r instanceof Dl?(n.Au.addReference(r.key,t),Xg(n,r)):r instanceof kl?(N(wo,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,t),n.Au.containsKey(r.key)||Fl(n,r.key)):F(19791,{yu:r})}function Xg(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Iu.has(r)||(N(wo,"New document in limbo: "+e),n.Iu.add(r),Ao(n))}function Ao(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new M(rt.fromString(t)),r=n.mu.next();n.Eu.set(r,new Ug(e)),n.du=n.du.insert(e,r),Rl(n.remoteStore,new _e(Gt(oo(e.path)),r,"TargetPurposeLimboResolution",ls.ue))}}async function lr(n,t,e){const r=U(n),s=[],o=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,h)=>{a.push(r.gu(h,t,e).then((d=>{var p;if((d||e)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){s.push(d);const y=po.Es(h.targetId,d);o.push(y)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(h,d){const p=U(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>S.forEach(d,(T=>S.forEach(T.Is,(R=>p.persistence.referenceDelegate.addReference(y,T.targetId,R))).next((()=>S.forEach(T.ds,(R=>p.persistence.referenceDelegate.removeReference(y,T.targetId,R)))))))))}catch(y){if(!En(y))throw y;N(mo,"Failed to update sequence numbers: "+y)}for(const y of d){const T=y.targetId;if(!y.fromCache){const R=p.Fs.get(T),D=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(D);p.Fs=p.Fs.insert(T,O)}}})(r.localStore,o))}async function Yg(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){N(wo,"User change. New user:",t.toKey());const r=await Tl(e.localStore,t);e.currentUser=t,(function(o,a){o.Vu.forEach((c=>{c.forEach((h=>{h.reject(new x(P.CANCELLED,a))}))})),o.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await lr(e,r.Bs)}}function Jg(n,t){const e=U(n),r=e.Eu.get(t);if(r&&r.lu)return z().add(r.key);{let s=z();const o=e.Tu.get(t);if(!o)return s;for(const a of o){const c=e.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Ll(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ol.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Kg.bind(null,t),t.hu.J_=Og.bind(null,t.eventManager),t.hu.pu=xg.bind(null,t.eventManager),t}function Zg(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Wg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Qg.bind(null,t),t}class ss{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=vs(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return tg(this.persistence,new Ym,t.initialUser,this.serializer)}Du(t){return new vl(fo.Vi,this.serializer)}bu(t){return new ag}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ss.provider={build:()=>new ss};class t_ extends ss{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){X(this.persistence.referenceDelegate instanceof ns,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Mm(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new vl((r=>ns.Vi(r,e)),this.serializer)}}class ji{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$u(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yg.bind(null,this.syncEngine),await Pg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Dg})()}createDatastore(t){const e=vs(t.databaseInfo.databaseId),r=(function(o){return new dg(o)})(t.databaseInfo);return(function(o,a,c,h){return new gg(o,a,c,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,c){return new yg(r,s,o,a,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>$u(this.syncEngine,e,0)),(function(){return Mu.C()?new Mu:new ug})())}createSyncEngine(t,e){return(function(s,o,a,c,h,d,p){const y=new Bg(s,o,a,c,h,d);return p&&(y.fu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const o=U(s);N(ze,"RemoteStore shutting down."),o.Ia.add(5),await cr(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ji.provider={build:()=>new ji};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):ue("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="FirestoreClient";class n_{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=At.UNAUTHENTICATED,this.clientId=Zi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{N(Pe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(N(Pe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=To(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function ai(n,t){n.asyncQueue.verifyOperationInProgress(),N(Pe,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Tl(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>{we("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{N("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{we("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function zu(n,t){n.asyncQueue.verifyOperationInProgress();const e=await r_(n);N(Pe,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Lu(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Lu(t.remoteStore,s))),n._onlineComponents=t}async function r_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(Pe,"Using user provided OfflineComponentProvider");try{await ai(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;we("Error using user provided cache. Falling back to memory cache: "+e),await ai(n,new ss)}}else N(Pe,"Using default OfflineComponentProvider"),await ai(n,new t_(void 0));return n._offlineComponents}async function Ul(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(Pe,"Using user provided OnlineComponentProvider"),await zu(n,n._uninitializedComponentsProvider._online)):(N(Pe,"Using default OnlineComponentProvider"),await zu(n,new ji))),n._onlineComponents}function s_(n){return Ul(n).then((t=>t.syncEngine))}async function i_(n){const t=await Ul(n),e=t.eventManager;return e.onListen=jg.bind(null,t.syncEngine),e.onUnlisten=zg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=$g.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Hg.bind(null,t.syncEngine),e}function o_(n,t,e={}){const r=new Te;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,h,d){const p=new e_({next:T=>{p.Ou(),a.enqueueAndForget((()=>Ng(o,y)));const R=T.docs.has(c);!R&&T.fromCache?d.reject(new x(P.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&h&&h.source==="server"?d.reject(new x(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),y=new Mg(oo(c.path),p,{includeMetadataChanges:!0,ka:!0});return kg(o,y)})(await i_(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="firestore.googleapis.com",Gu=!0;class Ku{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jl,this.ssl=Gu}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Gu;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=El;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Om)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}_p("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ro{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ku({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ku(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new ap;switch(r.type){case"firstParty":return new hp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Hu.get(e);r&&(N("ComponentProvider","Removing Datastore"),Hu.delete(e),r.terminate())})(this),Promise.resolve()}}function a_(n,t,e,r={}){var s;n=Yn(n,Ro);const o=Ki(t),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(Od(`https://${h}`),Ld("Firestore",!0)),a.host!==jl&&a.host!==h&&we("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!ln(d,c)&&(n._setSettings(d),r.mockUserToken)){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=At.MOCK_USER;else{p=xd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new x(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new At(T)}n._authCredentials=new up(new Dc(p,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new bo(this.firestore,t,this._query)}}class pt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pt(this.firestore,t,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(ar(e,pt._jsonSchema))return new pt(t,r||null,new M(rt.fromString(e.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:lt("string",pt._jsonSchemaVersion),referencePath:lt("string")};class rr extends bo{constructor(t,e,r){super(t,e,oo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pt(this.firestore,null,new M(t))}withConverter(t){return new rr(this.firestore,t,this._path)}}function $l(n,t,...e){if(n=ie(n),arguments.length===1&&(t=Zi.newId()),gp("doc","path",t),n instanceof Ro){const r=rt.fromString(t,...e);return au(r),new pt(n,null,new M(r))}{if(!(n instanceof pt||n instanceof rr))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(rt.fromString(t,...e));return au(r),new pt(n.firestore,n instanceof rr?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="AsyncQueue";class Qu{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new wl(this,"async_queue_retry"),this.oc=()=>{const r=oi();r&&N(Wu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=oi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=oi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new Te;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!En(t))throw t;N(Wu,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((r=>{throw this.tc=r,this.nc=!1,ue("INTERNAL UNHANDLED ERROR: ",Xu(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=vo.createAndSchedule(this,t,e,r,(o=>this.lc(o)));return this.ec.push(s),s}ac(){this.tc&&F(47125,{hc:Xu(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function Xu(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class So extends Ro{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Qu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qu(t),this._firestoreClient=void 0,await t}}}function u_(n,t){const e=typeof n=="object"?n:Tc(),r=typeof n=="string"?n:Qr,s=or(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=kd("firestore");o&&a_(s,...o)}return s}function ql(n){if(n._terminated)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||c_(n),n._firestoreClient}function c_(n){var t,e,r;const s=n._freezeSettings(),o=(function(c,h,d,p){return new Cp(c,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Bl(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new n_(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Bt(yt.fromBase64String(t))}catch(e){throw new x(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Bt(yt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(ar(t,Bt._jsonSchema))return Bt.fromBase64String(t.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:lt("string",Bt._jsonSchemaVersion),bytes:lt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wt._jsonSchemaVersion}}static fromJSON(t){if(ar(t,Wt._jsonSchema))return new Wt(t.latitude,t.longitude)}}Wt._jsonSchemaVersion="firestore/geoPoint/1.0",Wt._jsonSchema={type:lt("string",Wt._jsonSchemaVersion),latitude:lt("number"),longitude:lt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(ar(t,Qt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Qt(t.vectorValues);throw new x(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qt._jsonSchemaVersion="firestore/vectorValue/1.0",Qt._jsonSchema={type:lt("string",Qt._jsonSchemaVersion),vectorValues:lt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=/^__.*__$/;class zl{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new We(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Hl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ec:n})}}class Rs{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new Rs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return is(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(Hl(this.Ec)&&l_.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class h_{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||vs(t)}Dc(t,e,r,s=!1){return new Rs({Ec:t,methodName:e,bc:r,path:_t.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function d_(n){const t=n._freezeSettings(),e=vs(n._databaseId);return new h_(n._databaseId,!!t.ignoreUndefinedProperties,e)}class bs extends As{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof bs}}function f_(n,t,e){return new Rs({Ec:3,bc:t.settings.bc,methodName:n._methodName,mc:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Co extends As{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=f_(this,t,!0),r=this.vc.map((o=>hr(o,e))),s=new pn(r);return new em(t.path,s)}isEqual(t){return t instanceof Co&&ln(this.vc,t.vc)}}function p_(n,t,e,r){const s=n.Dc(1,t,e);Kl("Data must be an object, but it was:",s,r);const o=[],a=Mt.empty();De(r,((h,d)=>{const p=Po(t,h,e);d=ie(d);const y=s.gc(p);if(d instanceof bs)o.push(p);else{const T=hr(d,y);T!=null&&(o.push(p),a.set(p,T))}}));const c=new $t(o);return new zl(a,c,s.fieldTransforms)}function m_(n,t,e,r,s,o){const a=n.Dc(1,t,e),c=[Yu(t,r,e)],h=[s];if(o.length%2!=0)throw new x(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<o.length;T+=2)c.push(Yu(t,o[T])),h.push(o[T+1]);const d=[],p=Mt.empty();for(let T=c.length-1;T>=0;--T)if(!y_(d,c[T])){const R=c[T];let D=h[T];D=ie(D);const O=a.gc(R);if(D instanceof bs)d.push(R);else{const V=hr(D,O);V!=null&&(d.push(R),p.set(R,V))}}const y=new $t(d);return new zl(p,y,a.fieldTransforms)}function hr(n,t){if(Gl(n=ie(n)))return Kl("Unsupported field value:",t,n),g_(n,t);if(n instanceof As)return(function(r,s){if(!Hl(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const c of r){let h=hr(c,s.yc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Jp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=et.fromDate(r);return{timestampValue:es(s.serializer,o)}}if(r instanceof et){const o=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:es(s.serializer,o)}}if(r instanceof Wt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bt)return{bytesValue:dl(s.serializer,r._byteString)};if(r instanceof pt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:lo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qt)return(function(a,c){return{mapValue:{fields:{[jc]:{stringValue:$c},[Xr]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return ao(c.serializer,d)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${to(r)}`)})(n,t)}function g_(n,t){const e={};return xc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):De(n,((r,s)=>{const o=hr(s,t.Vc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Gl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof et||n instanceof Wt||n instanceof Bt||n instanceof pt||n instanceof As||n instanceof Qt)}function Kl(n,t,e){if(!Gl(e)||!Nc(e)){const r=to(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}function Yu(n,t,e){if((t=ie(t))instanceof ws)return t._internalPath;if(typeof t=="string")return Po(n,t);throw is("Field path arguments must be of type string or ",n,!1,void 0,e)}const __=new RegExp("[~\\*/\\[\\]]");function Po(n,t,e){if(t.search(__)>=0)throw is(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ws(...t.split("."))._internalPath}catch{throw is(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function is(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new x(P.INVALID_ARGUMENT,c+n+h)}function y_(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new E_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ql("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class E_ extends Wl{data(){return super.data()}}function Ql(n,t){return typeof t=="string"?Po(n,t):t instanceof ws?t._internalPath:t._delegate._internalPath}class v_{convertValue(t,e="none"){switch(Se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(be(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return De(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[Xr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>at(a.doubleValue)));return new Qt(o)}convertGeoPoint(t){return new Wt(at(t.latitude),at(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ds(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Zn(t));default:return null}}convertTimestamp(t){const e=Re(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=rt.fromString(t);X(yl(r),9688,{name:t});const s=new tr(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||ue(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class jn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $e extends Wl{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ql("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=$e._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}$e._jsonSchemaVersion="firestore/documentSnapshot/1.0",$e._jsonSchema={type:lt("string",$e._jsonSchemaVersion),bundleSource:lt("string","DocumentSnapshot"),bundleName:lt("string"),bundle:lt("string")};class qr extends $e{data(t={}){return super.data(t)}}class Wn{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new jn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new qr(this._firestore,this._userDataWriter,r.key,r,new jn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const h=new qr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new jn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const h=new qr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new jn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:T_(c.type),doc:h,oldIndex:d,newIndex:p}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Wn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Zi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function T_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n){n=Yn(n,pt);const t=Yn(n.firestore,So);return o_(ql(t),n._key).then((e=>b_(t,n,e)))}Wn._jsonSchemaVersion="firestore/querySnapshot/1.0",Wn._jsonSchema={type:lt("string",Wn._jsonSchemaVersion),bundleSource:lt("string","QuerySnapshot"),bundleName:lt("string"),bundle:lt("string")};class w_ extends v_{constructor(t){super(),this.firestore=t}convertBytes(t){return new Bt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new pt(this.firestore,null,e)}}function A_(n,t,e,...r){n=Yn(n,pt);const s=Yn(n.firestore,So),o=d_(s);let a;return a=typeof(t=ie(t))=="string"||t instanceof ws?m_(o,"updateDoc",n._key,t,e,r):p_(o,"updateDoc",n._key,t),R_(s,[a.toMutation(n._key,re.exists(!0))])}function R_(n,t){return(function(r,s){const o=new Te;return r.asyncQueue.enqueueAndForget((async()=>Gg(await s_(r),s,o))),o.promise})(ql(n),t)}function b_(n,t,e){const r=e.docs.get(t._key),s=new w_(n);return new $e(n,s,t._key,r,new jn(e.hasPendingWrites,e.fromCache),t.converter)}function S_(...n){return new Co("arrayUnion",n)}(function(t,e=!0){(function(s){_n=s})(Wf),Ie(new oe("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new So(new cp(r.getProvider("auth-internal")),new dp(a,r.getProvider("app-check-internal")),(function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tr(d.options.projectId,p)})(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),Ht(nu,ru,t),Ht(nu,ru,"esm2017")})();const Xl="@firebase/installations",Vo="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=1e4,Jl=`w:${Vo}`,Zl="FIS_v2",C_="https://firebaseinstallations.googleapis.com/v1",P_=3600*1e3,V_="installations",D_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},He=new cs(V_,D_,k_);function th(n){return n instanceof Ve&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh({projectId:n}){return`${C_}/projects/${n}/installations`}function nh(n){return{token:n.token,requestStatus:2,expiresIn:O_(n.expiresIn),creationTime:Date.now()}}async function rh(n,t){const r=(await t.json()).error;return He.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function sh({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function N_(n,{refreshToken:t}){const e=sh(n);return e.append("Authorization",x_(t)),e}async function ih(n){const t=await n();return t.status>=500&&t.status<600?n():t}function O_(n){return Number(n.replace("s","000"))}function x_(n){return`${Zl} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M_({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=eh(n),s=sh(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:Zl,appId:n.appId,sdkVersion:Jl},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await ih(()=>fetch(r,c));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:nh(d.authToken)}}else throw await rh("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=/^[cdef][\w-]{21}$/,$i="";function U_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=B_(n);return L_.test(e)?e:$i}catch{return $i}}function B_(n){return F_(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new Map;function uh(n,t){const e=Ss(n);ch(e,t),j_(e,t)}function ch(n,t){const e=ah.get(n);if(e)for(const r of e)r(t)}function j_(n,t){const e=$_();e&&e.postMessage({key:n,fid:t}),q_()}let Le=null;function $_(){return!Le&&"BroadcastChannel"in self&&(Le=new BroadcastChannel("[Firebase] FID Change"),Le.onmessage=n=>{ch(n.data.key,n.data.fid)}),Le}function q_(){ah.size===0&&Le&&(Le.close(),Le=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="firebase-installations-database",H_=1,Ge="firebase-installations-store";let ui=null;function Do(){return ui||(ui=Ec(z_,H_,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Ge)}}})),ui}async function os(n,t){const e=Ss(n),s=(await Do()).transaction(Ge,"readwrite"),o=s.objectStore(Ge),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&uh(n,t.fid),t}async function lh(n){const t=Ss(n),r=(await Do()).transaction(Ge,"readwrite");await r.objectStore(Ge).delete(t),await r.done}async function Cs(n,t){const e=Ss(n),s=(await Do()).transaction(Ge,"readwrite"),o=s.objectStore(Ge),a=await o.get(e),c=t(a);return c===void 0?await o.delete(e):await o.put(c,e),await s.done,c&&(!a||a.fid!==c.fid)&&uh(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(n){let t;const e=await Cs(n.appConfig,r=>{const s=G_(r),o=K_(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===$i?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function G_(n){const t=n||{fid:U_(),registrationStatus:0};return hh(t)}function K_(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(He.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=W_(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Q_(n)}:{installationEntry:t}}async function W_(n,t){try{const e=await M_(n,t);return os(n.appConfig,e)}catch(e){throw th(e)&&e.customData.serverCode===409?await lh(n.appConfig):await os(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Q_(n){let t=await Ju(n.appConfig);for(;t.registrationStatus===1;)await oh(100),t=await Ju(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await ko(n);return r||e}return t}function Ju(n){return Cs(n,t=>{if(!t)throw He.create("installation-not-found");return hh(t)})}function hh(n){return X_(n)?{fid:n.fid,registrationStatus:0}:n}function X_(n){return n.registrationStatus===1&&n.registrationTime+Yl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_({appConfig:n,heartbeatServiceProvider:t},e){const r=J_(n,e),s=N_(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Jl,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await ih(()=>fetch(r,c));if(h.ok){const d=await h.json();return nh(d)}else throw await rh("Generate Auth Token",h)}function J_(n,{fid:t}){return`${eh(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(n,t=!1){let e;const r=await Cs(n.appConfig,o=>{if(!dh(o))throw He.create("not-registered");const a=o.authToken;if(!t&&ey(a))return o;if(a.requestStatus===1)return e=Z_(n,t),o;{if(!navigator.onLine)throw He.create("app-offline");const c=ry(o);return e=ty(n,c),c}});return e?await e:r.authToken}async function Z_(n,t){let e=await Zu(n.appConfig);for(;e.authToken.requestStatus===1;)await oh(100),e=await Zu(n.appConfig);const r=e.authToken;return r.requestStatus===0?No(n,t):r}function Zu(n){return Cs(n,t=>{if(!dh(t))throw He.create("not-registered");const e=t.authToken;return sy(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ty(n,t){try{const e=await Y_(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await os(n.appConfig,r),e}catch(e){if(th(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await lh(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await os(n.appConfig,r)}throw e}}function dh(n){return n!==void 0&&n.registrationStatus===2}function ey(n){return n.requestStatus===2&&!ny(n)}function ny(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+P_}function ry(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function sy(n){return n.requestStatus===1&&n.requestTime+Yl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(n){const t=n,{installationEntry:e,registrationPromise:r}=await ko(t);return r?r.catch(console.error):No(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy(n,t=!1){const e=n;return await ay(e),(await No(e,t)).token}async function ay(n){const{registrationPromise:t}=await ko(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(n){if(!n||!n.options)throw ci("App Configuration");if(!n.name)throw ci("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw ci(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ci(n){return He.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="installations",cy="installations-internal",ly=n=>{const t=n.getProvider("app").getImmediate(),e=uy(t),r=or(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},hy=n=>{const t=n.getProvider("app").getImmediate(),e=or(t,fh).getImmediate();return{getId:()=>iy(e),getToken:s=>oy(e,s)}};function dy(){Ie(new oe(fh,ly,"PUBLIC")),Ie(new oe(cy,hy,"PRIVATE"))}dy();Ht(Xl,Vo);Ht(Xl,Vo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="analytics",fy="firebase_id",py="origin",my=60*1e3,gy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Oo="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Xi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ft=new cs("analytics","Analytics",_y);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(n){if(!n.startsWith(Oo)){const t=Ft.create("invalid-gtag-resource",{gtagURL:n});return Ot.warn(t.message),""}return n}function ph(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Ey(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function vy(n,t){const e=Ey("firebase-js-sdk-policy",{createScriptURL:yy}),r=document.createElement("script"),s=`${Oo}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Ty(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Iy(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await ph(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(c){Ot.error(c)}n("config",s,o)}async function wy(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await ph(e);for(const h of a){const d=c.find(y=>y.measurementId===h),p=d&&t[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){Ot.error(o)}}function Ay(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[c,h]=a;await wy(n,t,e,c,h)}else if(o==="config"){const[c,h]=a;await Iy(n,t,e,r,c,h)}else if(o==="consent"){const[c,h]=a;n("consent",c,h)}else if(o==="get"){const[c,h,d]=a;n("get",c,h,d)}else if(o==="set"){const[c]=a;n("set",c)}else n(o,...a)}catch(c){Ot.error(c)}}return s}function Ry(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Ay(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function by(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Oo)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=30,Cy=1e3;class Py{constructor(t={},e=Cy){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const mh=new Py;function Vy(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Dy(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:Vy(r)},o=gy.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let c="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(c=h.error.message)}catch{}throw Ft.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function ky(n,t=mh,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw Ft.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Ft.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new xy;return setTimeout(async()=>{c.abort()},my),gh({appId:r,apiKey:s,measurementId:o},a,c,t)}async function gh(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=mh){var o;const{appId:a,measurementId:c}=n;try{await Ny(r,t)}catch(h){if(c)return Ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw h}try{const h=await Dy(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!Oy(d)){if(s.deleteThrottleMetadata(a),c)return Ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw h}const p=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ga(e,s.intervalMillis,Sy):Ga(e,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+p,backoffCount:e+1};return s.setThrottleMetadata(a,y),Ot.debug(`Calling attemptFetch again in ${p} millis`),gh(n,y,r,s)}}function Ny(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(Ft.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Oy(n){if(!(n instanceof Ve)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class xy{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function My(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(){if(Wi())try{await Qi()}catch(n){return Ot.warn(Ft.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ot.warn(Ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ly(n,t,e,r,s,o,a){var c;const h=ky(n);h.then(R=>{e[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&Ot.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>Ot.error(R)),t.push(h);const d=Fy().then(R=>{if(R)return r.getId()}),[p,y]=await Promise.all([h,d]);by(o)||vy(o,p.measurementId),s("js",new Date);const T=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return T[py]="firebase",T.update=!0,y!=null&&(T[fy]=y),s("config",p.measurementId,T),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(t){this.app=t}_delete(){return delete Qn[this.app.options.appId],Promise.resolve()}}let Qn={},tc=[];const ec={};let li="dataLayer",By="gtag",nc,_h,rc=!1;function jy(){const n=[];if(mc()&&n.push("This is a browser extension environment."),gc()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=Ft.create("invalid-analytics-context",{errorInfo:t});Ot.warn(e.message)}}function $y(n,t,e){jy();const r=n.options.appId;if(!r)throw Ft.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ft.create("no-api-key");if(Qn[r]!=null)throw Ft.create("already-exists",{id:r});if(!rc){Ty(li);const{wrappedGtag:o,gtagCore:a}=Ry(Qn,tc,ec,li,By);_h=o,nc=a,rc=!0}return Qn[r]=Ly(n,tc,ec,t,nc,li,e),new Uy(n)}function qy(n=Tc()){n=ie(n);const t=or(n,as);return t.isInitialized()?t.getImmediate():zy(n)}function zy(n,t={}){const e=or(n,as);if(e.isInitialized()){const s=e.getImmediate();if(ln(t,e.getOptions()))return s;throw Ft.create("already-initialized")}return e.initialize({options:t})}async function Hy(){if(mc()||!gc()||!Wi())return!1;try{return await Qi()}catch{return!1}}function Gy(n,t,e,r){n=ie(n),My(_h,Qn[n.app.options.appId],t,e,r).catch(s=>Ot.error(s))}const sc="@firebase/analytics",ic="0.10.17";function Ky(){Ie(new oe(as,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return $y(r,s,e)},"PUBLIC")),Ie(new oe("analytics-internal",n,"PRIVATE")),Ht(sc,ic),Ht(sc,ic,"esm2017");function n(t){try{const e=t.getProvider(as).getImmediate();return{logEvent:(r,s,o)=>Gy(e,r,s,o)}}catch(e){throw Ft.create("interop-component-reg-failed",{reason:e})}}}Ky();const Wy={apiKey:"AIzaSyCm0mKPc_8_Tc1NzGWDbBYOpIKzBkglozs",authDomain:"portflio-a5b10.firebaseapp.com",projectId:"portflio-a5b10",storageBucket:"portflio-a5b10.firebasestorage.app",messagingSenderId:"1040313084668",appId:"1:1040313084668:web:68004bcaa079c235c58579",measurementId:"G-9ZWLDK4XN3"},yh=vc(Wy),Eh=u_(yh);Hy().then(n=>{n&&qy(yh)});const tE=()=>{const n=cc.c(1);let t;return n[0]===Symbol.for("react.memo_cache_sentinel")?(t={queryKey:["about"],queryFn:Qy},n[0]=t):t=n[0],vd(t)},eE=()=>{const n=cc.c(2),t=zi();let e;return n[0]!==t?(e={mutationFn:Xy,onSuccess:()=>{t.invalidateQueries({queryKey:["about"]})}},n[0]=t,n[1]=e):e=n[1],Td(e)};async function Qy(){const n=$l(Eh,"users","QeB0bUvT6dcEyIHqsPYbbo2Kmsg2"),t=await I_(n);if(!t.exists())throw new Error("Document not found");return t.data()}async function Xy(n){const t=$l(Eh,"users","QeB0bUvT6dcEyIHqsPYbbo2Kmsg2"),e={...n,id:Date.now().toString(),date:new Date().toISOString()};return await A_(t,{pendingRecommendations:S_(e)}),e}export{Eh as a,A_ as b,S_ as c,$l as d,eE as e,tE as u};

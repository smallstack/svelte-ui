var Overlay=function(g){"use strict";var di=Object.defineProperty;var An=g=>{throw TypeError(g)};var hi=(g,w,C)=>w in g?di(g,w,{enumerable:!0,configurable:!0,writable:!0,value:C}):g[w]=C;var F=(g,w,C)=>hi(g,typeof w!="symbol"?w+"":w,C),Tn=(g,w,C)=>w.has(g)||An("Cannot "+C);var S=(g,w,C)=>(Tn(g,w,"read from private field"),C?C.call(g):w.get(g)),ye=(g,w,C)=>w.has(g)?An("Cannot add the same private member more than once"):w instanceof WeakSet?w.add(g):w.set(g,C),we=(g,w,C,bt)=>(Tn(g,w,"write to private field"),bt?bt.call(g,C):w.set(g,C),C);var j,L;const w="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(w);const C=2,bt=2,Kt="[",Rn="]",Sn="",zt={},et=Symbol(),$e=["touchstart","touchmove","touchend"];function kn(t){console.warn("hydration_mismatch")}let nt=!1;function Et(t){nt=t}let Ot=null,Ct;function Ln(t){Ot=t,Ct=t&&t[0]}function At(t){if(t.nodeType!==8)return t;var e=t;if(e.data!==Kt)return t;for(var n=[],r=0;(e=e.nextSibling)!==null;){if(e.nodeType===8){var i=e.data;if(i===Kt)r+=1;else if(i[0]===Rn){if(r===0)return Ot=n,Ct=n[0],e;r-=1}}n.push(e)}throw kn(),zt}var ht=Array.isArray,Nn=Array.from,Tt=Object.keys,Dn=Object.isFrozen,mt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Pn=Object.prototype,Fn=Array.prototype,Mn=Object.getPrototypeOf;const J=2,xe=4,Rt=8,Bn=16,q=32,Jt=64,I=128,St=256,M=512,B=1024,Z=2048,be=4096,rt=8192,Hn=16384,T=Symbol("$state"),Vn=Symbol("$state.frozen");function Ee(t){return t===this.v}function jn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function qn(t){return!jn(t,this.v)}function In(t){throw new Error("effect_in_teardown")}function Wn(){throw new Error("effect_in_unowned_derived")}function Yn(t){throw new Error("effect_orphan")}function Un(){throw new Error("effect_update_depth_exceeded")}function Kn(){throw new Error("hydration_failed")}function zn(t){throw new Error("props_invalid_value")}function Xn(){throw new Error("state_unsafe_mutation")}function pt(t){return{f:0,v:t,reactions:null,equals:Ee,version:0}}function Zt(t){var n;const e=pt(t);return e.equals=qn,x!==null&&x.l!==null&&((n=x.l).s??(n.s=[])).push(e),e}function W(t,e){var n=t.v!==et;return n&&$!==null&&te()&&$.f&J&&Xn(),t.equals(e)||(t.v=e,t.version=Ne(),re(t,B,!0),te()&&n&&y!==null&&y.f&M&&!(y.f&q)&&(E!==null&&E.includes(t)?(N(y,B),Pt(y)):Y===null?ir([t]):Y.push(t))),e}function _t(t,e=!0,n=null,r){if(typeof t=="object"&&t!=null&&!Dn(t)&&!(Vn in t)){if(T in t){const o=t[T];if(o.t===t||o.p===t)return o.p}const i=Mn(t);if(i===Pn||i===Fn){const o=new Proxy(t,Jn);return mt(t,T,{value:{s:new Map,v:pt(0),a:ht(t),i:e,p:o,t},writable:!0,enumerable:!1}),o}}return t}function Oe(t,e=1){W(t,t.v+e)}const Jn={defineProperty(t,e,n){if(n.value){const r=t[T],i=r.s.get(e);i!==void 0&&W(i,_t(n.value,r.i,r))}return Reflect.defineProperty(t,e,n)},deleteProperty(t,e){const n=t[T],r=n.s.get(e),i=n.a,o=delete t[e];if(i&&o){const s=n.s.get("length"),l=t.length-1;s!==void 0&&s.v!==l&&W(s,l)}return r!==void 0&&W(r,et),o&&Oe(n.v),o},get(t,e,n){var o;if(e===T)return Reflect.get(t,T);const r=t[T];let i=r.s.get(e);if(i===void 0&&(!(e in t)||(o=Xt(t,e))!=null&&o.writable)&&(i=(r.i?pt:Zt)(_t(t[e],r.i,r)),r.s.set(e,i)),i!==void 0){const s=U(i);return s===et?void 0:s}return Reflect.get(t,e,n)},getOwnPropertyDescriptor(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);if(n&&"value"in n){const i=t[T].s.get(e);i&&(n.value=U(i))}return n},has(t,e){var o;if(e===T)return!0;const n=t[T],r=Reflect.has(t,e);let i=n.s.get(e);return(i!==void 0||y!==null&&(!r||(o=Xt(t,e))!=null&&o.writable))&&(i===void 0&&(i=(n.i?pt:Zt)(r?_t(t[e],n.i,n):et),n.s.set(e,i)),U(i)===et)?!1:r},set(t,e,n,r){const i=t[T];let o=i.s.get(e);o===void 0&&(ie(()=>r[e]),o=i.s.get(e)),o!==void 0&&W(o,_t(n,i.i,i));const s=i.a,l=!(e in t);if(s&&e==="length")for(let c=n;c<t.length;c+=1){const u=i.s.get(c+"");u!==void 0&&W(u,et)}if(t[e]=n,l){if(s){const c=i.s.get("length"),u=t.length;c!==void 0&&c.v!==u&&W(c,u)}Oe(i.v)}return!0},ownKeys(t){const e=t[T];return U(e.v),Reflect.ownKeys(t)}};function Zn(t){for(var e=0;e<t.length;e++)t[e]()}let kt=!1,Gt=[];function Ce(){kt=!1;const t=Gt.slice();Gt=[],Zn(t)}function Gn(t){kt||(kt=!0,queueMicrotask(Ce)),Gt.push(t)}function Qn(){kt&&Ce()}function tr(t){let e=J|B;y===null&&(e|=I);const n={deps:null,deriveds:null,equals:Ee,f:e,first:null,fn:t,last:null,reactions:null,v:null,version:0};if($!==null&&$.f&J){var r=$;r.deriveds===null?r.deriveds=[n]:r.deriveds.push(n)}return n}function Ae(t){ee(t);var e=t.deriveds;if(e!==null){t.deriveds=null;for(var n=0;n<e.length;n+=1)er(e[n])}}function Te(t){Ae(t);var e=De(t),n=(st||t.f&I)&&t.deps!==null?Z:M;N(t,n),t.equals(e)||(t.v=e,t.version=Ne(),re(t,B,!1))}function er(t){Ae(t),Dt(t,0),N(t,rt),t.first=t.last=t.deps=t.reactions=t.fn=null}function nr(t){throw new Error("lifecycle_outside_component")}const Re=0,rr=1;let Lt=Re,vt=!1,it=!1,Qt=!1;function Se(t){it=t}function ke(t){Qt=t}let G=[],ot=0,$=null;function Le(t){$=t}let y=null,E=null,O=0,Y=null;function ir(t){Y=t}let or=0,st=!1,x=null;function Ne(){return or++}function te(){return x!==null&&x.l===null}function Nt(t){var a;var e=t.f,n=(e&B)!==0;if(n)return!0;var r=(e&I)!==0,i=(e&St)!==0;if(e&Z){var o=t.deps;if(o!==null)for(var s=o.length,l,c=0;c<s;c++){var u=o[c];!n&&Nt(u)&&Te(u);var f=u.version;if(r){if(f>t.version)return!0;!st&&!((a=u==null?void 0:u.reactions)!=null&&a.includes(t))&&(u.reactions??(u.reactions=[])).push(t)}else{if(t.f&B)return!0;i&&(f>t.version&&(n=!0),l=u.reactions,l===null?u.reactions=[t]:l.includes(t)||l.push(t))}}r||N(t,M),i&&(t.f^=St)}return n}function sr(t,e,n){throw t}function De(t){const e=E,n=O,r=Y,i=$,o=st;E=null,O=0,Y=null,$=t.f&(q|Jt)?null:t,st=!it&&(t.f&I)!==0;try{let s=(0,t.fn)(),l=t.deps;if(E!==null){let c;if(l!==null){const u=l.length,f=O===0?E:l.slice(0,O).concat(E),m=f.length>16&&u-O>1?new Set(f):null;for(c=O;c<u;c++){const d=l[c];(m!==null?!m.has(d):!f.includes(d))&&Pe(t,d)}}if(l!==null&&O>0)for(l.length=O+E.length,c=0;c<E.length;c++)l[O+c]=E[c];else t.deps=l=E;if(!st)for(c=O;c<l.length;c++){const u=l[c],f=u.reactions;f===null?u.reactions=[t]:f[f.length-1]!==t&&!f.includes(t)&&f.push(t)}}else l!==null&&O<l.length&&(Dt(t,O),l.length=O);return s}finally{E=e,O=n,Y=r,$=i,st=o}}function Pe(t,e){const n=e.reactions;let r=0;if(n!==null){r=n.length-1;const i=n.indexOf(t);i!==-1&&(r===0?e.reactions=null:(n[i]=n[r],n.pop()))}r===0&&e.f&J&&(N(e,Z),e.f&(I|St)||(e.f^=St),Dt(e,0))}function Dt(t,e){const n=t.deps;if(n!==null){const r=e===0?null:n.slice(0,e);let i;for(i=e;i<n.length;i++){const o=n[i];(r===null||!r.includes(o))&&Pe(t,o)}}}function ee(t,e=!0){let n=t.first;t.first=null,t.last=null;for(var r;n!==null;)r=n.next,se(n,e),n=r}function ne(t){var e=t.f;if(!(e&rt)){N(t,M);var n=t.ctx,r=y,i=x;y=t,x=n;try{e&Bn||ee(t),We(t);var o=De(t);t.teardown=typeof o=="function"?o:null}catch(s){sr(s)}finally{y=r,x=i}}}function Fe(){ot>1e3&&(ot=0,Un()),ot++}function Me(t){var e=t.length;if(e!==0){Fe();var n=it;it=!0;try{for(var r=0;r<e;r++){var i=t[r];if(i.first===null&&!(i.f&q))Be([i]);else{var o=[];He(i,o),Be(o)}}}finally{it=n}}}function Be(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];!(r.f&(rt|be))&&Nt(r)&&(ne(r),r.deps===null&&r.first===null&&r.dom===null&&(r.teardown===null?Ye(r):r.fn=null))}}function lr(){if(vt=!1,ot>1001)return;const t=G;G=[],Me(t),vt||(ot=0)}function Pt(t){Lt===Re&&(vt||(vt=!0,queueMicrotask(lr)));for(var e=t;e.parent!==null;){e=e.parent;var n=e.f;if(n&q){if(!(n&M))return;N(e,Z)}}G.push(e)}function He(t,e){var n=t.first,r=[];t:for(;n!==null;){var i=n.f,o=(i&(rt|be))===0,s=i&q,l=(i&M)!==0,c=n.first;if(o&&(!s||!l)){if(s&&N(n,M),i&Rt){if(!s&&Nt(n)&&(ne(n),c=n.first),c!==null){n=c;continue}}else if(i&xe)if(s||l){if(c!==null){n=c;continue}}else r.push(n)}var u=n.next;if(u===null){let m=n.parent;for(;m!==null;){if(t===m)break t;var f=m.next;if(f!==null){n=f;continue t}m=m.parent}}n=u}for(var a=0;a<r.length;a++)c=r[a],e.push(c),He(c,e)}function Ft(t,e=!0){var n=Lt,r=G;try{Fe();const o=[];Lt=rr,G=o,vt=!1,e&&Me(r);var i=t==null?void 0:t();return Qn(),(G.length>0||o.length>0)&&Ft(),ot=0,i}finally{Lt=n,G=r}}function U(t){const e=t.f;if(e&rt)return t.v;if($!==null){const n=($.f&I)!==0,r=$.deps;E===null&&r!==null&&r[O]===t&&!(n&&y!==null)?O++:(r===null||O===0||r[O-1]!==t)&&(E===null?E=[t]:E[E.length-1]!==t&&E.push(t)),Y!==null&&y!==null&&y.f&M&&!(y.f&q)&&Y.includes(t)&&(N(y,B),Pt(y))}return e&J&&Nt(t)&&Te(t),t.v}function re(t,e,n){var r=t.reactions;if(r!==null)for(var i=te(),o=r.length,s=0;s<o;s++){var l=r[s],c=l.f;if(!(c&B||(!n||!i)&&l===y)){N(l,e);var u=(c&Z)!==0,f=(c&I)!==0;(c&M||u&&f)&&(l.f&J?re(l,Z,n):Pt(l))}}}function ie(t){const e=$;try{return $=null,t()}finally{$=e}}const cr=~(B|Z|M);function N(t,e){t.f=t.f&cr|e}function Ve(t,e=!1,n){x={p:x,c:null,e:null,m:!1,s:t,x:null,l:null},e||(x.l={s:null,u:null,r1:[],r2:pt(!1)})}function je(t){const e=x;if(e!==null){t!==void 0&&(e.x=t);const r=e.e;if(r!==null){e.e=null;for(var n=0;n<r.length;n++)oe(r[n])}x=e.p,e.m=!0}return t||{}}function ur(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function fr(t){if(ht(t))for(var e=0;e<t.length;e++){var n=t[e];n.isConnected&&n.remove()}else t.isConnected&&t.remove()}function ar(t){y===null&&$===null&&Yn(),$!==null&&$.f&I&&Wn(),Qt&&In()}function qe(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Mt(t,e,n){var r=(t&Jt)!==0,i={ctx:x,deps:null,dom:null,f:t|B,first:null,fn:e,last:null,next:null,parent:r?null:y,prev:null,teardown:null,transitions:null};if(n){var o=it;try{Se(!0),ne(i),i.f|=Hn}finally{Se(o)}}else e!==null&&Pt(i);var s=n&&i.deps===null&&i.first===null&&i.dom===null&&i.teardown===null;return!s&&!r&&(y!==null&&qe(i,y),$!==null&&$.f&J&&qe(i,$)),i}function dr(t){ar();var e=y!==null&&(y.f&Rt)!==0&&x!==null&&!x.m;if(e){var n=x;(n.e??(n.e=[])).push(t)}else{var r=oe(t);return r}}function hr(t){const e=Mt(Jt,t,!0);return()=>{se(e)}}function oe(t){return Mt(xe,t,!1)}function Ie(t){return Mt(Rt,t,!0)}function mr(t){return Mt(Rt|q,t,!0)}function We(t){var e=t.teardown;if(e!==null){const n=Qt,r=$;ke(!0),Le(null);try{e.call(null)}finally{ke(n),Le(r)}}}function se(t,e=!0){var n=t.dom;if(n!==null&&e&&fr(n),ee(t,e),Dt(t,0),N(t,rt),t.transitions)for(const i of t.transitions)i.stop();We(t);var r=t.parent;r!==null&&t.f&q&&r.first!==null&&Ye(t),t.next=t.prev=t.teardown=t.ctx=t.dom=t.deps=t.parent=t.fn=null}function Ye(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}var Ue;function Ke(){if(Ue===void 0){Ue=window;var t=Element.prototype;t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function le(){return document.createTextNode("")}function ze(t){const e=t.firstChild;return nt?e===null?t.appendChild(le()):At(e):e}function pr(t,e){return nt?At(Ct):t.firstChild}function ce(t,e=!1){var n=t.nextSibling;if(!nt)return n;var r=n.nodeType;if(r===8&&n.data===Sn)return ce(n,e);if(e&&r!==3){var i=le(),o=y.dom;return o.unshift(i),n==null||n.before(i),i}return At(n)}function _r(t){t.textContent=""}function vr(t){for(var e=0;e<t.length;e++)Je.add(t[e]);for(var n of ue)n(t)}function Xe(t,e){var _;var n=t.ownerDocument,r=e.type,i=((_=e.composedPath)==null?void 0:_.call(e))||[],o=i[0]||e.target,s=0,l=e.__root;if(l){var c=i.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var u=i.indexOf(t);if(u===-1)return;c<=u&&(s=c)}if(o=i[s]||e.target,o!==t){mt(e,"currentTarget",{configurable:!0,get(){return o||n}});try{for(var f,a=[];o!==null;){var m=o.parentNode||o.host||null;try{var d=o["__"+r];if(d!==void 0&&!o.disabled)if(ht(d)){var[p,...h]=d;p.apply(o,[e,...h])}else d.call(o,e)}catch(v){f?a.push(v):f=v}if(e.cancelBubble||m===t||m===null)break;o=m}if(f){for(let v of a)queueMicrotask(()=>{throw v});throw f}}finally{e.__root=t,o=t}}}const Je=new Set,ue=new Set;function Ze(t,e,n,r){e===void 0||e(t,n)}function Ge(t,e){const n=e.anchor??e.target.appendChild(le());return Ft(()=>Qe(t,{...e,anchor:n}),!1)}function gr(t,e){const n=e.target,r=Ot;try{return Ft(()=>{Et(!0);for(var i=n.firstChild;i&&(i.nodeType!==8||i.data!==Kt);)i=i.nextSibling;if(!i)throw zt;const o=At(i),s=Qe(t,{...e,anchor:o});return Et(!1),s},!1)}catch(i){if(i===zt)return e.recover===!1&&Kn(),Ke(),_r(n),Et(!1),Ge(t,e);throw i}finally{Et(!!r),Ln(r)}}function Qe(t,{target:e,anchor:n,props:r={},events:i,context:o,intro:s=!1}){Ke();const l=new Set,c=Xe.bind(null,e),u=Xe.bind(null,document),f=d=>{for(let p=0;p<d.length;p++){const h=d[p];l.has(h)||(l.add(h),e.addEventListener(h,c,$e.includes(h)?{passive:!0}:void 0),document.addEventListener(h,u,$e.includes(h)?{passive:!0}:void 0))}};f(Nn(Je)),ue.add(f);let a;const m=hr(()=>(mr(()=>{if(o){Ve({});var d=x;d.c=o}i&&(r.$$events=i),a=t(n,r)||{},o&&je()}),()=>{for(const d of l)e.removeEventListener(d,c),document.removeEventListener(d,c);ue.delete(f),fe.delete(a)}));return fe.set(a,m),a}let fe=new WeakMap;function yr(t){const e=fe.get(t);e==null||e()}function tn(t,e=y){var n=e.dom;return n===null?e.dom=t:(ht(n)||(n=e.dom=[n]),ht(t)?n.push(...t):n.push(t)),t}function wr(t,e){var n=(e&bt)!==0,r;return()=>{if(nt)return tn(Ot),Ct;r||(r=ur(t));var i=n?document.importNode(r,!0):r.cloneNode(!0);return tn([...i.childNodes]),i}}function en(t,e){nt||t.before(e)}function nn(t,e){var r;var n=t&&((r=t[T])==null?void 0:r.t);return t===e||n===e}function $r(t,e,n,r){oe(()=>{var i,o;return Ie(()=>{i=o,o=[],ie(()=>{t!==n(...o)&&(e(t,...o),i&&nn(n(...i),t)&&e(null,...i))})}),()=>{Gn(()=>{o&&nn(n(...o),t)&&e(null,...o)})}})}function xr(t,e,n,r){var p;var i=(n&C)!==0,o=t[e],s=(p=Xt(t,e))==null?void 0:p.set,l=r,c=()=>l;o===void 0&&r!==void 0&&(s&&i&&zn(),o=c(),s&&s(o));var u;if(u=()=>{var h=t[e];return h===void 0?c():h},s){var f=t.$$legacy;return function(h,_){return arguments.length>0?((!_||f)&&s(_?u():h),h):u()}}var a=!1,m=Zt(o),d=tr(()=>{var h=u(),_=U(m);return a?(a=!1,_):m.v=h});return function(h,_){var v=U(d);if(arguments.length>0){const b=_?U(d):h;return d.equals(b)||(a=!0,W(m,b),U(d)),h}return v}}function br(t){return new Er(t)}class Er{constructor(e){ye(this,j);ye(this,L);const n=_t({...e.props||{},$$events:{}},!1);we(this,L,(e.hydrate?gr:Ge)(e.component,{target:e.target,props:n,context:e.context,intro:e.intro,recover:e.recover})),we(this,j,n.$$events);for(const r of Object.keys(S(this,L)))r==="$set"||r==="$destroy"||r==="$on"||mt(this,r,{get(){return S(this,L)[r]},set(i){S(this,L)[r]=i},enumerable:!0});S(this,L).$set=r=>{Object.assign(n,r)},S(this,L).$destroy=()=>{yr(S(this,L))}}$set(e){S(this,L).$set(e)}$on(e,n){S(this,j)[e]=S(this,j)[e]||[];const r=(...i)=>n.call(this,...i);return S(this,j)[e].push(r),()=>{S(this,j)[e]=S(this,j)[e].filter(i=>i!==r)}}$destroy(){S(this,L).$destroy()}}j=new WeakMap,L=new WeakMap;let rn;typeof HTMLElement=="function"&&(rn=class extends HTMLElement{constructor(e,n,r){super();F(this,"$$ctor");F(this,"$$s");F(this,"$$c");F(this,"$$cn",!1);F(this,"$$d",{});F(this,"$$r",!1);F(this,"$$p_d",{});F(this,"$$l",{});F(this,"$$l_u",new Map);F(this,"$$me");this.$$ctor=e,this.$$s=n,r&&this.attachShadow({mode:"open"})}addEventListener(e,n,r){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(n),this.$$c){const i=this.$$c.$on(e,n);this.$$l_u.set(n,i)}super.addEventListener(e,n,r)}removeEventListener(e,n,r){if(super.removeEventListener(e,n,r),this.$$c){const i=this.$$l_u.get(n);i&&(i(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(i){return o=>{const s=document.createElement("slot");i!=="default"&&(s.name=i),en(o,s)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=Or(this);for(const i of this.$$s)i in r&&(i==="default"&&!this.$$d.children?(this.$$d.children=e(i),n.default=!0):n[i]=e(i));for(const i of this.attributes){const o=this.$$g_p(i.name);o in this.$$d||(this.$$d[o]=Bt(o,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=br({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=Ie(()=>{var i;this.$$r=!0;for(const o of Tt(this.$$c)){if(!((i=this.$$p_d[o])!=null&&i.reflect))continue;this.$$d[o]=this.$$c[o];const s=Bt(o,this.$$d[o],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,s)}this.$$r=!1});for(const i in this.$$l)for(const o of this.$$l[i]){const s=this.$$c.$on(i,o);this.$$l_u.set(o,s)}this.$$l={}}}attributeChangedCallback(e,n,r){var i;this.$$r||(e=this.$$g_p(e),this.$$d[e]=Bt(e,r,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),se(this.$$me),this.$$c=void 0)})}$$g_p(e){return Tt(this.$$p_d).find(n=>this.$$p_d[n].attribute===e||!this.$$p_d[n].attribute&&n.toLowerCase()===e)||e}});function Bt(t,e,n,r){var o;const i=(o=n[t])==null?void 0:o.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Or(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function Cr(t,e,n,r,i,o){let s=class extends rn{constructor(){super(t,n,i),this.$$p_d=e}static get observedAttributes(){return Tt(e).map(l=>(e[l].attribute||l).toLowerCase())}};return Tt(e).forEach(l=>{mt(s.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(c){var u;c=Bt(l,c,e),this.$$d[l]=c,(u=this.$$c)==null||u.$set({[l]:c})}})}),r.forEach(l=>{mt(s.prototype,l,{get(){var c;return(c=this.$$c)==null?void 0:c[l]}})}),t.element=s,s}const ae=Math.min,lt=Math.max,Ht=Math.round,K=t=>({x:t,y:t}),Ar={left:"right",right:"left",bottom:"top",top:"bottom"},Tr={start:"end",end:"start"};function on(t,e,n){return lt(t,ae(e,n))}function Vt(t,e){return typeof t=="function"?t(e):t}function Q(t){return t.split("-")[0]}function jt(t){return t.split("-")[1]}function sn(t){return t==="x"?"y":"x"}function ln(t){return t==="y"?"height":"width"}function qt(t){return["top","bottom"].includes(Q(t))?"y":"x"}function cn(t){return sn(qt(t))}function Rr(t,e,n){n===void 0&&(n=!1);const r=jt(t),i=cn(t),o=ln(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=It(s)),[s,It(s)]}function Sr(t){const e=It(t);return[de(t),e,de(e)]}function de(t){return t.replace(/start|end/g,e=>Tr[e])}function kr(t,e,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?o:s;default:return[]}}function Lr(t,e,n,r){const i=jt(t);let o=kr(Q(t),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),e&&(o=o.concat(o.map(de)))),o}function It(t){return t.replace(/left|right|bottom|top/g,e=>Ar[e])}function Nr(t){return{top:0,right:0,bottom:0,left:0,...t}}function Dr(t){return typeof t!="number"?Nr(t):{top:t,right:t,bottom:t,left:t}}function Wt(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function un(t,e,n){let{reference:r,floating:i}=t;const o=qt(e),s=cn(e),l=ln(s),c=Q(e),u=o==="y",f=r.x+r.width/2-i.width/2,a=r.y+r.height/2-i.height/2,m=r[l]/2-i[l]/2;let d;switch(c){case"top":d={x:f,y:r.y-i.height};break;case"bottom":d={x:f,y:r.y+r.height};break;case"right":d={x:r.x+r.width,y:a};break;case"left":d={x:r.x-i.width,y:a};break;default:d={x:r.x,y:r.y}}switch(jt(e)){case"start":d[s]-=m*(n&&u?-1:1);break;case"end":d[s]+=m*(n&&u?-1:1);break}return d}const Pr=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,l=o.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let u=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:a}=un(u,r,c),m=r,d={},p=0;for(let h=0;h<l.length;h++){const{name:_,fn:v}=l[h],{x:b,y:A,data:P,reset:R}=await v({x:f,y:a,initialPlacement:r,placement:m,strategy:i,middlewareData:d,rects:u,platform:s,elements:{reference:t,floating:e}});f=b??f,a=A??a,d={...d,[_]:{...d[_],...P}},R&&p<=50&&(p++,typeof R=="object"&&(R.placement&&(m=R.placement),R.rects&&(u=R.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):R.rects),{x:f,y:a}=un(u,m,c)),h=-1)}return{x:f,y:a,placement:m,strategy:i,middlewareData:d}};async function fn(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:o,rects:s,elements:l,strategy:c}=t,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:a="floating",altBoundary:m=!1,padding:d=0}=Vt(e,t),p=Dr(d),_=l[m?a==="floating"?"reference":"floating":a],v=Wt(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(_)))==null||n?_:_.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:u,rootBoundary:f,strategy:c})),b=a==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,A=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),P=await(o.isElement==null?void 0:o.isElement(A))?await(o.getScale==null?void 0:o.getScale(A))||{x:1,y:1}:{x:1,y:1},R=Wt(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:A,strategy:c}):b);return{top:(v.top-R.top+p.top)/P.y,bottom:(R.bottom-v.bottom+p.bottom)/P.y,left:(v.left-R.left+p.left)/P.x,right:(R.right-v.right+p.right)/P.x}}const Fr=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:l,platform:c,elements:u}=e,{mainAxis:f=!0,crossAxis:a=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:h=!0,..._}=Vt(t,e);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const v=Q(i),b=Q(l)===l,A=await(c.isRTL==null?void 0:c.isRTL(u.floating)),P=m||(b||!h?[It(l)]:Sr(l));!m&&p!=="none"&&P.push(...Lr(l,h,p,A));const R=[l,...P],ge=await fn(e,_),Ut=[];let wt=((r=o.flip)==null?void 0:r.overflows)||[];if(f&&Ut.push(ge[v]),a){const tt=Rr(i,s,A);Ut.push(ge[tt[0]],ge[tt[1]])}if(wt=[...wt,{placement:i,overflows:Ut}],!Ut.every(tt=>tt<=0)){var bn,En;const tt=(((bn=o.flip)==null?void 0:bn.index)||0)+1,Cn=R[tt];if(Cn)return{data:{index:tt,overflows:wt},reset:{placement:Cn}};let $t=(En=wt.filter(at=>at.overflows[0]<=0).sort((at,dt)=>at.overflows[1]-dt.overflows[1])[0])==null?void 0:En.placement;if(!$t)switch(d){case"bestFit":{var On;const at=(On=wt.map(dt=>[dt.placement,dt.overflows.filter(xt=>xt>0).reduce((xt,ai)=>xt+ai,0)]).sort((dt,xt)=>dt[1]-xt[1])[0])==null?void 0:On[0];at&&($t=at);break}case"initialPlacement":$t=l;break}if(i!==$t)return{reset:{placement:$t}}}return{}}}};async function Mr(t,e){const{placement:n,platform:r,elements:i}=t,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=Q(n),l=jt(n),c=qt(n)==="y",u=["left","top"].includes(s)?-1:1,f=o&&c?-1:1,a=Vt(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:p}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};return l&&typeof p=="number"&&(d=l==="end"?p*-1:p),c?{x:d*f,y:m*u}:{x:m*u,y:d*f}}const Br=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,r;const{x:i,y:o,placement:s,middlewareData:l}=e,c=await Mr(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:i+c.x,y:o+c.y,data:{...c,placement:s}}}}},Hr=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:r,placement:i}=e,{mainAxis:o=!0,crossAxis:s=!1,limiter:l={fn:_=>{let{x:v,y:b}=_;return{x:v,y:b}}},...c}=Vt(t,e),u={x:n,y:r},f=await fn(e,c),a=qt(Q(i)),m=sn(a);let d=u[m],p=u[a];if(o){const _=m==="y"?"top":"left",v=m==="y"?"bottom":"right",b=d+f[_],A=d-f[v];d=on(b,d,A)}if(s){const _=a==="y"?"top":"left",v=a==="y"?"bottom":"right",b=p+f[_],A=p-f[v];p=on(b,p,A)}const h=l.fn({...e,[m]:d,[a]:p});return{...h,data:{x:h.x-n,y:h.y-r}}}}};function ct(t){return an(t)?(t.nodeName||"").toLowerCase():"#document"}function k(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function z(t){var e;return(e=(an(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function an(t){return t instanceof Node||t instanceof k(t).Node}function H(t){return t instanceof Element||t instanceof k(t).Element}function V(t){return t instanceof HTMLElement||t instanceof k(t).HTMLElement}function dn(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof k(t).ShadowRoot}function gt(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=D(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function Vr(t){return["table","td","th"].includes(ct(t))}function he(t){const e=me(),n=D(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function jr(t){let e=X(t);for(;V(e)&&!ut(e);){if(he(e))return e;e=X(e)}return null}function me(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ut(t){return["html","body","#document"].includes(ct(t))}function D(t){return k(t).getComputedStyle(t)}function Yt(t){return H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function X(t){if(ct(t)==="html")return t;const e=t.assignedSlot||t.parentNode||dn(t)&&t.host||z(t);return dn(e)?e.host:e}function hn(t){const e=X(t);return ut(e)?t.ownerDocument?t.ownerDocument.body:t.body:V(e)&&gt(e)?e:hn(e)}function pe(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=hn(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),s=k(i);return o?e.concat(s,s.visualViewport||[],gt(i)?i:[],s.frameElement&&n?pe(s.frameElement):[]):e.concat(i,pe(i,[],n))}function mn(t){const e=D(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=V(t),o=i?t.offsetWidth:n,s=i?t.offsetHeight:r,l=Ht(n)!==o||Ht(r)!==s;return l&&(n=o,r=s),{width:n,height:r,$:l}}function pn(t){return H(t)?t:t.contextElement}function ft(t){const e=pn(t);if(!V(e))return K(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=mn(e);let s=(o?Ht(n.width):n.width)/r,l=(o?Ht(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const qr=K(0);function _n(t){const e=k(t);return!me()||!e.visualViewport?qr:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ir(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==k(t)?!1:e}function yt(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=pn(t);let s=K(1);e&&(r?H(r)&&(s=ft(r)):s=ft(t));const l=Ir(o,n,r)?_n(o):K(0);let c=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,f=i.width/s.x,a=i.height/s.y;if(o){const m=k(o),d=r&&H(r)?k(r):r;let p=m,h=p.frameElement;for(;h&&r&&d!==p;){const _=ft(h),v=h.getBoundingClientRect(),b=D(h),A=v.left+(h.clientLeft+parseFloat(b.paddingLeft))*_.x,P=v.top+(h.clientTop+parseFloat(b.paddingTop))*_.y;c*=_.x,u*=_.y,f*=_.x,a*=_.y,c+=A,u+=P,p=k(h),h=p.frameElement}}return Wt({width:f,height:a,x:c,y:u})}const Wr=[":popover-open",":modal"];function _e(t){return Wr.some(e=>{try{return t.matches(e)}catch{return!1}})}function Yr(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",s=z(r),l=e?_e(e.floating):!1;if(r===s||l&&o)return n;let c={scrollLeft:0,scrollTop:0},u=K(1);const f=K(0),a=V(r);if((a||!a&&!o)&&((ct(r)!=="body"||gt(s))&&(c=Yt(r)),V(r))){const m=yt(r);u=ft(r),f.x=m.x+r.clientLeft,f.y=m.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+f.x,y:n.y*u.y-c.scrollTop*u.y+f.y}}function Ur(t){return Array.from(t.getClientRects())}function vn(t){return yt(z(t)).left+Yt(t).scrollLeft}function Kr(t){const e=z(t),n=Yt(t),r=t.ownerDocument.body,i=lt(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=lt(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+vn(t);const l=-n.scrollTop;return D(r).direction==="rtl"&&(s+=lt(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:l}}function zr(t,e){const n=k(t),r=z(t),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,l=0,c=0;if(i){o=i.width,s=i.height;const u=me();(!u||u&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:o,height:s,x:l,y:c}}function Xr(t,e){const n=yt(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=V(t)?ft(t):K(1),s=t.clientWidth*o.x,l=t.clientHeight*o.y,c=i*o.x,u=r*o.y;return{width:s,height:l,x:c,y:u}}function gn(t,e,n){let r;if(e==="viewport")r=zr(t,n);else if(e==="document")r=Kr(z(t));else if(H(e))r=Xr(e,n);else{const i=_n(t);r={...e,x:e.x-i.x,y:e.y-i.y}}return Wt(r)}function yn(t,e){const n=X(t);return n===e||!H(n)||ut(n)?!1:D(n).position==="fixed"||yn(n,e)}function Jr(t,e){const n=e.get(t);if(n)return n;let r=pe(t,[],!1).filter(l=>H(l)&&ct(l)!=="body"),i=null;const o=D(t).position==="fixed";let s=o?X(t):t;for(;H(s)&&!ut(s);){const l=D(s),c=he(s);!c&&l.position==="fixed"&&(i=null),(o?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||gt(s)&&!c&&yn(t,s))?r=r.filter(f=>f!==s):i=l,s=X(s)}return e.set(t,r),r}function Zr(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const s=[...n==="clippingAncestors"?_e(e)?[]:Jr(e,this._c):[].concat(n),r],l=s[0],c=s.reduce((u,f)=>{const a=gn(e,f,i);return u.top=lt(a.top,u.top),u.right=ae(a.right,u.right),u.bottom=ae(a.bottom,u.bottom),u.left=lt(a.left,u.left),u},gn(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Gr(t){const{width:e,height:n}=mn(t);return{width:e,height:n}}function Qr(t,e,n){const r=V(e),i=z(e),o=n==="fixed",s=yt(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const c=K(0);if(r||!r&&!o)if((ct(e)!=="body"||gt(i))&&(l=Yt(e)),r){const a=yt(e,!0,o,e);c.x=a.x+e.clientLeft,c.y=a.y+e.clientTop}else i&&(c.x=vn(i));const u=s.left+l.scrollLeft-c.x,f=s.top+l.scrollTop-c.y;return{x:u,y:f,width:s.width,height:s.height}}function ve(t){return D(t).position==="static"}function wn(t,e){return!V(t)||D(t).position==="fixed"?null:e?e(t):t.offsetParent}function $n(t,e){const n=k(t);if(_e(t))return n;if(!V(t)){let i=X(t);for(;i&&!ut(i);){if(H(i)&&!ve(i))return i;i=X(i)}return n}let r=wn(t,e);for(;r&&Vr(r)&&ve(r);)r=wn(r,e);return r&&ut(r)&&ve(r)&&!he(r)?n:r||jr(t)||n}const ti=async function(t){const e=this.getOffsetParent||$n,n=this.getDimensions,r=await n(t.floating);return{reference:Qr(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function ei(t){return D(t).direction==="rtl"}const ni={convertOffsetParentRelativeRectToViewportRelativeRect:Yr,getDocumentElement:z,getClippingRect:Zr,getOffsetParent:$n,getElementRects:ti,getClientRects:Ur,getDimensions:Gr,getScale:ft,isElement:H,isRTL:ei},ri=Br,ii=Hr,oi=Fr,si=(t,e,n)=>{const r=new Map,i={platform:ni,...n},o={...i.platform,_c:r};return Pr(t,e,{...i,platform:o})};function li(t){x===null&&nr(),x.l!==null?ci(x).m.push(t):dr(()=>{const e=ie(t);if(typeof e=="function")return e})}function ci(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}var ui=(t,e)=>e({trigger:t.target}),fi=wr('<button><!></button> <span class="hidden absolute z-50"><!></span>',1);function xn(t,e){var d,p;Ve(e,!0);let n,r,i=!1,o=xr(e,"placement",7);function s(h){if(!h.trigger)throw new Error("trigger is required");h.placement||(h.placement=o()||"bottom"),r=h.trigger,si(r,n,{placement:h.placement,middleware:[oi({padding:2}),ii({padding:2}),ri(2)]}).then(({x:_,y:v})=>{Object.assign(n.style,{left:`${_}px`,top:`${v}px`})}),n.classList.remove("hidden"),i=!0}function l(){n.classList.add("hidden"),i=!1}li(()=>{const h=_=>{i&&!n.contains(_.target)&&!r.contains(_.target)&&l()};document.addEventListener("click",h)});var c=fi(),u=pr(c);u.__click=[ui,s];var f=ze(u);Ze(f,(d=e.$$slots)==null?void 0:d.trigger,{});var a=ce(ce(u,!0));$r(a,h=>n=h,()=>n);var m=ze(a);return Ze(m,(p=e.$$slots)==null?void 0:p.overlay,{}),en(t,c),je({openOverlay:s,closeOverlay:l,get placement(){return o()},set placement(h){o(h),Ft()}})}return vr(["click"]),customElements.define("sui-overlay",Cr(xn,{placement:{}},["trigger","overlay"],["openOverlay","closeOverlay"],!0)),g.Overlay=xn,Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),g}({});
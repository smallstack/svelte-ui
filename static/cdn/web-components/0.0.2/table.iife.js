var Table=function(a){"use strict";var Je=Object.defineProperty;var te=a=>{throw TypeError(a)};var We=(a,d,v)=>d in a?Je(a,d,{enumerable:!0,configurable:!0,writable:!0,value:v}):a[d]=v;var O=(a,d,v)=>We(a,typeof d!="symbol"?d+"":d,v),ee=(a,d,v)=>d.has(a)||te("Cannot "+v);var E=(a,d,v)=>(ee(a,d,"read from private field"),v?v.call(a):d.get(a)),bt=(a,d,v)=>d.has(a)?te("Cannot add the same private member more than once"):d instanceof WeakSet?d.add(a):d.set(a,v),wt=(a,d,v,F)=>(ee(a,d,"write to private field"),F?F.call(a,v):d.set(a,v),v);var N,g;const d="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(d);const v=2,F="[",ne="]",lt={},I=Symbol(),Et=["touchstart","touchmove","touchend"];function re(t){console.warn("hydration_mismatch")}let ft=!1;function Z(t){ft=t}let ct=null,G;function se(t){ct=t,G=t&&t[0]}function ie(t){if(t.nodeType!==8)return t;var e=t;if(e.data!==F)return t;for(var n=[],s=0;(e=e.nextSibling)!==null;){if(e.nodeType===8){var r=e.data;if(r===F)s+=1;else if(r[0]===ne){if(s===0)return ct=n,G=n[0],e;s-=1}}n.push(e)}throw re(),lt}var H=Array.isArray,oe=Array.from,Q=Object.keys,ue=Object.isFrozen,U=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,le=Object.prototype,fe=Array.prototype,ce=Object.getPrototypeOf;const K=2,gt=4,at=8,ae=16,R=32,dt=64,M=128,X=256,S=512,C=1024,L=2048,xt=4096,j=8192,de=16384,T=Symbol("$state"),_e=Symbol("$state.frozen");function he(t){return t===this.v}function $e(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function ve(t){return!$e(t,this.v)}function pe(){throw new Error("effect_update_depth_exceeded")}function me(){throw new Error("hydration_failed")}function ye(){throw new Error("state_unsafe_mutation")}function z(t){return{f:0,v:t,reactions:null,equals:he,version:0}}function Ot(t){var n;const e=z(t);return e.equals=ve,y!==null&&y.l!==null&&((n=y.l).s??(n.s=[])).push(e),e}function D(t,e){var n=t.v!==I;return n&&p!==null&&_t()&&p.f&K&&ye(),t.equals(e)||(t.v=e,t.version=Lt(),pt(t,C,!0),_t()&&n&&_!==null&&_.f&S&&!(_.f&R)&&(h!==null&&h.includes(t)?(x(_,C),rt(_)):A===null?Te([t]):A.push(t))),e}function V(t,e=!0,n=null,s){if(typeof t=="object"&&t!=null&&!ue(t)&&!(_e in t)){if(T in t){const i=t[T];if(i.t===t||i.p===t)return i.p}const r=ce(t);if(r===le||r===fe){const i=new Proxy(t,be);return U(t,T,{value:{s:new Map,v:z(0),a:H(t),i:e,p:i,t},writable:!0,enumerable:!1}),i}}return t}function St(t,e=1){D(t,t.v+e)}const be={defineProperty(t,e,n){if(n.value){const s=t[T],r=s.s.get(e);r!==void 0&&D(r,V(n.value,s.i,s))}return Reflect.defineProperty(t,e,n)},deleteProperty(t,e){const n=t[T],s=n.s.get(e),r=n.a,i=delete t[e];if(r&&i){const l=n.s.get("length"),u=t.length-1;l!==void 0&&l.v!==u&&D(l,u)}return s!==void 0&&D(s,I),i&&St(n.v),i},get(t,e,n){var i;if(e===T)return Reflect.get(t,T);const s=t[T];let r=s.s.get(e);if(r===void 0&&(!(e in t)||(i=Tt(t,e))!=null&&i.writable)&&(r=(s.i?z:Ot)(V(t[e],s.i,s)),s.s.set(e,r)),r!==void 0){const l=st(r);return l===I?void 0:l}return Reflect.get(t,e,n)},getOwnPropertyDescriptor(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);if(n&&"value"in n){const r=t[T].s.get(e);r&&(n.value=st(r))}return n},has(t,e){var i;if(e===T)return!0;const n=t[T],s=Reflect.has(t,e);let r=n.s.get(e);return(r!==void 0||_!==null&&(!s||(i=Tt(t,e))!=null&&i.writable))&&(r===void 0&&(r=(n.i?z:Ot)(s?V(t[e],n.i,n):I),n.s.set(e,r)),st(r)===I)?!1:s},set(t,e,n,s){const r=t[T];let i=r.s.get(e);i===void 0&&(Se(()=>s[e]),i=r.s.get(e)),i!==void 0&&D(i,V(n,r.i,r));const l=r.a,u=!(e in t);if(l&&e==="length")for(let o=n;o<t.length;o+=1){const f=r.s.get(o+"");f!==void 0&&D(f,I)}if(t[e]=n,u){if(l){const o=r.s.get("length"),f=t.length;o!==void 0&&o.v!==f&&D(o,f)}St(r.v)}return!0},ownKeys(t){const e=t[T];return st(e.v),Reflect.ownKeys(t)}};function Ze(){}function Ct(t){ht(t);var e=t.deriveds;if(e!==null){t.deriveds=null;for(var n=0;n<e.length;n+=1)we(e[n])}}function Nt(t){Ct(t);var e=Dt(t),n=(Y||t.f&M)&&t.deps!==null?L:S;x(t,n),t.equals(e)||(t.v=e,t.version=Lt(),pt(t,C,!1))}function we(t){Ct(t),nt(t,0),x(t,j),t.first=t.last=t.deps=t.reactions=t.fn=null}const Rt=0,Ee=1;let tt=Rt,J=!1,q=!1;function At(t){q=t}let P=[],B=0,p=null;function kt(t){p=t}let _=null,h=null,$=0,A=null;function Te(t){A=t}let ge=0,Y=!1,y=null;function Lt(){return ge++}function _t(){return y!==null&&y.l===null}function et(t){var b;var e=t.f,n=(e&C)!==0;if(n)return!0;var s=(e&M)!==0,r=(e&X)!==0;if(e&L){var i=t.deps;if(i!==null)for(var l=i.length,u,o=0;o<l;o++){var f=i[o];!n&&et(f)&&Nt(f);var c=f.version;if(s){if(c>t.version)return!0;!Y&&!((b=f==null?void 0:f.reactions)!=null&&b.includes(t))&&(f.reactions??(f.reactions=[])).push(t)}else{if(t.f&C)return!0;r&&(c>t.version&&(n=!0),u=f.reactions,u===null?f.reactions=[t]:u.includes(t)||u.push(t))}}s||x(t,S),r&&(t.f^=X)}return n}function xe(t,e,n){throw t}function Dt(t){const e=h,n=$,s=A,r=p,i=Y;h=null,$=0,A=null,p=t.f&(R|dt)?null:t,Y=!q&&(t.f&M)!==0;try{let l=(0,t.fn)(),u=t.deps;if(h!==null){let o;if(u!==null){const f=u.length,c=$===0?h:u.slice(0,$).concat(h),w=c.length>16&&f-$>1?new Set(c):null;for(o=$;o<f;o++){const m=u[o];(w!==null?!w.has(m):!c.includes(m))&&Pt(t,m)}}if(u!==null&&$>0)for(u.length=$+h.length,o=0;o<h.length;o++)u[$+o]=h[o];else t.deps=u=h;if(!Y)for(o=$;o<u.length;o++){const f=u[o],c=f.reactions;c===null?f.reactions=[t]:c[c.length-1]!==t&&!c.includes(t)&&c.push(t)}}else u!==null&&$<u.length&&(nt(t,$),u.length=$);return l}finally{h=e,$=n,A=s,p=r,Y=i}}function Pt(t,e){const n=e.reactions;let s=0;if(n!==null){s=n.length-1;const r=n.indexOf(t);r!==-1&&(s===0?e.reactions=null:(n[r]=n[s],n.pop()))}s===0&&e.f&K&&(x(e,L),e.f&(M|X)||(e.f^=X),nt(e,0))}function nt(t,e){const n=t.deps;if(n!==null){const s=e===0?null:n.slice(0,e);let r;for(r=e;r<n.length;r++){const i=n[r];(s===null||!s.includes(i))&&Pt(t,i)}}}function ht(t,e=!0){let n=t.first;t.first=null,t.last=null;for(var s;n!==null;)s=n.next,mt(n,e),n=s}function $t(t){var e=t.f;if(!(e&j)){x(t,S);var n=t.ctx,s=_,r=y;_=t,y=n;try{e&ae||ht(t),Bt(t);var i=Dt(t);t.teardown=typeof i=="function"?i:null}catch(l){xe(l)}finally{_=s,y=r}}}function Ft(){B>1e3&&(B=0,pe()),B++}function It(t){var e=t.length;if(e!==0){Ft();var n=q;q=!0;try{for(var s=0;s<e;s++){var r=t[s];if(r.first===null&&!(r.f&R))Mt([r]);else{var i=[];jt(r,i),Mt(i)}}}finally{q=n}}}function Mt(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var s=t[n];!(s.f&(j|xt))&&et(s)&&($t(s),s.deps===null&&s.first===null&&s.dom===null&&(s.teardown===null?Yt(s):s.fn=null))}}function Oe(){if(J=!1,B>1001)return;const t=P;P=[],It(t),J||(B=0)}function rt(t){tt===Rt&&(J||(J=!0,queueMicrotask(Oe)));for(var e=t;e.parent!==null;){e=e.parent;var n=e.f;if(n&R){if(!(n&S))return;x(e,L)}}P.push(e)}function jt(t,e){var n=t.first,s=[];t:for(;n!==null;){var r=n.f,i=(r&(j|xt))===0,l=r&R,u=(r&S)!==0,o=n.first;if(i&&(!l||!u)){if(l&&x(n,S),r&at){if(!l&&et(n)&&($t(n),o=n.first),o!==null){n=o;continue}}else if(r&gt)if(l||u){if(o!==null){n=o;continue}}else s.push(n)}var f=n.next;if(f===null){let w=n.parent;for(;w!==null;){if(t===w)break t;var c=w.next;if(c!==null){n=c;continue t}w=w.parent}}n=f}for(var b=0;b<s.length;b++)o=s[b],e.push(o),jt(o,e)}function vt(t,e=!0){var n=tt,s=P;try{Ft();const i=[];tt=Ee,P=i,J=!1,e&&It(s);var r=t==null?void 0:t();return(P.length>0||i.length>0)&&vt(),B=0,r}finally{tt=n,P=s}}function st(t){const e=t.f;if(e&j)return t.v;if(p!==null){const n=(p.f&M)!==0,s=p.deps;h===null&&s!==null&&s[$]===t&&!(n&&_!==null)?$++:(s===null||$===0||s[$-1]!==t)&&(h===null?h=[t]:h[h.length-1]!==t&&h.push(t)),A!==null&&_!==null&&_.f&S&&!(_.f&R)&&A.includes(t)&&(x(_,C),rt(_))}return e&K&&et(t)&&Nt(t),t.v}function pt(t,e,n){var s=t.reactions;if(s!==null)for(var r=_t(),i=s.length,l=0;l<i;l++){var u=s[l],o=u.f;if(!(o&C||(!n||!r)&&u===_)){x(u,e);var f=(o&L)!==0,c=(o&M)!==0;(o&S||f&&c)&&(u.f&K?pt(u,L,n):rt(u))}}}function Se(t){const e=p;try{return p=null,t()}finally{p=e}}const Ce=~(C|L|S);function x(t,e){t.f=t.f&Ce|e}function Ne(t,e=!1,n){y={p:y,c:null,e:null,m:!1,s:t,x:null,l:null},e||(y.l={s:null,u:null,r1:[],r2:z(!1)})}function Re(t){const e=y;if(e!==null){const s=e.e;if(s!==null){e.e=null;for(var n=0;n<s.length;n++)De(s[n])}y=e.p,e.m=!0}return{}}function Ae(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function ke(t){if(H(t))for(var e=0;e<t.length;e++){var n=t[e];n.isConnected&&n.remove()}else t.isConnected&&t.remove()}function qt(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function it(t,e,n){var s=(t&dt)!==0,r={ctx:y,deps:null,dom:null,f:t|C,first:null,fn:e,last:null,next:null,parent:s?null:_,prev:null,teardown:null,transitions:null};if(n){var i=q;try{At(!0),$t(r),r.f|=de}finally{At(i)}}else e!==null&&rt(r);var l=n&&r.deps===null&&r.first===null&&r.dom===null&&r.teardown===null;return!l&&!s&&(_!==null&&qt(r,_),p!==null&&p.f&K&&qt(r,p)),r}function Le(t){const e=it(dt,t,!0);return()=>{mt(e)}}function De(t){return it(gt,t,!1)}function Pe(t){return it(at,t,!0)}function Fe(t){return it(at|R,t,!0)}function Bt(t){var e=t.teardown;if(e!==null){const n=p;kt(null);try{e.call(null)}finally{kt(n)}}}function mt(t,e=!0){var n=t.dom;if(n!==null&&e&&ke(n),ht(t,e),nt(t,0),x(t,j),t.transitions)for(const r of t.transitions)r.stop();Bt(t);var s=t.parent;s!==null&&t.f&R&&s.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.dom=t.deps=t.parent=t.fn=null}function Yt(t){var e=t.parent,n=t.prev,s=t.next;n!==null&&(n.next=s),s!==null&&(s.prev=n),e!==null&&(e.first===t&&(e.first=s),e.last===t&&(e.last=n))}var Ht;function Ut(){if(Ht===void 0){Ht=window;var t=Element.prototype;t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function Ie(){return document.createTextNode("")}function Me(t){t.textContent=""}function Kt(t,e){var Xt;var n=t.ownerDocument,s=e.type,r=((Xt=e.composedPath)==null?void 0:Xt.call(e))||[],i=r[0]||e.target,l=0,u=e.__root;if(u){var o=r.indexOf(u);if(o!==-1&&(t===document||t===window)){e.__root=t;return}var f=r.indexOf(t);if(f===-1)return;o<=f&&(l=o)}if(i=r[l]||e.target,i!==t){U(e,"currentTarget",{configurable:!0,get(){return i||n}});try{for(var c,b=[];i!==null;){var w=i.parentNode||i.host||null;try{var m=i["__"+s];if(m!==void 0&&!i.disabled)if(H(m)){var[W,...k]=m;W.apply(i,[e,...k])}else m.call(i,e)}catch(ut){c?b.push(ut):c=ut}if(e.cancelBubble||w===t||w===null)break;i=w}if(c){for(let ut of b)queueMicrotask(()=>{throw ut});throw c}}finally{e.__root=t,i=t}}}const je=new Set,zt=new Set;function Vt(t,e){const n=e.anchor??e.target.appendChild(Ie());return vt(()=>Jt(t,{...e,anchor:n}),!1)}function qe(t,e){const n=e.target,s=ct;try{return vt(()=>{Z(!0);for(var r=n.firstChild;r&&(r.nodeType!==8||r.data!==F);)r=r.nextSibling;if(!r)throw lt;const i=ie(r),l=Jt(t,{...e,anchor:i});return Z(!1),l},!1)}catch(r){if(r===lt)return e.recover===!1&&me(),Ut(),Me(n),Z(!1),Vt(t,e);throw r}finally{Z(!!s),se(s)}}function Jt(t,{target:e,anchor:n,props:s={},events:r,context:i,intro:l=!1}){Ut();const u=new Set,o=Kt.bind(null,e),f=Kt.bind(null,document),c=m=>{for(let W=0;W<m.length;W++){const k=m[W];u.has(k)||(u.add(k),e.addEventListener(k,o,Et.includes(k)?{passive:!0}:void 0),document.addEventListener(k,f,Et.includes(k)?{passive:!0}:void 0))}};c(oe(je)),zt.add(c);let b;const w=Le(()=>(Fe(()=>{if(i){Ne({});var m=y;m.c=i}r&&(s.$$events=r),b=t(n,s)||{},i&&Re()}),()=>{for(const m of u)e.removeEventListener(m,o),document.removeEventListener(m,o);zt.delete(c),yt.delete(b)}));return yt.set(b,w),b}let yt=new WeakMap;function Be(t){const e=yt.get(t);e==null||e()}function Wt(t,e=_){var n=e.dom;return n===null?e.dom=t:(H(n)||(n=e.dom=[n]),H(t)?n.push(...t):n.push(t)),t}function Ye(t,e){var n=(e&v)!==0,s;return()=>{if(ft)return Wt(G),G;s||(s=Ae(t),s=s.firstChild);var r=n?document.importNode(s,!0):s.cloneNode(!0);return Wt(r),r}}function Zt(t,e){ft||t.before(e)}function He(t){return new Ue(t)}class Ue{constructor(e){bt(this,N);bt(this,g);const n=V({...e.props||{},$$events:{}},!1);wt(this,g,(e.hydrate?qe:Vt)(e.component,{target:e.target,props:n,context:e.context,intro:e.intro,recover:e.recover})),wt(this,N,n.$$events);for(const s of Object.keys(E(this,g)))s==="$set"||s==="$destroy"||s==="$on"||U(this,s,{get(){return E(this,g)[s]},set(r){E(this,g)[s]=r},enumerable:!0});E(this,g).$set=s=>{Object.assign(n,s)},E(this,g).$destroy=()=>{Be(E(this,g))}}$set(e){E(this,g).$set(e)}$on(e,n){E(this,N)[e]=E(this,N)[e]||[];const s=(...r)=>n.call(this,...r);return E(this,N)[e].push(s),()=>{E(this,N)[e]=E(this,N)[e].filter(r=>r!==s)}}$destroy(){E(this,g).$destroy()}}N=new WeakMap,g=new WeakMap;let Gt;typeof HTMLElement=="function"&&(Gt=class extends HTMLElement{constructor(e,n,s){super();O(this,"$$ctor");O(this,"$$s");O(this,"$$c");O(this,"$$cn",!1);O(this,"$$d",{});O(this,"$$r",!1);O(this,"$$p_d",{});O(this,"$$l",{});O(this,"$$l_u",new Map);O(this,"$$me");this.$$ctor=e,this.$$s=n,s&&this.attachShadow({mode:"open"})}addEventListener(e,n,s){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(n),this.$$c){const r=this.$$c.$on(e,n);this.$$l_u.set(n,r)}super.addEventListener(e,n,s)}removeEventListener(e,n,s){if(super.removeEventListener(e,n,s),this.$$c){const r=this.$$l_u.get(n);r&&(r(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(r){return i=>{const l=document.createElement("slot");r!=="default"&&(l.name=r),Zt(i,l)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},s=Ke(this);for(const r of this.$$s)r in s&&(r==="default"&&!this.$$d.children?(this.$$d.children=e(r),n.default=!0):n[r]=e(r));for(const r of this.attributes){const i=this.$$g_p(r.name);i in this.$$d||(this.$$d[i]=ot(i,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=He({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=Pe(()=>{var r;this.$$r=!0;for(const i of Q(this.$$c)){if(!((r=this.$$p_d[i])!=null&&r.reflect))continue;this.$$d[i]=this.$$c[i];const l=ot(i,this.$$d[i],this.$$p_d,"toAttribute");l==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,l)}this.$$r=!1});for(const r in this.$$l)for(const i of this.$$l[r]){const l=this.$$c.$on(r,i);this.$$l_u.set(i,l)}this.$$l={}}}attributeChangedCallback(e,n,s){var r;this.$$r||(e=this.$$g_p(e),this.$$d[e]=ot(e,s,this.$$p_d,"toProp"),(r=this.$$c)==null||r.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),mt(this.$$me),this.$$c=void 0)})}$$g_p(e){return Q(this.$$p_d).find(n=>this.$$p_d[n].attribute===e||!this.$$p_d[n].attribute&&n.toLowerCase()===e)||e}});function ot(t,e,n,s){var i;const r=(i=n[t])==null?void 0:i.type;if(e=r==="Boolean"&&typeof e!="boolean"?e!=null:e,!s||!n[t])return e;if(s==="toAttribute")switch(r){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(r){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Ke(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function ze(t,e,n,s,r,i){let l=class extends Gt{constructor(){super(t,n,r),this.$$p_d=e}static get observedAttributes(){return Q(e).map(u=>(e[u].attribute||u).toLowerCase())}};return Q(e).forEach(u=>{U(l.prototype,u,{get(){return this.$$c&&u in this.$$c?this.$$c[u]:this.$$d[u]},set(o){var f;o=ot(u,o,e),this.$$d[u]=o,(f=this.$$c)==null||f.$set({[u]:o})}})}),s.forEach(u=>{U(l.prototype,u,{get(){var o;return(o=this.$$c)==null?void 0:o[u]}})}),t.element=l,l}var Ve=Ye("<table><tbody><tr><td>Firstname</td></tr></tbody></table>");function Qt(t){var e=Ve();Zt(t,e)}return ze(Qt,{},[],[],!0),a.Table=Qt,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),a}({});

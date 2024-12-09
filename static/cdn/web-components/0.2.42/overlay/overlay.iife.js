var Overlay=function(w){"use strict";var $i=Object.defineProperty;var Mn=w=>{throw TypeError(w)};var xi=(w,b,C)=>b in w?$i(w,b,{enumerable:!0,configurable:!0,writable:!0,value:C}):w[b]=C;var B=(w,b,C)=>xi(w,typeof b!="symbol"?b+"":b,C),Bn=(w,b,C)=>b.has(w)||Mn("Cannot "+C);var k=(w,b,C)=>(Bn(w,b,"read from private field"),C?C.call(w):b.get(w)),$e=(w,b,C)=>b.has(w)?Mn("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(w):b.set(w,C),xe=(w,b,C,kt)=>(Bn(w,b,"write to private field"),kt?kt.call(w,C):b.set(w,C),C);var Y,P;const b="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(b);const C=8,kt=2,Vn="[",Hn="]",gt={},be=!1;function Qt(t){console.warn("hydration_mismatch")}var qn=Array.isArray,Wn=Array.from,St=Object.keys,Lt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor;function In(t){for(var e=0;e<t.length;e++)t[e]()}const U=2,Ee=4,Zt=8,Ce=16,W=32,pt=64,Q=128,Dt=256,S=512,K=1024,wt=2048,Oe=4096,yt=8192,jn=16384,Yn=1<<18,Te=1<<19,Ae=Symbol("$state"),Re=Symbol("legacy props");function ke(t){return t===this.v}function Un(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Kn(t){return!Un(t,this.v)}function Xn(t){throw new Error("effect_in_teardown")}function Jn(){throw new Error("effect_in_unowned_derived")}function zn(t){throw new Error("effect_orphan")}function Gn(){throw new Error("effect_update_depth_exceeded")}function Qn(){throw new Error("hydration_failed")}function Zn(t){throw new Error("props_invalid_value")}function tr(){throw new Error("state_unsafe_local_read")}function er(){throw new Error("state_unsafe_mutation")}let Se=!1;function nr(t){return{f:0,v:t,reactions:null,equals:ke,version:0}}function Le(t,e=!1){const n=nr(t);return e||(n.equals=Kn),n}function Ne(t,e){return $!==null&&vr()&&$.f&(U|Ce)&&(tt===null||!tt.includes(t))&&er(),rr(t,e)}function rr(t,e){return t.equals(e)||(t.v=e,t.version=Je(),De(t,K),m!==null&&m.f&S&&!(m.f&W)&&(O!==null&&O.includes(t)?(I(m,K),Vt(m)):J===null?_r([t]):J.push(t))),e}function De(t,e){var n=t.reactions;if(n!==null)for(var r=n.length,i=0;i<r;i++){var o=n[i],s=o.f;s&K||(I(o,e),s&(S|Q)&&(s&U?De(o,wt):Vt(o)))}}function ir(t){var e=U|K;m===null?e|=Q:m.f|=Te;const n={children:null,ctx:A,deps:null,equals:ke,f:e,fn:t,reactions:null,v:null,version:0,parent:m};if($!==null&&$.f&U){var r=$;(r.children??(r.children=[])).push(n)}return n}function Pe(t){var e=t.children;if(e!==null){t.children=null;for(var n=0;n<e.length;n+=1){var r=e[n];r.f&U?te(r):$t(r)}}}function Fe(t){var e,n=m;X(t.parent);try{Pe(t),e=ze(t)}finally{X(n)}return e}function Me(t){var e=Fe(t),n=(st||t.f&Q)&&t.deps!==null?wt:S;I(t,n),t.equals(e)||(t.v=e,t.version=Je())}function te(t){Pe(t),bt(t,0),I(t,yt),t.v=t.children=t.deps=t.ctx=t.reactions=null}function or(t){m===null&&$===null&&zn(),$!==null&&$.f&Q&&Jn(),re&&Xn()}function sr(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Pt(t,e,n,r=!0){var i=(t&pt)!==0,o=m,s={ctx:A,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|K,first:null,fn:e,last:null,next:null,parent:i?null:o,prev:null,teardown:null,transitions:null,version:0};if(n){var l=rt;try{Ue(!0),ie(s),s.f|=jn}catch(a){throw $t(s),a}finally{Ue(l)}}else e!==null&&Vt(s);var c=n&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&Te)===0;if(!c&&!i&&r&&(o!==null&&sr(s,o),$!==null&&$.f&U)){var u=$;(u.children??(u.children=[])).push(s)}return s}function lr(t){or();var e=m!==null&&(m.f&W)!==0&&A!==null&&!A.m;if(e){var n=A;(n.e??(n.e=[])).push({fn:t,effect:m,reaction:$})}else{var r=ee(t);return r}}function Be(t){const e=Pt(pt,t,!0);return()=>{$t(e)}}function ee(t){return Pt(Ee,t,!1)}function Ve(t){return Pt(Zt,t,!0)}function cr(t,e=!0){return Pt(Zt|W,t,!0,e)}function He(t){var e=t.teardown;if(e!==null){const n=re,r=$;Ke(!0),ot(null);try{e.call(null)}finally{Ke(n),ot(r)}}}function qe(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var n=0;n<e.length;n+=1)te(e[n])}}function We(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;$t(n,e),n=r}}function ur(t){for(var e=t.first;e!==null;){var n=e.next;e.f&W||$t(e),e=n}}function $t(t,e=!0){var n=!1;if((e||t.f&Yn)&&t.nodes_start!==null){for(var r=t.nodes_start,i=t.nodes_end;r!==null;){var o=r===i?null:ct(r);r.remove(),r=o}n=!0}We(t,e&&!n),qe(t),bt(t,0),I(t,yt);var s=t.transitions;if(s!==null)for(const c of s)c.stop();He(t);var l=t.parent;l!==null&&l.first!==null&&Ie(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ie(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}let Ft=!1,ne=[];function je(){Ft=!1;const t=ne.slice();ne=[],In(t)}function fr(t){Ft||(Ft=!0,queueMicrotask(je)),ne.push(t)}function ar(){Ft&&je()}function dr(t){throw new Error("lifecycle_outside_component")}const Ye=0,hr=1;let Mt=Ye,xt=!1,rt=!1,re=!1;function Ue(t){rt=t}function Ke(t){re=t}let Z=[],it=0,bi=[],$=null;function ot(t){$=t}let m=null;function X(t){m=t}let tt=null,O=null,L=0,J=null;function _r(t){J=t}let Xe=0,st=!1,A=null;function Je(){return++Xe}function vr(){return!Se}function Bt(t){var s,l;var e=t.f;if(e&K)return!0;if(e&wt){var n=t.deps,r=(e&Q)!==0;if(n!==null){var i;if(e&Dt){for(i=0;i<n.length;i++)((s=n[i]).reactions??(s.reactions=[])).push(t);t.f^=Dt}for(i=0;i<n.length;i++){var o=n[i];if(Bt(o)&&Me(o),r&&m!==null&&!st&&!((l=o==null?void 0:o.reactions)!=null&&l.includes(t))&&(o.reactions??(o.reactions=[])).push(t),o.version>t.version)return!0}}r||I(t,S)}return!1}function mr(t,e,n){throw t}function ze(t){var h;var e=O,n=L,r=J,i=$,o=st,s=tt,l=A,c=t.f;O=null,L=0,J=null,$=c&(W|pt)?null:t,st=!rt&&(c&Q)!==0,tt=null,A=t.ctx;try{var u=(0,t.fn)(),a=t.deps;if(O!==null){var f;if(bt(t,L),a!==null&&L>0)for(a.length=L+O.length,f=0;f<O.length;f++)a[L+f]=O[f];else t.deps=a=O;if(!st)for(f=L;f<a.length;f++)((h=a[f]).reactions??(h.reactions=[])).push(t)}else a!==null&&L<a.length&&(bt(t,L),a.length=L);return u}finally{O=e,L=n,J=r,$=i,st=o,tt=s,A=l}}function gr(t,e){let n=e.reactions;if(n!==null){var r=n.indexOf(t);if(r!==-1){var i=n.length-1;i===0?n=e.reactions=null:(n[r]=n[i],n.pop())}}n===null&&e.f&U&&(O===null||!O.includes(e))&&(I(e,wt),e.f&(Q|Dt)||(e.f^=Dt),bt(e,0))}function bt(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)gr(t,n[r])}function ie(t){var e=t.f;if(!(e&yt)){I(t,S);var n=m;m=t;try{e&Ce?ur(t):We(t),qe(t),He(t);var r=ze(t);t.teardown=typeof r=="function"?r:null,t.version=Xe}catch(i){mr(i)}finally{m=n}}}function Ge(){it>1e3&&(it=0,Gn()),it++}function Qe(t){var e=t.length;if(e!==0){Ge();var n=rt;rt=!0;try{for(var r=0;r<e;r++){var i=t[r];i.f&S||(i.f^=S);var o=[];Ze(i,o),pr(o)}}finally{rt=n}}}function pr(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];!(r.f&(yt|Oe))&&Bt(r)&&(ie(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ie(r):r.fn=null))}}function wr(){if(xt=!1,it>1001)return;const t=Z;Z=[],Qe(t),xt||(it=0)}function Vt(t){Mt===Ye&&(xt||(xt=!0,queueMicrotask(wr)));for(var e=t;e.parent!==null;){e=e.parent;var n=e.f;if(n&(pt|W)){if(!(n&S))return;e.f^=S}}Z.push(e)}function Ze(t,e){var n=t.first,r=[];t:for(;n!==null;){var i=n.f,o=(i&W)!==0,s=o&&(i&S)!==0;if(!s&&!(i&Oe))if(i&Zt){o?n.f^=S:Bt(n)&&ie(n);var l=n.first;if(l!==null){n=l;continue}}else i&Ee&&r.push(n);var c=n.next;if(c===null){let f=n.parent;for(;f!==null;){if(t===f)break t;var u=f.next;if(u!==null){n=u;continue t}f=f.parent}}n=c}for(var a=0;a<r.length;a++)l=r[a],e.push(l),Ze(l,e)}function oe(t){var e=Mt,n=Z;try{Ge();const i=[];Mt=hr,Z=i,xt=!1,Qe(n);var r=t==null?void 0:t();return ar(),(Z.length>0||i.length>0)&&oe(),it=0,r}finally{Mt=e,Z=n}}function lt(t){var l;var e=t.f,n=(e&U)!==0;if(n&&e&yt){var r=Fe(t);return te(t),r}if($!==null){tt!==null&&tt.includes(t)&&tr();var i=$.deps;O===null&&i!==null&&i[L]===t?L++:O===null?O=[t]:O.push(t),J!==null&&m!==null&&m.f&S&&!(m.f&W)&&J.includes(t)&&(I(m,K),Vt(m))}else if(n&&t.deps===null){var o=t,s=o.parent;s!==null&&!((l=s.deriveds)!=null&&l.includes(o))&&(s.deriveds??(s.deriveds=[])).push(o)}return n&&(o=t,Bt(o)&&Me(o)),t.v}function se(t){const e=$;try{return $=null,t()}finally{$=e}}const yr=~(K|wt|S);function I(t,e){t.f=t.f&yr|e}function tn(t,e=!1,n){A={p:A,c:null,e:null,m:!1,s:t,x:null,l:null}}function en(t){const e=A;if(e!==null){t!==void 0&&(e.x=t);const s=e.e;if(s!==null){var n=m,r=$;e.e=null;try{for(var i=0;i<s.length;i++){var o=s[i];X(o.effect),ot(o.reaction),ee(o.fn)}}finally{X(n),ot(r)}}A=e.p,e.m=!0}return t||{}}var nn,rn,on;function le(){if(nn===void 0){nn=window;var t=Element.prototype,e=Node.prototype;rn=Nt(e,"firstChild").get,on=Nt(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function ce(t=""){return document.createTextNode(t)}function Et(t){return rn.call(t)}function ct(t){return on.call(t)}function sn(t,e){if(!D)return Et(t);var n=Et(T);return n===null&&(n=T.appendChild(ce())),ut(n),n}function $r(t,e){if(!D){var n=Et(t);return n instanceof Comment&&n.data===""?ct(n):n}return T}function xr(t,e=1,n=!1){let r=D?T:t;for(var i;e--;)i=r,r=ct(r);if(!D)return r;var o=r==null?void 0:r.nodeType;if(n&&o!==3){var s=ce();return r===null?i==null||i.after(s):r.before(s),ut(s),s}return ut(r),r}function br(t){t.textContent=""}let D=!1;function Ht(t){D=t}let T;function ut(t){if(t===null)throw Qt(),gt;return T=t}function ue(){return ut(ct(T))}function ln(t){if(D){if(ct(T)!==null)throw Qt(),gt;T=t}}const cn=new Set,fe=new Set;function Er(t){for(var e=0;e<t.length;e++)cn.add(t[e]);for(var n of fe)n(t)}function qt(t){var x;var e=this,n=e.ownerDocument,r=t.type,i=((x=t.composedPath)==null?void 0:x.call(t))||[],o=i[0]||t.target,s=0,l=t.__root;if(l){var c=i.indexOf(l);if(c!==-1&&(e===document||e===window)){t.__root=e;return}var u=i.indexOf(e);if(u===-1)return;c<=u&&(s=c)}if(o=i[s]||t.target,o!==e){Lt(t,"currentTarget",{configurable:!0,get(){return o||n}});var a=$,f=m;ot(null),X(null);try{for(var h,d=[];o!==null;){var _=o.assignedSlot||o.parentNode||o.host||null;try{var v=o["__"+r];if(v!==void 0&&!o.disabled)if(qn(v)){var[g,...E]=v;g.apply(o,[t,...E])}else v.call(o,t)}catch(y){h?d.push(y):h=y}if(t.cancelBubble||_===e||_===null)break;o=_}if(h){for(let y of d)queueMicrotask(()=>{throw y});throw h}}finally{t.__root=e,delete t.currentTarget,ot(a),X(f)}}}function Cr(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function ae(t,e){var n=m;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function Or(t,e){var n=(e&kt)!==0,r,i=!t.startsWith("<!>");return()=>{if(D)return ae(T,null),T;r===void 0&&(r=Cr(i?t:"<!>"+t));var o=n?document.importNode(r,!0):r.cloneNode(!0);{var s=Et(o),l=o.lastChild;ae(s,l)}return o}}function un(t,e){if(D){m.nodes_end=T,ue();return}t!==null&&t.before(e)}const Tr=["touchstart","touchmove"];function Ar(t){return Tr.includes(t)}function fn(t,e){return an(t,e)}function Rr(t,e){le(),e.intro=e.intro??!1;const n=e.target,r=D,i=T;try{for(var o=Et(n);o&&(o.nodeType!==8||o.data!==Vn);)o=ct(o);if(!o)throw gt;Ht(!0),ut(o),ue();const s=an(t,{...e,anchor:o});if(T===null||T.nodeType!==8||T.data!==Hn)throw Qt(),gt;return Ht(!1),s}catch(s){if(s===gt)return e.recover===!1&&Qn(),le(),br(n),Ht(!1),fn(t,e);throw s}finally{Ht(r),ut(i)}}const ft=new Map;function an(t,{target:e,anchor:n,props:r={},events:i,context:o,intro:s=!0}){le();var l=new Set,c=f=>{for(var h=0;h<f.length;h++){var d=f[h];if(!l.has(d)){l.add(d);var _=Ar(d);e.addEventListener(d,qt,{passive:_});var v=ft.get(d);v===void 0?(document.addEventListener(d,qt,{passive:_}),ft.set(d,1)):ft.set(d,v+1)}}};c(Wn(cn)),fe.add(c);var u=void 0,a=Be(()=>{var f=n??e.appendChild(ce());return cr(()=>{if(o){tn({});var h=A;h.c=o}i&&(r.$$events=i),D&&ae(f,null),u=t(f,r)||{},D&&(m.nodes_end=T),o&&en()}),()=>{var _;for(var h of l){e.removeEventListener(h,qt);var d=ft.get(h);--d===0?(document.removeEventListener(h,qt),ft.delete(h)):ft.set(h,d)}fe.delete(c),de.delete(u),f!==n&&((_=f.parentNode)==null||_.removeChild(f))}});return de.set(u,a),u}let de=new WeakMap;function kr(t){const e=de.get(t);e&&e()}function dn(t,e,n,r,i){var l;D&&ue();var o=(l=e.$$slots)==null?void 0:l[n],s=!1;o===!0&&(o=e[n==="default"?"children":n],s=!0),o===void 0||o(t,s?()=>r:r)}function hn(t,e){return t===e||(t==null?void 0:t[Ae])===e}function Sr(t={},e,n,r){return ee(()=>{var i,o;return Ve(()=>{i=o,o=[],se(()=>{t!==n(...o)&&(e(t,...o),i&&hn(n(...i),t)&&e(null,...i))})}),()=>{fr(()=>{o&&hn(n(...o),t)&&e(null,...o)})}}),t}function Lr(t){A===null&&dr(),lr(()=>{const e=se(t);if(typeof e=="function")return e})}function Nr(t){for(var e=m,n=m;e!==null&&!(e.f&(W|pt));)e=e.parent;try{return X(e),t()}finally{X(n)}}function Dr(t,e,n,r){var R;var i=!Se,o=(n&C)!==0,s=!1,l;l=t[e];var c=Ae in t||Re in t,u=((R=Nt(t,e))==null?void 0:R.set)??(c&&o&&e in t?p=>t[e]=p:void 0),a=r,f=!0,h=!1,d=()=>(h=!0,f&&(f=!1,a=r),a);l===void 0&&r!==void 0&&(u&&i&&Zn(),l=d(),u&&u(l));var _;if(_=()=>{var p=t[e];return p===void 0?d():(f=!0,h=!1,p)},u){var v=t.$$legacy;return function(p,q){return arguments.length>0?((!q||v||s)&&u(q?_():p),p):_()}}var g=!1,E=!1,x=Le(l),y=Nr(()=>ir(()=>{var p=_(),q=lt(x);return g?(g=!1,E=!0,q):(E=!1,x.v=p)}));return function(p,q){if(arguments.length>0){const G=q?lt(y):p;return y.equals(G)||(g=!0,Ne(x,G),h&&a!==void 0&&(a=G),se(()=>lt(y))),p}return lt(y)}}function Pr(t){return new Fr(t)}class Fr{constructor(e){$e(this,Y);$e(this,P);var o;var n=new Map,r=(s,l)=>{var c=Le(l);return n.set(s,c),c};const i=new Proxy({...e.props||{},$$events:{}},{get(s,l){return lt(n.get(l)??r(l,Reflect.get(s,l)))},has(s,l){return l===Re?!0:(lt(n.get(l)??r(l,Reflect.get(s,l))),Reflect.has(s,l))},set(s,l,c){return Ne(n.get(l)??r(l,c),c),Reflect.set(s,l,c)}});xe(this,P,(e.hydrate?Rr:fn)(e.component,{target:e.target,anchor:e.anchor,props:i,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((o=e==null?void 0:e.props)!=null&&o.$$host)||e.sync===!1)&&oe(),xe(this,Y,i.$$events);for(const s of Object.keys(k(this,P)))s==="$set"||s==="$destroy"||s==="$on"||Lt(this,s,{get(){return k(this,P)[s]},set(l){k(this,P)[s]=l},enumerable:!0});k(this,P).$set=s=>{Object.assign(i,s)},k(this,P).$destroy=()=>{kr(k(this,P))}}$set(e){k(this,P).$set(e)}$on(e,n){k(this,Y)[e]=k(this,Y)[e]||[];const r=(...i)=>n.call(this,...i);return k(this,Y)[e].push(r),()=>{k(this,Y)[e]=k(this,Y)[e].filter(i=>i!==r)}}$destroy(){k(this,P).$destroy()}}Y=new WeakMap,P=new WeakMap;let _n;typeof HTMLElement=="function"&&(_n=class extends HTMLElement{constructor(e,n,r){super();B(this,"$$ctor");B(this,"$$s");B(this,"$$c");B(this,"$$cn",!1);B(this,"$$d",{});B(this,"$$r",!1);B(this,"$$p_d",{});B(this,"$$l",{});B(this,"$$l_u",new Map);B(this,"$$me");this.$$ctor=e,this.$$s=n,r&&this.attachShadow({mode:"open"})}addEventListener(e,n,r){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(n),this.$$c){const i=this.$$c.$on(e,n);this.$$l_u.set(n,i)}super.addEventListener(e,n,r)}removeEventListener(e,n,r){if(super.removeEventListener(e,n,r),this.$$c){const i=this.$$l_u.get(n);i&&(i(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(i){return o=>{const s=document.createElement("slot");i!=="default"&&(s.name=i),un(o,s)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=Mr(this);for(const i of this.$$s)i in r&&(i==="default"&&!this.$$d.children?(this.$$d.children=e(i),n.default=!0):n[i]=e(i));for(const i of this.attributes){const o=this.$$g_p(i.name);o in this.$$d||(this.$$d[o]=Wt(o,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=Pr({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=Be(()=>{Ve(()=>{var i;this.$$r=!0;for(const o of St(this.$$c)){if(!((i=this.$$p_d[o])!=null&&i.reflect))continue;this.$$d[o]=this.$$c[o];const s=Wt(o,this.$$d[o],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,s)}this.$$r=!1})});for(const i in this.$$l)for(const o of this.$$l[i]){const s=this.$$c.$on(i,o);this.$$l_u.set(o,s)}this.$$l={}}}attributeChangedCallback(e,n,r){var i;this.$$r||(e=this.$$g_p(e),this.$$d[e]=Wt(e,r,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return St(this.$$p_d).find(n=>this.$$p_d[n].attribute===e||!this.$$p_d[n].attribute&&n.toLowerCase()===e)||e}});function Wt(t,e,n,r){var o;const i=(o=n[t])==null?void 0:o.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Mr(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function Br(t,e,n,r,i,o){let s=class extends _n{constructor(){super(t,n,i),this.$$p_d=e}static get observedAttributes(){return St(e).map(l=>(e[l].attribute||l).toLowerCase())}};return St(e).forEach(l=>{Lt(s.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(c){var f;c=Wt(l,c,e),this.$$d[l]=c;var u=this.$$c;if(u){var a=(f=Nt(u,l))==null?void 0:f.get;a?u[l]=c:u.$set({[l]:c})}}})}),r.forEach(l=>{Lt(s.prototype,l,{get(){var c;return(c=this.$$c)==null?void 0:c[l]}})}),t.element=s,s}const he=Math.min,at=Math.max,It=Math.round,V=t=>({x:t,y:t}),Vr={left:"right",right:"left",bottom:"top",top:"bottom"},Hr={start:"end",end:"start"};function vn(t,e,n){return at(t,he(e,n))}function jt(t,e){return typeof t=="function"?t(e):t}function et(t){return t.split("-")[0]}function Yt(t){return t.split("-")[1]}function mn(t){return t==="x"?"y":"x"}function gn(t){return t==="y"?"height":"width"}function Ut(t){return["top","bottom"].includes(et(t))?"y":"x"}function pn(t){return mn(Ut(t))}function qr(t,e,n){n===void 0&&(n=!1);const r=Yt(t),i=pn(t),o=gn(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=Kt(s)),[s,Kt(s)]}function Wr(t){const e=Kt(t);return[_e(t),e,_e(e)]}function _e(t){return t.replace(/start|end/g,e=>Hr[e])}function Ir(t,e,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?o:s;default:return[]}}function jr(t,e,n,r){const i=Yt(t);let o=Ir(et(t),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),e&&(o=o.concat(o.map(_e)))),o}function Kt(t){return t.replace(/left|right|bottom|top/g,e=>Vr[e])}function Yr(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ur(t){return typeof t!="number"?Yr(t):{top:t,right:t,bottom:t,left:t}}function Xt(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function wn(t,e,n){let{reference:r,floating:i}=t;const o=Ut(e),s=pn(e),l=gn(s),c=et(e),u=o==="y",a=r.x+r.width/2-i.width/2,f=r.y+r.height/2-i.height/2,h=r[l]/2-i[l]/2;let d;switch(c){case"top":d={x:a,y:r.y-i.height};break;case"bottom":d={x:a,y:r.y+r.height};break;case"right":d={x:r.x+r.width,y:f};break;case"left":d={x:r.x-i.width,y:f};break;default:d={x:r.x,y:r.y}}switch(Yt(e)){case"start":d[s]-=h*(n&&u?-1:1);break;case"end":d[s]+=h*(n&&u?-1:1);break}return d}const Kr=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,l=o.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let u=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:a,y:f}=wn(u,r,c),h=r,d={},_=0;for(let v=0;v<l.length;v++){const{name:g,fn:E}=l[v],{x,y,data:R,reset:p}=await E({x:a,y:f,initialPlacement:r,placement:h,strategy:i,middlewareData:d,rects:u,platform:s,elements:{reference:t,floating:e}});a=x??a,f=y??f,d={...d,[g]:{...d[g],...R}},p&&_<=50&&(_++,typeof p=="object"&&(p.placement&&(h=p.placement),p.rects&&(u=p.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):p.rects),{x:a,y:f}=wn(u,h,c)),v=-1)}return{x:a,y:f,placement:h,strategy:i,middlewareData:d}};async function yn(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:o,rects:s,elements:l,strategy:c}=t,{boundary:u="clippingAncestors",rootBoundary:a="viewport",elementContext:f="floating",altBoundary:h=!1,padding:d=0}=jt(e,t),_=Ur(d),g=l[h?f==="floating"?"reference":"floating":f],E=Xt(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(g)))==null||n?g:g.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:u,rootBoundary:a,strategy:c})),x=f==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),R=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},p=Xt(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:y,strategy:c}):x);return{top:(E.top-p.top+_.top)/R.y,bottom:(p.bottom-E.bottom+_.bottom)/R.y,left:(E.left-p.left+_.left)/R.x,right:(p.right-E.right+_.right)/R.x}}const Xr=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:l,platform:c,elements:u}=e,{mainAxis:a=!0,crossAxis:f=!0,fallbackPlacements:h,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:v=!0,...g}=jt(t,e);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const E=et(i),x=et(l)===l,y=await(c.isRTL==null?void 0:c.isRTL(u.floating)),R=h||(x||!v?[Kt(l)]:Wr(l));!h&&_!=="none"&&R.push(...jr(l,v,_,y));const p=[l,...R],q=await yn(e,g),G=[];let Tt=((r=o.flip)==null?void 0:r.overflows)||[];if(a&&G.push(q[E]),f){const nt=qr(i,s,y);G.push(q[nt[0]],q[nt[1]])}if(Tt=[...Tt,{placement:i,overflows:G}],!G.every(nt=>nt<=0)){var Nn,Dn;const nt=(((Nn=o.flip)==null?void 0:Nn.index)||0)+1,Fn=p[nt];if(Fn)return{data:{index:nt,overflows:Tt},reset:{placement:Fn}};let At=(Dn=Tt.filter(vt=>vt.overflows[0]<=0).sort((vt,mt)=>vt.overflows[1]-mt.overflows[1])[0])==null?void 0:Dn.placement;if(!At)switch(d){case"bestFit":{var Pn;const vt=(Pn=Tt.map(mt=>[mt.placement,mt.overflows.filter(Rt=>Rt>0).reduce((Rt,yi)=>Rt+yi,0)]).sort((mt,Rt)=>mt[1]-Rt[1])[0])==null?void 0:Pn[0];vt&&(At=vt);break}case"initialPlacement":At=l;break}if(i!==At)return{reset:{placement:At}}}return{}}}};async function Jr(t,e){const{placement:n,platform:r,elements:i}=t,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=et(n),l=Yt(n),c=Ut(n)==="y",u=["left","top"].includes(s)?-1:1,a=o&&c?-1:1,f=jt(e,t);let{mainAxis:h,crossAxis:d,alignmentAxis:_}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof _=="number"&&(d=l==="end"?_*-1:_),c?{x:d*a,y:h*u}:{x:h*u,y:d*a}}const zr=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,r;const{x:i,y:o,placement:s,middlewareData:l}=e,c=await Jr(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:i+c.x,y:o+c.y,data:{...c,placement:s}}}}},Gr=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:r,placement:i}=e,{mainAxis:o=!0,crossAxis:s=!1,limiter:l={fn:g=>{let{x:E,y:x}=g;return{x:E,y:x}}},...c}=jt(t,e),u={x:n,y:r},a=await yn(e,c),f=Ut(et(i)),h=mn(f);let d=u[h],_=u[f];if(o){const g=h==="y"?"top":"left",E=h==="y"?"bottom":"right",x=d+a[g],y=d-a[E];d=vn(x,d,y)}if(s){const g=f==="y"?"top":"left",E=f==="y"?"bottom":"right",x=_+a[g],y=_-a[E];_=vn(x,_,y)}const v=l.fn({...e,[h]:d,[f]:_});return{...v,data:{x:v.x-n,y:v.y-r}}}}};function Jt(){return typeof window<"u"}function dt(t){return $n(t)?(t.nodeName||"").toLowerCase():"#document"}function N(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function j(t){var e;return(e=($n(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function $n(t){return Jt()?t instanceof Node||t instanceof N(t).Node:!1}function F(t){return Jt()?t instanceof Element||t instanceof N(t).Element:!1}function H(t){return Jt()?t instanceof HTMLElement||t instanceof N(t).HTMLElement:!1}function xn(t){return!Jt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof N(t).ShadowRoot}function Ct(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=M(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function Qr(t){return["table","td","th"].includes(dt(t))}function zt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function ve(t){const e=me(),n=F(t)?M(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Zr(t){let e=z(t);for(;H(e)&&!ht(e);){if(ve(e))return e;if(zt(e))return null;e=z(e)}return null}function me(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ht(t){return["html","body","#document"].includes(dt(t))}function M(t){return N(t).getComputedStyle(t)}function Gt(t){return F(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function z(t){if(dt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||xn(t)&&t.host||j(t);return xn(e)?e.host:e}function bn(t){const e=z(t);return ht(e)?t.ownerDocument?t.ownerDocument.body:t.body:H(e)&&Ct(e)?e:bn(e)}function ge(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=bn(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),s=N(i);if(o){const l=pe(s);return e.concat(s,s.visualViewport||[],Ct(i)?i:[],l&&n?ge(l):[])}return e.concat(i,ge(i,[],n))}function pe(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function En(t){const e=M(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=H(t),o=i?t.offsetWidth:n,s=i?t.offsetHeight:r,l=It(n)!==o||It(r)!==s;return l&&(n=o,r=s),{width:n,height:r,$:l}}function Cn(t){return F(t)?t:t.contextElement}function _t(t){const e=Cn(t);if(!H(e))return V(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=En(e);let s=(o?It(n.width):n.width)/r,l=(o?It(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const ti=V(0);function On(t){const e=N(t);return!me()||!e.visualViewport?ti:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ei(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==N(t)?!1:e}function Ot(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=Cn(t);let s=V(1);e&&(r?F(r)&&(s=_t(r)):s=_t(t));const l=ei(o,n,r)?On(o):V(0);let c=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,a=i.width/s.x,f=i.height/s.y;if(o){const h=N(o),d=r&&F(r)?N(r):r;let _=h,v=pe(_);for(;v&&r&&d!==_;){const g=_t(v),E=v.getBoundingClientRect(),x=M(v),y=E.left+(v.clientLeft+parseFloat(x.paddingLeft))*g.x,R=E.top+(v.clientTop+parseFloat(x.paddingTop))*g.y;c*=g.x,u*=g.y,a*=g.x,f*=g.y,c+=y,u+=R,_=N(v),v=pe(_)}}return Xt({width:a,height:f,x:c,y:u})}function we(t,e){const n=Gt(t).scrollLeft;return e?e.left+n:Ot(j(t)).left+n}function Tn(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:we(t,r)),o=r.top+e.scrollTop;return{x:i,y:o}}function ni(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",s=j(r),l=e?zt(e.floating):!1;if(r===s||l&&o)return n;let c={scrollLeft:0,scrollTop:0},u=V(1);const a=V(0),f=H(r);if((f||!f&&!o)&&((dt(r)!=="body"||Ct(s))&&(c=Gt(r)),H(r))){const d=Ot(r);u=_t(r),a.x=d.x+r.clientLeft,a.y=d.y+r.clientTop}const h=s&&!f&&!o?Tn(s,c,!0):V(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+a.x+h.x,y:n.y*u.y-c.scrollTop*u.y+a.y+h.y}}function ri(t){return Array.from(t.getClientRects())}function ii(t){const e=j(t),n=Gt(t),r=t.ownerDocument.body,i=at(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=at(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+we(t);const l=-n.scrollTop;return M(r).direction==="rtl"&&(s+=at(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:l}}function oi(t,e){const n=N(t),r=j(t),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,l=0,c=0;if(i){o=i.width,s=i.height;const u=me();(!u||u&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:o,height:s,x:l,y:c}}function si(t,e){const n=Ot(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=H(t)?_t(t):V(1),s=t.clientWidth*o.x,l=t.clientHeight*o.y,c=i*o.x,u=r*o.y;return{width:s,height:l,x:c,y:u}}function An(t,e,n){let r;if(e==="viewport")r=oi(t,n);else if(e==="document")r=ii(j(t));else if(F(e))r=si(e,n);else{const i=On(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Xt(r)}function Rn(t,e){const n=z(t);return n===e||!F(n)||ht(n)?!1:M(n).position==="fixed"||Rn(n,e)}function li(t,e){const n=e.get(t);if(n)return n;let r=ge(t,[],!1).filter(l=>F(l)&&dt(l)!=="body"),i=null;const o=M(t).position==="fixed";let s=o?z(t):t;for(;F(s)&&!ht(s);){const l=M(s),c=ve(s);!c&&l.position==="fixed"&&(i=null),(o?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Ct(s)&&!c&&Rn(t,s))?r=r.filter(a=>a!==s):i=l,s=z(s)}return e.set(t,r),r}function ci(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const s=[...n==="clippingAncestors"?zt(e)?[]:li(e,this._c):[].concat(n),r],l=s[0],c=s.reduce((u,a)=>{const f=An(e,a,i);return u.top=at(f.top,u.top),u.right=he(f.right,u.right),u.bottom=he(f.bottom,u.bottom),u.left=at(f.left,u.left),u},An(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function ui(t){const{width:e,height:n}=En(t);return{width:e,height:n}}function fi(t,e,n){const r=H(e),i=j(e),o=n==="fixed",s=Ot(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const c=V(0);if(r||!r&&!o)if((dt(e)!=="body"||Ct(i))&&(l=Gt(e)),r){const h=Ot(e,!0,o,e);c.x=h.x+e.clientLeft,c.y=h.y+e.clientTop}else i&&(c.x=we(i));const u=i&&!r&&!o?Tn(i,l):V(0),a=s.left+l.scrollLeft-c.x-u.x,f=s.top+l.scrollTop-c.y-u.y;return{x:a,y:f,width:s.width,height:s.height}}function ye(t){return M(t).position==="static"}function kn(t,e){if(!H(t)||M(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return j(t)===n&&(n=n.ownerDocument.body),n}function Sn(t,e){const n=N(t);if(zt(t))return n;if(!H(t)){let i=z(t);for(;i&&!ht(i);){if(F(i)&&!ye(i))return i;i=z(i)}return n}let r=kn(t,e);for(;r&&Qr(r)&&ye(r);)r=kn(r,e);return r&&ht(r)&&ye(r)&&!ve(r)?n:r||Zr(t)||n}const ai=async function(t){const e=this.getOffsetParent||Sn,n=this.getDimensions,r=await n(t.floating);return{reference:fi(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function di(t){return M(t).direction==="rtl"}const hi={convertOffsetParentRelativeRectToViewportRelativeRect:ni,getDocumentElement:j,getClippingRect:ci,getOffsetParent:Sn,getElementRects:ai,getClientRects:ri,getDimensions:ui,getScale:_t,isElement:F,isRTL:di},_i=zr,vi=Gr,mi=Xr,gi=(t,e,n)=>{const r=new Map,i={platform:hi,...n},o={...i.platform,_c:r};return Kr(t,e,{...i,platform:o})};var pi=(t,e)=>e({trigger:t.target}),wi=Or('<button><!></button> <span class="hidden absolute z-50"><!></span>',1);function Ln(t,e){tn(e,!0);let n,r,i=!1,o=Dr(e,"placement",7);function s(d){if(!d.trigger)throw new Error("trigger is required");d.placement||(d.placement=o()||"bottom"),r=d.trigger,gi(r,n,{placement:d.placement,middleware:[mi({padding:2}),vi({padding:2}),_i(2)]}).then(({x:_,y:v})=>{Object.assign(n.style,{left:`${_}px`,top:`${v}px`})}),n.classList.remove("hidden"),i=!0}function l(){n.classList.add("hidden"),i=!1}Lr(()=>{const d=_=>{i&&!n.contains(_.target)&&!r.contains(_.target)&&l()};document.addEventListener("click",d)});var c=wi(),u=$r(c);u.__click=[pi,s];var a=sn(u);dn(a,e,"trigger",{}),ln(u);var f=xr(u,2),h=sn(f);return dn(h,e,"overlay",{}),ln(f),Sr(f,d=>n=d,()=>n),un(t,c),en({openOverlay:s,closeOverlay:l,get placement(){return o()},set placement(d){o(d),oe()}})}return Er(["click"]),customElements.define("sui-overlay",Br(Ln,{placement:{}},["trigger","overlay"],["openOverlay","closeOverlay"],!0)),w.Overlay=Ln,Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}),w}({});

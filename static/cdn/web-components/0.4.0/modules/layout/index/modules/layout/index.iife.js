var Layout=function(m){"use strict";var Zi=Object.defineProperty;var nr=m=>{throw TypeError(m)};var to=(m,y,$)=>y in m?Zi(m,y,{enumerable:!0,configurable:!0,writable:!0,value:$}):m[y]=$;var V=(m,y,$)=>to(m,typeof y!="symbol"?y+"":y,$),rr=(m,y,$)=>y.has(m)||nr("Cannot "+$);var k=(m,y,$)=>(rr(m,y,"read from private field"),$?$.call(m):y.get(m)),Me=(m,y,$)=>y.has(m)?nr("Cannot add the same private member more than once"):y instanceof WeakSet?y.add(m):y.set(m,$),Be=(m,y,$,Dt)=>(rr(m,y,"write to private field"),Dt?Dt.call(m,$):y.set(m,$),$);var U,P;const y="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(y);let $=!1,Dt=!1;function ir(){$=!0}ir();const or=1,sr=2,lr="[",fr="]",bt={},ur=["touchstart","touchmove"];function cr(t){return ur.includes(t)}const se=!1;var Ve=Array.isArray,ar=Array.prototype.indexOf,dr=Array.from,Nt=Object.keys,Pt=Object.defineProperty,le=Object.getOwnPropertyDescriptor,hr=Object.getOwnPropertyDescriptors,_r=Object.getPrototypeOf;function vr(t){return t()}function fe(t){for(var e=0;e<t.length;e++)t[e]()}const L=2,He=4,ue=8,Ie=16,j=32,et=64,Ft=128,nt=256,Mt=512,D=1024,K=2048,ft=4096,Bt=8192,ut=16384,pr=32768,mr=65536,gr=1<<19,je=1<<20,ce=Symbol("$state"),wr=Symbol("legacy props");function qe(t){return t===this.v}function yr(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function $r(t){return!yr(t,this.v)}function xr(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function br(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Er(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Ar(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Tr(){throw new Error("https://svelte.dev/e/hydration_failed")}function Or(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Cr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function We(t,e){var n={f:0,v:t,reactions:null,equals:qe,rv:0,wv:0};return n}function Ye(t,e=!1){var r;const n=We(t);return e||(n.equals=$r),$&&w!==null&&w.l!==null&&((r=w.l).s??(r.s=[])).push(n),n}function Ue(t,e){return x!==null&&!G&&Yt()&&x.f&(L|Ie)&&(it===null||!it.includes(t))&&Cr(),kr(t,e)}function kr(t,e){return t.equals(e)||(t.v,t.v=e,t.wv=pn(),Ke(t,K),Yt()&&g!==null&&g.f&D&&!(g.f&(j|et))&&(q===null?Yr([t]):q.push(t))),e}function Ke(t,e){var n=t.reactions;if(n!==null)for(var r=Yt(),i=n.length,o=0;o<i;o++){var s=n[o],l=s.f;l&K||!r&&s===g||(W(s,e),l&(D|nt)&&(l&L?Ke(s,ft):$e(s)))}}function ae(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let N=!1;function Vt(t){N=t}let T;function ct(t){if(t===null)throw ae(),bt;return T=t}function de(){return ct(dt(T))}function Xe(t){if(N){if(dt(T)!==null)throw ae(),bt;T=t}}var Ge,Je,ze;function he(){if(Ge===void 0){Ge=window;var t=Element.prototype,e=Node.prototype;Je=le(e,"firstChild").get,ze=le(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function _e(t=""){return document.createTextNode(t)}function at(t){return Je.call(t)}function dt(t){return ze.call(t)}function Qe(t,e){if(!N)return at(t);var n=at(T);return n===null&&(n=T.appendChild(_e())),ct(n),n}function Rr(t,e){if(!N){var n=at(t);return n instanceof Comment&&n.data===""?dt(n):n}return T}function Sr(t,e=1,n=!1){let r=N?T:t;for(var i;e--;)i=r,r=dt(r);if(!N)return r;var o=r==null?void 0:r.nodeType;if(n&&o!==3){var s=_e();return r===null?i==null||i.after(s):r.before(s),ct(s),s}return ct(r),r}function Lr(t){t.textContent=""}function Ze(t){var e=L|K;g===null?e|=nt:g.f|=je;var n=x!==null&&x.f&L?x:null;const r={children:null,ctx:w,deps:null,equals:qe,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??g};return n!==null&&(n.children??(n.children=[])).push(r),r}function tn(t){var e=t.children;if(e!==null){t.children=null;for(var n=0;n<e.length;n+=1){var r=e[n];r.f&L?ve(r):X(r)}}}function Dr(t){for(var e=t.parent;e!==null;){if(!(e.f&L))return e;e=e.parent}return null}function en(t){var e,n=g;J(Dr(t));try{tn(t),e=gn(t)}finally{J(n)}return e}function nn(t){var e=en(t),n=(ot||t.f&nt)&&t.deps!==null?ft:D;W(t,n),t.equals(e)||(t.v=e,t.wv=pn())}function ve(t){tn(t),Ot(t,0),W(t,ut),t.v=t.children=t.deps=t.ctx=t.reactions=null}function rn(t){g===null&&x===null&&Er(),x!==null&&x.f&nt&&br(),we&&xr()}function Nr(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Et(t,e,n,r=!0){var i=(t&et)!==0,o=g,s={ctx:w,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|K,first:null,fn:e,last:null,next:null,parent:i?null:o,prev:null,teardown:null,transitions:null,wv:0};if(n){var l=ht;try{hn(!0),ye(s),s.f|=pr}catch(h){throw X(s),h}finally{hn(l)}}else e!==null&&$e(s);var f=n&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(je|Ft))===0;if(!f&&!i&&r&&(o!==null&&Nr(s,o),x!==null&&x.f&L)){var u=x;(u.children??(u.children=[])).push(s)}return s}function pe(t){rn();var e=g!==null&&(g.f&j)!==0&&w!==null&&!w.m;if(e){var n=w;(n.e??(n.e=[])).push({fn:t,effect:g,reaction:x})}else{var r=Ht(t);return r}}function Pr(t){return rn(),me(t)}function Fr(t){const e=Et(et,t,!0);return()=>{X(e)}}function Mr(t){const e=Et(et,t,!0);return(n={})=>new Promise(r=>{n.outro?Hr(e,()=>{X(e),r(void 0)}):(X(e),r(void 0))})}function Ht(t){return Et(He,t,!1)}function me(t){return Et(ue,t,!0)}function Br(t,e=!0){return Et(ue|j,t,!0,e)}function on(t){var e=t.teardown;if(e!==null){const n=we,r=x;_n(!0),vt(null);try{e.call(null)}finally{_n(n),vt(r)}}}function sn(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var n=0;n<e.length;n+=1)ve(e[n])}}function ln(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;X(n,e),n=r}}function Vr(t){for(var e=t.first;e!==null;){var n=e.next;e.f&j||X(e),e=n}}function X(t,e=!0){var n=!1;if((e||t.f&gr)&&t.nodes_start!==null){for(var r=t.nodes_start,i=t.nodes_end;r!==null;){var o=r===i?null:dt(r);r.remove(),r=o}n=!0}ln(t,e&&!n),sn(t),Ot(t,0),W(t,ut);var s=t.transitions;if(s!==null)for(const f of s)f.stop();on(t);var l=t.parent;l!==null&&l.first!==null&&fn(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function fn(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Hr(t,e){var n=[];un(t,n,!0),Ir(n,()=>{X(t),e()})}function Ir(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var i of t)i.out(r)}else e()}function un(t,e,n){if(!(t.f&Bt)){if(t.f^=Bt,t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&e.push(s);for(var r=t.first;r!==null;){var i=r.next,o=(r.f&mr)!==0||(r.f&j)!==0;un(r,e,o?n:!1),r=i}}}let It=!1,ge=[];function cn(){It=!1;const t=ge.slice();ge=[],fe(t)}function jr(t){It||(It=!0,queueMicrotask(cn)),ge.push(t)}function qr(){It&&cn()}function an(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const dn=0,Wr=1;let jt=!1,qt=dn,At=!1,Tt=null,ht=!1,we=!1;function hn(t){ht=t}function _n(t){we=t}let rt=[],_t=0,eo=[],x=null,G=!1;function vt(t){x=t}let g=null;function J(t){g=t}let it=null,C=null,R=0,q=null;function Yr(t){q=t}let vn=1,Wt=0,ot=!1,w=null;function pn(){return++vn}function Yt(){return!$||w!==null&&w.l===null}function Ut(t){var u;var e=t.f;if(e&K)return!0;if(e&ft){var n=t.deps,r=(e&nt)!==0;if(n!==null){var i,o,s=(e&Mt)!==0,l=r&&g!==null&&!ot,f=n.length;if(s||l){for(i=0;i<f;i++)o=n[i],(s||!((u=o==null?void 0:o.reactions)!=null&&u.includes(t)))&&(o.reactions??(o.reactions=[])).push(t);s&&(t.f^=Mt)}for(i=0;i<f;i++)if(o=n[i],Ut(o)&&nn(o),o.wv>t.wv)return!0}(!r||g!==null&&!ot)&&W(t,D)}return!1}function Ur(t,e){for(var n=e;n!==null;){if(n.f&Ft)try{n.fn(t);return}catch{n.f^=Ft}n=n.parent}throw jt=!1,t}function Kr(t){return(t.f&ut)===0&&(t.parent===null||(t.parent.f&Ft)===0)}function Kt(t,e,n,r){if(jt){if(n===null&&(jt=!1),Kr(e))throw t;return}n!==null&&(jt=!0);{Ur(t,e);return}}function mn(t,e,n=0){var r=t.reactions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];o.f&L?mn(o,e,n+1):e===o&&(n===0?W(o,K):o.f&D&&W(o,ft),$e(o))}}function gn(t){var a;var e=C,n=R,r=q,i=x,o=ot,s=it,l=w,f=G,u=t.f;C=null,R=0,q=null,x=u&(j|et)?null:t,ot=!ht&&(u&nt)!==0,it=null,w=t.ctx,G=!1,Wt++;try{var h=(0,t.fn)(),c=t.deps;if(C!==null){var d;if(Ot(t,R),c!==null&&R>0)for(c.length=R+C.length,d=0;d<C.length;d++)c[R+d]=C[d];else t.deps=c=C;if(!ot)for(d=R;d<c.length;d++)((a=c[d]).reactions??(a.reactions=[])).push(t)}else c!==null&&R<c.length&&(Ot(t,R),c.length=R);if(Yt()&&q!==null&&!(t.f&(L|ft|K)))for(d=0;d<q.length;d++)mn(q[d],t);return i!==null&&Wt++,h}finally{C=e,R=n,q=r,x=i,ot=o,it=s,w=l,G=f}}function Xr(t,e){let n=e.reactions;if(n!==null){var r=ar.call(n,t);if(r!==-1){var i=n.length-1;i===0?n=e.reactions=null:(n[r]=n[i],n.pop())}}n===null&&e.f&L&&(C===null||!C.includes(e))&&(W(e,ft),e.f&(nt|Mt)||(e.f^=Mt),Ot(e,0))}function Ot(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Xr(t,n[r])}function ye(t){var e=t.f;if(!(e&ut)){W(t,D);var n=g,r=w;g=t;try{e&Ie?Vr(t):ln(t),sn(t),on(t);var i=gn(t);t.teardown=typeof i=="function"?i:null,t.wv=vn;var o=t.deps,s;se&&Dt&&t.f&K}catch(l){Kt(l,t,n,r||t.ctx)}finally{g=n}}}function wn(){if(_t>1e3){_t=0;try{Ar()}catch(t){if(Tt!==null)Kt(t,Tt,null);else throw t}}_t++}function yn(t){var e=t.length;if(e!==0){wn();var n=ht;ht=!0;try{for(var r=0;r<e;r++){var i=t[r];i.f&D||(i.f^=D);var o=[];$n(i,o),Gr(o)}}finally{ht=n}}}function Gr(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if(!(r.f&(ut|Bt)))try{Ut(r)&&(ye(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?fn(r):r.fn=null))}catch(i){Kt(i,r,null,r.ctx)}}}function Jr(){if(At=!1,_t>1001)return;const t=rt;rt=[],yn(t),At||(_t=0,Tt=null)}function $e(t){qt===dn&&(At||(At=!0,queueMicrotask(Jr))),Tt=t;for(var e=t;e.parent!==null;){e=e.parent;var n=e.f;if(n&(et|j)){if(!(n&D))return;e.f^=D}}rt.push(e)}function $n(t,e){var n=t.first,r=[];t:for(;n!==null;){var i=n.f,o=(i&j)!==0,s=o&&(i&D)!==0,l=n.next;if(!s&&!(i&Bt))if(i&ue){if(o)n.f^=D;else try{Ut(n)&&ye(n)}catch(c){Kt(c,n,null,n.ctx)}var f=n.first;if(f!==null){n=f;continue}}else i&He&&r.push(n);if(l===null){let c=n.parent;for(;c!==null;){if(t===c)break t;var u=c.next;if(u!==null){n=u;continue t}c=c.parent}}n=l}for(var h=0;h<r.length;h++)f=r[h],e.push(f),$n(f,e)}function xe(t){var e=qt,n=rt;try{wn();const i=[];qt=Wr,rt=i,At=!1,yn(n);var r=t==null?void 0:t();return qr(),(rt.length>0||i.length>0)&&xe(),_t=0,Tt=null,r}finally{qt=e,rt=n}}function z(t){var h;var e=t.f,n=(e&L)!==0;if(n&&e&ut){var r=en(t);return ve(t),r}if(x!==null&&!G){it!==null&&it.includes(t)&&Or();var i=x.deps;t.rv<Wt&&(t.rv=Wt,C===null&&i!==null&&i[R]===t?R++:C===null?C=[t]:C.push(t))}else if(n&&t.deps===null)for(var o=t,s=o.parent,l=o;s!==null;)if(s.f&L){var f=s;l=f,s=f.parent}else{var u=s;(h=u.deriveds)!=null&&h.includes(l)||(u.deriveds??(u.deriveds=[])).push(l);break}return n&&(o=t,Ut(o)&&nn(o)),t.v}function Ct(t){var e=G;try{return G=!0,t()}finally{G=e}}const zr=-7169;function W(t,e){t.f=t.f&zr|e}function be(t,e=!1,n){w={p:w,c:null,e:null,m:!1,s:t,x:null,l:null},$&&!e&&(w.l={s:null,u:null,r1:[],r2:We(!1)})}function Ee(t){const e=w;if(e!==null){t!==void 0&&(e.x=t);const s=e.e;if(s!==null){var n=g,r=x;e.e=null;try{for(var i=0;i<s.length;i++){var o=s[i];J(o.effect),vt(o.reaction),Ht(o.fn)}}finally{J(n),vt(r)}}w=e.p,e.m=!0}return t||{}}function Qr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ce in t)Ae(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&ce in n&&Ae(n)}}}function Ae(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{Ae(t[r],e)}catch{}const n=_r(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=hr(n);for(let i in r){const o=r[i].get;if(o)try{o.call(t)}catch{}}}}}const xn=new Set,Te=new Set;function Zr(t){for(var e=0;e<t.length;e++)xn.add(t[e]);for(var n of Te)n(t)}function Xt(t){var E;var e=this,n=e.ownerDocument,r=t.type,i=((E=t.composedPath)==null?void 0:E.call(t))||[],o=i[0]||t.target,s=0,l=t.__root;if(l){var f=i.indexOf(l);if(f!==-1&&(e===document||e===window)){t.__root=e;return}var u=i.indexOf(e);if(u===-1)return;f<=u&&(s=f)}if(o=i[s]||t.target,o!==e){Pt(t,"currentTarget",{configurable:!0,get(){return o||n}});var h=x,c=g;vt(null),J(null);try{for(var d,a=[];o!==null;){var _=o.assignedSlot||o.parentNode||o.host||null;try{var v=o["__"+r];if(v!==void 0&&!o.disabled)if(Ve(v)){var[p,...b]=v;p.apply(o,[t,...b])}else v.call(o,t)}catch(A){d?a.push(A):d=A}if(t.cancelBubble||_===e||_===null)break;o=_}if(d){for(let A of a)queueMicrotask(()=>{throw A});throw d}}finally{t.__root=e,delete t.currentTarget,vt(h),J(c)}}}function ti(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function Gt(t,e){var n=g;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function bn(t,e){var n=(e&or)!==0,r=(e&sr)!==0,i,o=!t.startsWith("<!>");return()=>{if(N)return Gt(T,null),T;i===void 0&&(i=ti(o?t:"<!>"+t),n||(i=at(i)));var s=r?document.importNode(i,!0):i.cloneNode(!0);if(n){var l=at(s),f=s.lastChild;Gt(l,f)}else Gt(s,s);return s}}function Oe(t,e){if(N){g.nodes_end=T,de();return}t!==null&&t.before(e)}function En(t,e){return An(t,e)}function ei(t,e){he(),e.intro=e.intro??!1;const n=e.target,r=N,i=T;try{for(var o=at(n);o&&(o.nodeType!==8||o.data!==lr);)o=dt(o);if(!o)throw bt;Vt(!0),ct(o),de();const s=An(t,{...e,anchor:o});if(T===null||T.nodeType!==8||T.data!==fr)throw ae(),bt;return Vt(!1),s}catch(s){if(s===bt)return e.recover===!1&&Tr(),he(),Lr(n),Vt(!1),En(t,e);throw s}finally{Vt(r),ct(i)}}const pt=new Map;function An(t,{target:e,anchor:n,props:r={},events:i,context:o,intro:s=!0}){he();var l=new Set,f=c=>{for(var d=0;d<c.length;d++){var a=c[d];if(!l.has(a)){l.add(a);var _=cr(a);e.addEventListener(a,Xt,{passive:_});var v=pt.get(a);v===void 0?(document.addEventListener(a,Xt,{passive:_}),pt.set(a,1)):pt.set(a,v+1)}}};f(dr(xn)),Te.add(f);var u=void 0,h=Mr(()=>{var c=n??e.appendChild(_e());return Br(()=>{if(o){be({});var d=w;d.c=o}i&&(r.$$events=i),N&&Gt(c,null),u=t(c,r)||{},N&&(g.nodes_end=T),o&&Ee()}),()=>{var _;for(var d of l){e.removeEventListener(d,Xt);var a=pt.get(d);--a===0?(document.removeEventListener(d,Xt),pt.delete(d)):pt.set(d,a)}Te.delete(f),c!==n&&((_=c.parentNode)==null||_.removeChild(c))}});return Ce.set(u,h),u}let Ce=new WeakMap;function ni(t,e){const n=Ce.get(t);return n?(Ce.delete(t),n(e)):Promise.resolve()}function Tn(t,e,n,r,i){var l;N&&de();var o=(l=e.$$slots)==null?void 0:l[n],s=!1;o===!0&&(o=e[n==="default"?"children":n],s=!0),o===void 0||o(t,s?()=>r:r)}function ri(t,e,n){Ht(()=>{var r=Ct(()=>e(t,n==null?void 0:n())||{});if(r!=null&&r.destroy)return()=>r.destroy()})}function On(t,e){return t===e||(t==null?void 0:t[ce])===e}function ii(t={},e,n,r){return Ht(()=>{var i,o;return me(()=>{i=o,o=[],Ct(()=>{t!==n(...o)&&(e(t,...o),i&&On(n(...i),t)&&e(null,...i))})}),()=>{jr(()=>{o&&On(n(...o),t)&&e(null,...o)})}}),t}function oi(t=!1){const e=w,n=e.l.u;if(!n)return;let r=()=>Qr(e.s);if(t){let i=0,o={};const s=Ze(()=>{let l=!1;const f=e.s;for(const u in f)f[u]!==o[u]&&(o[u]=f[u],l=!0);return l&&i++,i});r=()=>z(s)}n.b.length&&Pr(()=>{Cn(e,r),fe(n.b)}),pe(()=>{const i=Ct(()=>n.m.map(vr));return()=>{for(const o of i)typeof o=="function"&&o()}}),n.a.length&&pe(()=>{Cn(e,r),fe(n.a)})}function Cn(t,e){if(t.l.s)for(const n of t.l.s)z(n);e()}function si(t){w===null&&an(),$&&w.l!==null?ui(w).m.push(t):pe(()=>{const e=Ct(t);if(typeof e=="function")return e})}function li(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function fi(){const t=w;return t===null&&an(),(e,n,r)=>{var o;const i=(o=t.s.$$events)==null?void 0:o[e];if(i){const s=Ve(i)?i.slice():[i],l=li(e,n,r);for(const f of s)f.call(t.x,l);return!l.defaultPrevented}return!0}}function ui(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}function ci(t){for(var e=g,n=g;e!==null&&!(e.f&(j|et));)e=e.parent;try{return J(e),t()}finally{J(n)}}function ai(t,e,n,r){var i;i=t[e];var o=r,s=!0,l=!1,f=()=>(l=!0,s&&(s=!1,o=r),o),u;u=()=>{var _=t[e];return _===void 0?f():(s=!0,l=!1,_)};var h=!1,c=!1,d=Ye(i),a=ci(()=>Ze(()=>{var _=u(),v=z(d);return h?(h=!1,c=!0,v):(c=!1,d.v=_)}));return function(_,v){if(arguments.length>0){const p=v?z(a):_;return a.equals(p)||(h=!0,Ue(d,p),l&&o!==void 0&&(o=p),Ct(()=>z(a))),_}return z(a)}}function di(t){return new hi(t)}class hi{constructor(e){Me(this,U);Me(this,P);var o;var n=new Map,r=(s,l)=>{var f=Ye(l);return n.set(s,f),f};const i=new Proxy({...e.props||{},$$events:{}},{get(s,l){return z(n.get(l)??r(l,Reflect.get(s,l)))},has(s,l){return l===wr?!0:(z(n.get(l)??r(l,Reflect.get(s,l))),Reflect.has(s,l))},set(s,l,f){return Ue(n.get(l)??r(l,f),f),Reflect.set(s,l,f)}});Be(this,P,(e.hydrate?ei:En)(e.component,{target:e.target,anchor:e.anchor,props:i,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((o=e==null?void 0:e.props)!=null&&o.$$host)||e.sync===!1)&&xe(),Be(this,U,i.$$events);for(const s of Object.keys(k(this,P)))s==="$set"||s==="$destroy"||s==="$on"||Pt(this,s,{get(){return k(this,P)[s]},set(l){k(this,P)[s]=l},enumerable:!0});k(this,P).$set=s=>{Object.assign(i,s)},k(this,P).$destroy=()=>{ni(k(this,P))}}$set(e){k(this,P).$set(e)}$on(e,n){k(this,U)[e]=k(this,U)[e]||[];const r=(...i)=>n.call(this,...i);return k(this,U)[e].push(r),()=>{k(this,U)[e]=k(this,U)[e].filter(i=>i!==r)}}$destroy(){k(this,P).$destroy()}}U=new WeakMap,P=new WeakMap;let kn;typeof HTMLElement=="function"&&(kn=class extends HTMLElement{constructor(e,n,r){super();V(this,"$$ctor");V(this,"$$s");V(this,"$$c");V(this,"$$cn",!1);V(this,"$$d",{});V(this,"$$r",!1);V(this,"$$p_d",{});V(this,"$$l",{});V(this,"$$l_u",new Map);V(this,"$$me");this.$$ctor=e,this.$$s=n,r&&this.attachShadow({mode:"open"})}addEventListener(e,n,r){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(n),this.$$c){const i=this.$$c.$on(e,n);this.$$l_u.set(n,i)}super.addEventListener(e,n,r)}removeEventListener(e,n,r){if(super.removeEventListener(e,n,r),this.$$c){const i=this.$$l_u.get(n);i&&(i(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(i){return o=>{const s=document.createElement("slot");i!=="default"&&(s.name=i),Oe(o,s)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=_i(this);for(const i of this.$$s)i in r&&(i==="default"&&!this.$$d.children?(this.$$d.children=e(i),n.default=!0):n[i]=e(i));for(const i of this.attributes){const o=this.$$g_p(i.name);o in this.$$d||(this.$$d[o]=Jt(o,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=di({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=Fr(()=>{me(()=>{var i;this.$$r=!0;for(const o of Nt(this.$$c)){if(!((i=this.$$p_d[o])!=null&&i.reflect))continue;this.$$d[o]=this.$$c[o];const s=Jt(o,this.$$d[o],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,s)}this.$$r=!1})});for(const i in this.$$l)for(const o of this.$$l[i]){const s=this.$$c.$on(i,o);this.$$l_u.set(o,s)}this.$$l={}}}attributeChangedCallback(e,n,r){var i;this.$$r||(e=this.$$g_p(e),this.$$d[e]=Jt(e,r,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return Nt(this.$$p_d).find(n=>this.$$p_d[n].attribute===e||!this.$$p_d[n].attribute&&n.toLowerCase()===e)||e}});function Jt(t,e,n,r){var o;const i=(o=n[t])==null?void 0:o.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function _i(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function Rn(t,e,n,r,i,o){let s=class extends kn{constructor(){super(t,n,i),this.$$p_d=e}static get observedAttributes(){return Nt(e).map(l=>(e[l].attribute||l).toLowerCase())}};return Nt(e).forEach(l=>{Pt(s.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(f){var c;f=Jt(l,f,e),this.$$d[l]=f;var u=this.$$c;if(u){var h=(c=le(u,l))==null?void 0:c.get;h?u[l]=f:u.$set({[l]:f})}}})}),r.forEach(l=>{Pt(s.prototype,l,{get(){var f;return(f=this.$$c)==null?void 0:f[l]}})}),t.element=s,s}var vi=bn("<div></div>");function Sn(t,e){be(e,!1);let n=fi(),r;function i(s){if(!r)return r=new IntersectionObserver(l=>{l.forEach(f=>{f.isIntersecting?n("event",!0):n("event",!1)})}),r.observe(s),{destroy(){n("event",!1),r.unobserve(s)}}}oi();var o=vi();ri(o,s=>i==null?void 0:i(s)),Oe(t,o),Ee()}customElements.define("sui-in-viewport",Rn(Sn,{},[],[],!0));const ke=Math.min,mt=Math.max,zt=Math.round,H=t=>({x:t,y:t}),pi={left:"right",right:"left",bottom:"top",top:"bottom"},mi={start:"end",end:"start"};function Ln(t,e,n){return mt(t,ke(e,n))}function Qt(t,e){return typeof t=="function"?t(e):t}function st(t){return t.split("-")[0]}function Zt(t){return t.split("-")[1]}function Dn(t){return t==="x"?"y":"x"}function Nn(t){return t==="y"?"height":"width"}function gt(t){return["top","bottom"].includes(st(t))?"y":"x"}function Pn(t){return Dn(gt(t))}function gi(t,e,n){n===void 0&&(n=!1);const r=Zt(t),i=Pn(t),o=Nn(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=te(s)),[s,te(s)]}function wi(t){const e=te(t);return[Re(t),e,Re(e)]}function Re(t){return t.replace(/start|end/g,e=>mi[e])}function yi(t,e,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?o:s;default:return[]}}function $i(t,e,n,r){const i=Zt(t);let o=yi(st(t),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),e&&(o=o.concat(o.map(Re)))),o}function te(t){return t.replace(/left|right|bottom|top/g,e=>pi[e])}function xi(t){return{top:0,right:0,bottom:0,left:0,...t}}function bi(t){return typeof t!="number"?xi(t):{top:t,right:t,bottom:t,left:t}}function ee(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function Fn(t,e,n){let{reference:r,floating:i}=t;const o=gt(e),s=Pn(e),l=Nn(s),f=st(e),u=o==="y",h=r.x+r.width/2-i.width/2,c=r.y+r.height/2-i.height/2,d=r[l]/2-i[l]/2;let a;switch(f){case"top":a={x:h,y:r.y-i.height};break;case"bottom":a={x:h,y:r.y+r.height};break;case"right":a={x:r.x+r.width,y:c};break;case"left":a={x:r.x-i.width,y:c};break;default:a={x:r.x,y:r.y}}switch(Zt(e)){case"start":a[s]-=d*(n&&u?-1:1);break;case"end":a[s]+=d*(n&&u?-1:1);break}return a}const Ei=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,l=o.filter(Boolean),f=await(s.isRTL==null?void 0:s.isRTL(e));let u=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:c}=Fn(u,r,f),d=r,a={},_=0;for(let v=0;v<l.length;v++){const{name:p,fn:b}=l[v],{x:E,y:A,data:B,reset:O}=await b({x:h,y:c,initialPlacement:r,placement:d,strategy:i,middlewareData:a,rects:u,platform:s,elements:{reference:t,floating:e}});h=E??h,c=A??c,a={...a,[p]:{...a[p],...B}},O&&_<=50&&(_++,typeof O=="object"&&(O.placement&&(d=O.placement),O.rects&&(u=O.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:h,y:c}=Fn(u,d,f)),v=-1)}return{x:h,y:c,placement:d,strategy:i,middlewareData:a}};async function Mn(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:o,rects:s,elements:l,strategy:f}=t,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:d=!1,padding:a=0}=Qt(e,t),_=bi(a),p=l[d?c==="floating"?"reference":"floating":c],b=ee(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(p)))==null||n?p:p.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:u,rootBoundary:h,strategy:f})),E=c==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,A=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),B=await(o.isElement==null?void 0:o.isElement(A))?await(o.getScale==null?void 0:o.getScale(A))||{x:1,y:1}:{x:1,y:1},O=ee(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:E,offsetParent:A,strategy:f}):E);return{top:(b.top-O.top+_.top)/B.y,bottom:(O.bottom-b.bottom+_.bottom)/B.y,left:(b.left-O.left+_.left)/B.x,right:(O.right-b.right+_.right)/B.x}}const Ai=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:l,platform:f,elements:u}=e,{mainAxis:h=!0,crossAxis:c=!0,fallbackPlacements:d,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:v=!0,...p}=Qt(t,e);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const b=st(i),E=gt(l),A=st(l)===l,B=await(f.isRTL==null?void 0:f.isRTL(u.floating)),O=d||(A||!v?[te(l)]:wi(l)),zn=_!=="none";!d&&zn&&O.push(...$i(l,v,_,B));const zi=[l,...O],Fe=await Mn(e,p),oe=[];let St=((r=o.flip)==null?void 0:r.overflows)||[];if(h&&oe.push(Fe[b]),c){const lt=gi(i,s,B);oe.push(Fe[lt[0]],Fe[lt[1]])}if(St=[...St,{placement:i,overflows:oe}],!oe.every(lt=>lt<=0)){var Qn,Zn;const lt=(((Qn=o.flip)==null?void 0:Qn.index)||0)+1,er=zi[lt];if(er)return{data:{index:lt,overflows:St},reset:{placement:er}};let Lt=(Zn=St.filter(xt=>xt.overflows[0]<=0).sort((xt,Z)=>xt.overflows[1]-Z.overflows[1])[0])==null?void 0:Zn.placement;if(!Lt)switch(a){case"bestFit":{var tr;const xt=(tr=St.filter(Z=>{if(zn){const tt=gt(Z.placement);return tt===E||tt==="y"}return!0}).map(Z=>[Z.placement,Z.overflows.filter(tt=>tt>0).reduce((tt,Qi)=>tt+Qi,0)]).sort((Z,tt)=>Z[1]-tt[1])[0])==null?void 0:tr[0];xt&&(Lt=xt);break}case"initialPlacement":Lt=l;break}if(i!==Lt)return{reset:{placement:Lt}}}return{}}}};async function Ti(t,e){const{placement:n,platform:r,elements:i}=t,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=st(n),l=Zt(n),f=gt(n)==="y",u=["left","top"].includes(s)?-1:1,h=o&&f?-1:1,c=Qt(e,t);let{mainAxis:d,crossAxis:a,alignmentAxis:_}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof _=="number"&&(a=l==="end"?_*-1:_),f?{x:a*h,y:d*u}:{x:d*u,y:a*h}}const Oi=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,r;const{x:i,y:o,placement:s,middlewareData:l}=e,f=await Ti(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:i+f.x,y:o+f.y,data:{...f,placement:s}}}}},Ci=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:r,placement:i}=e,{mainAxis:o=!0,crossAxis:s=!1,limiter:l={fn:p=>{let{x:b,y:E}=p;return{x:b,y:E}}},...f}=Qt(t,e),u={x:n,y:r},h=await Mn(e,f),c=gt(st(i)),d=Dn(c);let a=u[d],_=u[c];if(o){const p=d==="y"?"top":"left",b=d==="y"?"bottom":"right",E=a+h[p],A=a-h[b];a=Ln(E,a,A)}if(s){const p=c==="y"?"top":"left",b=c==="y"?"bottom":"right",E=_+h[p],A=_-h[b];_=Ln(E,_,A)}const v=l.fn({...e,[d]:a,[c]:_});return{...v,data:{x:v.x-n,y:v.y-r,enabled:{[d]:o,[c]:s}}}}}};function ne(){return typeof window<"u"}function wt(t){return Bn(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Y(t){var e;return(e=(Bn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Bn(t){return ne()?t instanceof Node||t instanceof S(t).Node:!1}function F(t){return ne()?t instanceof Element||t instanceof S(t).Element:!1}function I(t){return ne()?t instanceof HTMLElement||t instanceof S(t).HTMLElement:!1}function Vn(t){return!ne()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof S(t).ShadowRoot}function kt(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=M(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function ki(t){return["table","td","th"].includes(wt(t))}function re(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Se(t){const e=Le(),n=F(t)?M(t):t;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Ri(t){let e=Q(t);for(;I(e)&&!yt(e);){if(Se(e))return e;if(re(e))return null;e=Q(e)}return null}function Le(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function yt(t){return["html","body","#document"].includes(wt(t))}function M(t){return S(t).getComputedStyle(t)}function ie(t){return F(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Q(t){if(wt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Vn(t)&&t.host||Y(t);return Vn(e)?e.host:e}function Hn(t){const e=Q(t);return yt(e)?t.ownerDocument?t.ownerDocument.body:t.body:I(e)&&kt(e)?e:Hn(e)}function In(t,e,n){var r;e===void 0&&(e=[]);const i=Hn(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),s=S(i);return o?(De(s),e.concat(s,s.visualViewport||[],kt(i)?i:[],[])):e.concat(i,In(i,[]))}function De(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function jn(t){const e=M(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=I(t),o=i?t.offsetWidth:n,s=i?t.offsetHeight:r,l=zt(n)!==o||zt(r)!==s;return l&&(n=o,r=s),{width:n,height:r,$:l}}function qn(t){return F(t)?t:t.contextElement}function $t(t){const e=qn(t);if(!I(e))return H(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=jn(e);let s=(o?zt(n.width):n.width)/r,l=(o?zt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Si=H(0);function Wn(t){const e=S(t);return!Le()||!e.visualViewport?Si:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Li(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==S(t)?!1:e}function Rt(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=qn(t);let s=H(1);e&&(r?F(r)&&(s=$t(r)):s=$t(t));const l=Li(o,n,r)?Wn(o):H(0);let f=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,h=i.width/s.x,c=i.height/s.y;if(o){const d=S(o),a=r&&F(r)?S(r):r;let _=d,v=De(_);for(;v&&r&&a!==_;){const p=$t(v),b=v.getBoundingClientRect(),E=M(v),A=b.left+(v.clientLeft+parseFloat(E.paddingLeft))*p.x,B=b.top+(v.clientTop+parseFloat(E.paddingTop))*p.y;f*=p.x,u*=p.y,h*=p.x,c*=p.y,f+=A,u+=B,_=S(v),v=De(_)}}return ee({width:h,height:c,x:f,y:u})}function Ne(t,e){const n=ie(t).scrollLeft;return e?e.left+n:Rt(Y(t)).left+n}function Yn(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:Ne(t,r)),o=r.top+e.scrollTop;return{x:i,y:o}}function Di(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",s=Y(r),l=e?re(e.floating):!1;if(r===s||l&&o)return n;let f={scrollLeft:0,scrollTop:0},u=H(1);const h=H(0),c=I(r);if((c||!c&&!o)&&((wt(r)!=="body"||kt(s))&&(f=ie(r)),I(r))){const a=Rt(r);u=$t(r),h.x=a.x+r.clientLeft,h.y=a.y+r.clientTop}const d=s&&!c&&!o?Yn(s,f,!0):H(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-f.scrollLeft*u.x+h.x+d.x,y:n.y*u.y-f.scrollTop*u.y+h.y+d.y}}function Ni(t){return Array.from(t.getClientRects())}function Pi(t){const e=Y(t),n=ie(t),r=t.ownerDocument.body,i=mt(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=mt(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+Ne(t);const l=-n.scrollTop;return M(r).direction==="rtl"&&(s+=mt(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:l}}function Fi(t,e){const n=S(t),r=Y(t),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,l=0,f=0;if(i){o=i.width,s=i.height;const u=Le();(!u||u&&e==="fixed")&&(l=i.offsetLeft,f=i.offsetTop)}return{width:o,height:s,x:l,y:f}}function Mi(t,e){const n=Rt(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=I(t)?$t(t):H(1),s=t.clientWidth*o.x,l=t.clientHeight*o.y,f=i*o.x,u=r*o.y;return{width:s,height:l,x:f,y:u}}function Un(t,e,n){let r;if(e==="viewport")r=Fi(t,n);else if(e==="document")r=Pi(Y(t));else if(F(e))r=Mi(e,n);else{const i=Wn(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return ee(r)}function Kn(t,e){const n=Q(t);return n===e||!F(n)||yt(n)?!1:M(n).position==="fixed"||Kn(n,e)}function Bi(t,e){const n=e.get(t);if(n)return n;let r=In(t,[]).filter(l=>F(l)&&wt(l)!=="body"),i=null;const o=M(t).position==="fixed";let s=o?Q(t):t;for(;F(s)&&!yt(s);){const l=M(s),f=Se(s);!f&&l.position==="fixed"&&(i=null),(o?!f&&!i:!f&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||kt(s)&&!f&&Kn(t,s))?r=r.filter(h=>h!==s):i=l,s=Q(s)}return e.set(t,r),r}function Vi(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const s=[...n==="clippingAncestors"?re(e)?[]:Bi(e,this._c):[].concat(n),r],l=s[0],f=s.reduce((u,h)=>{const c=Un(e,h,i);return u.top=mt(c.top,u.top),u.right=ke(c.right,u.right),u.bottom=ke(c.bottom,u.bottom),u.left=mt(c.left,u.left),u},Un(e,l,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function Hi(t){const{width:e,height:n}=jn(t);return{width:e,height:n}}function Ii(t,e,n){const r=I(e),i=Y(e),o=n==="fixed",s=Rt(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const f=H(0);if(r||!r&&!o)if((wt(e)!=="body"||kt(i))&&(l=ie(e)),r){const d=Rt(e,!0,o,e);f.x=d.x+e.clientLeft,f.y=d.y+e.clientTop}else i&&(f.x=Ne(i));const u=i&&!r&&!o?Yn(i,l):H(0),h=s.left+l.scrollLeft-f.x-u.x,c=s.top+l.scrollTop-f.y-u.y;return{x:h,y:c,width:s.width,height:s.height}}function Pe(t){return M(t).position==="static"}function Xn(t,e){if(!I(t)||M(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Y(t)===n&&(n=n.ownerDocument.body),n}function Gn(t,e){const n=S(t);if(re(t))return n;if(!I(t)){let i=Q(t);for(;i&&!yt(i);){if(F(i)&&!Pe(i))return i;i=Q(i)}return n}let r=Xn(t,e);for(;r&&ki(r)&&Pe(r);)r=Xn(r,e);return r&&yt(r)&&Pe(r)&&!Se(r)?n:r||Ri(t)||n}const ji=async function(t){const e=this.getOffsetParent||Gn,n=this.getDimensions,r=await n(t.floating);return{reference:Ii(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function qi(t){return M(t).direction==="rtl"}const Wi={convertOffsetParentRelativeRectToViewportRelativeRect:Di,getDocumentElement:Y,getClippingRect:Vi,getOffsetParent:Gn,getElementRects:ji,getClientRects:Ni,getDimensions:Hi,getScale:$t,isElement:F,isRTL:qi},Yi=Oi,Ui=Ci,Ki=Ai,Xi=(t,e,n)=>{const r=new Map,i={platform:Wi,...n},o={...i.platform,_c:r};return Ei(t,e,{...i,platform:o})};var Gi=(t,e)=>e({trigger:t.target}),Ji=bn('<button><!></button> <span class="hidden absolute z-50"><!></span>',1);function Jn(t,e){be(e,!0);let n,r,i=!1,o=ai(e,"placement");function s(a){if(!a.trigger)throw new Error("trigger is required");a.placement||(a.placement=o()||"bottom"),r=a.trigger,Xi(r,n,{placement:a.placement,middleware:[Ki({padding:2}),Ui({padding:2}),Yi(2)]}).then(({x:_,y:v})=>{Object.assign(n.style,{left:`${_}px`,top:`${v}px`})}),n.classList.remove("hidden"),i=!0}function l(){n.classList.add("hidden"),i=!1}si(()=>{const a=_=>{i&&!n.contains(_.target)&&!r.contains(_.target)&&l()};document.addEventListener("click",a)});var f=Ji(),u=Rr(f);u.__click=[Gi,s];var h=Qe(u);Tn(h,e,"trigger",{}),Xe(u);var c=Sr(u,2),d=Qe(c);return Tn(d,e,"overlay",{}),Xe(c),ii(c,a=>n=a,()=>n),Oe(t,f),Ee({openOverlay:s,closeOverlay:l,get placement(){return o()},set placement(a){o(a),xe()}})}return Zr(["click"]),customElements.define("sui-overlay",Rn(Jn,{placement:{}},["trigger","overlay"],["openOverlay","closeOverlay"],!0)),m.InViewport=Sn,m.Overlay=Jn,Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),m}({});

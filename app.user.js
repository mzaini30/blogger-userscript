// ==UserScript==
// @name        Blogger Userscript
// @version     0.2.2
// @date        2022-01-26
// @author      Zen
// @description Tools yang akan memudahkan nulis di Blogger
// @homepage    https://www.cuapcuap.my.id/2022/01/plugin-blogger.html
// @downloadURL https://github.com/mzaini30/blogger-userscript/raw/master/app.user.js
// @include     https://www.blogger.com/*
// @run-at      document-end
// @grant       GM_listValues
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @grant       GM_xmlhttpRequest
// @grant       GM_info
// @grant       GM_openInTab
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @grant       GM_notification
// @grant       GM_download
// @grant       GM.info
// @grant       GM.listValues
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       GM.deleteValue
// @grant       GM.openInTab
// @grant       GM.setClipboard
// @grant       GM.xmlHttpRequest
// ==/UserScript==

const lebar_tools = '15%'
const lebar_editor_blogger = '85%'

function tambah_aplikasi() {
	const editor_blogger = document.querySelector("#yDmH0d")
	editor_blogger.style.width = lebar_editor_blogger;
	editor_blogger.style.position = "absolute";
	editor_blogger.style.left = lebar_tools;
	editor_blogger.style.top = "0";

	const elemen_node = document.createElement("div");
	elemen_node.classList.add("app");
	elemen_node.style.width = lebar_tools;
	elemen_node.style.position = "absolute";
	elemen_node.style.left = "0";
	elemen_node.style.top = "0";
	document.body.appendChild(elemen_node);

	const stylenya = document.createElement('style')
	stylenya.innerHTML = `:root{--oren:#ff5722}.aplikasi.svelte-14yds9j *{margin:0px;padding:0px;box-sizing:border-box;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.54)}.aplikasi.svelte-14yds9j *:focus{outline:2px solid transparent;outline-offset:2px}.judul-keyword.svelte-8qzuhk{padding-bottom:0.5rem;text-align:center}.textarea-keyword.svelte-8qzuhk{border-color:var(--oren);border-width:1px;font-size:1rem;line-height:1.5rem;padding:0.5rem;width:100%}.textarea-keyword.svelte-8qzuhk:focus{border-width:2px}.bagian-keyword.svelte-8qzuhk{padding:0.5rem}.word-counter.svelte-1s9c2fn{text-align:center}`
	document.body.appendChild(stylenya)

	var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){t.value=null==e?"":e}let p;function h(t){p=t}function m(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const g=[],y=[],b=[],w=[],_=Promise.resolve();let k=!1;function x(t){b.push(t)}const v=new Set;let S=0;function E(){const t=p;do{for(;S<g.length;){const t=g[S];S++,h(t),q(t.$$)}for(h(null),g.length=0,S=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];v.has(e)||(v.add(e),e())}b.length=0}while(g.length);for(;w.length;)w.pop()();k=!1,v.clear(),h(t)}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const A=new Set;function j(t,e){t&&t.i&&(A.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),undefined.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function C(t){t&&t.c()}function L(t,n,c,u){const{fragment:i,on_mount:l,on_destroy:s,after_update:a}=t.$$;i&&i.m(n,c),u||x((()=>{const n=l.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(x)}function N(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e){-1===t.$$.dirty[0]&&(g.push(t),k||(k=!0,_.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(e,r,c,u,i,s,a,f=[-1]){const d=p;h(e);const $=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a($.root);let m=!1;if($.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&i($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),m&&O(e,t)),n})):[],$.update(),m=!0,o($.before_update),$.fragment=!!u&&u($.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);$.fragment&&$.fragment.l(t),t.forEach(l)}else $.fragment&&$.fragment.c();r.intro&&j(e.$$.fragment),L(e,r.target,r.anchor,r.customElement),E()}h(d)}class M{$destroy(){N(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(e){let n,o,r,c,a,p;return{c(){n=s("section"),o=s("p"),o.textContent="Keyword",r=f(),c=s("textarea"),d(o,"class","judul-keyword svelte-8qzuhk"),d(c,"class","textarea-keyword svelte-8qzuhk"),d(c,"placeholder","Masukkan list keyword"),d(c,"name",""),d(c,"id",""),d(c,"cols","30"),d(c,"rows","10"),d(n,"class","bagian-keyword svelte-8qzuhk")},m(t,l){var s,f,d,h;i(t,n,l),u(n,o),u(n,r),u(n,c),$(c,e[0]),a||(s=c,f="input",d=e[1],s.addEventListener(f,d,h),p=()=>s.removeEventListener(f,d,h),a=!0)},p(t,[e]){1&e&&$(c,t[0])},i:t,o:t,d(t){t&&l(n),a=!1,p()}}}function F(t,e,n){let o="";return localStorage.isi_keyword&&(o=localStorage.isi_keyword),t.$$.update=()=>{1&t.$$.dirty&&(localStorage.isi_keyword=o||o)},[o,function(){o=this.value,n(0,o)}]}class I extends M{constructor(t){super(),T(this,t,F,B,c,{})}}function K(e){let n,o,r;return{c(){n=s("section"),o=a(e[0]),r=a(" kata"),d(n,"class","word-counter svelte-1s9c2fn")},m(t,e){i(t,n,e),u(n,o),u(n,r)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(o,t[0])},i:t,o:t,d(t){t&&l(n)}}}function P(t,e,n){let o=0;return m((()=>{function t(){try{let t=document.querySelectorAll(".editable").length,e=document.querySelectorAll(".editable")[t-1].contentWindow.document.querySelector(".editable");n(0,o=e.innerText.split(/\s/).filter((t=>t)).length.toLocaleString("id"))}catch(t){console.log(t)}}t(),window.setInterval(t,5e3)})),[o]}class W extends M{constructor(t){super(),T(this,t,P,K,c,{})}}function D(e){let n,o,r,c,a;return o=new I({}),c=new W({}),{c(){n=s("aside"),C(o.$$.fragment),r=f(),C(c.$$.fragment),d(n,"class","aplikasi svelte-14yds9j")},m(t,e){i(t,n,e),L(o,n,null),u(n,r),L(c,n,null),a=!0},p:t,i(t){a||(j(o.$$.fragment,t),j(c.$$.fragment,t),a=!0)},o(t){z(o.$$.fragment,t),z(c.$$.fragment,t),a=!1},d(t){t&&l(n),N(o),N(c)}}}return new class extends M{constructor(t){super(),T(this,t,null,D,c,{})}}({target:document.querySelector(".app")})}();
}
function cek(){
	const linknya = location.href
	const editor_blogger = document.querySelector('#yDmH0d')
	const tools = document.querySelector('.app')

	if (linknya.includes('https://www.blogger.com/blog/post/edit/')) {
		// di editor
		editor_blogger.style.width = lebar_editor_blogger
		editor_blogger.style.insetInlineStart = lebar_tools
		tools.style.display = 'block'
		tools.style.width = lebar_tools
	} else {
		// bukan di editor
		editor_blogger.style.width = '100%'
		editor_blogger.style.insetInlineStart = '0'
		tools.style.display = 'none'
		tools.style.width = '0'
	}
}
setTimeout(tambah_aplikasi, 3000)
setInterval(cek, 5000)
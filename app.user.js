// ==UserScript==
// @name        Blogger Userscript
// @version     0.0.5
// @date        2022-01-26
// @author      Zen
// @description Tools yang akan memudahkan nulis di Blogger
// @homepage    https://www.cuapcuap.my.id
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
	stylenya.innerHTML = `:root{--oren:#ff5722}.svelte-17a56cs{margin:0px;padding:0px;box-sizing:border-box;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.54)}.svelte-17a56cs:focus{outline:2px solid transparent;outline-offset:2px}.judul-keyword.svelte-17a56cs{padding-bottom:0.5rem;text-align:center}.textarea-keyword.svelte-17a56cs{border-color:var(--oren);border-width:1px;font-size:1rem;line-height:1.5rem;padding:0.5rem;width:100%}.textarea-keyword.svelte-17a56cs:focus{border-width:2px}.bagian-keyword.svelte-17a56cs{padding:0.5rem}`
	document.body.appendChild(stylenya)

	var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function a(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function i(){return t=" ",document.createTextNode(t);var t}function l(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e){t.value=null==e?"":e}let d;function p(t){d=t}const $=[],h=[],g=[],m=[],y=Promise.resolve();let _=!1;function b(t){g.push(t)}const k=new Set;let x=0;function v(){const t=d;do{for(;x<$.length;){const t=$[x];x++,p(t),w(t.$$)}for(p(null),$.length=0,x=0;h.length;)h.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];k.has(e)||(k.add(e),e())}g.length=0}while($.length);for(;m.length;)m.pop()();_=!1,k.clear(),p(t)}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const E=new Set;function S(t,e){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,y.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(c,u,s,i,l,f,$,h=[-1]){const g=d;p(c);const m=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(g?g.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:u.target||g.$$.root};$&&$(m.root);let y=!1;if(m.ctx=s?s(c,u.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&l(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),y&&S(c,t)),e})):[],m.update(),y=!0,o(m.before_update),m.fragment=!!i&&i(m.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();u.intro&&((_=c.$$.fragment)&&_.i&&(E.delete(_),_.i(k))),function(t,n,c,u){const{fragment:a,on_mount:s,on_destroy:i,after_update:l}=t.$$;a&&a.m(n,c),u||b((()=>{const n=s.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(b)}(c,u.target,u.anchor,u.customElement),v()}var _,k;p(g)}function A(e){let n,o,r,c,d,p;return{c(){n=s("section"),o=s("p"),o.textContent="Keyword",r=i(),c=s("textarea"),l(o,"class","judul-keyword svelte-17a56cs"),l(c,"class","textarea-keyword svelte-17a56cs"),l(c,"placeholder","Masukkan list keyword"),l(c,"name",""),l(c,"id",""),l(c,"cols","30"),l(c,"rows","10"),l(n,"class","bagian-keyword svelte-17a56cs")},m(t,a){var s,i,l,$;!function(t,e,n){t.insertBefore(e,n||null)}(t,n,a),u(n,o),u(n,r),u(n,c),f(c,e[0]),d||(s=c,i="input",l=e[1],s.addEventListener(i,l,$),p=()=>s.removeEventListener(i,l,$),d=!0)},p(t,[e]){1&e&&f(c,t[0])},i:t,o:t,d(t){t&&a(n),d=!1,p()}}}function C(t,e,n){let o="";return localStorage.isi_keyword&&(o=localStorage.isi_keyword),t.$$.update=()=>{1&t.$$.dirty&&(localStorage.isi_keyword=o||o)},[o,function(){o=this.value,n(0,o)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,C,A,c,{})}}({target:document.querySelector(".app")})}();
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
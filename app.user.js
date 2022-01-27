// ==UserScript==
// @name        Blogger Userscript
// @version     0.3.1
// @date        2022-01-27
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

	const toolsnya = document.createElement("div");
	toolsnya.classList.add("app");
	toolsnya.style.width = lebar_tools;
	toolsnya.style.position = "absolute";
	toolsnya.style.left = "0";
	toolsnya.style.top = "0";
	toolsnya.style.height = "100vh";
	document.body.appendChild(toolsnya);

	const stylenya = document.createElement('style')
	stylenya.innerHTML = `:root{--oren:#ff5722}.aplikasi.svelte-14yds9j *{margin:0px;padding:0px;box-sizing:border-box;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.54)}.aplikasi.svelte-14yds9j *:focus{outline:2px solid transparent;outline-offset:2px}.judul-keyword.svelte-8qzuhk{padding-bottom:0.5rem;text-align:center}.textarea-keyword.svelte-8qzuhk{border-color:var(--oren);border-width:1px;font-size:1rem;line-height:1.5rem;padding:0.5rem;width:100%}.textarea-keyword.svelte-8qzuhk:focus{border-width:2px}.bagian-keyword.svelte-8qzuhk{padding:0.5rem}.word-counter.svelte-1mplcic{padding-bottom:0.5rem;text-align:center}.merah{--tw-text-opacity:1 !important;color:rgba(239, 68, 68, var(--tw-text-opacity)) !important}.credit.svelte-lr6yxc{font-size:0.875rem;line-height:1.25rem;padding-bottom:0.5rem;padding-left:0.25rem;padding-right:0.25rem;position:absolute;bottom:0px;left:0px;text-align:center;width:100%}`
	document.body.appendChild(stylenya)

	var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){t.value=null==e?"":e}let p;function m(t){p=t}function h(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const g=[],y=[],w=[],k=[],x=Promise.resolve();let b=!1;function _(t){w.push(t)}const v=new Set;let S=0;function E(){const t=p;do{for(;S<g.length;){const t=g[S];S++,m(t),q(t.$$)}for(m(null),g.length=0,S=0;y.length;)y.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];v.has(e)||(v.add(e),e())}w.length=0}while(g.length);for(;k.length;)k.pop()();b=!1,v.clear(),m(t)}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const A=new Set;function j(t,e){t&&t.i&&(A.delete(t),t.i(e))}function O(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),undefined.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function z(t){t&&t.c()}function C(t,n,c,u){const{fragment:l,on_mount:i,on_destroy:s,after_update:a}=t.$$;l&&l.m(n,c),u||_((()=>{const n=i.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(_)}function L(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(g.push(t),b||(b=!0,x.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(e,r,c,u,l,s,a,d=[-1]){const f=p;m(e);const $=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||f.$$.root};a&&a($.root);let h=!1;if($.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&l($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),h&&N(e,t)),n})):[],$.update(),h=!0,o($.before_update),$.fragment=!!u&&u($.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);$.fragment&&$.fragment.l(t),t.forEach(i)}else $.fragment&&$.fragment.c();r.intro&&j(e.$$.fragment),C(e,r.target,r.anchor,r.customElement),E()}m(f)}class D{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function M(e){let n,o,r,c,a,p;return{c(){n=s("section"),o=s("p"),o.textContent="Keyword",r=d(),c=s("textarea"),f(o,"class","judul-keyword svelte-8qzuhk"),f(c,"class","textarea-keyword svelte-8qzuhk"),f(c,"placeholder","Masukkan list keyword"),f(c,"name",""),f(c,"id",""),f(c,"cols","30"),f(c,"rows","10"),f(n,"class","bagian-keyword svelte-8qzuhk")},m(t,i){var s,d,f,m;l(t,n,i),u(n,o),u(n,r),u(n,c),$(c,e[0]),a||(s=c,d="input",f=e[1],s.addEventListener(d,f,m),p=()=>s.removeEventListener(d,f,m),a=!0)},p(t,[e]){1&e&&$(c,t[0])},i:t,o:t,d(t){t&&i(n),a=!1,p()}}}function B(t,e,n){let o="";return localStorage.isi_keyword&&(o=localStorage.isi_keyword),t.$$.update=()=>{1&t.$$.dirty&&(localStorage.isi_keyword=o||o)},[o,function(){o=this.value,n(0,o)}]}class F extends D{constructor(t){super(),T(this,t,B,M,c,{})}}function I(e){let n,o,r,c,d=e[0].toLocaleString("id")+"";return{c(){n=s("section"),o=a(d),r=a(" kata"),f(n,"class",c="word-counter "+(e[0]<300?"merah":null)+" svelte-1mplcic")},m(t,e){l(t,n,e),u(n,o),u(n,r)},p(t,[e]){1&e&&d!==(d=t[0].toLocaleString("id")+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(o,d),1&e&&c!==(c="word-counter "+(t[0]<300?"merah":null)+" svelte-1mplcic")&&f(n,"class",c)},i:t,o:t,d(t){t&&i(n)}}}function K(t,e,n){let o=0;return h((()=>{function t(){try{let t=document.querySelectorAll(".editable").length,e=document.querySelectorAll(".editable")[t-1].contentWindow.document.querySelector(".editable");n(0,o=e.innerText.split(/\s/).filter((t=>t)).length)}catch(t){console.log(t)}}t(),window.setInterval(t,5e3)})),[o]}class P extends D{constructor(t){super(),T(this,t,K,I,c,{})}}function V(e){let n;return{c(){n=s("section"),n.textContent="Dukung developer dengan donasi via OVO/DANA ke 0815-4514-3654",f(n,"class","credit svelte-lr6yxc")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&i(n)}}}class W extends D{constructor(t){super(),T(this,t,null,V,c,{})}}function G(e){let n,o,r,c,a,$,p;return o=new F({}),c=new P({}),$=new W({}),{c(){n=s("aside"),z(o.$$.fragment),r=d(),z(c.$$.fragment),a=d(),z($.$$.fragment),f(n,"class","aplikasi svelte-14yds9j")},m(t,e){l(t,n,e),C(o,n,null),u(n,r),C(c,n,null),u(n,a),C($,n,null),p=!0},p:t,i(t){p||(j(o.$$.fragment,t),j(c.$$.fragment,t),j($.$$.fragment,t),p=!0)},o(t){O(o.$$.fragment,t),O(c.$$.fragment,t),O($.$$.fragment,t),p=!1},d(t){t&&i(n),L(o),L(c),L($)}}}return new class extends D{constructor(t){super(),T(this,t,null,G,c,{})}}({target:document.querySelector(".app")})}();
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

function cek_karakter_judul(){
	// 20-70 karakter
	try {
		let panjang_input = 0
		let banyak_input = document.querySelectorAll('[aria-label="Judul"]').length
		panjang_input = document.querySelectorAll('[aria-label="Judul"]')[banyak_input - 1].value.split('').length

		let tulis = ''
		if (panjang_input >= 19 && panjang_input <= 70) {
			tulis = `Judul (${panjang_input} karakter)`
		} else {
			tulis = `<span class="merah">Judul (${panjang_input} karakter)</span>`
		}
		document.querySelectorAll('[aria-label="Judul"] + [jsname="YRMmle"]')[banyak_input - 1].innerHTML = tulis
	} catch(error){
		console.log(error)
	}
}
cek_karakter_judul()
setInterval(cek_karakter_judul, 5000)
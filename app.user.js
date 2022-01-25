// ==UserScript==
// @name        Blogger Userscript
// @version     0.0.1
// @date        2022-01-25
// @author      Zen
// @description Tools yang akan memudahkan nulis di Blogger
// @homepage    https://www.cuapcuap.my.id
// @downloadURL https://github.com/mzaini30/blogger-userscript/raw/master/app.user.js
// @include     http://*
// @include     https://*
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
// @connect     https://www.blogger.com/blog/post/edit/
// @connect     self
// @connect     *
// ==/UserScript==

// buat pakai Svelte aja
const elemen = `
	<p>Keywords</p>
<textarea name="" id="" cols="30" rows="10"></textarea>
`;

const elemen_node = document.createElement("div");
elemen_node.innerHTML = elemen;
elemen_node.style.width = '20%'
elemen_node.style.position = 'fixed'
elemen_node.style.right = '0'
elemen_node.style.top = '66px'
elemen_node.style.backgroud = 'blue'
document.body.appendChild(elemen_node);

document.querySelector('#yDmH0d').style.width = '80%'
<script>
	import hljs from 'highlight.js'
	import 'highlight.js/styles/github.css'

	let app = false
	let bahasa = ''
	let kode = ''
	let hasil = ''

	if (localStorage.kode) {
		kode = localStorage.kode
	}
	if (localStorage.bahasa) {
		bahasa = localStorage.bahasa
	}

	$: if (kode) {
		localStorage.kode = kode
	} else {
		localStorage.kode = kode
	}

	$: if(bahasa){
		localStorage.bahasa = bahasa
	} else {
		localStorage.bahasa = bahasa
	}

	function cek(x){
		if (x.key == 'k') {
			app = true
		}
		if (x.key == 'Escape') {
			app = false
		}
	}

	function olah(){
		hasil = hljs.highlight(kode, {
			language: bahasa
		}).value
	}
</script>

{#if app}
	<section class="latar">
		<section class="aplikasi">
			<section>
				<p>Bahasa Pemrograman</p>
				<input type="text" bind:value={bahasa} placeholder="Contoh: javascript" required />
				<p class="pt-3">Kodenya</p>
				<textarea required name="" bind:value={kode} id="" cols="30" rows="10"></textarea>
				<button class="olah" on:click={olah}>Olah</button>
			</section>
			<section>
				<p>Hasilnya</p>
				<section class="hasilnya"><pre><code>{@html hasil}</code></pre></section>
			</section>
		</section>
	</section>
{/if}

<svelte:window on:keyup={cek}></svelte:window>

<style>
	button {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
		padding: 0;
		line-height: inherit;
		color: inherit;
		text-transform: none;
		-webkit-appearance: button;
		background-color: transparent;
		background-image: none;
		cursor: pointer;
		@apply outline-none border-none;
	}
	:root {
		--oren: #ff5722;
	}
	* {
		@apply m-0 p-0 focus:outline-none text-gray-600;
		box-sizing: border-box;
		font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
		/*color: rgba(0,0,0,0.54);*/
	}
	.latar {
		@apply w-screen h-screen bg-black/50 backdrop-filter backdrop-blur fixed top-0 left-0 p-5 pt-25 justify-center flex;
		z-index: 100;
	}

	.aplikasi {
		@apply bg-white border-3 border-black grid grid-cols-2 h-min p-3 gap-3;
		box-shadow: 10px 10px 0 0 black;
	}
	input, textarea {
		@apply w-full border-2 p-2 border-black rounded
	}
	p {
		@apply pb-1
	}
	.olah {
		@apply bg-$oren px-7 py-2 rounded text-white w-min mt-2 cursor-pointer select-none;
		transition: .1s;
	}
	.olah:hover,
	.olah:focus {
		box-shadow: 5px 5px 0 0 black;	
	}

	.hasilnya {
		@apply select-all w-90 h-70 overflow-auto
	}

	pre {
		white-space: pre-wrap;
	}
</style>
<script>
	import Keyword from './keyword.svelte'
	import Jumlah_kata from './jumlah-kata.svelte'
	import Credit from './credit.svelte'
</script>

<aside class="aplikasi">
	<Keyword/>
	<Jumlah_kata/>
	<p class="pengumuman-snippet-kode">Tekan <strong>Alt k</strong> untuk membuka fitur Snippet Kode</p>
	<p class="pengumuman-snippet-kode">Tekan <strong>Alt l</strong> untuk membuka fitur Thumbnail Link</p>
	<Credit/>
</aside>

<style>
	:root {
		--oren: #ff5722;
	}
	.aplikasi :global(*) {
		@apply m-0 p-0 focus:outline-none;
		box-sizing: border-box;
		font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
		color: rgba(0,0,0,0.54);
	}
	.pengumuman-snippet-kode {
		@apply p-2 pt-0 text-center text-sm
	}
</style>
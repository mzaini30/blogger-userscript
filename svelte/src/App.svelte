<script>
	let isi_keyword = ''
	if (localStorage.isi_keyword) {
		isi_keyword = localStorage.isi_keyword
	}
	$: if (isi_keyword){
		localStorage.isi_keyword = isi_keyword
	} else {
		localStorage.isi_keyword = isi_keyword
	}
</script>

<section class="bagian-keyword">
	<p class="judul-keyword">Keyword</p>
	<textarea class="textarea-keyword" bind:value={isi_keyword} placeholder="Masukkan list keyword" name="" id="" cols="30" rows="10"></textarea>
</section>

<style windi:safelist:global>
	* {
		@apply m-0 p-0 focus:outline-none;
		box-sizing: border-box;
		font-family: 'Comic Sans MS', cursive;
	}
	.judul-keyword {
		@apply text-center pb-2 text-violet-500;
	}
	.textarea-keyword {
		@apply w-full p-2 text-base focus:outline-green-500;
	}
	.bagian-keyword {
		@apply p-2
	}
</style>
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

<style>
	.judul-keyword {
		@apply text-center pb-2
	}
	.textarea-keyword {
		@apply w-full p-2 text-base border border-$oren focus:border-2;
	}
	.bagian-keyword {
		@apply p-2
	}
</style>
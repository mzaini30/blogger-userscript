<script>
	import {onMount} from 'svelte'

	let jumlah_kata = 0
	onMount(() => {
		function run(){
			try {
				let banyak_editable = document.querySelectorAll('.editable').length
				let konten = document.querySelectorAll('.editable')[banyak_editable - 1].contentWindow.document.querySelector('.editable')
				jumlah_kata = konten.innerText.split(/\s/).filter(x => x).length
			} catch(error){
				console.log(error)
			}
		}
		run()
		window.setInterval(run, 5000)
	})
</script>

<section class="word-counter {jumlah_kata < 300 ? 'merah' : null}">{jumlah_kata.toLocaleString('id')} kata</section>

<style>
	.word-counter {
		@apply text-center pb-2
	}
	:global(.merah) {
		@apply !text-red-500
	}
</style>
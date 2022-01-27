<script>
	import Keyword from './keyword.svelte'
	import Jumlah_kata from './jumlah-kata.svelte'
	import Credit from './credit.svelte'
</script>

<aside class="aplikasi">
	<Keyword/>
	<Jumlah_kata/>
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
</style>
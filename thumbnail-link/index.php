<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Document</title>
	<link rel="stylesheet" href="style.css" />
</head>
<body>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos labore totam consequuntur possimus repudiandae, asperiores explicabo blanditiis dicta eos sit quo rerum, voluptates voluptatem adipisci repellat dolor cum placeat.</p>
<h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est adipisci eos alias fugit, blanditiis, sed enim dolores, in aspernatur modi sapiente repudiandae atque. Et accusamus pariatur voluptas praesentium, provident deleniti.</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, error nostrum aliquid eligendi modi consectetur! Reiciendis eius, placeat ducimus distinctio, obcaecati, libero delectus ullam modi commodi cupiditate rerum, laboriosam blanditiis.</p>

<div class="latar thumbnail-link">
	<div class="wadah">
		<form action="">
			<input type="url" placeholder="Masukkan link" required />
		</form>
		<div class="hasil">
			<div class="html">
				<a href="${z.link}" style="max-width: 600px;display: block;margin: auto;border: 1px solid rgba(0, 0, 0, 0.2);border-radius: 5px;overflow: hidden;box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);text-decoration: none !important;color: inherit;" class="preview-link">
					<img style="width: 100%;aspect-ratio: 16 / 9;object-fit: cover;" src="https://i.postimg.cc/wM1Hzmqk/icon.jpg" alt="Judul gambar" />
					<span class="keterangan" style="padding: 10px;display: block;">
						<span class="judul" style="display: block;padding-bottom: 5px;font-size: 14px;font-weight: bold;">Hello World</span>
						<span class="deskripsi" style="display: block;color: gray;font-size: 12px;">Lorem ipsum dolor sit amet</span>
					</span>
				</a>
			</div>
			<pre>&lt;a href="${z.link}" style="max-width: 600px;display: block;margin: auto;border: 1px solid rgba(0, 0, 0, 0.2);border-radius: 5px;overflow: hidden;box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);text-decoration: none !important;color: inherit;" class="preview-link"&gt;
	&lt;img style="width: 100%;aspect-ratio: 16 / 9;object-fit: cover;" src="${anti_cors}${encodeURIComponent(z.gambar)}" alt="${z.judul}" /&gt;
	&lt;span class="keterangan" style="padding: 10px;display: block;"&gt;
		&lt;span class="judul" style="display: block;padding-bottom: 5px;font-size: 14px;font-weight: bold;"&gt;${z.judul}&lt;/span&gt;
		&lt;span class="deskripsi" style="display: block;color: gray;font-size: 12px;"&gt;${z.deskripsi}&lt;/span&gt;
	&lt;/span&gt;
&lt;/a&gt;</pre>
		</div>
	</div>
</div>

<script>
	function z(x){
		return document.querySelector(x)
	}

	window.addEventListener('keyup', x => {
		if (x.key == 'l' && x.altKey == true) {
			z('.thumbnail-link').style.display = 'block'
			z('.thumbnail-link input').focus()
		}
		if (x.key == 'Escape') {
			z('.thumbnail-link').style.display = 'none'
		}
	})

	z('.thumbnail-link form').addEventListener('submit', el => {
		const link = z('.thumbnail-link input').value
		const anti_cors = 'https://scrappy-php.herokuapp.com/?url='

		async function dapatkan(){
			let isi_situs = await fetch(`${anti_cors}${encodeURIComponent(link)}`)
			isi_situs = await isi_situs.text()

			const parser = new DOMParser
			const dom = parser.parseFromString(isi_situs, 'text/html')

			let thumbnail = {}

			if (isi_situs){
				thumbnail.judul = dom.title ?? 'Hello World'
				thumbnail.deskripsi = dom.querySelector('meta[name="description"]').content ?? 'Lorem ipsum dolor sit amet'
				thumbnail.gambar = dom.querySelector('meta[property="og:image"]').content ?? 'https://i.postimg.cc/wM1Hzmqk/icon.jpg'

				let hasilnya = `<a href="${link}" style="max-width: 600px;display: block;margin: auto;border: 1px solid rgba(0, 0, 0, 0.2);border-radius: 5px;overflow: hidden;box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);text-decoration: none !important;color: inherit;" class="preview-link">
	<img style="width: 100%;aspect-ratio: 16 / 9;object-fit: cover;" src="${anti_cors}${encodeURIComponent(thumbnail.gambar)}" alt="${thumbnail.judul}" />
	<span class="keterangan" style="padding: 10px;display: block;">
		<span class="judul" style="display: block;padding-bottom: 5px;font-size: 14px;font-weight: bold;">${thumbnail.judul}</span>
		<span class="deskripsi" style="display: block;color: gray;font-size: 12px;">${thumbnail.deskripsi}</span>
	</span>
</a>`

				z('.thumbnail-link .html').innerHTML = hasilnya
				z('.thumbnail-link pre').innerText = hasilnya
			}
		}
		dapatkan()
		el.preventDefault()
	})
</script>
	
</body>
</html>
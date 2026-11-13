# Data in Bloom — Lily Data Analyst Portfolio

Website statis dengan palet #ffffff, #f5f5dc, #ffdae3, #ecf8ff, #c8c57d.
HTML, CSS, dan JavaScript biasa; tidak perlu npm atau proses build.

## Isi dan fitur
- Home, About Me, Skills, Background (Education & Professional Experiences), Projects, Contact Me.
- Enam kartu proyek dengan filter SQL, Python, Tableau, Power BI, dan Spreadsheet.
- Dua entri pada subbagian Research Experiences.
- Detail proyek dalam dialog, navigasi mobile, indikator bagian aktif, dan scroll halus.
- Light/dark mode yang mengikuti preferensi perangkat pada kunjungan pertama, lalu menyimpan pilihan di browser.
- Animasi kemunculan, hover, dan bunga; menghormati prefers-reduced-motion.
- Tautan proyek/kontak yang belum diisi menampilkan pemberitahuan, tanpa tautan akun palsu.

## Personalisasi sebelum membagikan kepada recruiter
Konten awal adalah DRAF: bio, kemampuan, pendidikan, pengalaman, enam proyek, dan dua penelitian perlu disesuaikan. Tidak ada angka hasil analisis atau klaim riwayat kerja yang dibuat-buat.

1. Buka `dist/content.js`. Ubah name, fullName, role, intro, about, dan aboutNote. Kosongkan aboutNote setelah memfinalkan bio.
2. Letakkan foto pribadi di `dist/assets/profile.jpg`, lalu set photo menjadi `assets/profile.jpg`. Foto yang valid menggantikan bingkai placeholder. Jangan memakai foto orang lain.
3. Isi daftar skills, education, dan experience dengan pengalaman yang dapat diverifikasi.
4. Isi keenam projects: title, category, tool, tags, summary, question, approach, output. Untuk mengubah daftar kategori filter, edit tombol di `dist/index.html` agar cocok dengan tool pada content.js.
5. Tambahkan screenshot proyek di assets, lalu isi image, misalnya `assets/retail.jpg`. Isi slides dan tableau dengan URL HTTPS. `null` berarti belum tersedia.
6. Isi dua research, termasuk link publikasi/presentasi dan image jika tersedia.
7. Isi contact.whatsapp dengan nomor internasional seperti `6281234567890` (contoh format, bukan nomor kontak pemilik); email dengan alamat lengkap; linkedin dengan URL profil HTTPS.
8. Di index.html sesuaikan meta description, kalimat hero, dan pesan contoh. Hapus keterangan “Contoh isi & visual proyek” setelah seluruh konten benar-benar diganti. Pada app.js, sesuaikan catatan modal contoh setelah mengganti semua studi kasus dengan hasil aktual.
9. Periksa title, bio, label contoh, foto, tautan, dan tampilan mobile sebelum membagikan.

Untuk mengubah warna atau layout: `dist/styles.css`. Untuk perilaku interaksi: `dist/app.js`.
Semua gambar SVG merupakan ilustrasi khusus; thumbnail dashboard menggunakan pola ilustratif, bukan hasil proyek nyata. Font Google Fonts memiliki fallback sistem jika jaringan font tidak tersedia. Tidak ada analytics atau formulir yang mengirim data.

## Publish ke GitHub Pages

1. Buat repository GitHub (repository publik dapat menggunakan GitHub Free).
2. Upload seluruh isi folder ini ke root repository: `dist`, `.github/workflows/pages.yml`, dan README.md. Pastikan folder `.github` yang tersembunyi ikut terunggah. Jangan upload hanya file ZIP.
3. Gunakan branch `main`, atau sesuaikan `branches` dalam workflow jika memakai branch lain.
4. Pada repository: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Pada tab **Actions**, jalankan workflow **Publish portfolio to GitHub Pages** dengan **Run workflow**, atau push perubahan ke main.
6. Tunggu sampai job berhasil. URL tersedia pada Settings → Pages dan hasil deployment.
7. Setiap push selanjutnya ke main akan memperbarui website.

Workflow mengunggah `dist` dan menggunakan path relatif sehingga kompatibel dengan alamat `username.github.io/nama-repository/`. Tidak memerlukan secret. Website yang dipublikasikan lewat repository publik akan dapat dibaca publik; pastikan data kontak memang boleh dibagikan.

Dokumentasi resmi (diverifikasi 21 Oktober 2026):
https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Preview lokal
Buka dist/index.html di browser; atau dari folder project jalankan `python3 -m http.server 8000 --directory dist`, lalu buka http://localhost:8000. Tidak memerlukan server untuk menyimpan data.

## Validasi yang dilakukan
Pemeriksaan sintaks JavaScript, struktur HTML, target anchor, jumlah konten, aset lokal, keseimbangan blok CSS, serta struktur workflow. Pengujian visual dan interaksi pada browser belum dilakukan dalam lingkungan pembuatan ini.

# Flexi Host Frontend

Aplikasi React sederhana dengan Vite yang menampilkan **Hello World**.

## Instalasi

1. Instal Node.js versi 22.12 atau lebih baru (atau 20.19 ke atas pada seri 20) dari [nodejs.org](https://nodejs.org/). Instalasi Node.js menyertakan npm. Periksa dengan `node --version` dan `npm --version`.
2. Instal pnpm versi 12, misalnya dengan `npm install -g pnpm@12`, lalu periksa dengan `pnpm --version`.
3. Untuk menggunakan `make live`, instal GNU Make:
   - **Windows:** misalnya melalui Chocolatey dengan `choco install make`, lalu pastikan `make` tersedia di PATH.
   - **Linux:** gunakan pengelola paket distribusi, misalnya `sudo apt install make` di Ubuntu/Debian.
   - **macOS:** jalankan `xcode-select --install` untuk memasang Command Line Tools.
4. Buka terminal di direktori proyek dan instal dependensi:

   ```sh
   pnpm install --frozen-lockfile
   ```

## Menjalankan aplikasi

Pada Windows, Linux, maupun macOS:

```sh
pnpm run dev
```

Buka alamat yang ditampilkan di terminal, biasanya `http://localhost:5173/`. Hentikan server dengan `Ctrl+C`.

## Build dan deployment

Untuk membuat file statis produksi di `dist/`:

```sh
pnpm run build
pnpm run preview
```

Buka alamat yang ditampilkan oleh Vite untuk melihat hasil build secara lokal. `pnpm run preview` hanya untuk pratinjau, bukan server produksi.

Untuk membuat `app.zip` pada Windows, Linux, atau macOS:

```sh
make live
```

Perintah ini menjalankan build dan mengemas isi `dist/` ke `app.zip`, dengan `index.html` di akar arsip. File `app.zip` yang sudah ada akan ditimpa. Unggah arsip ini ke SewuCloud jika layanan Anda mendukung deployment situs statis dari ZIP. File hasil build harus dilayani oleh server web statis; arsip ini bukan binary Linux ARM64 seperti proyek backend. Ikuti konfigurasi layanan SewuCloud untuk direktori situs dan port yang digunakan.

## Peringatan penyimpanan di SewuCloud

SewuCloud menggunakan pod untuk menjalankan aplikasi. Data yang disimpan di luar folder `upload` dapat hilang saat pod di-restart atau diganti. Simpan data yang perlu dipertahankan di folder `upload` dan pastikan folder tersebut terhubung ke penyimpanan persisten sesuai konfigurasi SewuCloud. Lakukan pencadangan data penting secara berkala.

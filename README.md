## Package yang Digunakan

- NextJs 13 (latest)
- Next-Auth
- Axios
- clsx
- ts-patterns
- Zod
- Tanstack React Query

## Struktur Direktori

Projek ini diorganisir dengan direktori-direktori berikut:

- `app`: Direktori ini berisi file inti aplikasi dan konfigurasi. Ini berfungsi sebagai titik masuk untuk aplikasi Next.js.

- `components`: Di dalam direktori `components`, Anda akan menemukan struktur direktori yang mengikuti metodologi Atomic Design. Di sini Anda mengorganisasi komponen UI Anda, termasuk atom, molekul, organisme, template, dan komponen tingkat lebih tinggi lainnya.

- `entities`: Direktori `entities` dimaksudkan untuk tipe data atau interface yang bersifat domain-specific.

- `libs`: Di direktori `libs`, Anda dapat menempatkan fungsi utilitas, modul pembantu, dan kode lain yang dapat digunakan ulang di seluruh aplikasi.

- `modules`: Direktori `modules` adalah tempat Anda mengenkapsulasi logika, proses bisnis dan komponen berbasis fitur. Setiap modul bisa memiliki subdirektori sendiri, termasuk component, style, dan file lain yang relevan.

- `styles`: Direktori ini dimaksudkan untuk style global, seperti file CSS atau SCSS yang berlaku untuk seluruh aplikasi.

1. **Install Package:**

   ```
   yarn install
   ```

2. **Jalankan pada server dev local:**

   ```
   yarn dev
   ```

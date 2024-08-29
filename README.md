
# ktp-parse

parse NIK indonesia

  

Parse & Validasi Nomor Induk Kependudukan (NIK) KTP Menggunakan

  

Kode ini merupakan modifikasi dari https://github.com/rahadiana/nik_parser.ts.

  
  

## Penggunaan

  

```ts

npm i https://github.com/pemkotbekasi/ktp-parse  

const  ParseKTP = require('./index')

  

const  ktp = '3104110609970001'

  

const  nik = ParseKTP(ktp)

{"success":true,"code":200,"message":"sucess","data":{"provinceId":"35","province":"JAWA TIMUR","kabupatenKotaId":"3575","kabupatenKota":"KOTA PASURUAN","kecamatanId":"357501","kecamatan":"GADINGREJO","kodepos":"67138","kelamin":"pria","lahir":"2018-01-23T17:00:00.000Z","uniqcode":"0007"}}
```

  

# Catatan

Data yang dihasilkan hanya hasil menterjemahkan tiap digit NIK sehingga data yang dihasilkan adalah

tempat kali pertama NIK dibuat/tempat lahir (bukan tempat domisili pemilik NIK secara uptodate).

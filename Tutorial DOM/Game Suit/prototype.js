let ulang = true;
while ( ulang ) {
   // pilihan Player
    let p = prompt('Pilih satu: Gajah, Semut, Orang');

    // pilihan Computer
    let comp = Math.random();
    if (comp < 0.34) {
        comp = 'Gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'Orang';
    } else {
        comp = "Semut";
    }

    // menentukan Rules
    let hasil = '';
    if ( p == comp) {
        hasil = alert('Seri')
    } else if ( p == 'Gajah') {
        hasil = (comp == 'Orang') ? 'Menang!' : 'Kalah!';
    } else if ( p == 'Orang') {
        hasil = (comp == 'Semut') ? 'Menang!' : 'Kalah';
    } else if ( p == 'Semut') {
        hasil = (comp == 'Gajah') ? 'Menang!' : 'Kalah';
    } else {
        hasil = 'Anda memasukkan pilihan yang salah';
    }

    // menampilkan hasil
    alert('Anda memilih ' + p + ', dan Komputer memilih ' + comp + ', Hasilnya Anda ' + hasil);

    ulang = confirm('Mau Main Lagi ?');
}

alert('Terimakasih sudah bermain')
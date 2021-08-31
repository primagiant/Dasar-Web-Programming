let hasil = '';
let ulang = true;
while (ulang) {
    // membuat angka random
    let comp = Math.round(Math.random()*10);
    console.log(comp);
    // pengulangan Untuk Rules dan menampilakn hasil
    for ( let i = 2 ; i >= 0 ; i-- ) {
        if (i > 0) {
            alert('Kamu Punya ' + i + ' kesempatan')
            // mengambil data dari user
            let p = prompt('Masukkan angka kurang dari 10');
            // rules dan tampilakan hasil
            if ( p == comp ) {
                alert('Angka Tersembunyi adalah '+ comp + ' Kamu Menang');
                // break untuk keluar dari perulangan for
                break          
            } else if ( p > comp) {
                if ( p > 10) {
                    alert('angka yang anda masukan salah');
                } else {
                    alert('angka kurang dari ' + p);
                }
            } else if ( p < comp ){
                if ( p < 0) {
                    alert('angka yang anda masukan salah');
                } else {
                    alert('angka lebih dari ' + p)
                }
            }
        } else {
            alert('Kesempatan Habis!!')
        }
    };
    // pengulanagan untuk ulang game
    ulang = confirm("Mau Main Lagi??");
};
let penumpang = [];
let tambahPenumpang = function(namaPenumpang,penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for ( let i = 0 ; i < penumpang.length ; i++ ) {
            if (penumpang[i] === undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + " sudah ada dalam angkot");
                return penumpang;
            } else if ( i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
};

let hapusPenumpang = function(namaPenumpang, penumpang) {
    if ( penumpang.length == 0 ) {
        console.log("angkot saat ini kosong");
        return penumpang;
    } else {
        for ( let i = 0 ; i < penumpang.length ; i++) {
            if ( penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if ( i == penumpang.length - 1) {
                console.log(namaPenumpang + " tidak ada dalam angkot");
            }
        }
    }
}

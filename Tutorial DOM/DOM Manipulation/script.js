// // Element Manipulation
// const sectionA = document.querySelector('section#a');
// // innerHTML bisa mengubah appaun dalam html tersebut
// sectionA.innerHTML = '<h2>Ini Diganti dari JavaScript</h2>';

// const h1 = document.getElementById('judul');
// // mengganti semua bagian dalam HTML yang diseleksi
// h1.innerHTML = "Prima Giant";
// // mengubah style
// h1.style.backgroundColor = 'maroon';
// // menambahkan atribut dalam element
// h1.setAttribute('name', 'Prima')

// const a = document.querySelector('section#a a');
// // mengambil isi atribut
// a.getAttribute('href')
// // menghapus atribut
// a.removeAttribute('href');



// Node Manipulation
// buat element baru
const pBaru = document.createElement('p');
// buat text yang akan dimasukkan ke pbaru
const textPBaru = document.createTextNode('Paragraf Baru');
// simpan text ke pBaru
pBaru.appendChild(textPBaru);
// memasukkan pbaru ke body
    // 1. seleksi tempat 
const sectionA = document.getElementById("a");
    // 2. masukkan pbaru ke akhir section a
sectionA.appendChild(pBaru);


// membuat li dan memasukkan ke tengah (menggunakan insert before)
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode("item baru");
liBaru.appendChild(textLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = document.querySelector('section#b ul li:nth-child(2)');

ul.insertBefore(liBaru,li2);


// hapus element a (remove Child)
const link = document.querySelector('a');
sectionA.removeChild(link);

// replace paragraf 4 (menggunakan replace child)
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru!');
h2Baru.appendChild(textH2Baru);
sectionB.replaceChild(h2Baru,p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';

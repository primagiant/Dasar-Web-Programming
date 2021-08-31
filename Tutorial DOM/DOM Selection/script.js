// mengembalikan 1 element
const judul = document.getElementById('judul');
judul.innerHTML = 'Prima Giant';
judul.style.color = 'green';

// mengembalikan HTML collection (seperti array)
const p = document.getElementsByTagName("p");
// looping untuk array p agar bisa di gunakan
for ( let i = 0 ; i < p.length; i++ ) {
    p[i].style.color = "grey";
}

// mengembalikan HTML collection
const p2 = document.getElementsByClassName('p2');
p2[0].innerHTML = 'Hello World (ini diubah dengan JavaScipt)'

// mengembalikan node
const li1 = document.querySelector('section#b li');
li1.innerHTML = 'Pake Query Selector';

// selector menggunakan pseudo class
const li2 = document.querySelector('section#b li:nth-child(2)')
li2.innerHTML = 'Javascript Plus Pseudo Class'

// menghasilkan 
const pQueryAll = document.querySelectorAll("p");
for (let i = 0 ; i < pQueryAll.length ; i++) {
    pQueryAll[i].style.backgroundColor = "lightblue";
};

// tombol ubahwarna simple
const tubahWarna = document.getElementById('tubahWarna');
tubahWarna.onclick = function() {
    //document.body.style.backgroundColor = 'salmon';
    document.body.classList.toggle('salmon');
}

// membuat tombol random
const random = document.createElement('button');
const textRandom = document.createTextNode('Random');
random.appendChild(textRandom);
random.setAttribute('type', 'button')
tubahWarna.after(random);

random.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
});

// seleksi DOM yang dibutuhkan
const sMerah = document.querySelector('input[name = sMerah]');
const txDivMerah = document.getElementsByClassName('merah');
const sHijau = document.querySelector('input[name = sHijau]');
const txDivHijau = document.getElementsByClassName('hijau');
const sBiru = document.querySelector('input[name = sBiru]');
const txDivBiru = document.getElementsByClassName('biru');

// untuk element merah
sMerah.addEventListener('input', function(){
    const r  = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    txDivMerah[0].innerHTML = r;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
});

// untuk element hijau
sHijau.addEventListener('input', function(){
    const r = sMerah.value; 
    const g = sHijau.value;
    const b = sBiru.value;
    txDivHijau[0].innerHTML = g;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
});

// untuk element biru
sBiru.addEventListener('input', function(){
    const r = sMerah.value; 
    const g = sHijau.value;
    const b = sBiru.value;
    txDivBiru[0].innerHTML = b;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
});


// ubah warna berdasarkan mouse
document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)'
});
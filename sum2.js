document.getElementById('okBTN').onclick = function(){
    var nama = document.getElementById('nama').value;
    var kelas = document.getElementById('kelas').value;

    document.getElementById('hasil').innerHTML =
    "Nama: " + nama + "<br>" +
    "Kelas: " + kelas;
}

document.getElementById('clearBTN').onclick = function(){
    document.getElementById('formPendaftaran').reset();
    document.getElementById('hasil').innerHTML="";
}

function beli(namaProduk){
    alert("Kamu membeli: " + namaProduk);
}

var total = 0;

function beli(namaProduk, harga){
    var list = document.getElementById("cartList");

    var item = document.createElement("li");
    item.innerText = namaProduk + " - Rp " + harga;

    list.appendChild(item);

    total += harga;

    document.getElementById("totalHarga").innerText =
    "Total: Rp " + total;
}
document.getElementById('submit').addEventListener('click', myFunction);

function myFunction() {
  const div = document.querySelector('div');
  div.classList.toggle('hasil');

  const nama = document.getElementById('nama').value;
  document.getElementById('h-nama').innerHTML = nama;

  const jumlah = document.getElementById('jumlah').value;
  document.getElementById('h-jumlah').innerHTML = jumlah;
  var diskon = (jumlah > 3)? 30/100 : 0;

  let kelas = document.getElementById('kelas').value;
  let harga = 0;
  if(kelas == "Ekonomi"){
    kelas = "Ekonomi (Air mineral)";
    harga = 1000000;
  }else if(kelas == "Bisnis"){
    kelas = "Bisnis (Snack)";
    harga = 2000000;
  }else if(kelas == "Eksekutif"){
    kelas = "Eksekutif (Makan)";
    harga = 3000000;
  }
  document.getElementById('h-kelas').innerHTML = kelas;
  
  const tujuan = document.getElementById('tujuan').value;
  document.getElementById('h-tujuan').innerHTML = tujuan;


  const bagasi = document.getElementsByName('bagasi');
  let costBagasi = 0;
  let berat = "";
  if(bagasi[0].checked){
    berat = "5kg (100.000)";
    costBagasi = 100000;
  }
  if(bagasi[1].checked){
    berat = "10kg (150.000)";
    costBagasi = 150000;
  }
  if(bagasi[2].checked){
    berat = "15kg (200.000)";
    costBagasi = 200000;
  }
  document.getElementById('h-bagasi').innerHTML = berat;
  
  const asuransi = document.getElementsByName('asuransi');
    let tmpAsuransi;
      if(asuransi[0].checked){
        tmpAsuransi = 50000;
      }else{
        tmpAsuransi = 0;
      }
      if(asuransi[1].checked){
        tmpAsuransi += 50000;
      }
      if(asuransi[2].checked){
        tmpAsuransi += 50000;
      }

      document.getElementById('h-asuransi').innerHTML = tmpAsuransi;

  const total = (harga * jumlah) - diskon + costBagasi + tmpAsuransi;
  document.getElementById('total').innerHTML = total;
      
  
  
}
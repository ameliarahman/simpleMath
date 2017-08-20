/*Simple Math Operation merupakan program 
untuk belajar menghitung operasi perkalian dan penjumlahan dari 10 angka random yang dipilih oleh komputer*/

var arrayAngka;
var randomAngka;
var hasilPerkalian;
var hasilPenjumlahan;
var score =0;

function bilangan(){
arrayAngka=[];
for(var i=0; i<10; i++){
randomAngka = Math.floor(Math.random()*10);
if(randomAngka !== 0){
  arrayAngka.push(randomAngka);
 }
}
}

function penjumlahan(parameter){
 var panjangArray = arrayAngka.length;
  var hasil =0;
  for(var i=0; i<panjangArray; i++){
    hasil += arrayAngka[i];
  }
  if(parameter === hasil){
      score = score+10;
      alert("Selamat jawaban Anda benar!" + "\n" + "Score Anda : " + score );
    
    }else{
      score = score-5;
      alert("Sepertinya Anda kurang teliti!" + "\n" + "Score Anda : " + score );
      
    }
}
function perkalian(parameter){
 var panjangArray = arrayAngka.length;
  var hasil =1;
  for(var i=0; i<panjangArray; i++){
    hasil *= arrayAngka[i];
  }
  if(parameter === hasil){
      score = score+10;
    alert("Selamat jawaban Anda benar!" + "\n" + "Score Anda : " + score );
    }else{
      score = score-5;
      alert("Sepertinya Anda kurang teliti!" + "\n" + "Score Anda : " + score );
      
    }
}

function mulaiBelajar(){
  reset();
  bilangan();
  hasilPenjumlahan = prompt("Berapakah hasil penjumlahan dari seluruh angka ini? " + '\n' + arrayAngka.join(' + '));
  penjumlahan(Number(hasilPenjumlahan));
  hasilPerkalian = prompt("Berapakah hasil perkalian dari seluruh angka ini? " + '\n' + arrayAngka.join(' x '));
  perkalian(Number(hasilPerkalian));
  bilangan();
  hasilPerkalian = prompt("Berapakah hasil perkalian dari seluruh angka ini? " + '\n' + arrayAngka.join(' x '));
  perkalian(Number(hasilPerkalian));
  alert("Terimakasih telah mencoba!");
}

function reset(){
  score = 0;
}

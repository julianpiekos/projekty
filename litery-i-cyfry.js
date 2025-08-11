console.log("wpisz: liczby(liczba), lub: litery('jedna-angielska-litera')")
function liczby(ilosc) {
  for (i = 0; i < ilosc + 1; i++) {
    console.log(i)
  }
}
function litery(doLitery) {
  let alfabet = "abcdefghijklmnopqrstuvwxyz"
  alfabet = alfabet.slice(0, alfabet.indexOf(doLitery) + 1)
  for (i = 0; i < alfabet.length; i++) {
    console.log(alfabet[i])
  }
}
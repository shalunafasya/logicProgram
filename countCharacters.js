function sameCharacters(str) {
  const hasil = {};
  for (let huruf of str) {
    hasil[huruf] = (hasil[huruf] || 0) + 1;
  }
  const duplikat = {};
  for (let key in hasil) {
    if (hasil[key] > 1) duplikat[key] = hasil[key];
  }
  return duplikat;
}
// { r: 2, g: 2, m: 2 } huruf yang sama
console.log(sameCharacters("programming"));

function characters(str) {
  const hasil = {};
  for (let huruf of str) {
    hasil[huruf] = (hasil[huruf] || 0) + 1;
  }
  return hasil;
}
//{ p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 } jumlah semua
console.log(characters("programming"));

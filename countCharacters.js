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

console.log(sameCharacters("programming"));

function characters(str) {
  const hasil = {};
  for (let huruf of str) {
    hasil[huruf] = (hasil[huruf] || 0) + 1;
  }
  return hasil;
}

console.log(characters("programming"));

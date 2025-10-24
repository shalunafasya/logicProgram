function ispalindrom(str){
    str = str.toLowerCase();

    for(let i=0; i<str.length/2; i++){
        if(str[i] !== str[str.length-1-i]){
            return false;
        }
        console.log(str[i], str[str.length-1-i]);
    }
    return true;
}

console.log(ispalindrom("heeh"));
console.log(ispalindrom("kasur rusak"));
console.log(ispalindrom("katak"));

function isPalindrome(str) {
  str = str.toLowerCase();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("katak"));
console.log(isPalindrome("kasur ini rUsak")); 
console.log(isPalindrome("bukan"));

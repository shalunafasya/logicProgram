function vocalString(str){
    let vocal = "aiueoAIUEO"
    let result = ""
    for(let i=0; i<str.length; i++){
        if(vocal.includes(str[i]))
            result += str[i]
    }
    return result
}

console.log(vocalString("hello wOrld"));
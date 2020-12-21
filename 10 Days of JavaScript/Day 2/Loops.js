function vowelsAndConsonants(s) {
    
    //Vowels
    for(let i = 0;i<s.length;i++){
        if(s.charAt(i).match(/[aeiou]/)){
            console.log(s.charAt(i));
        }
    }
    
    //Consonants
    for(let i = 0;i<s.length;i++){
        if(s.charAt(i).match(/[^aeiou]/)){
            console.log(s.charAt(i))
        }
    }
}
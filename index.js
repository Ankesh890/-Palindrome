function findPalindromes(numStrings, stringList) {
   
    let palindromes = [];

    
    for (let i = 0; i < numStrings; i++) {
        let str = stringList[i];
       
        if (str === str.split('').reverse().join('')) {
            palindromes.push(str);
        }
    }

    if (palindromes.length > 0) {
        console.log("Palindromes found in the list are:");
        for (let palindrome of palindromes) {
            console.log(palindrome);
        }
    } else {
        console.log("No palindromes found.");
    }
}

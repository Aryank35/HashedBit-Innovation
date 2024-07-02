// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let str = "I am a student of GITA Autonomous College, Bhubaneswar";

function countConsonantsAndVowels(inputString) {
    let lowerCaseStr = inputString.toLowerCase();

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = 'bcdfghjklmnpqrstvwxyz'.split(''); 

    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of lowerCaseStr) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (consonants.includes(char)) {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

let counts = countConsonantsAndVowels(str);

console.log("Number of vowels:", counts.vowels);
console.log("Number of consonants:", counts.consonants);
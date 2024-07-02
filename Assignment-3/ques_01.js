
// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.


let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

function removeVowel(statesArray) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];

    let filteredStates = statesArray.filter(state => {
        let firstLetter = state.charAt(0).toUpperCase(); 
        return !vowels.includes(firstLetter);
    });

    return filteredStates;
}

let filteredStates = removeVowel(states);

console.log(filteredStates);
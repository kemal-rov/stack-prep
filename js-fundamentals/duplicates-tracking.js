/*
Write a function called findDuplicates 
that takes an array and returns an 
array of duplicates.
*/

function findDuplicates(arr) {
    let duplicates = [];
    let seen = new Set();

    for (let item of arr) {
        if (seen.has(item)) {
            duplicates.push(item);
        } else {
            seen.add(item);
        }
    }
    return duplicates;
}
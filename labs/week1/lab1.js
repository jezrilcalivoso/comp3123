/// COMP 3123 – Full Stack Development – Lab 1
// Name: Jezril Calivoso | Student ID: 101488712
// Date: September 5, 2025

// Exercise 1: Write a JavaScript program to capitalize the first letter of each word of a given string.
function capitalizeFirstLetter(str) {
    if (str === "") return "";

    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalizeFirstLetter(("the quick brown fox")));

// Exercise 2: Write a JavaScript program to find the largest of three integers
function max(...numbers) {
    return Math.max(...numbers);
}

console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));

// Exercise 3: Write a JavaScript program to move last three character to the start of a given string.
// The string length must be greater or equal to three.
function right(str) {
    if(str.length < 3) return str;

    let lastThreeChars = str.slice(str.length - 3);
    return lastThreeChars + str.slice(0, str.length - 3);
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

// Exercise 4: Write a JavaScript program to find the types of a given angle.
/*
Types of angles:
• Acute angle: An angle between 0 and 90 degrees.
• Right angle: An 90 degree angle.
• Obtuse angle: An angle between 90 and 180 degrees.
• Straight angle: A 180 degree angle.
 */
function angle_Type(angle) {
    if(angle < 90) return "Acute angle";
    if(angle === 90) return "Right angle";
    if(angle > 90 && angle < 180) return "Obtuse angle";
    if(angle === 180) return "Straight angle";
}

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));

// Exercise 5: Write a JavaScript program to find the maximum possible sum of some of its
// k consecutive numbers (numbers that follow each other in order.)
// of a given array of positive integers.
function array_max_sum(nums, k) {
    let max_sum = 0;
    for (let idx = 0; idx <= nums.length - k; idx++) {
        let sum = 0;
        for(let i = 0; i < k; i++) {
            sum += nums[idx + i];
        }
        if (sum > max_sum) max_sum = sum;
    }

    return max_sum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));
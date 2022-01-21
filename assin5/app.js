let celc = 25;

let result1 = (celc * 9 / 5) + 32;

console.log(`${celc}°C is ${result1}°F`);

let fh = 90;
let result2 = (fh - 32) * (5 / 9);

console.log(`${fh}°F is ${result2}°C`);


// part b

console.log("Who has a higehr BMI");
let johnH = 1.78;
let LucasH = 1.88;
let johnW = 90;
let LucasW = 89;

let JohnBMI = johnW / (johnH ** 2);
let LucasBMI = LucasW / (LucasH ** 2);

if (LucasBMI > JohnBMI) {
    console.log(`Luca's BMI ${LucasBMI} is higher than John's BMI ${JohnBMI}`);
} else {
    console.log(`John's BMI ${JohnBMI} is higher than Lucas’ BMI ${LucasBMI}`)
}




// part c



let userAnswer = prompt("Please enter a number!");

if (userAnswer == 10) {
    console.log("You win 10 point")
} else if (userAnswer == 8) {
    console.log("You win 8 points")
} else {
    console.log("NOT MATCHED!!")
}


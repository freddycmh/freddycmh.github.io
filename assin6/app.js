
let nets = [80, 82, 100]
let knicks = [80, 90, 106]

function checkAvg(team1, team2) {
    let sum1 = 0;
    let sum2 = 0;
    let amt = team1.length
    for (let i = 0; i < team1.length; i++) {
        sum1 += team1[i]
    }

    for (let i = 0; i < team2.length; i++) {
        sum2 = team2[i];
    }

    let avg1 = sum1 / amt
    let avg2 = sum2 / amt

    if (avg1 == avg2) {
        console.log("Draw")
    } else if (avg1 > avg2) {
        console.log("nets win")
    } else {
        console.log("knicks win")
    }
}

console.log(checkAvg(nets, knicks));



// part b


function tipPrice(price) {
    let tip = 0.0;

    price > 30 && price < 100 ? tip = price * .30 : tip = price * .15;
    let totalValue = price + tip;

    console.log(`The bill is ${price}, the tip is ${tip}, and the total value is ${totalValue}`);

    return tip
}

tipPrice(45)
tipPrice(10)
tipPrice(60)



// part c

let ctemp = 100
let ftemp = 32

const converCelsiusToFahrenheit = (c) => {
    let f = c * (9 / 5) + 32;
    console.log(`${c}˚C is ${f}˚F`)
    return f;
}

const convertFahrenheitToCelsius = (f) => {
    let c = (f - 32) * 5 / 9;
    console.log(`${f}˚F is ${c}˚C`)
    return c;
}




converCelsiusToFahrenheit(ctemp);
convertFahrenheitToCelsius(ftemp);

function headsOrTails(decision) {
    if (decision == "heads".toLowerCase() || decision == "tails".toLowerCase()) {
        console.log("You get 1 point!")
    } else {
        console.log("Try again!")
    }
}
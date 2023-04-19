// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!` );
    debugger;
}

const gifts = ['teddy bear', 'drone', 'doll']

const wrapGifts = (gifts) => {
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

const writeCards = (names, event) => {
    const letterNames = [];
    for(let i = 0; i < names.length; i++){
        letterNames[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }

    return letterNames;
}

const countDown = (int) => {
    let count = int;
    while(count >= 0){
        console.log(count)
        count--;
    }
}
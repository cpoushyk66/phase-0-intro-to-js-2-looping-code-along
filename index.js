// Code your solutions in this file

function writeCards(names, holiday) {
    
    let writtenCards = []
    
    for (let i = 0; i < names.length; i++) {

        writtenCards[i] = `Thank you, ${names[i]}, for the wonderful ${holiday} gift!`;
    }

    return writtenCards;
};

function countDown(number) {

    let i = 0;

    while (i <= number) {

        console.log(i++);
    }
}
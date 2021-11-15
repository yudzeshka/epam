// Array: The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars. Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line. Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
// Line.Tickets(new int[] {25, 25, 50}) // => YES
// Line.Tickets(new int[] {25, 100}) // => NO. Vasya will not have enough money to give change to 100 dollars
// Line.Tickets(new int[] {25, 25, 50, 50, 100}) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)


function sellTickets (peoplesBills) {
    let cash = {
        25:0,
        50:0,
        100:0,
    }

    for (let i = 0; i < peoplesBills.length; i++) {
        if (peoplesBills[i] === 25){
            cash[25] ++;
        }
        else if (peoplesBills[i] === 50) {
            if (cash[25] !==0) {
                cash[25] --;
                cash[50] ++;
            }
            else console.log('I do not have the necessary bills')
        }
        
    }
}
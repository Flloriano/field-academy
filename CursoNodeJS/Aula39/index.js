// While e do While

// let i=0;

// while (i <= 10){
//     console.log(i);
//     i++;
// }
// console.log('Segue a vida');


function random(min, max) {

    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}


const min = 1;
const max = 50;
let rand = random(min, max);


//while
// s


//do while

do{
    rand = random(min, 50);
    console.log(rand);

}while (rand !== 10)
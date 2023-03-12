function isBigger(num) {
    if (num > 5) {
        return true;
    } else return false;
}
//} error
const result = isBigger(11);
//console.log(result);

//const sum a,b => a + b; error
const sum = (a, b) => a + b;
const res = sum(3, 2);
//console.log(res);

const cv = {
        name: 'rakib',
        //age: 24 error
        age: 24,
        job: 'web developer'
    }
    //console.log(cv.job);

//const numbers = [1,3,4,5,5 5,5] error
const numbers = [1, 3, 4, 5, 5, 5, 5]


//for (let i = 0; i < 10 i++)error
for (let i = 0; i < 10; i++) {
    //const n =numbers[i; error
    const n = numbers[i];
}
console.log(numbers);


// if (numbers.length > 5) && (numbers[0] === 5){

// }
if (numbers.length > 5 && numbers[0] === 5) {

}
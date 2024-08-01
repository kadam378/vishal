const a=[1,2,3,4,8,10]

let double =a.map((a)=>a*2)
console.log(double);

let b=a.filter((a)=>a%2===0)
console.log(b);


let c=a.reduce((a)=>a+a)
console.log(c);
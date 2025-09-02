 const marvel_heros=["ironman","thor"," spiderman"]
// console.log(marvel_heros)

const dc=["superman","flash","batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros)

// all_heros=marvel_heros.concat(dc)
// console.log(all_heros)

// const all_new_heros=[...marvel_heros,...dc]
// console.log(all_new_heros)



const array=[1,2,3,4,5,6,[7,8,9],[10,11,[12,13,14,15],16,17]]
const real_array=array.flat(Infinity)
console.log(real_array);

//array convert
 console.log(Array.isArray("Hossain"))  //this give answer (true/false)
 console.log(Array.from("Hossain "))  //this line convert this object into array form

 //interesting case (string not cnvert into array --the result this will give empty array)
 console.log(Array.from({name:"sinan"})) 


 let num1=10
 let num2=20
let num3=30
let num4=40
   console.log(Array.of(num1,num2,num3,num4));
      console.log(Array.from(num1,num2,num3,num4));
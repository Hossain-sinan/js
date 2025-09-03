//object literals
const mysym = Symbol("key1")

const jsuser = {
    name: "sinan",
    age: 20,
    [mysym]: "mykey1",
    lacation: "cumilla",
    eamil: "9780sinan@gmail.com",
    isloggedin: false,
    lastloggindays: ["sunday ", "monday"]
}
console.log(jsuser.eamil)
console.log(jsuser["age"])
console.log(jsuser[mysym])


jsuser.email = "theory1415@gmail.com"
//Object.freeze(jsuser)
jsuser.email = "hossain@gmail.com"
console.log(jsuser)


jsuser.greeting = function () {
            console.log(`Hello js user, ${this.name}`);
}
console.log(jsuser. greeting());
console.log(jsuser. greeting());
// objects is used to group up similar.
// properties ==> key:value
// person has no index but have keys for search in syntax -------person['key']
// number are superflexible as use not as string ------person[5436]
let person = {
    name:"sumit",
    age: 23,
    title:"completed"
}
console.log(person)
// never use number as keys
// donot start with number
// accessible like array but using string only


// dot notation
console.log(person.name)
console.log(person.age) // getter
console.log(person.title)
// use as getter and setter keys values
person.joke =true
console.log(person.joke)

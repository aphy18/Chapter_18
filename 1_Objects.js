// Objects are a non-ordered collection of properties formatted to be key value pairs
// we can access our key value pairs and manipulate them if we wish
// the main premise of objects is labelling our information

const myProfile = {
    firstName: 'Aphason',
    lastName: 'Aberham',
    DOB: '7/5/2002',
    grade: 'second year university',
    hobbies: ['basketball', 'web development', 'drawing', 'video games']
}

console.log('this is my profile -->', myProfile)
console.log(`My first name is ${myProfile.firstName}, and my last name is ${myProfile.lastName}`)
console.log(myProfile['hobbies'])
console.log(myProfile['hobbies'][2])

// when we initialize our objects, the keys are turned into strings so we can use numbers, booleans, or null (as examples) as key names

for (let key in myProfile) { // as we can see the keys are strings
    console.log(typeof key)
}

let myName = 'firstName';

console.log(myProfile[myName]) // will work
console.log(myProfile.myName) // will not work: the object will try to find a key named exactly 'myName'


////// Updating and adding properties //////


myProfile['firstName'] = 'Lesley';
myProfile.lastName = 'Adams'
myProfile['favouriteFood'] = 'rice and chicken'
myProfile.height = '6ft'

console.log('my profile updated --->', myProfile)


// it is really common to mix and match arrays and objects, very practical
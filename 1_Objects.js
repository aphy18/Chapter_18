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
class Babysitter {
    constructor(name, age, plz, picture, availablity) {
        this.name = name
        this.age = age
        this.plz = plz
        this.picture = picture
        this.availablity = availablity
    }
}
class User {
    constructor(name, age, plz) {
        this.name = name
        this.age = age
        this.plz = plz
    }
}

var Person = class {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.babysitting = []
    }
    sayName(){
        console.log('My name is', this.name)
    }
    sayAge(){
        return this.age
    }
    book(babysitting) {
        this.babysitting.push(babysitting)
        location.attendees.push(this)
    }
    cancel(babysitting) {
        this.babysitting.push(babysitting)
        location.cancelation.push(this)
    }
}
lena = new Babysitter('Lena', 20, 13347, )
karo = new Person('Karo', 19)
var anna = new Person('Anna', 24)
lena.sayName()
karo.sayName()
//console.log(lena, karo, anna)


var request = class {
    constructor(name) {
        this.name = name
        this.book = []
        this.cancel = []
    }
}
var location = new request ('')
console.log(location, lena)
lena.attend(location)
karo.attend(location)
anna.attend(location)
console.log(lena, karo, anna)

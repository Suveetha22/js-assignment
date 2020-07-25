console.log("email log in and log out");

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
        this.courses = [];
    }


    login() {
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout() {
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins() {
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    removeCoins() {
        this.luCoins;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
}
let user1 = new User('sam', 20, 'sam@gmail.com')
let user2 = new User('Kavi', 22, 'kavi@gmai.com')

user1.login().logout();
user2.login().logout().addCoins().removeCoins();

class Moderator extends User {
    constructor(name, age, email, role) {
        super(name, age, email);
        this.role = role;
    }
}
class Admin extends Moderator {
    addCourse(user, course) {
        user.courses.push(course);
        console.log(user);
    }
    removeCourse(user, course) {
        user.courses.pop(course);
        console.log(user);
    }
}

let mod = new Moderator('lisa', 24, 'lis@gmail.com', 'Moderator');
let admin = new Admin('Raj', 25, 'raj@gmail.com');
let users = [user1, user2, mod, admin];

users.forEach(element => {
    console.log(element);
});
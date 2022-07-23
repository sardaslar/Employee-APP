const Employee = require('./Employee')

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = "intern"
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return this.role
    }
}

module.export = Intern;


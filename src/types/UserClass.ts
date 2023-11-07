export class User {
    name: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    dateofbird: string;
    constructor(name: string, lastname: string, email: string, password: string, phone: string, dateofbird: string) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.dateofbird = dateofbird;
    }
}
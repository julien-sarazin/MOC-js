const fs = require('fs');
const filePath = './models/Users.json';
let Users = [];

fs.readFile(filePath, (err, data) => {
    Users = JSON.parse(data);
});

function User(data) {
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.age = data.age;
}

User.prototype.save = function (cb) {
    if (!this.firstname || !this.lastname || !this.age)
        return cb('missing required properties');

    Users.push(this);
    fs.writeFile(filePath, JSON.stringify(Users), cb);
};

User.list = function () {
    return JSON.stringify(Users);
};

module.exports = User;

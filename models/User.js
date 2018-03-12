const fs = require('fs');
const uuid = require('uuid');

const filePath = './models/Users.json';
let Users = [];

fs.readFile(filePath, (err, json) => {
    JSON.parse(json).forEach(data => {
        const user = new User(data);
        Users.push(user);
    });
});

function User(data) {
    this._id = data._id || uuid();
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.age = data.age;
}

User.prototype.save = function (cb) {
    if (!this.firstname || !this.lastname || !this.age)
        return cb('missing required properties');

    if (!Users.some(car => car._id === this._id))
        Users.push(this);

    fs.writeFile(filePath, JSON.stringify(Users), cb);
};

User.list = function () {
    return JSON.stringify(Users);
};

User.findById = function(id) {
    return Users.find(car => car._id === id);
};

User.findByIdAndRemove = function (id, cb) {
    Users = Users.filter(user => user._id !== id);
    return fs.writeFile(filePath, JSON.stringify(Users), cb);
};

User.findByIdAndUpdate = function (id, data, cb) {
    let user = User.findById(id);
    user.firstname = data.firstname || user.firstname;
    user.lastname = data.lastname || user.lastname;
    user.age = data.age || user.age;

    return user.save(cb)
};

module.exports = User;

const fs = require('fs');
const uuid = require('uuid');

const filePath = './models/Users.json';
let Users = [];

// Starts by loading the user from a JSON file
// when the file is loaded into the nodeJS process. (required)
fs.readFile(filePath, (err, json) => {
    JSON.parse(json).forEach(data => {
        const user = new User(data);
        Users.push(user);
    });
});

class User {

    constructor(data) {
        this._id = data._id || uuid();
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.age = data.age;
    }

    save(cb) {
        if (!this.firstname || !this.lastname || !this.age)
            return cb('missing required properties');

        if (!Users.some(user => user._id === this._id))
            Users.push(this);

        fs.writeFile(filePath, Users, cb);
    }

    static list (cb) {
        return cb(null, Users);
    }

    static findById (id) {
        return Users.find(user => user._id === id);
    };

    static findByIdAndRemove (id, cb) {
        Users = Users.filter(user => user._id !== id);
        return fs.writeFile(filePath, Users, cb);
    };

    static findByIdAndUpdate (id, data, cb) {
        let user = User.findById(id);
        user.firstname = data.firstname || user.firstname;
        user.lastname = data.lastname || user.lastname;
        user.age = data.age || user.age;

        return user.save(cb)
    };
}

module.exports = User;

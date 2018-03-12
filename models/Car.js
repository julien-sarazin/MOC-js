const fs = require('fs');
const filePath = './models/Cars.json';
let Cars = [];

fs.readFile(filePath, (err, data) => {
    Cars = JSON.parse(data);
});

function Car(data) {
    this.model = data.model;
    this.color = data.color;
}

Car.prototype.save = function (cb) {
    if (!this.model || !this.color)
        return cb('missing required properties');

    Cars.push(this);
    fs.writeFile(filePath, JSON.stringify(Cars), cb);
};

Car.list = function () {
    return JSON.stringify(Cars);
};

module.exports = Car;

const fs = require('fs');
const uuid = require('uuid');
const filePath = './models/Cars.json';
let Cars = [];

fs.readFile(filePath, (err, json) => {
    JSON.parse(json).forEach(data => new Car(data));
});

function Car(data) {
    this._id = data._id || uuid();
    this.model = data.model;
    this.color = data.color;
}

Car.prototype.save = function (cb) {
    if (!this.model || !this.color)
        return cb('missing required properties');

    if (!Cars.some(car => car._id === this._id))
        Cars.push(this);

    fs.writeFile(filePath, Cars, cb);
};

Car.list = function (cb) {
    return cb(null, Cars);
};

Car.findById = function(id) {
    return Cars.find(car => car._id === id);
};

Car.findByIdAndRemove = function (id, cb) {
    Cars = Cars.filter(car => car._id !== id);
    return fs.writeFile(filePath,Cars, cb);
};

Car.findByIdAndUpdate = function (id, data, cb) {
    let car = Car.findById(id);
    car.model = data.model|| car.model;
    car.color = data.color || car.color;

    return car.save(cb)
};

module.exports = Car;

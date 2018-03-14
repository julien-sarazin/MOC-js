const _ = require('lodash');


function hasProperties(data, properties) {
    let missing = [];
    for (let property of properties) {
        if (_.get(data, property) === undefined)
            missing.push(property);
    }
    return missing;
}

function whitelist(data, properties) {
    for (const field in data) {
        if (!properties.find(p => p == field)) {
            delete data[field];
        }
    }
    return true;
}

function blacklist(data, properties) {
    for (const field of properties) {
        if (data[field] !== undefined) {
            delete data[field];
        }
    }
    return true;
}

function isArray(value, options) {
    const opts = options || {};
    if (!Array.isArray(value))
        return false;
    if (opts.min !== undefined && opts.min >= 0 && value.length < opts.min)
        return false;
    if (opts.max !== undefined && opts.max >= 0 && value.length > opts.max)
        return false;
    return true;
}

function areArray(data, properties, options) {
    let invalids = [];
    for (let property of properties) {
        if (!isArray(_.get(data, property, options)))
            invalids.push(property);
    }
    return invalids;
}


module.exports = {
    isEmail,
    isPhoneNumber,
    hasProperty,
    hasProperties,
    hasLength,
    whitelist,
    blacklist,
    isObjectId,
    areObjectId,
    isArray,
    areArray,
    isString,
    areString,
    isNumber,
    areNumber,
    isSlug,
    isDate
};

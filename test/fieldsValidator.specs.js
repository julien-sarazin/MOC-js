const chai = require('chai');
const should = chai.should();

const sut = require('./fieldsValidator');

module.exports = describe('fields', () => {

    describe('hasProperties', () => {
        it('should return an Array when passed object contains given properties', () => {
            sut.hasProperties(
                {
                    field: {
                        foo:{
                            bar: 'hello world'
                        }
                    }
                },
                ['field.foo.bar'])
                .should.deep.equal([]);
        });

        it('should return missing fields when passed object does not given properties', () => {
            let requiredFields = ['field', 'field2'];
            sut.hasProperties(
                {
                    field: 0,
                },
                requiredFields)
                .should.deep.equal(['field2']);
        });
    });


    describe('whitelist', () => {
        it('should remove everything from data that is not in given properties array', () => {
            let data = {
                field: 0,
                field1: 0
            };
            sut.whitelist(data,
                ['field']);
            data.should.deep.equal({field: 0});
        });
    });

    describe('blacklist', () => {
        it('should remove everything from data that is in given properties array', () => {
            let data = {
                field: 0,
                field1: 0,
                field2: 0
            };
            sut.blacklist(data,
                ['field', 'field2']);
            data.should.deep.equal({field1: 0});
        });
    });
});
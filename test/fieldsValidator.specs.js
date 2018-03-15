const chai = require('chai');
const should = chai.should();

const sut = require('./fieldsValidator');

module.exports = describe('fields', () => {

    describe('hasProperties', () => {
        it('should return an Array when passed object contains given properties', () => {
            const requiredFields = ['field.foo.toto', 'single', 'dobby.has.some'];
            sut.hasProperties(
                {
                    single: 0,
                    booboo: false,
                    field: {
                        foo: {
                            toto: 'hello world'
                        }
                    },
                    dobby: {
                        has: {
                            some: 'property'
                        }
                    }
                },
                requiredFields)
                .should.deep.equal([]);
        });

        it('should return missing fields when passed object does not given properties', () => {
            const requiredFields = ['field', 'xy', 'db.uri'];
            sut.hasProperties(
                {
                    field: 0,

                },
                requiredFields)
                .should.deep.equal(['xy', 'db.uri']);
        });

        it('should validate each object in the array ', () => {
            const requiredFields = ['field', 'xy', 'db.uri'];
            sut.hasProperties([
                    { field: 0 },
                    { field: 0 },
                    { xy: 'bar', balo: 'e' },
                    { field: 0, xy: 17, db: { uri: 'mongodb://' } },
                ],
                requiredFields)
                .should.deep.equal(['[0].xy', '[0].db.uri', '[1].xy', '[1].db.uri', '[2].field', '[2].db.uri']);
        });
    });


    describe('whitelist', () => {
        it('should remove everything from data that is not in given properties array', () => {
            const data = {
                field: 0,
                field1: 0,
                security: { salt: 'Xx$Hsdfaw^*es' }
            };
            sut.whitelist(data,
                ['field', 'security.salt']);
            data.should.deep.equal({ field: 0, security: { salt: 'Xx$Hsdfaw^*es' } });
        });
    });

    describe('blacklist', () => {
        it('should remove everything from data that is in given properties array', () => {
            let data = {
                field: 0,
                field1: 0,
                field2: 0,
                foo: {
                    bar: {
                        baz: 'ahah',
                        bal: 'ohoh'
                    }
                }
            };
            sut.blacklist(data,
                ['field1', 'field2', 'foo.bar.baz']);
            data.should.deep.equal({ field: 0, foo: { bar: { bal: 'ohoh' } } });
        });
    });
});


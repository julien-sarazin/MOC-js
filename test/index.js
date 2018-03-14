describe('when no target is provided', () => {
    before(() => prepareContextWith());
    it('should throw an exception', (done) => {});
});

describe('when a target is provided but no data', () => {
    before(() => prepareContextWith());
    it('should return an error 400', () => {});
});

describe('when a target is provided and the data is an array', () => {
    before(() => prepareContextWith());
    it('should validate is the array is not empty', () => {});
});


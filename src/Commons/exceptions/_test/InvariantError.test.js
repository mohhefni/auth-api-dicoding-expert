const InvariantError = require('../InvariantError');

describe('InvariantError', () => {
  it('should create an error correctly', () => {
    const invariantError = new InvariantError('an error occur');

    expect(invariantError.statusCode).toEqual(400);
    expect(invariantError.message).toEqual('an error occur');
    expect(invariantError.name).toEqual('InvariantError');
  });
});

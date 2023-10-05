const PasswordHash = require('../../Applications/security/PasswordHash');

class BcryptPasswordHash extends PasswordHash {
  constructor(bcrypt, saltRound = 10) {
    super();
    this._bycrt = bcrypt;
    this._saltRound = saltRound;
  }

  async hash(password) {
    return this._bycrt.hash(password, this._saltRound);
  }
}

module.exports = BcryptPasswordHash;

/* istanbul ignore file */
const pool = require('../src/Infrastructures/database/postgres/pool');

const AuthenticationsTableTestHelper = {
  async addToken(token) {
    const query = {
      text: 'INSERT INTO authentications VALUES ($1)',
      values: [token],
    };

    await pool.query(query);
  },

  async findToken(token) {
    const query = {
      text: 'SELECT * FROM authentications WHERE ($1)',
      values: [token],
    };

    await pool.query(query);
  },

  async cleanTable() {
    await pool.query('TRUNCATE TABLE authentications');
  },
};

module.exports = AuthenticationsTableTestHelper;

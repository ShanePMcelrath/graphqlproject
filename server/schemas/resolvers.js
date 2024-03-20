const pool = require('../config/connection');

const resolvers = {
    Query: {
        // get user by id
        users: async (parent, args, context) => {

            const { rows } = await pool.query('SELECT * FROM users');
            return rows;
        }
    }
};
module.exports = resolvers;
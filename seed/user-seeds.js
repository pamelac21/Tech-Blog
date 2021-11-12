const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'wheiothwaoi'

    },
    {
        username: 'Pam',
        password: 'zerstorer'
    },
    {
        username: 'Mary',
        password: 'hjgudufo'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
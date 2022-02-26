
const { User } = require('../models');

const userData = [{
        username: 'John',
        email: 'John@example.com',
        password: 'wheiothwaoi'
    },
    {
        username: 'Pam',
        email: 'pam@example.com',
        password: 'zerstorer'
    },
    {
        username: 'Mary',
        email: 'mary@example.com',
        password: 'hjgudufo'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
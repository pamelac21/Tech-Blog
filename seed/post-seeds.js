const { Post } = require('../models');

const postData = [{
        title: 'Title One',
        body: 'Blahblahblahblahblah',
        user_id: 1

    },
    {
        title: 'Title Two',
        body: 'BlahblahblahblahblahBlahblahblahblahblah',
        user_id: 2
    },
    {
        title: 'Another Title',
        body: 'BlahblahblahblahblahBlahblahblahblahblahBlahblahblahblahblah',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
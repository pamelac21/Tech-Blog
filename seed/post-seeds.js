const { Post } = require('../models');

const postData = [{
        title: 'Title One',
        body: 'Blahblahblahblahblah',
        post_url: 'http://google.ca/nam/nulla/integer.aspx',
        user_id: 1

    },
    {
        title: 'Title Two',
        body: 'BlahblahblahblahblahBlahblahblahblahblah',
        post_url: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
        user_id: 2
    },
    {
        title: 'Another Title',
        body: 'BlahblahblahblahblahBlahblahblahblahblahBlahblahblahblahblah',
        post_url: 'https://java.com/at/nibh/in.png',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
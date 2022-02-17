const { Post } = require('../models');

const postData = [{
        title: 'Title One',
        body: 'Praesent ultrices orci ut augue condimentum eleifend.',
        post_url: 'http://google.ca/nam/nulla/integer.aspx',
        user_id: 1

    },
    {
        title: 'Title Two',
        body: 'Sed feugiat leo sit amet libero finibus euismod. Nulla viverra vulputate eleifend.',
        post_url: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
        user_id: 2
    },
    {
        title: 'Another Title',
        body: 'Donec vitae enim in nulla tincidunt malesuada. Duis ac lacus mauris. Suspendisse non mi malesuada erat egestas porttitor id a turpis. Vivamus id libero urna. Nam tincidunt quam vitae turpis sodales, a convallis odio scelerisque.',
        post_url: 'https://java.com/at/nibh/in.png',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
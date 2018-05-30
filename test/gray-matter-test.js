const matter = require('gray-matter');
const file = matter.read('./src/blogs/_posts/a-strange-bug.md',{ excerpt: false });

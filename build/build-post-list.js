const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const blogPath = './src/blogs/'

fs.readdir(path.join(blogPath, '_posts'), function(err, files) {
  if(err) {
    throw err
  }
  files.filter((post) => {
    return /\.md$/.test(post)
  }).forEach((post) => {
    let postMatter = matter.read(path.join(blogPath, '_posts', post))
  })
})

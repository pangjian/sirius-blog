const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const blogPath = './src/blogs/'

const OUTPUT_PATH = path.join(blogPath, 'post-list.json')


fs.readdir(path.join(blogPath, '_posts'), function(err, files) {
  if(err) {
    throw err
  }
  let postlist = []
  files.filter((post) => {
    return /\.md$/.test(post)
  }).forEach((post) => {
    let postMatter = matter.read(path.join(blogPath, '_posts', post))
    let previewText = postMatter.content.substring(0, postMatter.content.indexOf('<!--more-->'))
    postlist.push(Object.assign(postMatter.data, {previewText: previewText}))
  })
  fs.writeFile(OUTPUT_PATH, JSON.stringify(postlist), (err) => {
    console.log('[build post list] DONE:', OUTPUT_PATH)
  })
})

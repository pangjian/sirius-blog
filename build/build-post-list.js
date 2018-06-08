const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const md = require('markdown-it')()
const _ = require('lodash')
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
    let previewText = ''
    if(postMatter.content.indexOf('<!--more-->') > 0) {
      previewText = postMatter.content.substring(0, postMatter.content.indexOf('<!--more-->'))
    } else {
      previewText = postMatter.content.substring(0, 100) + ' ...'
    }

    postlist.push(Object.assign(postMatter.data, {previewText: previewText, previewHtml: md.render(previewText)}))
  })
  let desList = _.sortBy(postlist, 'date')
  fs.writeFile(OUTPUT_PATH, JSON.stringify(_.reverse(desList)), (err) => {
    console.log('[build post list] DONE:', OUTPUT_PATH)
  })
})

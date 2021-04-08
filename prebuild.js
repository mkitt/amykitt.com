#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')

const deserialize = (parsed) => ({ ...parsed.attributes, body: parsed.body })

const getDocs = (dirname, files = []) => {
  const dir = path.join(process.cwd(), dirname)
  fs.readdirSync(dir).forEach((filename) => {
    const fileStat = fs.statSync(path.join(dir, filename))
    if (fileStat.isDirectory()) {
      const nestedFiles = getDocs(`${dirname}/${filename}`, files)
      files = [...nestedFiles]
    }
    if (fileStat.isFile() && path.extname(filename) === '.md') {
      const id = `/${dirname}/${filename}`
      const source = fs.readFileSync(path.join(dir, filename), 'utf-8')
      const parsed = deserialize(frontMatter(source))
      files = [...files, ...[{ id, ...parsed }]]
    }
  })
  return files
}

const docs = getDocs('content')
const home = docs.find((item) => item.id.includes('home.md'))
const about = docs.find((item) => item.id.includes('about.md'))
const projects = docs.filter((item) => item.id.includes('projects'))

const file = `${path.join(__dirname, 'src')}/data.json`
fs.writeFileSync(file, JSON.stringify({ about, home, projects }))

const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')

const contentDir = path.join(__dirname, 'content')
const outputDir = path.join(__dirname, 'static', 'api')

const deserialize = parsed => (
  Object.assign({}, parsed.attributes, { body: parsed.body })
)

const isMarkdownFile = filename => (
  path.extname(filename) === '.md'
)

const isJsonFile = filename => (
  path.extname(filename) === '.json'
)

const parseFile = (filename, dir) => {
  const id = path.basename(filename, '.md')
  const markdown = fs.readFileSync(path.join(dir, filename), 'utf-8')
  const parsed = deserialize(frontMatter(markdown))
  const props = Object.assign({}, parsed, { id })
  return props
}

const writeFile = (filename, contents) => {
  const name = path.basename(filename, '.md')
  console.log(`Writing ${outputDir}/${name}.json`) // eslint-disable-line
  fs.writeFileSync(`${outputDir}/${name}.json`, contents)
}

// -------------------------------------
// Save out top level files to json
const files = fs.readdirSync(contentDir).filter(file => (
  fs.statSync(path.join(contentDir, file)).isFile() && isMarkdownFile(file)
))

files.map((filename) => {
  const parsed = parseFile(filename, contentDir)
  const name = path.basename(filename, '.md')
  const output = JSON.stringify({ [name]: parsed })
  writeFile(filename, output)
  return parsed
})

// Save out subdirectories to json
const subdirs = fs.readdirSync(contentDir).filter(file => (
  fs.statSync(path.join(contentDir, file)).isDirectory()),
)

subdirs.map((subdirname) => {
  const subdir = path.join(__dirname, 'content', subdirname)
  const filenames = fs.readdirSync(subdir)
  const items = filenames.map(filename => (
    isMarkdownFile(filename) ? parseFile(filename, subdir) : null
  )).filter(value => value !== null)
  const output = JSON.stringify({ [subdirname]: items })
  writeFile(subdirname, output)
  return items
})

// Save file containing all of the api
const jsonFiles = fs.readdirSync(outputDir).filter(file => (
  fs.statSync(path.join(outputDir, file)).isFile() && isJsonFile(file)
))

const all = jsonFiles.map(filename => (
  filename === 'all.json' ? null : JSON.parse(fs.readFileSync(path.join(outputDir, filename), 'utf-8'))
)).filter(value => value !== null).reduce((acc, val) => Object.assign({}, acc, val), {})

writeFile('all', JSON.stringify(all))

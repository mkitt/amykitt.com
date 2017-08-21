const fs = require('fs')
const path = require('path')

const outputDir = path.resolve('.', 'static', 'api')

const getAllJson = () => (
  JSON.parse(fs.readFileSync(path.join(outputDir, 'all.json'), 'utf-8'))
)

describe('content.js', () => {
  it('is valid json for all.json', () => {
    expect(() => {
      getAllJson()
    }).not.toThrow()
  })

  it('outputs an all.json with the expected keys', () => {
    const json = getAllJson()
    const expected = ['about', 'home', 'projects']
    const result = Object.keys(json)
    expect(expected).toEqual(result)
  })
})

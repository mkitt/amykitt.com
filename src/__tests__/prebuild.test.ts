import fs from 'fs'
import path from 'path'

const outputDir = path.resolve('.', 'src')

const getAllJson = () =>
  JSON.parse(fs.readFileSync(path.join(outputDir, 'data.json'), 'utf-8'))

describe('prebuild.js', () => {
  it('is valid json for data.json', () => {
    expect(() => {
      getAllJson()
    }).not.toThrow()
  })

  it('outputs a prebuild.json with the expected keys', () => {
    const json = getAllJson()
    const expected = ['about', 'home', 'projects']
    const result = Object.keys(json)
    expect(expected).toEqual(result)
  })
})

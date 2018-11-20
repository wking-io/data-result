import { describe } from 'riteway'

import * as Result from '../../lib/index'
const resultBundle = require('../../lib/index.bundle.js')

const isFunction = func => typeof func === 'function'

describe('All exported functions are available and exist.', async assert => {
  assert({
    given: 'Functions from esm bundle',
    should: 'return as functions',
    actual: Object.values(Result).every(isFunction),
    expected: true
  })

  assert({
    given: 'Functions from umd bundle',
    should: 'return as functions',
    actual: Object.values(resultBundle).every(isFunction),
    expected: true
  })
})

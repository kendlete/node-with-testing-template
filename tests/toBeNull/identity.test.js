/* global test, expect */
import { identity } from './identity'

test('Detects null and not-null values', () => {
  expect(identity(null)).toBeNull()
  expect(identity(87)).not.toBeNull()
})

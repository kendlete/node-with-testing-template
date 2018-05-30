/* global test, expect */
import { tobe } from './tobe'

test('is hello', () => {
  expect(tobe()).toBe('hello')
})

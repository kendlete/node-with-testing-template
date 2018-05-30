/* global test, expect */
import { sayHello } from './sayHello'

test('is hello', () => {
  expect(sayHello('tom')).toBe('hello tom')
})

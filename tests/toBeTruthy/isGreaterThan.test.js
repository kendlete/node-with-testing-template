/* global test, expect */
import { isGreaterThan } from './isGreaterThan'

test('Detects truthy statements', () => {
  const isGreaterThanSeven = isGreaterThan(7)
  expect(isGreaterThanSeven(8)).toBeTruthy()
  expect(isGreaterThanSeven(4)).not.toBeTruthy()
})

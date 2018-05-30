/* global test, expect */
import { makePosition } from './makePosition'

test('Returns position object', () => {
  expect(makePosition(3, 4)).toEqual({ xPos: 3, yPos: 4 })
})

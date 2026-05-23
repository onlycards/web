import { it, expect, describe } from 'vitest'

import { getRandomInteger } from '../lib'

describe('getRandomInteger', () => {
  it('should return value in the correct range', () => {
    const values = Array.from({ length: 1e3 }, () => getRandomInteger(2, 5))

    expect(values.includes(2)).toBeTruthy()
    expect(values.includes(3)).toBeTruthy()
    expect(values.includes(4)).toBeTruthy()
    expect(values.includes(5)).toBeTruthy()
    expect(values.every(value => value > 1 && value < 6))
  })
})

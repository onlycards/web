import { it, vi, expect, describe, afterEach } from 'vitest'

import { moveFirstToZone } from '../lib'

describe('moveFirstToZone', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it.each([
    {
      zoneIndex: 0,
      randomValue: 0,
      expected: [2, 1, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      zoneIndex: 1,
      randomValue: 0.5,
      expected: [2, 3, 4, 5, 1, 6, 7, 8, 9],
    },
    {
      zoneIndex: 2,
      randomValue: 0.999,
      expected: [2, 3, 4, 5, 6, 7, 8, 9, 1],
    },
  ])(
    'should move first card to zone $zoneIndex',
    ({ expected, zoneIndex, randomValue }) => {
      vi.spyOn(Math, 'random').mockReturnValue(randomValue)

      const result = moveFirstToZone([1, 2, 3, 4, 5, 6, 7, 8, 9], zoneIndex)

      expect(result).toEqual(expected)
    },
  )
})

import { it, expect, describe } from 'vitest'

import { getZones, getZoneCount, getZoneRange } from '../lib'

describe('getZoneCount', () => {
  it('should count correctly', () => {
    expect(getZoneCount(2)).toBe(2)
    expect(getZoneCount(8)).toBe(2)
    expect(getZoneCount(9)).toBe(3)
    expect(getZoneCount(15)).toBe(3)
    expect(getZoneCount(16)).toBe(4)
    expect(getZoneCount(100)).toBe(10)
  })
})

describe('getZones', () => {
  it('should get correct zones', () => {
    expect(getZones(2)).toEqual([1, 1])
    expect(getZones(8)).toEqual([4, 4])
    expect(getZones(9)).toEqual([3, 3, 3])
    expect(getZones(14)).toEqual([5, 5, 4])
    expect(getZones(15)).toEqual([5, 5, 5])
    expect(getZones(16)).toEqual([4, 4, 4, 4])
  })
})

describe('getZoneRange', () => {
  it('should get correct range', () => {
    expect(getZoneRange(2, 0)).toEqual([0, 0])
    expect(getZoneRange(9, 1)).toEqual([3, 5])
    expect(getZoneRange(14, 1)).toEqual([5, 9])
    expect(getZoneRange(14, 2)).toEqual([10, 13])
  })
})

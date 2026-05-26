export const getZoneCount = (cardCount: number) =>
  Math.max(2, Math.floor(Math.sqrt(cardCount)))

export const getZones = (cardCount: number) => {
  const zoneCount = getZoneCount(cardCount)
  const baseZoneSize = Math.floor(cardCount / zoneCount)
  const extraCardsCount = cardCount % zoneCount

  return Array.from(
    { length: zoneCount },
    (_, i) => baseZoneSize + (i < extraCardsCount ? 1 : 0),
  )
}

export const getZoneRange = (
  cardCount: number,
  zoneIndex: number,
): [number, number] => {
  const zones = getZones(cardCount)

  if (!zones[zoneIndex]) {
    throw new Error('zoneIndex is out of range')
  }

  const firstIndex = zones
    .slice(0, zoneIndex)
    .reduce((acc, cur) => acc + cur, 0)

  return [firstIndex, firstIndex + zones[zoneIndex] - 1]
}

export const getRandomInteger = (from: number, to: number) =>
  Math.floor(Math.random() * (to - from + 1) + from)

export const moveFirstToZone = <T>(arr: T[], zoneIndex: number): T[] => {
  const edge =
    Math.max(1, getRandomInteger(...getZoneRange(arr.length, zoneIndex))) + 1

  return [...arr.slice(1, edge), arr[0], ...arr.slice(edge)]
}

export const moveFirstToFirstZone = <T>(arr: T[]): T[] =>
  moveFirstToZone(arr, 0)

export const moveFirstToNextZone = <T>(
  arr: T[],
  prevZoneIndex?: number,
): [T[], null | number] => {
  const zoneCount = getZoneCount(arr.length)
  const lastZoneIndex = zoneCount - 1

  return prevZoneIndex === undefined || prevZoneIndex >= lastZoneIndex - 1
    ? [moveFirstToZone(arr, lastZoneIndex), null]
    : [moveFirstToZone(arr, prevZoneIndex + 1), prevZoneIndex + 1]
}

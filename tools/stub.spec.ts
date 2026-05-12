import { it, expect, describe } from 'vitest'

import { createLibConfig } from './lib-config'

describe('Stub test', () => {
  it('must be defined', () => {
    expect(createLibConfig).toBeDefined()
  })
})

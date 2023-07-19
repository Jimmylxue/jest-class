import { add } from '../sum'

describe('>>> add', () => {
	it('1+1===2', () => {
		expect(add(1, 1)).toBe(2)
	})
	it('2+3===5', () => {
		expect(add(2, 3)).toBe(5)
	})
})

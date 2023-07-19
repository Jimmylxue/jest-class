import { clear, get, set } from '../localStorage'

describe('>>> test localStorage function', () => {
	it('set and get localStorage', () => {
		set('test', 'hello world')
		expect(get('test')).toBe('hello world')
	})

	it('clear localStorage', () => {
		set('hello', 'world')
		expect(get('hello')).toBe('world')
		clear()
		expect(get('hello')).toBeFalsy()
	})
})

import { encryptionPhone } from '../encryption'

describe('>>> encryption_phone', () => {
	it('when phone is undefined', () => {
		expect(encryptionPhone(undefined)).toBe('')
	})

	it('when phone is null', () => {
		expect(encryptionPhone(undefined)).toBe('')
	})

	it("when phone is ''", () => {
		expect(encryptionPhone('')).toBe('')
	})

	it('when phone type of = number', () => {
		expect(encryptionPhone(15736379999)).toBe('157****9999')
	})

	it('when phone type of = string', () => {
		expect(encryptionPhone('15736379999')).toBe('157****9999')
	})
})

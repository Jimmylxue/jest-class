export function encryptionPhone(phone: any) {
	if (phone === undefined || phone === null) {
		return ''
	}
	const str = String(phone)
	return [...str]
		.map((char, index) => (index >= 3 && index <= 6 ? '*' : char))
		.join('')
}

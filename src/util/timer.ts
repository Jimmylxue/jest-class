export function after4000ms(fn: (args: string) => string) {
	setTimeout(() => {
		fn('hello timer')
	}, 4000)
}

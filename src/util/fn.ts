export function testTwoFn(fn1: () => void, fn2: (count?: number) => void) {
	setTimeout(() => {
		console.log('fn1 running!')
		fn1()
	}, 2000)

	setTimeout(() => {
		console.log('fn2 running!')
		fn2(3)
	}, 4000)
}

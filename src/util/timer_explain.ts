export function timerGame(callback?: () => void) {
	console.log('Ready....go!')
	setTimeout(() => {
		console.log("Time's up -- stop!")
		callback && callback()
	}, 1000)
}

export function testTwoFn(fn1: () => void, fn2: (str?: string) => void) {
	setTimeout(() => {
		console.log('fn1 running!')
		fn1()
	}, 2000)

	setTimeout(() => {
		console.log('fn2 running!')
		fn2('hello world')
	}, 4000)
}

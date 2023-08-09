import { testTwoFn, timerGame } from '../timer_explain'

describe('>>> timerGame', () => {
	it('简单测试timer 等待1s', () => {
		jest.useFakeTimers() //这个甚至可以不用写。
		jest.spyOn(global, 'setTimeout')
		timerGame()

		expect(setTimeout).toHaveBeenCalledTimes(1)
		expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
	})

	it('calls the callback after 1 second', () => {
		jest.useFakeTimers()
		const callback = jest.fn()

		timerGame(callback)

		// 期待函数还没有被调用
		expect(callback).not.toBeCalled()

		// 运行所有的timer
		jest.runAllTimers()

		// 到这里 所有的Timer时间都过了
		expect(callback).toBeCalled()
		expect(callback).toHaveBeenCalledTimes(1)
	})
})

describe('>>> test advancertimersbytime', () => {
	it('test 1.9 second function status', () => {
		const fn1 = jest.fn()
		const fn2 = jest.fn()
		jest.useFakeTimers()
		testTwoFn(fn1, fn2)
		expect(fn1).not.toBeCalled()
		expect(fn2).not.toBeCalled()

		jest.advanceTimersByTime(1900)

		expect(fn1).not.toBeCalled()
		expect(fn2).not.toBeCalled()
	})

	it('test 2 second function status', () => {
		const fn1 = jest.fn()
		const fn2 = jest.fn()
		jest.useFakeTimers()
		testTwoFn(fn1, fn2)
		expect(fn1).not.toBeCalled()
		expect(fn2).not.toBeCalled()

		jest.advanceTimersByTime(2000)

		expect(fn1).toBeCalled()
		expect(fn2).not.toBeCalled()
	})

	it('test 4 second function status', () => {
		const fn1 = jest.fn()
		const fn2 = jest.fn()
		jest.useFakeTimers()
		testTwoFn(fn1, fn2)
		expect(fn1).not.toBeCalled()
		expect(fn2).not.toBeCalled()
		jest.advanceTimersByTime(4000)
		expect(fn1).toBeCalled()
		expect(fn2).toBeCalled()
	})
})

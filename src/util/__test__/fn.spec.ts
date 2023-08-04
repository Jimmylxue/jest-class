import { testTwoFn } from '../fn'

describe('>>> jest.fn', () => {
	it('test fn return', () => {
		jest.useFakeTimers()
		const fn1 = jest.fn(() => {})
		const fn2 = jest.fn(num => num + 1)

		testTwoFn(fn1, fn2)

		jest.runAllTimers()

		expect(fn1).toBeCalled()
		expect(fn2).toBeCalled()

		// 测试 函数接受的形参
		expect(fn2).toBeCalledWith(3)

		// 测试 函数的返回值
		expect(fn2).toHaveReturnedWith(4)
	})
})

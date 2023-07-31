import { after4000ms } from '../timer'

describe('>>> after4000ms', () => {
	// it('第一想法', () => {
	// 	// 测试虽然通过，但是瞬间完成，感觉并没有timer的概念
	// 	const testFn = (str: string) => {
	// 		expect(str).toBe('hello timer')
	// 		return str
	// 	}
	// 	after4000ms(testFn)
	// })

	// 涉及 定时器 属于异步 可以使用done 进行测试
	// it('使用 done 测试', done => {
	// 	const testFn = (str: string) => {
	// 		expect(str).toBe('hello timer')
	// 		done()
	// 		return str
	// 	}
	// 	after4000ms(testFn)
	// })

	it('测试时间过了 1000ms', done => {
		const startTime = Date.now()
		const testFn = (str: string) => {
			const endTime = Date.now()
			expect(endTime - startTime > 4000).toBeTruthy()
			expect(str).toBe('hello timer')
			done()
			return str
		}
		after4000ms(testFn)
	})
})

describe('>>> 官方更优解', () => {
	it('模拟时间&模拟api', () => {
		jest.useFakeTimers()
		jest.spyOn(global, 'setTimeout')
		expect(setTimeout).toHaveBeenCalledTimes(0)
		after4000ms(() => 'demo')
		expect(setTimeout).toHaveBeenCalledTimes(1)
		expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 4000)
	})
	it('1000ms后函数确实被调用了', () => {
		jest.useFakeTimers()
		jest.spyOn(global, 'setTimeout')
		const fn = jest.fn()
		after4000ms(fn)
		expect(fn).toHaveBeenCalledTimes(0)
		jest.runAllTimers()
		expect(setTimeout).toHaveBeenCalledTimes(1)
		expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 4000)
	})
})

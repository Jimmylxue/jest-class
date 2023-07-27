it('>>> test number', () => {
	expect(1).toBe(1)
	expect(2).toEqual(2)
})

it('>>> test boolean', () => {
	expect(true).toBe(true)
	expect(false).toEqual(false)
	expect(false).toBeFalsy()
	expect(true).toBeTruthy()
})

it('>>> test undefined', () => {
	expect(undefined).toBe(undefined)
	expect(undefined).toBeUndefined()
})

it('>>> test null', () => {
	expect(null).toBe(null)
	expect(null).toBeNull()
})

it('>>> test array', () => {
	const arr = [1, 2, 3]
	// expect(arr).toBe([1, 2, 3])  测试不会痛通过的，这两个数组只是看起来像 但是他们引用的地址并不是同一个
	expect(arr).toBe(arr)
	expect(arr).toEqual([1, 2, 3]) // 这个测试是会通过的，我们可以理解成这是一定 字符比较 ，toEqual比较的并非是地址比较
})

it('>>> test array', () => {
	const fn = () => ({ name: 'jimmy' })
	// expect(fn()).toBe({name:'jimmy'})  测试不会痛通过的，这两个数组只是看起来像 但是他们引用的地址并不是同一个
	expect(fn()).toEqual({ name: 'jimmy' }) // 这个测试是会通过的，我们可以理解成这是一定 字符比较 ，toEqual比较的并非是地址比较
})

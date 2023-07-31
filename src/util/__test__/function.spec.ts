function fetchData(callback: (arg: string) => void) {
	setTimeout(() => {
		callback('hello jest')
	}, 1000)
}

it('是否返回 hello jest', done => {
	function callback(data: string) {
		expect(data).toBe('hello jest')
		done()
	}
	fetchData(callback)
})

function fetchPromise(status: boolean) {
	return new Promise((resolve, reject) => {
		setTimeout(
			() => (status ? resolve('hello jest') : reject('hello reject')),
			1000
		)
	})
}

it('>>> 使用 resolves 匹配器来匹配resolve', () => {
	expect(fetchPromise(true)).resolves.toBe('hello jest')
})

it('>>> 使用 rejects 匹配器来匹配resolve', () => {
	expect(fetchPromise(false)).rejects.toBe('hello reject')
})

it('>>> 使用 then 匹配promise状态', () => {
	return fetchPromise(true).then(res => {
		expect(res).toBe('hello jest')
	})
})

it('>>> 使用 catch 匹配promise状态', () => {
	return fetchPromise(false).catch(err => {
		expect(err).toBe('hello reject')
	})
})

it('>>> 使用 async await 匹配promise', async () => {
	const res = await fetchPromise(true)
	expect(res).toBe('hello jest')
	try {
		await fetchPromise(false)
	} catch (error) {
		expect(error).toBe('hello reject')
	}
})

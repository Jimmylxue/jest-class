import { getFileName } from '../file'

describe('>>> getFileName', () => {
	it('fileName is undefined', () => {
		expect(getFileName(undefined as any)).toEqual({
			ext: '',
			fileName: '',
		})
	})

	it('fileName is null', () => {
		expect(getFileName(null as any)).toEqual({
			ext: '',
			fileName: '',
		})
	})

	it('fileName is ""', () => {
		expect(getFileName('')).toEqual({
			ext: '',
			fileName: '',
		})
	})

	it('fileName is "file.ts"', () => {
		expect(getFileName('file.ts')).toEqual({
			ext: 'ts',
			fileName: 'file',
		})
	})

	it('fileName is "file.ts"', () => {
		expect(getFileName('file.spec.ts')).toEqual({
			ext: 'ts',
			fileName: 'file.spec',
		})
	})
})

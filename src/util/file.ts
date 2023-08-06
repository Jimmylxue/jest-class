export function getFileName(nameString: string) {
	if (nameString === undefined || nameString === null) {
		return {
			ext: '',
			fileName: '',
		}
	}
	const name = String(nameString)
	const nameArr = name.split('.')
	const ext = nameArr[nameArr.length - 1]
	const copyNameArr = [...nameArr]
	copyNameArr.splice(nameArr.length - 1, 1)
	return {
		fileName: copyNameArr.join('.'),
		ext,
	}
}

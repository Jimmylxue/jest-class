import { render } from '@testing-library/react'
import { EStatus, StatusText } from '..'

describe('>>> component StatusText', () => {
	it('when status is 成功', () => {
		const { queryByText, getByTestId } = render(
			<StatusText successText="成功" errorText="失败" status={EStatus.成功} />
		)
		expect(queryByText('成功')).toBeTruthy()
		expect(queryByText('失败')).toBeFalsy()
		const element = getByTestId('statusBox')
		const computedStyle = getComputedStyle(element)
		expect(computedStyle.backgroundColor).toBe('rgb(120, 219, 137)')
	})

	it('when status is 失败', () => {
		const { queryByText, getByTestId } = render(
			<StatusText successText="在线" errorText="离线" status={EStatus.失败} />
		)

		expect(queryByText('离线')).toBeTruthy()
		expect(queryByText('在线')).toBeFalsy()

		const element = getByTestId('statusBox')
		const computedStyle = getComputedStyle(element)
		expect(computedStyle.backgroundColor).toBe('rgb(156, 163, 174)')
	})
})

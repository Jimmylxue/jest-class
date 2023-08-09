import { FC, HTMLAttributes } from 'react'

export enum EStatus {
	成功,
	失败,
}

interface TProps extends HTMLAttributes<HTMLDivElement> {
	successText: string
	errorText: string
	status: EStatus
}

export const StatusText: FC<TProps> = ({ successText, errorText, status }) => {
	const isSuccess = status === EStatus.成功
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<div
				data-testid="statusBox"
				style={{
					width: 5,
					height: 5,
					backgroundColor: isSuccess
						? 'rgb(120, 219, 137)'
						: 'rgb(156, 163, 174)',
					borderRadius: '50%',
					marginRight: 5,
				}}
			></div>
			<div>{isSuccess ? successText : errorText}</div>
		</div>
	)
}

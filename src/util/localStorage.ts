export const LOCAL_KEY = 'JEST_STUDY_KEY_'

export function set(key: string, value: string) {
	localStorage.setItem(LOCAL_KEY + key, value)
}

export function get(key: string) {
	return localStorage.getItem(LOCAL_KEY + key)
}

export function clear() {
	localStorage.clear()
}

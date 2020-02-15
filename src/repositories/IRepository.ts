export default interface IRepository<T> {
	add: (item: T) => void
	get: (item: T) => T
	getAll: () => void
}

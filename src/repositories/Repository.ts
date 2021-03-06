import IRepository from "./IRepository"

export default class Repository<T> implements IRepository<T> {
	private repository: T[] = []
	public add = (item: T) => {
		this.repository.push(item)
	}
	public get = (item: T) => this.repository.find(currentItem => currentItem === item)
	public getAll = () => this.repository
}

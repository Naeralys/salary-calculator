import IEmployee from "./IEmployee"
import { Name } from "../types"

export default class implements IEmployee {
	constructor(private name: Name, private salary: number = 0) {}
	public getName = () => this.name
	public getSalary = () => this.salary
	public setSalary = (salary: number) => {
		this.salary = salary
		return true
	}
}

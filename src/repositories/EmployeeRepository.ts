import IEmployeeRepository from "./IEmployeeRepository"
import Employee from "../models/Employee"
import Repository from "./Repository"

export class EmployeeRepository extends Repository<Employee> implements IEmployeeRepository {
	addEmployee = (employee: Employee): void => this.add(employee)
	getEmployee = (employee: Employee): Employee => this.get(employee)
	getAllEmployees: () => void
}

import Repository from "./Repository"
import Employee from "../models/Employee"

export default interface IEmployeeRepository extends Repository<Employee> {
	addEmployee: (employee: Employee) => void
	getEmployee: (employee: Employee) => Employee
	getAllEmployees: () => void
}

export default interface IEmployee {
	getName: () => Name
	getSalary: () => number
	setSalary: (salary: number) => boolean
}

export type Name = {
	firstName: string
	lastName: string
}

export type Person = {
	name: Name
}

export type PaymentInput = {
	name: Name
	annualSalary: number
	superRate: number
	paymentStartDate: Date
}
export type PaymentOutput = {
	name: Name
	payPeriod: Date
	income: {
		net: number
		gross: number
		tax: number
		super: number
	}
}

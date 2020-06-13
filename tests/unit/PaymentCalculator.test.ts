import { PaymentCalculator } from "../../src/services"
import { EmployeeRepository } from "../../src/repositories/EmployeeRepository"
import { PaymentInput } from "../../src/types"

describe("PaymentCalculator", () => {
	it("calculatePaymentForEmployee", () => {
		const paymentCalculator = new PaymentCalculator(new EmployeeRepository())
		const expected = {}
		const actual = paymentCalculator.calculatePaymentForEmployee({} as PaymentInput)
		expect(actual).toStrictEqual({})
	})
})

import IPaymentCalculator from "./IPaymentCalculator"
import { EmployeeRepository } from "../repositories/EmployeeRepository"
import { PaymentInput, PaymentOutput } from "../types"

export class PaymentCalculator implements IPaymentCalculator {
	constructor(private employeeRepo: EmployeeRepository) {}
	public calculatePaymentForEmployee = (input: PaymentInput) => {
		return {} as PaymentOutput
	}
}
export default PaymentCalculator

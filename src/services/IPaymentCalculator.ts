import { PaymentInput, PaymentOutput } from "../types"

export default interface IPaymentCalculator {
	calculatePaymentForEmployee: (input: PaymentInput) => PaymentOutput
}

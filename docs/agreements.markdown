```mermaid
classDiagram
class Currency {
    EUR
    GBP
    CHF
}
<<enumeration>> Currency
class Extra {
    +price: number
    +count: number
    +description: string
}
<<Interface>> Extra
class RentalPricing {
    +calculatePriceComponent(rent: RentalAgreement): number
}
<<Interface>> RentalPricing
class RentalAgreementStatus {
    STARTED
    ENDED
    VOIDED
}
<<enumeration>> RentalAgreementStatus
class RentalAgreement {
    +rentalAgreementId: string
    +licensePlate: string
    +odoMeterStart: string
    +odoMeterEnd: string
    +rentalStart: Date
    +rentalEnd: Date
    +branchStart: string
    +branchEnd: string
    +reservationNumber: string
    +customerId: string
    +pricing: RentalPricing[]
    +status: RentalAgreementStatus
    +currency: Currency
    +extras: Extra[]
}
class RentalSystem {
    +createRentalAgreement(agreement: RentalAgreement): void
    +updateRentalAgreement(agreement: RentalAgreement): void
    +deleteRentalAgreement(agreement: RentalAgreement): void
}
<<Interface>> RentalSystem
RentalPricing ..> "1" RentalAgreement
RentalAgreement ..> "*" RentalPricing
RentalAgreement ..> "1" RentalAgreementStatus
RentalAgreement ..> "1" Currency
RentalAgreement ..> "*" Extra
RentalSystem ..> "1" RentalAgreement
```
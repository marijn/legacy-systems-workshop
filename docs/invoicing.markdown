```mermaid
classDiagram
class Currency {
    EUR
    GBP
    CHF
}
<<enumeration>> Currency
class LineItem {
    +description: string
    +singlePrice: number
    +totalPrice: number
    +number: number
    +currency: Currency
    +category: string
}
class CreditInvoice {
    +documentNumber: string
    +invoiceNumber: string
    +invoiceDate: Date
    +orderNo: string
    +secondOrder: string
    +thirdOrder: string
    +costCCu: string
    +licensePlate: string
    +drivers: string[]
    +reservationNumber: string
    +recipientName: string
    +recipientCompany: string
    +recipientAddressStreet1: string
    +recipientAddressStreet2: string
    +recipientAddressZipCode: string
    +recipientAddressCity: string
    +recipientAddressCountry: string
    +currency: Currency
    +lineItems: LineItem[]
    +description: string
    +pdfHash: string
    +createdAt: Date
    +modifiedAt: Date
}
class MileageType {
    KM
    M
}
<<enumeration>> MileageType
class Invoice {
    +documentNumber: string
    +invoiceNumber: string
    +invoiceDate: Date
    +orderNo: string
    +branchCodeStart: string
    +branchCodeEnd: string
    +secondOrder: string
    +thirdOrder: string
    +costCCu: string
    +licensePlate: string
    +drivers: string[]
    +reservationNumber: string
    +recipientName: string
    +recipientCompany: string
    +recipientAddressStreet1: string
    +recipientAddressStreet2: string
    +recipientAddressZipCode: string
    +recipientAddressCity: string
    +recipientAddressCountry: string
    +timeIn: Date
    +timeOut: Date
    +mileageStart: string
    +mileageEnd: string
    +mileageType: MileageType
    +currency: Currency
    +lineItems: LineItem[]
    +description: string
    +pdfHash: string
    +createdAt: Date
    +modifiedAt: Date
}
class InvoicingSystem {
    +CreateInvoice(
        orderNo: string,
        branchCodeStart: string,
        licensePlate: string,
        branchCodeEnd: string,
        reservationNumber: string,
        recipientName: string,
        drivers: string[],
        currency: Currency,
        lineItems: LineItem[],
        description: string,
        secondOrder?: string,
        thirdOrder?: string,
        costCCu?: string,
        recipientCompany?: string,
        recipientAddressStreet1?: string,
        recipientAddressStreet2?: string,
        recipientAddressZipCode?: string,
        recipientAddressCity?: string,
        recipientAddressCountry?: string,
        timeIn?: Date,
        timeOut?: Date,
        mileageStart?: string,
        mileageEnd?: string,
        mileageType?: MileageType
    ): Invoice
    //
    //
    +PrintInvoice(documentNumber: string): Invoice
    +GetInvoice(invoiceNumber?: string, documentNumber?: string): Invoice
    +CreateCreditInvoice(
        orderNo: string,
        drivers: string[],
        reservationNumber: string,
        recipientName: string,
        currency: Currency,
        lineItems: LineItem[],
        description: string,
        secondOrder?: string,
        thirdOrder?: string,
        costCCu?: string,
        licensePlate?: string,
        recipientCompany?: string,
        recipientAddressStreet1?: string,
        recipientAddressStreet2?: string,
        recipientAddressZipCode?: string,
        recipientAddressCity?: string,
        recipientAddressCountry?: string
    ): CreditInvoice
    //
    //
    +PrintCreditInvoice(documentNumber: string): CreditInvoice
    +GetCreditInvoice(invoiceNumber?: string, documentNumber?: string): CreditInvoice
}
<<Interface>> InvoicingSystem
LineItem ..> "1" Currency
CreditInvoice ..> "1" Currency
CreditInvoice ..> "*" LineItem
Invoice ..> "1" MileageType
Invoice ..> "1" Currency
Invoice ..> "*" LineItem
InvoicingSystem ..> "1" Currency
InvoicingSystem ..> "1" LineItem
InvoicingSystem ..> "1" MileageType
InvoicingSystem ..> "1" Invoice
InvoicingSystem ..> "1" CreditInvoice
```
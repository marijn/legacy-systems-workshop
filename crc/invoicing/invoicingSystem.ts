import {MileageType} from "./mileageType";
import {Currency} from "./currency";
import {LineItem} from "./lineItem";
import {Invoice} from "./invoice";
import {CreditInvoice} from "./creditInvoice";

export interface InvoicingSystem {
    /**
     * @return {Invoice} With `documentNumber`, and `createdAt` filled
     */
    CreateInvoice(
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
        mileageType?: MileageType,
    ): Invoice

    /**
     * @return {Invoice} With `invoiceDate`, `invoiceNumber`, `pdfHash` filled
     */
    PrintInvoice(
        documentNumber: string
    ): Invoice

    /**
     * Either `invoiceNumber` or `documentNumber` must be specified`.
     *
     * @param {String} [invoiceNumber]
     * @param {String} [documentNumber]
     *
     * @throws {Error}
     * @return {Invoice}
     */
    GetInvoice(
        invoiceNumber?: string,
        documentNumber?: string
    ): Invoice

    CreateCreditInvoice(
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
        recipientAddressCountry?: string,
    ): CreditInvoice

    /**
     * @return {CreditInvoice} With `invoiceDate`, `invoiceNumber`, `pdfHash` filled
     */
    PrintCreditInvoice(
        documentNumber: string
    ): CreditInvoice

    /**
     * Either `invoiceNumber` or `documentNumber` must be specified`.
     *
     * @param {String} [invoiceNumber]
     * @param {String} [documentNumber]
     *
     * @throws {Error}
     * @return {CreditInvoice}
     */
    GetCreditInvoice(
        invoiceNumber?: string,
        documentNumber?: string
    ): CreditInvoice
}
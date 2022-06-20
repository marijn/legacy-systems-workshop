import {Currency} from "./currency";
import {LineItem} from "./lineItem";

export class CreditInvoice {
    documentNumber: string;
    invoiceNumber: string;
    invoiceDate: Date;
    orderNo: string;
    secondOrder: string | null;
    thirdOrder: string | null;
    costCCu: string | null;
    licensePlate: string | null;
    drivers: string[];
    reservationNumber: string;
    recipientName: string;
    recipientCompany: string | null;
    recipientAddressStreet1: string | null;
    recipientAddressStreet2: string | null;
    recipientAddressZipCode: string | null;
    recipientAddressCity: string | null;
    recipientAddressCountry: string | null;
    currency: Currency;
    lineItems: LineItem[];
    description: string;
    pdfHash: string;
    createdAt: Date;
    modifiedAt: Date;
}
import {MileageType} from "./mileageType";
import {Currency} from "./currency";
import {LineItem} from "./lineItem";

export class Invoice {
    documentNumber: string;
    invoiceNumber: string;
    invoiceDate: Date;
    orderNo: string;
    branchCodeStart: string;
    branchCodeEnd: string;
    secondOrder: string | null;
    thirdOrder: string | null;
    costCCu: string | null;
    licensePlate: string;
    drivers: string[];
    reservationNumber: string;
    recipientName: string;
    recipientCompany: string | null;
    recipientAddressStreet1: string | null;
    recipientAddressStreet2: string | null;
    recipientAddressZipCode: string | null;
    recipientAddressCity: string | null;
    recipientAddressCountry: string | null;
    timeIn: Date | null;
    timeOut: Date | null;
    mileageStart: string | null;
    mileageEnd: string | null;
    mileageType: MileageType | null;
    currency: Currency;
    lineItems: LineItem[];
    description: string;
    pdfHash: string;
    createdAt: Date;
    modifiedAt: Date;
}
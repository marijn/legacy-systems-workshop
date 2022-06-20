import {RentalPricing} from "./rentalPricing";
import {RentalAgreementStatus} from "./rentalAgreementStatus";
import {Currency} from "./currency";
import {Extra} from "./extra";

export class RentalAgreement {
    rentalAgreementId: string;
    licensePlate: string;
    odoMeterStart: string;
    odoMeterEnd: string | null;
    rentalStart: Date;
    rentalEnd: Date | null;
    branchStart: string;
    branchEnd: string | null;
    reservationNumber: string;
    customerId: string;
    pricing: RentalPricing[];
    status: RentalAgreementStatus;
    currency: Currency;
    extras: Extra[];
}
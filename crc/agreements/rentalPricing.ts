import {RentalAgreement} from "./rentalAgreement";

export interface RentalPricing {
    calculatePriceComponent(rent: RentalAgreement): number
}
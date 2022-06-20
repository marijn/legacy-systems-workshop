import {RentalAgreement} from "./rentalAgreement";

interface RentalSystem {
    createRentalAgreement(
        agreement: RentalAgreement
    ): void

    updateRentalAgreement(
        agreement: RentalAgreement
    ): void

    deleteRentalAgreement(
        agreement: RentalAgreement
    ): void
}
import {City} from "./city";
import {Scooter} from "./scooter";
import {ReservationNumber} from "./reservationNumber";
import {ScootScootInvoice} from "./scootScootInvoice";

interface ScootScoot {
    /**
     * @param {String} plusCode https://en.wikipedia.org/wiki/Open_Location_Code
     * @param {City} city
     */
    getAllScooters(
        plusCode: string,
        city: City,
    ): Scooter[]

    /**
     * @param {String} scooterId    The ID of the scooter
     * @throws {Error}
     */
    getScooter(
        scooterId: string
    )

    /**
     * @param {String} licensePlate The plate of the scooter
     * @param {String} customerId   The ID of the customer that rents the Scooter
     * @throws {Error}
     */
    reserve(
        licensePlate: string,
        customerId: string
    ): ReservationNumber;

    /**
     * @param {ReservationNumber} reservationNumber    The ID of the reservation
     * @throws {Error}
     */
    startRental(
        reservationNumber: ReservationNumber,
    );

    /**
     * @param {ReservationNumber} reservationNumber    The ID of the reservation
     * @throws {Error}
     */
    endRental(
        reservationNumber: ReservationNumber,
    );

    /**
     * @param {ReservationNumber} reservationNumber    The ID of the reservation
     * @throws {Error}
     */
    GetInvoice(
        reservationNumber: ReservationNumber,
    ): ScootScootInvoice
}
import {FuelType} from "./fuelType";
import {ACRISS} from "./ACRISS";
import {VehicleState} from "./vehicleState";

export class Vehicle {
    id: string;
    chassisNo: string;
    licensePlate: string;
    model: string;
    make: string;
    fuel: FuelType;
    hps: number;
    acriss: ACRISS;
    color: string;
    seats: number;
    doors: number;
    co2perKm: number;
    odoMeter: number;
    /**
     * @see https://en.wikipedia.org/wiki/Latitude
     */
    lat: string;
    /**
     * @see https://en.wikipedia.org/wiki/Longitude
     */
    long: string;
    vehicleState: VehicleState;
    notes: string;
}
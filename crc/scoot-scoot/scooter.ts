import {State} from "./state";

export class Scooter {
    id: string;
    /**
     * Speed in KM/H
     */
    vMax: number;
    color: string;
    passengerMax: number;
    licensePlate: string;
    plusCode: string;
    frameNumber: string;
    state: State;
    inUseBy: string;
    /**
     * Value between 0-100
     */
    chargeLevel: number;
}
import {VehicleState} from "./vehicleState";
import {FuelType} from "./fuelType";
import {ACRISS} from "./ACRISS";
import {Vehicle} from "./vehicle";

/**
 * Open Source Fleet Management System build in a leading Web Framework.
 * The plug-in architecture of the Web Framework allows the company to extend with additional functionality.
 */
interface FleetManagement {
    /**
     * @param {String}          branch              Registered branch that operates the Vehicle. Car-Sharing cities are separate branch.
     * @param {VehicleState}    [vehicleState[]]    The desired state of the `Vehicle`
     * @param {FuelType}        [fuelType[]]        The type of fuel of the car
     * @param {ACRISS}          [acriss]            https://en.wikipedia.org/wiki/Association_of_Car_Rental_Industry_Systems_Standards
     * @param {String[]}        [orderBy]           By which fields should the list be sorted
     *
     * The `lat` and `long` parameters should both be supplied or both be omitted.
     */
    getVehicles(
        branch: string,
        vehicleState?: VehicleState[],
        fuelType?: FuelType[],
        acriss?: ACRISS,
        orderBy?: string[],
    ): Vehicle[]

    createVehicle(vehicle: Vehicle): void;

    updateVehicle(vehicle: Vehicle): void;

    deleteVehicle(vehicle: Vehicle): void;
}
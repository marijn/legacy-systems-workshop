```mermaid
classDiagram
class ACRISS {
    MCMN
    CTMR
    IWMR
    FWAR
    PTMR
    LFAE
    X_BMWI3
    X_S63A
}
<<enumeration>> ACRISS
class VehicleState {
    CREATED
    AVAILABLE
    IN_USE
    PENDING
    IN_REPAIR
    OUT_OF_SERVICE
}
<<enumeration>> VehicleState
class FuelType {
    GASOLINE
    DIESEL
    HYBRID
    FULL_ELECTRIC
}
<<enumeration>> FuelType
class Vehicle {
    +id: string
    +chassisNo: string
    +licensePlate: string
    +model: string
    +make: string
    +fuel: FuelType
    +hps: number
    +acriss: ACRISS
    +color: string
    +seats: number
    +doors: number
    +co2perKm: number
    +odoMeter: number
    +lat: string
    +long: string
    +vehicleState: VehicleState
    +notes: string
}
class FleetManagement {
    +getVehicles(
         branch: string,
         vehicleState?: VehicleState[],
         fuelType?: FuelType[],
         acriss?: ACRISS,
         orderBy?: string[]
    ): Vehicle[]
    +createVehicle(vehicle: Vehicle): void
    +updateVehicle(vehicle: Vehicle): void
    +deleteVehicle(vehicle: Vehicle): void
}
<<Interface>> FleetManagement
Vehicle ..> "1" FuelType
Vehicle ..> "1" ACRISS
Vehicle ..> "1" VehicleState
FleetManagement ..> "1" VehicleState
FleetManagement ..> "1" FuelType
FleetManagement ..> "1" ACRISS
FleetManagement ..> "*" Vehicle
FleetManagement ..> "1" Vehicle
```
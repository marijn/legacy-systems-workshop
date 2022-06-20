```mermaid
classDiagram
class City {
    PARIS
    BERLIN
    MUENCHEN
    KOPENHAGEN
}
<<enumeration>> City
class ReservationNumber {
    +number: string
}
<<Interface>> ReservationNumber
class State {
    CREATED
    RESERVED
    RENTED
    BROKEN
}
<<enumeration>> State
class Scooter {
    +id: string
    +vMax: number
    +color: string
    +passengerMax: number
    +licensePlate: string
    +plusCode: string
    +frameNumber: string
    +state: State
    +inUseBy: string
    +chargeLevel: number
}
class ScootScootInvoice {
    +amount: number
    +currency: string
    +invoiceNumber: string
    +invoiceDate: Date
    +pdfInvoiceLink: string
}
class ScootScoot {
    +getAllScooters(plusCode: string, city: City): Scooter[]
    +getScooter(scooterId: string): any
    +reserve(licensePlate: string, customerId: string): ReservationNumber
    +startRental(reservationNumber: ReservationNumber): any
    +endRental(reservationNumber: ReservationNumber): any
    +GetInvoice(reservationNumber: ReservationNumber): ScootScootInvoice
}
<<Interface>> ScootScoot
Scooter ..> "1" State
ScootScoot ..> "1" City
ScootScoot ..> "*" Scooter
ScootScoot ..> "1" ReservationNumber
ScootScoot ..> "1" ScootScootInvoice
```

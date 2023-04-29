import { Passager } from "../Person/Passenger/Passanger";
import { Seat } from "../Plane/Seat";
import { Trip } from "../Trip/Trip";
import { TypeBooking } from "./TypeBooking";
import { Flight } from "../Flight/Flight";
export class Booking {
    public bookingID : string;
    private trip : Trip;
    public seat : Seat ;
    public passager : Passager;
    private typeBooking:TypeBooking;
    private flight:Flight;
    constructor(bookingID : string,
                trip:Trip,
                seatNumber:Seat,
                passenger:Passager,
                typeBooking:TypeBooking,
                flight:Flight){

        this.bookingID = bookingID; 
        this.trip = trip;
        this.seat = seatNumber;
        this.passager = passenger;
        this.typeBooking = typeBooking;
        this.flight = flight;
    }

    getPassenger(){
        return this.passager;
    }
    
    getType(){
        return this.typeBooking;
    }

    getFlight(){
       return this.flight.getGate();
    }
}
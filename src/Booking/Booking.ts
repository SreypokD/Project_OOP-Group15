import { Passager } from "../Person/Passenger/Passanger";
import { Seat } from "../Plane/Seat";
import { Trip } from "../Trip/Trip";
import { TypeBooking } from "./TypeBooking";
export class Booking {
    public bookingID : string;
    private trip : Trip;
    public seat : Seat ;
    public passager : Passager;
    private typeBooking:TypeBooking;
    constructor(bookingID : string,
                trip:Trip,
                seatNumber:Seat,
                passenger:Passager,
                typeBooking:TypeBooking){

        this.bookingID = bookingID; 
        this.trip = trip;
        this.seat = seatNumber;
        this.passager = passenger;
        this.typeBooking = typeBooking;
    }

    getPassenger(){
        return this.passager;
    }
    
    getType(){
        return this.typeBooking;
    }
}
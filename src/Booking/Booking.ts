import { Passager } from "../Person/Passenger/Passanger";
import { Seat } from "../Plane/Seat";
import { Trip } from "../Trip/Trip";

export class Booking {
    public bookingID : string;
    private trip : Trip;
    public seat : Seat ;
    public passager : Passager;
    constructor(bookingID : string,
                trip:Trip,
                seatNumber:Seat,
                passenger:Passager){

        this.bookingID = bookingID; 
        this.trip = trip;
        this.seat = seatNumber;
        this.passager = passenger;
    }

    getPassenger(){
        return this.passager;
    }
}
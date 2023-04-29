import { Airline } from "../Airline/Airline";
import { Booking } from "../Booking/Booking";
import { Flight } from "../Flight/Flight";
import { Baggage } from "../Person/Passenger/Baggage";
import { Passager } from "../Person/Passenger/Passanger";
import { Gate } from "../Plane/Gate";
import { Route } from "../Route/Route";
import { Trip } from "../Trip/Trip";

export class Airport {
    private name : string;
    private country : string;
    private address : string;
    private airlines : Airline [] = [];
    private gates : Gate [] = [];
    private routes : Route[] = [];
    bookings : Booking[] = [];
    constructor(name : string, 
                country : string ,
                address : string){
        this.name = name;
        this.country = country;
        this.address = address;
    }

    // add airline 
    addAirline(airline : Airline){
        return this.airlines.push(airline);
    }

    // add gate 
    addGate(gate : Gate){
        return this.gates.push(gate);
    }

    // add route  
    addRoute(route : Route){
        return this.routes.push(route);
    }


    // add Booking 
    addBooking(other:Booking){
        this.bookings.push(other)
        
    }
    // get booking 
    getUserBooking(){
        let usersData:Passager[]=[];
        this.bookings.forEach(book=>{
            usersData.push(book.getPassenger());
        })
        return usersData;
    }

}
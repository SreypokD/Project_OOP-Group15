import { Plane } from "../Plane/Plane";
import { Route } from "../Route/Route";
import { DateTime } from "./DateTime";
import { Booking } from "../Booking/Booking";
import { TypeBooking } from "../Booking/TypeBooking";
import { Passager } from "../Person/Passenger/Passanger";
import { Meal } from "./Service/Meal";
export class Flight {
    private flightNumber: string;
    startTime: DateTime;
    endTime: DateTime;
    arrival: Route;
    departure: Route;
    private plane : Plane;
    private bookings:Booking[] = [];
    private meals:Meal[]=[];
    constructor(flightNumber: string ,
                startTime: DateTime,
                endTime: DateTime ,
                arrival: Route,
                departure: Route,
                plane: Plane) {
        this.flightNumber = flightNumber;
        this.startTime = startTime;
        this.endTime = endTime;
        this.arrival = arrival;
        this.departure = departure;
        this.plane = plane;
    }
    // get start time
    getStartTime(): DateTime {
        return this.startTime;
    }
    // get end time 
    getEndTime(): DateTime {
        return this.endTime;
    }

    addBooking(other:Booking){
        this.bookings.push(other);
    }
    getReturnflight(){
        let returnUser:Passager[] = []
        this.bookings.forEach(booking=>{
           if(booking.getType()== TypeBooking.Return){
             returnUser.push(booking.getPassenger())
           }
        })
        return returnUser;
    }

    addMeal(other:Meal){
        this.meals.push(other);
    }


    getMeal(){
        return this.meals;
    }
}
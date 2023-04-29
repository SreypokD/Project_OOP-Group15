import { Pilot } from "../Person/Employee/Pilot";
import { Plane } from "../Plane/Plane";
import { Route } from "../Route/Route";
import { DateTime } from "./DateTime";
import { Booking } from "../Booking/Booking";
import { TypeBooking } from "../Booking/TypeBooking";
import { Passager } from "../Person/Passenger/Passanger";
import { Meal } from "./Service/Meal";
import { Gate } from "../Plane/Gate";
export class Flight {
    private flightNumber: string;
    startTime: DateTime;
    endTime: DateTime;
    arrival: Route;
    departure: Route;
    private plane : Plane;
    private bookings:Booking[] = [];
    private meals:Meal[]=[];
    private gate:Gate;
    constructor(flightNumber: string ,
                startTime: DateTime,
                endTime: DateTime ,
                arrival: Route,
                departure: Route,
                plane: Plane,
                gate:Gate) {
        this.flightNumber = flightNumber;
        this.startTime = startTime;
        this.endTime = endTime;
        this.arrival = arrival;
        this.departure = departure;
        this.plane = plane;
        this.gate = gate
    }
    // get start time
    getStartTime(): string {
        return this.startTime.getDate();
    }
    // get end time 
    getEndTime(): DateTime {
        return this.endTime;
    }


    addPlan(newPlane: Plane){ 
      return this.plane = newPlane;
    }
    getPlane():Plane{
        return this.plane;
    }
    


    addBooking(other:Booking){
        this.bookings.push(other);
    }
    getReturnflight():Passager[]{
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


    getMeal():Meal[]{
        return this.meals;
    }

    getGate():Gate{
        return this.gate;
    }

}
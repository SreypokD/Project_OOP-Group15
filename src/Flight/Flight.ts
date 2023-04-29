import { Pilot } from "../Person/Employee/Pilot";
import { Plane } from "../Plane/Plane";
import { Route } from "../Route/Route";
import { DateTime } from "./DateTime";

export class Flight {
    private flightNumber: string;
    startTime: DateTime;
    endTime: DateTime;
    arrival: Route;
    departure: Route;
    private plane : Plane;
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
    getPlane(){
        return this.plane;
    }
    

}
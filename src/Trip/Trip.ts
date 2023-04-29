
import { Baggage } from "../Person/Passenger/Baggage";
import { Flight } from "../Flight/Flight";
export class Trip{
    private destination:string;
    private baggages:Baggage[]=[];
    private flights:Flight[]=[];
    constructor(destination:string , flight:Flight, baggages:Baggage){
        this.destination = destination;
    }

    // get baggage number 
    getBagageNumber(){
        return this.baggages;
    }
    // add fight to trip
    addFlightinTrip(flight:Flight){
        return this.flights.push(flight);
    } 
    // add bagage number
    addbaggageNumber(baggageNumber : Baggage){
        return this.baggages.push(baggageNumber);
    }
   

    
}
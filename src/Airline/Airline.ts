import { Flight } from "../Flight/Flight";
import { Passager } from "../Person/Passenger/Passanger";

export class Airline{
    private airlineName: string;
    private addresss: string;
    private flightNumber: Flight [] = []; 
    private passanger : Passager [] = [];
    constructor (airlineName: string , addresss: string){
        this.airlineName = airlineName;
        this.addresss = addresss;
    }

    //  add flight
    addFlight(flightNumber: Flight){
        return this.flightNumber.push(flightNumber)
    };
    // add passanger
    addPassanger(passanger: Passager){
        return this.passanger.push(passanger);
    }
}
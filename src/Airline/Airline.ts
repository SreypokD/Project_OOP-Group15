import { Flight } from "../Flight/Flight";

export class Airline{
    private airlineName: string;
    private addresss: string;
    private flightNumber: Flight [] = []; 
    private passanger : Passanger [] = [];
    constructor (airlineName: string , addresss: string){
        this.airlineName = airlineName;
        this.addresss = addresss;
    }
}
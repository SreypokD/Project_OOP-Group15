
import { Baggage } from "../Person/Passenger/Baggage";
import { Flight } from "../Flight/Flight";
export class Trip{
    private destination:string;
    private baggage:Baggage[]=[];
    private flight:Flight[]=[];
    constructor(destination:string){
        this.destination = destination;
    }

}
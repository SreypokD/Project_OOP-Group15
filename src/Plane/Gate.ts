import { Flight } from "../Flight/Flight";

export class Gate{
    private gateNumber:string;
    private flights : Flight [] = [];
    constructor(gateNumber:string,filght : Flight){
        this.gateNumber = gateNumber;
        
    }

    addFightToGate(fight: Flight){
       return this.flights.push(fight);
    }
    
}
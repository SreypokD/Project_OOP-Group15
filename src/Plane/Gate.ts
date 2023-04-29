import { Flight } from "../Flight/Flight";

export class Gate{
    private gateNumber:string;
    constructor(gateNumber:string){
        this.gateNumber = gateNumber;
        
    }

    getGateNumber(){
        return this.gateNumber;
    }
    
}
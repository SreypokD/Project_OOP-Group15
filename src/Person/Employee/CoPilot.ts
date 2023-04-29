import { Employee } from "./Employee";

export class CoPilot extends Employee{
    constructor(firstName:string,lastName:string,id:string,salary:number){
        super(firstName,lastName,id,salary);
    }

}
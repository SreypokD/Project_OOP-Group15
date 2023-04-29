import { Employee } from "./Employee";

export class FightAttendent extends Employee{
    constructor(firstName:string,lastName:string,id:string,salary:number){
        super(firstName,lastName,id,salary);
    }
    
}
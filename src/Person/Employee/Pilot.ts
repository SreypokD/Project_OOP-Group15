  import { DateTime } from "../../Flight/DateTime";
import { Flight } from "../../Flight/Flight";
import { Plane } from "../../Plane/Plane";
import { Employee } from "./Employee";

export class Pilot extends Employee{
    flights : Flight []= [];
    constructor(firstName:string,lastName:string,id:string,salary:number){
        super(firstName,lastName,id,salary);
    }
   
    addFlight(flight: Flight){
    this.flights.push(flight);
  }

    getFlights(date: string){
      let result = '';
      this.flights.forEach(flight=>{
      // console.log(flight.getStartTime())
      if(date === flight.getStartTime()){
        result=  'You have '+ this.flights.length +' flight to join.';
      }else{
        result= "Have no flight to join !"
      };
    })
    return result;
  }
    
}

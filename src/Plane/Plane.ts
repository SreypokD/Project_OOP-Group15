

import { Pilot } from "../Person/Employee/Pilot";
import { CoPilot } from "../Person/Employee/CoPilot";
import { Seat } from "./Seat";
import { FightAttendent } from "../Person/Employee/FightAttenden";

export class Plane{
   private registrationNumber:string;
   private model : string;
   seats:Seat[] = [];
   private pilot : Pilot;
   private flightAttendants:FightAttendent[] = [];
   private coPilot : CoPilot;
    
   constructor(registrationNumber:string, model : string, pilot : Pilot, copilot : CoPilot){
      this.registrationNumber = registrationNumber;
      this.model = model;
      this.pilot = pilot;
      this.coPilot = copilot;
      
   }

   // add seat to plane 
   addSeat(seat:Seat){
      return this.seats.push(seat);
   } 
   // add flightAttendent to plane
   addFlightAttendent(flightAttendent:FightAttendent ){
      return this.flightAttendants.push(flightAttendent);
   }
   getFlightAttendent(){
      return this.flightAttendants;
   }
 
   
}
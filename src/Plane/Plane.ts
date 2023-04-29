

import { Pilot } from "../Person/Employee/Pilot";
import { CoPilot } from "../Person/Employee/CoPilot";
import { FightAttenden } from "../Person/Employee/FightAttenden";
import { Seat } from "./Seat";

export class Plane{
   private registrationNumber:string;
   private model : string;
   seats:Seat[] = [];
   private pilot : Pilot;
   private flightAttendants:FightAttenden[] = [];
   private coPilot : CoPilot;
    
   constructor(registrationNumber:string, model : string){
      this.registrationNumber = registrationNumber;
      this.model = model;
   }

   // add seat to plane 
   addSeat(seat:Seat){
      return this.seats.push(seat);
   } 
}
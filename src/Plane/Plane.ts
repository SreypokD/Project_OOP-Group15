

import { Pilot } from "../Person/Employee/Pilot";
import { CoPilot } from "../Person/Employee/CoPilot";
import { FightAttenden } from "../Person/Employee/FightAttenden";
import { Seat } from "./Seat";

export class Plane{
   private registrationNumber:string;
   private model : string;
   seat:Seat[] = [];
   private pilot : Pilot;
   private flightAttendant:FightAttenden[] = [];
   private coPilot : CoPilot;
    
   constructor(registrationNumber:string, model : string){
      this.registrationNumber = registrationNumber;
      this.model = model;
   }
}
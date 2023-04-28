import { Airline } from "../Airline/Airline";
import { Route } from "../Route/Route";

export class Airport {
    private name : string;
    private country : string;
    private address : string;
    private airline : Airline [] = [];
    private gate : Gate [] = [];
    private route : Route[] = [];
    constructor(name : string, country : string , address : string){
        this.name = name;
        this.country = country;
        this.address = address;
    }
}
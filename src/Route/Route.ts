import { Flight } from "../Flight/Flight";

export class Route {
    private routeNumber : number;
    private arrival : Flight;
    private departure : Flight;
    constructor ( routeNumber : number){
        this.routeNumber = routeNumber;
    }
}
import { Flight } from "../Flight/Flight";
import { Passager } from "../Person/Passenger/Passanger";
import { Booking } from "../Booking/Booking";
import { Meal } from "../Flight/Service/Meal";
import { Plane } from "../Plane/Plane";
export class Airline{
    private airlineName: string;
    private addresss: string;
    private flightNumber: Flight [] = []; 
    private passanger : Passager [] = [];
    bookings : Booking[] = [];
    planes : Plane[] = [];
    constructor (airlineName: string , addresss: string){
        this.airlineName = airlineName;
        this.addresss = addresss;
    }

    //  add flight
    addFlight(flightNumber: Flight){
        return this.flightNumber.push(flightNumber)
    };
    // add passanger
    addPassanger(passanger: Passager){
        return this.passanger.push(passanger);
    }

    // add Booking 
    addBooking(other:Booking){
        this.bookings.push(other)
        
    }

       
    // // get booking 
    getUserBooking(){
        let usersData:Passager[]=[];
        this.bookings.forEach(book=>{
            usersData.push(book.getPassenger());

        })
        return usersData;
    }

    // get flight
    getFlight(other:Flight){
        let result: Passager[]=[]
        this.flightNumber.forEach(flight=>{
            if(other==flight){
                result = flight.getReturnflight();
            }
        })
        return result;
    }

    // get food need to prepare
    getFood(other:Flight){
        let result:Meal[] = []
        this.flightNumber.forEach(flight=>{
            if(flight==other){
                result = flight.getMeal();
            }
        })
        return result;

    }
    addPlanes(other:Plane){
        return this.planes.push(other);
    }
    // get plane in airline 
    getTotalSalary(plan : Plane){
        let result :number = 0;
        for(let plane of this.planes){
           result = plane.getPilotSalary()+plane.getCoPilotSalary()+plane.getFightAttendentSalary();
           
        }
        return result;
    }
}
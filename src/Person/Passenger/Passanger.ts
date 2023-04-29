
import { CreditCard } from "./Creditcard";
import { FragmentFlyer } from "./FragmentFlyer";
import { Baggage } from "./Baggage";
import { Booking } from "../../Booking/Booking";

export class Passager{
    private firstName: string;
    private lastname:string;
    private age:number;
    private email: string;
    private phone:string;
    private address:string;
    private bookings:Booking[] = [];
    private fragmentFlyerNumber:FragmentFlyer;
    private creditCard : CreditCard;
    private baggage: Baggage;
    constructor(
        firstName:string,
        lastName:string,
        age:number,
        email:string,
        phone:string,
        address:string,
        baggage: Baggage,
        creditCard:CreditCard,
        fragmentFlyerNumber:FragmentFlyer
    ){
        this.firstName = firstName;
        this.lastname = lastName;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.baggage = baggage;
        this.creditCard = creditCard;
        this.fragmentFlyerNumber = fragmentFlyerNumber;
    }

    
    // get booking number of passenger
    getBookingNumber(bookingNumber : Booking){
        return this.bookings.push(bookingNumber);
    }
}

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
    private booking:Booking[] = [];
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
    ){}
}
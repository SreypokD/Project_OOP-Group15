
import { CardType } from "./cartType";
export class CreditCard{
    private cardNumber:number;
    private cardType:CardType;
    constructor(cardNumber:number,cardType:CardType){
        this.cardNumber = cardNumber;
        this.cardType = cardType;
    }
}
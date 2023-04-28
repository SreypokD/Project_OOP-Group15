

import { TypeSeat } from "./TypeSeat";

export class Seat{
    private row : number;
    private column :string;
    private cost : number;
    private status : boolean;
    constructor(row:number,column:string,cost:number){
        this.column = column;
        this.row = row;
        this.cost = cost;
    }
}
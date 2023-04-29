export class DateTime{
    private date: string;
    private time: string;
    constructor(date: string, time: string){
        this.date = date;
        this.time = time;
    }
    getDate():string{
        return this.date;
    }
}
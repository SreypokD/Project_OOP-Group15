

export abstract class Employee{
    protected firstName:string;
    protected lastName:string;
    protected id: string;
    protected salaray:number;
    constructor(firstName:string,lastName:string,id:string,salary:number){
      this.firstName= firstName;
      this.lastName= lastName;
      this.id = id;
      this.salaray = salary;
    }
}
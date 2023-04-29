

export abstract class Employee{
    protected firstName:string;
    protected lastName:string;
    protected id: string;
    protected salary:number;
    constructor(firstName:string,lastName:string,id:string,salary:number){
      this.firstName= firstName;
      this.lastName= lastName;
      this.id = id;
      this.salary = salary;
    }
    getSalary(){
      return this.salary;
    }
}
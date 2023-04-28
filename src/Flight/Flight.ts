import { DateTime } from "./DateTime";

export class Flight {
    private flightNumber: number;
    startTime: DateTime;
    endTime: DateTime;
    constructor(flightNumber: number , startTime: DateTime, endTime: DateTime) {
        this.flightNumber = flightNumber;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
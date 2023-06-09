import { Airline } from "./Airline/Airline";
import { Airport } from "./Airport/Airport";
import { Booking } from "./Booking/Booking";
import { DateTime } from "./Flight/DateTime";
import { Flight } from "./Flight/Flight";
import { CoPilot } from "./Person/Employee/CoPilot";
import { FightAttendent } from "./Person/Employee/FightAttenden";
import { Pilot } from "./Person/Employee/Pilot";
import { Baggage } from "./Person/Passenger/Baggage";
import { CreditCard } from "./Person/Passenger/Creditcard";
import { FragmentFlyer } from "./Person/Passenger/FragmentFlyer";
import { Passager } from "./Person/Passenger/Passanger";
import { CardType } from "./Person/Passenger/cartType";
import { Gate } from "./Plane/Gate";
import { Plane } from "./Plane/Plane";
import { Seat } from "./Plane/Seat";
import { Route } from "./Route/Route";
import { Trip } from "./Trip/Trip";
import { TypeBooking } from "./Booking/TypeBooking";
import { Meal } from "./Flight/Service/Meal";
// create airport
let airportPP = new Airport ("Navin" , "Cambodia" , "Phonm Penh");
// create airline
let airlinePP = new Airline ("NIKAI company","france")
// create date time 
let dateStart = new DateTime("28/04/2022","8am");
let dateEnd = new DateTime("31/04/2022","8am");
// create Route 
let routePP = new Route (111);
// create arriveal time
let routeArrival = new Route (222);
// create departure time
let routeDeparture = new Route (333);
// create seat
let seat1 = new Seat("4A", "30$");
let seat2 = new Seat("4B", "30$");
let seat3 = new Seat("4C", "30$");
let seat4 = new Seat("4D", "30$");
let seat5 = new Seat("4B", "30$");
let seat6 = new Seat("4B", "30$");
// create pilot employee
let pilot = new Pilot("GIMGA" ,"GO" , "F01" , 400);
// create pilot employee
let Co_pilot = new CoPilot("GIMGA" ,"GO" , "F02" , 300);

// create flight atttendent
let flight_attendent = new FightAttendent("Cheiipok" ,"Doem" , "F03" , 500);


// create plane 
let planPP = new Plane("OH-LWP","scale" ,pilot,Co_pilot);
let planGG = new Plane("OH-LWPP","scale" ,pilot,Co_pilot);
// create get 
let gatePP1 = new Gate("11A");
let gatePP2 = new Gate("11A");
// create Flight
let flight = new Flight("AY6404", dateStart , dateEnd ,routeArrival,routeDeparture,planPP,gatePP1);

let flight1 = new Flight("AY6404", dateStart , dateEnd ,routeArrival,routeDeparture,planPP,gatePP2);
let flight2 = new Flight("AY6404", dateStart , dateEnd ,routeArrival,routeDeparture,planPP,gatePP1);
let flight3 = new Flight("AY643", dateStart , dateEnd ,routeArrival,routeDeparture,planPP,gatePP2);


// create bag of passager
let baggage1 = new Baggage("PMC11");
let baggage2 = new Baggage("PMC11");
// create fragment flyer
let fragmentFlyerNumber = new FragmentFlyer("G11");
// create credit card
let creditCard1 = new CreditCard(200,CardType.ABA);
let creditCar2 = new CreditCard(300,CardType.Rupay);
// create passanger
let passanger1 = new Passager("Siengdav" , "Thoeurn" , 20 , "DAv@gmail.com" , "083 838 284" , "BMC" ,baggage1 ,creditCard1,fragmentFlyerNumber);
let passanger2 = new Passager("Sreymom" , "Chhum" , 20 , "Mom@gmail.com" , "083 838 284" , "KPC" ,baggage2,creditCar2,fragmentFlyerNumber);
// create Trip
let trip1 = new Trip("Singapore" , flight, baggage1);
// create booking 
let booking1 = new Booking("B11" ,trip1 , seat1,passanger1,TypeBooking.Return,flight);
let booking2 = new Booking("B22" ,trip1 , seat1,passanger2,TypeBooking.NoReturn,flight2)


// ========================booking ====================
// booking1.addTrip(trip1);

// =====================passenger ====================
passanger1.getBookingNumber(booking1);
// ================plane =============================
// add seat to plane
planPP.addSeat(seat1);
planPP.addFlightAttendent(flight_attendent); 
planPP.getFlightAttendent(); 
// ===========================Airline ===================
// add flight to airline 
airlinePP.addFlight(flight);
airlinePP.addFlight(flight2);
// add passenger to airline
airlinePP.addPassanger(passanger1);
// add plane to airline
airlinePP.addPlanes(planPP);
// console.log(airlinePP);



// // =========================Gate =================
// gatePP1.addFightToGate(flight);
// gatePP2.addFightToGate(flight2);
// ===================Airport ======================
//  add new airline to airport 
airportPP.addAirline(airlinePP);
// add gate to airport 
airportPP.addGate(gatePP1);
airportPP.addGate(gatePP2);
// add route to airport 
airportPP.addRoute(routeArrival);


// console.log(planPP.getPilot());






// ====================pilot =============================
pilot.addFlight(flight);
pilot.addFlight(flight1);
pilot.addFlight(flight2);



// =====================Trips =========================
trip1.addFlightinTrip(flight);

trip1.addbaggageNumber(baggage1);



// console.log(booking1);

// a passenger’s trip from their Booking Reference Number
// console.log(airportPP.getPassengerInfo("B11"));

// ================User story 1 get all detail of user that have booking ================================

airlinePP.addBooking(booking1);
airlinePP.addBooking(booking2);
console.log(airportPP.getallUserData());



// ================== user story 2 get all passenger that have return ticket when give flight ======================
flight.addBooking(booking1);
flight.addBooking(booking2);
flight2.addBooking(booking1);
flight2.addBooking(booking2);
console.log(airlinePP.getFlight(flight));

// ====================== user story 3 : As an airline pilot, I want to know, for a given date, how many flights I have to join======================
console.log(pilot.getFlights('28/04/2022'));

// ===================== user story 4 : get type that chef need to prepare for each flight ========================

flight.addMeal(Meal.BabyMeal);
flight.addMeal(Meal.ChildMeal);
flight.addMeal(Meal.GlutenFreeMeal);

flight2.addMeal(Meal.HalalMeal);
flight2.addMeal(Meal.ToddierMeal);

// console.log(airlinePP.getFood(flight));
// console.log(airlinePP.getFood(flight2));

// =======================user story 5: As an airline manager, I want to find out how much salary I pay all my employees====================
console.log(airlinePP.getTotalSalary(planPP));

// =============== user story 6 :As a passenger, I want to know which gate my plane is waiting at. ======================
console.log(passanger1.getGateForPlane(booking1))
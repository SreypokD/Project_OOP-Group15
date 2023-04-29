import { Airline } from "./Airline/Airline";
import { Airport } from "./Airport/Airport";
import { Booking } from "./Booking/Booking";
import { DateTime } from "./Flight/DateTime";
import { Flight } from "./Flight/Flight";
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

// create plane 
let planPP = new Plane("OH-LWP","scale");
// create Flight
let flight = new Flight("AY6404", dateStart , dateEnd ,routeArrival,routeDeparture,planPP);
// create get 
let gatePP = new Gate("11A",flight);
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
let booking1 = new Booking("B11" ,trip1 , seat1,passanger1);
let booking2 = new Booking("B22" ,trip1 , seat1,passanger2)


// ========================booking ====================
// booking1.addTrip(trip1);

// =====================passenger ====================
passanger1.getBookingNumber(booking1);

// ===========================Airline ===================
// add flight to airline 
airlinePP.addFlight(flight);
// add passenger to airline
airlinePP.addPassanger(passanger1);

// =========================Gate =================
gatePP.addFightToGate(flight);
// ===================Airport ======================
//  add new airline to airport 
airportPP.addAirline(airlinePP);
// add gate to airport 
airportPP.addGate(gatePP);
// add route to airport 
airportPP.addRoute(routeArrival);

// ================plane =============================
// add seat to plane
planPP.addSeat(seat1);

// console.log(flight);


// =====================Trips =========================
trip1.addFlightinTrip(flight);
trip1.addbaggageNumber(baggage1);



// console.log(booking1);

// a passenger’s trip from their Booking Reference Number
// console.log(airportPP.getPassengerInfo("B11"));

// ================User story 1 get all detail of user that have booking ================================
airportPP.addBooking(booking1);
airportPP.addBooking(booking2);
console.log(airportPP.getUserBooking());
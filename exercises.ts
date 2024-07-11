
// Union and intersection types ====================================
/* interface Car{
   make: string;
   model: string;
}

type Bus = {
   make: string;
   model: string;
   payloadCapacity: number;
}

type Vehicle = Car | Bus;

const car: Car = { make: "Audi", model: "A4" };
const bus: Bus = { make: "Vovo", model: "XC60", payloadCapacity: 20 };

const vehicles: Vehicle[] = [car, bus];

vehicles.forEach(vehicle => {
   console.log("Make: " + vehicle.make);
   console.log("Model: " + vehicle.model);
   if("payloadCapacity" in vehicle){
      console.log("Payload Capacity: " + vehicle.payloadCapacity);
   }
   console.log("====================================")
})
*/

// Type guards =====================================================
/*const func = (a: string | number) => {
   if(typeof a === "string") {
      console.log("The argument is a string")
   } 

   if(typeof a === "number") {
      console.log("This is a number")
   }
}

func("2")

*/

/* const func2 = (a: number): boolean => {
   if(typeof a === "number") {
      return a % 2 !== 0;
   } 
   return false;
}

console.log(func2(3)) */

// Type assertions =================================================


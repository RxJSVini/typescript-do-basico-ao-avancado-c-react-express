import TypeVehicle from "./TypeVehicles";
import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";
const type = TypeVehicle.CAR;
let vehicle;
if (type === TypeVehicle.CAR) {
    vehicle = new Car("Amarelo", 2022, 2.0, 4, 2)

} else if (type === TypeVehicle.CAR) {
    vehicle = new Motorcycle("Amarelo", 2022, 2.0)

}
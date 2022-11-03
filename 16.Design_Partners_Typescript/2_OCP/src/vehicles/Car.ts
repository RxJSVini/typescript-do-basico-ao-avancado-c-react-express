import IVehIcleCar from "./IVehicleCar";

export default class Car implements IVehIcleCar{

    constructor(
        color: string,
        year: number,
        engine: number,
        seats: number,
        doors: number
    ){
        this.configure(color, year, engine, seats,  doors)
    }


    startVehicle(): void {
        throw new Error("Ligando os motores.");
    }
    configure(color: string, year: number, engine: number, seats: number, doors: number): void {
        console.log(`Criando um carro: ${color}, ${year} ${engine} potencia
        ${doors} portas com ${seats} assentos
        `)
    
        this.startVehicle();
    }

}
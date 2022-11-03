import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle{

    constructor(
        color: string,
        year: number,
        engine: number
    ){
        this.configure(color, year, engine)
    }


    startVehicle(): void {
        throw new Error("Ligando os motores.");
    }
    configure(color: string, year: number, engine: number): void {
        console.log(`Criando um carro: ${color}, ${year} ${engine} potencia`)
    
        this.startVehicle();
    }

}
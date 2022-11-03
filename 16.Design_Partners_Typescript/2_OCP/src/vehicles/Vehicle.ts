export default class Vehicle {
    constructor(
        private color: string,
        private year: number,
        private engine: number,
        private seats: number | null,
        private doors: number,

    ) {

    }

    car(): void {
        console.log(`Criando um carro com a cor ${this.color}, 
            ano ${this.year}, 
            potência ${this.engine}, 
            ${this.seats} assentos, 
            ${this.doors} portas`);

        this.startVehicle();
    }
    motorcycle(): void {

    }

    startVehicle(): void {
        console.log(`Ligando veiculo....`)
    }
}